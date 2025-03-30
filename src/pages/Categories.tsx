
import React from 'react';
import { categories, getToolsByCategory } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Tool Categories</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Browse our comprehensive collection of AI tools by category
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(category => {
          const tools = getToolsByCategory(category.id);
          return (
            <CategoryCard 
              key={category.id} 
              category={category} 
              toolCount={tools.length} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
