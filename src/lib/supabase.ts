
import { createClient } from '@supabase/supabase-js';

// These environment variables need to be defined in your .env.local file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for authentication
export const signUp = async (email: string, password: string, name: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
  
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Helper function to get the current user
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};

// Helper function to manage favorite tools
export const toggleFavoriteTool = async (userId: string, toolId: string, isFavorite: boolean) => {
  if (isFavorite) {
    // Remove from favorites
    const { error } = await supabase
      .from('favorites')
      .delete()
      .match({ user_id: userId, tool_id: toolId });
    
    return { error };
  } else {
    // Add to favorites
    const { data, error } = await supabase
      .from('favorites')
      .insert({ user_id: userId, tool_id: toolId });
    
    return { data, error };
  }
};

// Helper function to get user's favorite tools
export const getUserFavorites = async (userId: string) => {
  const { data, error } = await supabase
    .from('favorites')
    .select('tool_id')
    .eq('user_id', userId);
  
  return { 
    data: data?.map(item => item.tool_id) || [], 
    error 
  };
};

