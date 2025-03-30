
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '@/lib/types';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  tool, 
  isFavorite = false, 
  onToggleFavorite,
  className
}) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };
  
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="relative h-40 bg-accent/10">
        <img
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={handleToggleFavorite}
          >
            <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "")} />
            <span className="sr-only">Toggle favorite</span>
          </Button>
        </div>
        {tool.featured && (
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center overflow-hidden">
            <img src={tool.logoUrl} alt={`${tool.name} logo`} className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
            <p className="text-sm text-muted-foreground">{tool.shortDescription}</p>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          <Badge variant="outline" className="text-xs">
            {tool.pricing}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link to={`/tools/${tool.id}`} className="w-full">
          <Button variant="secondary" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
