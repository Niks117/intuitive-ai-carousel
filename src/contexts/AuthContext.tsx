
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/lib/types';
import { users } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
  toggleFavorite: (toolId: string) => void;
  isFavorite: (toolId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check for stored user in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would call an API
    // For MVP, we'll check against our mock data
    const foundUser = users.find(u => u.email === email);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      toast({
        title: "Logged in successfully",
        description: `Welcome back, ${foundUser.name}!`,
      });
      return true;
    }
    
    toast({
      title: "Login failed",
      description: "Invalid email or password",
      variant: "destructive",
    });
    return false;
  };
  
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would call an API
    // For MVP, we'll simulate a successful signup
    
    if (users.some(u => u.email === email)) {
      toast({
        title: "Signup failed",
        description: "Email already in use",
        variant: "destructive",
      });
      return false;
    }
    
    const newUser: User = {
      id: `user${Date.now()}`,
      name,
      email,
      isAdmin: false,
      favoriteToolIds: []
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    toast({
      title: "Account created",
      description: "Your account has been created successfully",
    });
    
    return true;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };
  
  const toggleFavorite = (toolId: string) => {
    if (!user) {
      toast({
        title: "Action required",
        description: "Please log in to save favorites",
        variant: "destructive",
      });
      return;
    }
    
    setUser(prevUser => {
      if (!prevUser) return null;
      
      let updatedFavorites;
      
      if (prevUser.favoriteToolIds.includes(toolId)) {
        updatedFavorites = prevUser.favoriteToolIds.filter(id => id !== toolId);
        toast({
          title: "Removed from favorites",
          description: "Tool has been removed from your favorites",
        });
      } else {
        updatedFavorites = [...prevUser.favoriteToolIds, toolId];
        toast({
          title: "Added to favorites",
          description: "Tool has been added to your favorites",
        });
      }
      
      const updatedUser = {
        ...prevUser,
        favoriteToolIds: updatedFavorites
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };
  
  const isFavorite = (toolId: string): boolean => {
    return user ? user.favoriteToolIds.includes(toolId) : false;
  };
  
  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      isAdmin: user?.isAdmin || false,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
