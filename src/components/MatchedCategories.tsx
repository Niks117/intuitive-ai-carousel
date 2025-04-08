
import React from 'react';
import { Category } from '@/lib/types';
import { getToolsByCategory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MatchedCategoriesProps {
  categories: Category[];
}

const MatchedCategories: React.FC<MatchedCategoriesProps> = ({ categories }) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Matching Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => {
          const toolCount = getToolsByCategory(category.id).length;
          return (
            <Card key={category.id} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <p className="text-sm font-medium mb-4">{toolCount} tools</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  asChild
                >
                  <Link to={`/categories/${category.slug}`} className="flex items-center justify-between">
                    Browse Tools
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MatchedCategories;
