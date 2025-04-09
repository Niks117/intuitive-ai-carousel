import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  categories, 
  getToolsByCategory, 
  filterTools 
} from '@/lib/data';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import ToolCard from '@/components/ToolCard';
import SearchFilters from '@/components/SearchFilters';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user, toggleFavorite, isFavorite } = useAuth();
  const [category, setCategory] = useState(categories.find(c => c.slug === slug));
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: '',
    categories: category ? [category.id] : [],
    pricing: [],
    sortBy: 'popularity',
    sortOrder: 'desc'
  });
  
  const [filteredTools, setFilteredTools] = useState(
    category ? getToolsByCategory(category.id) : []
  );
  
  useEffect(() => {
    const foundCategory = categories.find(c => c.slug === slug);
    setCategory(foundCategory);
    
    if (foundCategory) {
      setFilters(prev => ({
        ...prev,
        categories: [foundCategory.id]
      }));
    }
  }, [slug]);
  
  useEffect(() => {
    if (category) {
      const tools = filterTools(filters);
      setFilteredTools(tools);
    }
  }, [filters, category]);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-8">The category you're looking for doesn't exist or has been removed.</p>
        <Link to="/categories" className="text-primary hover:underline">
          Browse all categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/categories" className="text-primary hover:underline inline-flex items-center mb-4">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Categories
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <SearchFilters filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="md:col-span-3">
          {filteredTools.length === 0 ? (
            <div className="text-center p-8 bg-muted rounded-lg">
              <h3 className="text-xl font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Showing {filteredTools.length} tools
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => (
                  <ToolCard 
                    key={tool.id} 
                    tool={tool} 
                    isFavorite={isFavorite(tool.id)}
                    onToggleFavorite={() => toggleFavorite(tool.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
