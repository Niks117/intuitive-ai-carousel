
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { User } from '@/lib/types';
import { supabase, signIn, signUp, signOut, getCurrentUser, getUserFavorites, toggleFavoriteTool } from '@/lib/supabase';

interface SupabaseAuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  toggleFavorite: (toolId: string) => Promise<void>;
  isFavorite: (toolId: string) => boolean;
  loading: boolean;
}

const SupabaseAuthContext = createContext<SupabaseAuthContextType | undefined>(undefined);

interface SupabaseAuthProviderProps {
  children: ReactNode;
}

export const SupabaseAuthProvider: React.FC<SupabaseAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Load user from Supabase session on startup
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        
        // Check if there's an active session
        const { data, error } = await getCurrentUser();
        
        if (error || !data.user) {
          setUser(null);
          return;
        }
        
        // Get user favorites
        const { data: favoriteIds, error: favoritesError } = await getUserFavorites(data.user.id);
        
        if (favoritesError) {
          console.error('Error fetching favorites:', favoritesError);
        }
        
        // Create user object
        setUser({
          id: data.user.id,
          name: data.user.user_metadata?.name || '',
          email: data.user.email || '',
          isAdmin: data.user.user_metadata?.isAdmin || false,
          favoriteToolIds: favoriteIds || []
        });
      } catch (error) {
        console.error('Error loading user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
    
    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        // Refetch user data when signed in
        fetchUser();
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      const { data, error } = await signIn(email, password);
      
      if (error || !data.user) {
        toast.error(error?.message || 'Login failed');
        return false;
      }
      
      // Get user favorites
      const { data: favoriteIds, error: favoritesError } = await getUserFavorites(data.user.id);
      
      if (favoritesError) {
        console.error('Error fetching favorites:', favoritesError);
      }
      
      // Create user object
      setUser({
        id: data.user.id,
        name: data.user.user_metadata?.name || '',
        email: data.user.email || '',
        isAdmin: data.user.user_metadata?.isAdmin || false,
        favoriteToolIds: favoriteIds || []
      });
      
      toast.success('Login successful');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      // Create user in Supabase
      const { data, error } = await signUp(email, password, name);
      
      if (error) {
        toast.error(error.message || 'Signup failed');
        return false;
      }
      
      toast.success('Signup successful! Please check your email to confirm your account.');
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = async () => {
    try {
      setLoading(true);
      
      const { error } = await signOut();
      
      if (error) {
        toast.error(error.message || 'Logout failed');
        return;
      }
      
      setUser(null);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const toggleFavorite = async (toolId: string) => {
    if (!user) {
      toast.error('Please log in to save favorites');
      return;
    }
    
    try {
      const isFav = user.favoriteToolIds.includes(toolId);
      
      // Optimistically update UI
      setUser(currentUser => {
        if (!currentUser) return null;
        
        let favoriteToolIds = [...currentUser.favoriteToolIds];
        
        if (isFav) {
          favoriteToolIds = favoriteToolIds.filter(id => id !== toolId);
          toast.success('Removed from favorites');
        } else {
          favoriteToolIds.push(toolId);
          toast.success('Added to favorites');
        }
        
        return {
          ...currentUser,
          favoriteToolIds
        };
      });
      
      // Update in database
      const { error } = await toggleFavoriteTool(user.id, toolId, isFav);
      
      if (error) {
        // Revert optimistic update if there was an error
        toast.error('Failed to update favorites');
        
        setUser(currentUser => {
          if (!currentUser) return null;
          
          return {
            ...currentUser,
            favoriteToolIds: isFav 
              ? [...currentUser.favoriteToolIds, toolId] 
              : currentUser.favoriteToolIds.filter(id => id !== toolId)
          };
        });
      }
    } catch (error) {
      console.error('Toggle favorite error:', error);
      toast.error('Failed to update favorites');
    }
  };
  
  const isFavorite = (toolId: string): boolean => {
    return user?.favoriteToolIds?.includes(toolId) || false;
  };
  
  return (
    <SupabaseAuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      toggleFavorite,
      isFavorite,
      loading
    }}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);
  if (context === undefined) {
    throw new Error('useSupabaseAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};
