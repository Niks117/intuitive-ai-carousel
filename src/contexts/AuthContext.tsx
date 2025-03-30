
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { User } from '@/lib/types';
import { users as mockUsers } from '@/lib/data';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleFavorite: (toolId: string) => void;
  isFavorite: (toolId: string) => boolean;
  verifyOTP: (email: string, otp: string) => Promise<boolean>;
  resendOTP: (email: string) => Promise<boolean>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingSignups, setPendingSignups] = useState<Record<string, {name: string, password: string, otp: string}>>({});
  
  // Load user from localStorage on startup
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);
  
  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to verify credentials
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (foundUser) {
        setUser(foundUser);
        toast.success('Login successful');
        return true;
      } else {
        toast.error('Invalid email or password');
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const generateOTP = (): string => {
    // Generate a 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      // Check if email already exists
      if (mockUsers.some(u => u.email === email)) {
        toast.error('Email already registered');
        return false;
      }
      
      // Generate OTP
      const otp = generateOTP();
      
      // Store pending signup
      setPendingSignups(prev => ({
        ...prev,
        [email]: { name, password, otp }
      }));
      
      // Simulate sending OTP email
      console.log(`OTP for ${email}: ${otp}`);
      
      // Show toast with the OTP for demo purposes
      // In a real app, you'd never show the OTP in a toast
      toast.success(`For demo purposes, your OTP is: ${otp}`, {
        duration: 10000,
      });
      
      toast.success(`Verification code sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const pendingSignup = pendingSignups[email];
      
      if (!pendingSignup) {
        toast.error('No pending signup found for this email');
        return false;
      }
      
      if (pendingSignup.otp !== otp) {
        toast.error('Invalid verification code');
        return false;
      }
      
      // Create new user
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: pendingSignup.name,
        email: email,
        isAdmin: false,
        favoriteToolIds: []
      };
      
      // Remove from pending signups
      const { [email]: _, ...restPendingSignups } = pendingSignups;
      setPendingSignups(restPendingSignups);
      
      // Set the user as logged in
      setUser(newUser);
      
      toast.success('Account created successfully');
      return true;
    } catch (error) {
      console.error('OTP verification error:', error);
      toast.error('Verification failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const resendOTP = async (email: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      const pendingSignup = pendingSignups[email];
      
      if (!pendingSignup) {
        toast.error('No pending signup found for this email');
        return false;
      }
      
      // Generate new OTP
      const newOTP = generateOTP();
      
      // Update pending signup
      setPendingSignups(prev => ({
        ...prev,
        [email]: { ...pendingSignup, otp: newOTP }
      }));
      
      // Simulate sending OTP email
      console.log(`New OTP for ${email}: ${newOTP}`);
      
      // Show toast with the OTP for demo purposes
      toast.success(`For demo purposes, your new OTP is: ${newOTP}`, {
        duration: 10000,
      });
      
      toast.success(`New verification code sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Resend OTP error:', error);
      toast.error('Failed to resend verification code. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };
  
  const toggleFavorite = (toolId: string) => {
    if (!user) {
      toast.error('Please log in to save favorites');
      return;
    }
    
    setUser(currentUser => {
      if (!currentUser) return null;
      
      let favoriteToolIds = [...currentUser.favoriteToolIds];
      
      if (favoriteToolIds.includes(toolId)) {
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
  };
  
  const isFavorite = (toolId: string): boolean => {
    return user?.favoriteToolIds?.includes(toolId) || false;
  };
  
  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      toggleFavorite,
      isFavorite,
      verifyOTP,
      resendOTP,
      loading
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

