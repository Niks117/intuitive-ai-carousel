
import { supabase } from '@/lib/supabase';
import { SearchFilters, Tool } from '../types';
import { tools as localTools } from './tools';

/**
 * Get tools by category ID from Supabase
 * Falls back to local data if Supabase query fails
 */
export const getToolsByCategoryFromSupabase = async (categoryId: string): Promise<Tool[]> => {
  try {
    const { data, error } = await supabase
      .from('tools')
      .select('*')
      .contains('categoryIds', [categoryId]);
    
    if (error || !data) {
      // Fallback to local data
      console.warn('Falling back to local data for tools by category', error);
      return localTools.filter(tool => tool.categoryIds.includes(categoryId));
    }
    
    return data as Tool[];
  } catch (error) {
    console.error('Error fetching tools by category:', error);
    // Fallback to local data
    return localTools.filter(tool => tool.categoryIds.includes(categoryId));
  }
};

/**
 * Filter tools based on search filters using Supabase
 * Falls back to local filtering if Supabase query fails
 */
export const filterToolsFromSupabase = async (filters: SearchFilters): Promise<Tool[]> => {
  try {
    let query = supabase.from('tools').select('*');
    
    // Apply filters
    if (filters.query) {
      const query = filters.query.toLowerCase();
      query = query
        .or('name.ilike.%' + filters.query + '%')
        .or('description.ilike.%' + filters.query + '%')
        .or('shortDescription.ilike.%' + filters.query + '%')
        .or('useCase.ilike.%' + filters.query + '%');
    }
    
    if (filters.categories.length > 0) {
      // This assumes categoryIds is stored as an array in Supabase
      query = query.overlaps('categoryIds', filters.categories);
    }
    
    if (filters.pricing.length > 0) {
      query = query.in('pricing', filters.pricing);
    }
    
    const { data, error } = await query;
    
    if (error || !data) {
      console.warn('Falling back to local filtering for tools', error);
      return filterToolsLocally(filters);
    }
    
    // Apply sorting (this could also be done in the Supabase query with order())
    let sortedData = [...data] as Tool[];
    
    sortedData.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'popularity':
          comparison = b.popularity - a.popularity;
          break;
        case 'releaseDate':
          comparison = new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
      }
      
      return filters.sortOrder === 'asc' ? -comparison : comparison;
    });
    
    return sortedData;
  } catch (error) {
    console.error('Error filtering tools from Supabase:', error);
    // Fallback to local filtering
    return filterToolsLocally(filters);
  }
};

/**
 * Fallback function to filter tools locally
 */
const filterToolsLocally = (filters: SearchFilters): Tool[] => {
  // Use the existing local filterTools implementation
  let filteredTools = [...localTools];
  
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.shortDescription.toLowerCase().includes(query) ||
      tool.useCase.toLowerCase().includes(query)
    );
  }
  
  if (filters.categories.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.categories.some(categoryId => tool.categoryIds.includes(categoryId))
    );
  }
  
  if (filters.pricing.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.pricing.includes(tool.pricing)
    );
  }
  
  filteredTools.sort((a, b) => {
    let comparison = 0;
    
    switch (filters.sortBy) {
      case 'popularity':
        comparison = b.popularity - a.popularity; // Higher popularity first
        break;
      case 'releaseDate':
        comparison = new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(); // Newer first
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name); // Alphabetical
        break;
    }
    
    return filters.sortOrder === 'asc' ? -comparison : comparison;
  });
  
  return filteredTools;
};
