
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { filterTools } from '@/lib/data';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import SearchFilters from '@/components/SearchFilters';
import ToolCard from '@/components/ToolCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { user, toggleFavorite, isFavorite } = useAuth();
  
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: queryParams.get('q') || '',
    categories: queryParams.get('categories') 
      ? queryParams.get('categories')!.split(',') 
      : [],
    pricing: queryParams.get('pricing')
      ? queryParams.get('pricing')!.split(',')
      : [],
    sortBy: (queryParams.get('sort')?.split('-')[0] as 'popularity' | 'releaseDate' | 'name') || 'popularity',
    sortOrder: (queryParams.get('sort')?.split('-')[1] as 'asc' | 'desc') || 'desc'
  });
  
  const [searchResults, setSearchResults] = useState(filterTools(filters));
  const [searchInput, setSearchInput] = useState(filters.query);
  
  useEffect(() => {
    const results = filterTools(filters);
    setSearchResults(results);
    
    // Update URL without reloading page
    const params = new URLSearchParams();
    
    if (filters.query) {
      params.set('q', filters.query);
    }
    
    if (filters.categories.length > 0) {
      params.set('categories', filters.categories.join(','));
    }
    
    if (filters.pricing.length > 0) {
      params.set('pricing', filters.pricing.join(','));
    }
    
    params.set('sort', `${filters.sortBy}-${filters.sortOrder}`);
    
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`
    );
  }, [filters]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, query: searchInput });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        {filters.query 
          ? `Search results for "${filters.query}"`
          : "Browse AI Tools"
        }
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        {searchResults.length} tools found
      </p>
      
      <div className="mb-8">
        <form onSubmit={handleSearch} className="max-w-2xl relative">
          <Input
            type="search"
            placeholder="Search for AI tools, categories, or use cases..."
            className="pr-12 h-12"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-1.5 top-1.5 h-9 w-9"
            aria-label="Search"
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </form>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <SearchFilters filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="md:col-span-3">
          {searchResults.length === 0 ? (
            <div className="text-center p-8 bg-muted rounded-lg">
              <h3 className="text-xl font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search term or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(tool => (
                <ToolCard 
                  key={tool.id} 
                  tool={tool} 
                  isFavorite={isFavorite(tool.id)}
                  onToggleFavorite={() => toggleFavorite(tool.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
