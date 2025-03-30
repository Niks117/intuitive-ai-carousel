
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  allTools, 
  categories, 
  recommendTools 
} from '@/lib/data';
import { 
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Heart, Calendar, BarChart, ArrowLeft } from 'lucide-react';
import RecommendedTools from '@/components/RecommendedTools';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user, toggleFavorite, isFavorite } = useAuth();
  
  const tool = allTools.find(t => t.id === id);
  
  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
        <p className="mb-8">The tool you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-primary hover:underline">
          Browse all tools
        </Link>
      </div>
    );
  }
  
  const toolCategories = categories.filter(cat => 
    tool.categoryIds.includes(cat.id)
  );
  
  const recommendedTools = recommendTools(tool.id);
  const formattedDate = new Date(tool.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="text-primary hover:underline inline-flex items-center mb-4">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to tools
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                <img src={tool.logoUrl} alt={`${tool.name} logo`} className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                <div className="flex flex-wrap gap-2 mt-1">
                  {toolCategories.map(category => (
                    <Link to={`/categories/${category.slug}`} key={category.id}>
                      <Badge variant="outline" className="hover:bg-secondary transition-colors">
                        {category.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                Released: {formattedDate}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BarChart className="mr-1 h-4 w-4" />
                Popularity: {tool.popularity}/100
              </div>
            </div>
            
            <div className="mb-6">
              <img src={tool.imageUrl} alt={tool.name} className="w-full h-64 object-cover rounded-lg" />
            </div>
            
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4">About {tool.name}</h2>
              <p className="text-lg mb-4">{tool.description}</p>
              
              <h3 className="text-xl font-semibold mb-2">Primary Use Case</h3>
              <p>{tool.useCase}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a href={tool.website} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full" size="lg">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={tool.documentation} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Documentation <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                variant="secondary"
                size="icon"
                className="h-12 w-12"
                onClick={() => toggleFavorite(tool.id)}
              >
                <Heart className={cn("h-5 w-5", isFavorite(tool.id) ? "fill-red-500 text-red-500" : "")} />
                <span className="sr-only">Toggle favorite</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tool Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Pricing Model</h3>
                <Badge variant="secondary" className="text-sm font-normal">
                  {tool.pricing}
                </Badge>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Categories</h3>
                <div className="flex flex-wrap gap-1">
                  {toolCategories.map(category => (
                    <Link to={`/categories/${category.slug}`} key={category.id}>
                      <Badge variant="outline" className="text-xs">
                        {category.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div className="pt-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Share this tool</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Tweet
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {recommendedTools.length > 0 && (
            <RecommendedTools
              title="Similar Tools"
              tools={recommendedTools}
              favoriteToolIds={user?.favoriteToolIds || []}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
