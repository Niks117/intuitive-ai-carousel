
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { categories } from '@/lib/data';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  setFilters: (filters: SearchFiltersType) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<SearchFiltersType>(filters);
  
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setLocalFilters(prev => {
      const updatedCategories = checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter(id => id !== categoryId);
      
      return { ...prev, categories: updatedCategories };
    });
  };
  
  const handlePricingChange = (pricingType: string, checked: boolean) => {
    setLocalFilters(prev => {
      const updatedPricing = checked
        ? [...prev.pricing, pricingType]
        : prev.pricing.filter(type => type !== pricingType);
      
      return { ...prev, pricing: updatedPricing };
    });
  };
  
  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split('-') as [
      'popularity' | 'releaseDate' | 'name',
      'asc' | 'desc'
    ];
    
    setLocalFilters(prev => ({
      ...prev,
      sortBy,
      sortOrder
    }));
  };
  
  const applyFilters = () => {
    setFilters(localFilters);
    setIsOpen(false);
    
    // Update URL with search params
    const searchParams = new URLSearchParams(location.search);
    
    if (localFilters.query) {
      searchParams.set('q', localFilters.query);
    } else {
      searchParams.delete('q');
    }
    
    if (localFilters.categories.length > 0) {
      searchParams.set('categories', localFilters.categories.join(','));
    } else {
      searchParams.delete('categories');
    }
    
    if (localFilters.pricing.length > 0) {
      searchParams.set('pricing', localFilters.pricing.join(','));
    } else {
      searchParams.delete('pricing');
    }
    
    searchParams.set('sort', `${localFilters.sortBy}-${localFilters.sortOrder}`);
    
    navigate({ search: searchParams.toString() });
  };
  
  const resetFilters = () => {
    const defaultFilters: SearchFiltersType = {
      query: filters.query,
      categories: [],
      pricing: [],
      sortBy: 'popularity',
      sortOrder: 'desc'
    };
    
    setLocalFilters(defaultFilters);
  };
  
  const activeFiltersCount = 
    localFilters.categories.length + 
    localFilters.pricing.length + 
    (localFilters.sortBy !== 'popularity' || localFilters.sortOrder !== 'desc' ? 1 : 0);
  
  // Desktop filters
  const FiltersContent = () => (
    <div className="space-y-6">
      <Accordion type="single" collapsible defaultValue="categories" className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={localFilters.categories.includes(category.id)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="pricing">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {['Free', 'Paid', 'Freemium'].map(pricing => (
                <div key={pricing} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`pricing-${pricing}`} 
                    checked={localFilters.pricing.includes(pricing)}
                    onCheckedChange={(checked) => 
                      handlePricingChange(pricing, checked as boolean)
                    }
                  />
                  <Label htmlFor={`pricing-${pricing}`}>{pricing}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              value={`${localFilters.sortBy}-${localFilters.sortOrder}`}
              onValueChange={handleSortChange}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="popularity-desc" id="sort-popular" />
                <Label htmlFor="sort-popular">Most Popular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="popularity-asc" id="sort-least-popular" />
                <Label htmlFor="sort-least-popular">Least Popular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="releaseDate-desc" id="sort-newest" />
                <Label htmlFor="sort-newest">Newest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="releaseDate-asc" id="sort-oldest" />
                <Label htmlFor="sort-oldest">Oldest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="name-asc" id="sort-a-z" />
                <Label htmlFor="sort-a-z">A-Z</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="name-desc" id="sort-z-a" />
                <Label htmlFor="sort-z-a">Z-A</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="flex flex-col space-y-2">
        <Button onClick={applyFilters}>
          Apply Filters
        </Button>
        <Button variant="outline" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
  
  return (
    <div>
      {/* Desktop filters */}
      <div className="hidden md:block">
        <FiltersContent />
      </div>
      
      {/* Mobile filters */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </div>
              {activeFiltersCount > 0 && (
                <span className="ml-2 rounded-full bg-primary w-5 h-5 flex items-center justify-center text-xs text-primary-foreground">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your search results
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FiltersContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default SearchFilters;
