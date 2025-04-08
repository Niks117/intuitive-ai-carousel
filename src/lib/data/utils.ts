
import { SearchFilters, Tool } from '../types';
import { tools } from './tools';

/**
 * Get tools by category ID
 */
export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.categoryIds.includes(categoryId));
};

/**
 * Filter tools based on search filters
 */
export const filterTools = (filters: SearchFilters): Tool[] => {
  let filteredTools = [...tools];
  
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.shortDescription.toLowerCase().includes(query) ||
      tool.useCase.toLowerCase().includes(query) ||
      // Also match by category names that the tool belongs to
      tool.categoryIds.some(catId => {
        const matchingCategory = categories.find(cat => cat.id === catId);
        return matchingCategory && matchingCategory.name.toLowerCase().includes(query);
      })
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

/**
 * Get featured tools
 */
export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.featured)
    .sort((a, b) => b.popularity - a.popularity);
};

/**
 * Recommend related tools
 */
export const recommendTools = (toolId: string, limit: number = 3): Tool[] => {
  const tool = tools.find(t => t.id === toolId);
  
  if (!tool) return [];
  
  const relatedTools = tools.filter(t => 
    t.id !== toolId && 
    t.categoryIds.some(category => tool.categoryIds.includes(category))
  );
  
  relatedTools.sort((a, b) => {
    const aMatchCount = a.categoryIds.filter(c => tool.categoryIds.includes(c)).length;
    const bMatchCount = b.categoryIds.filter(c => tool.categoryIds.includes(c)).length;
    
    if (bMatchCount !== aMatchCount) {
      return bMatchCount - aMatchCount;
    }
    
    return b.popularity - a.popularity;
  });
  
  return relatedTools.slice(0, limit);
};

// Import here to avoid circular dependency
import { categories } from './categories';
