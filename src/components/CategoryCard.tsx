
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/lib/types';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  MessageSquare, 
  Eye, 
  BarChart, 
  Cpu, 
  Mic, 
  Code, 
  Sparkles, 
  Briefcase, 
  Bot,
  LucideIcon 
} from "lucide-react";
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  toolCount?: number;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  "BrainCircuit": BrainCircuit,
  "MessageSquare": MessageSquare,
  "Eye": Eye,
  "BarChart": BarChart,
  "Cpu": Cpu,
  "Mic": Mic,
  "Code": Code,
  "Sparkles": Sparkles,
  "Briefcase": Briefcase,
  "Bot": Bot
};

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category,
  toolCount,
  className 
}) => {
  const Icon = iconMap[category.icon] || BrainCircuit;
  
  return (
    <Card className={cn("overflow-hidden h-full card-hover", className)}>
      <CardContent className="pt-6 px-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
        {toolCount !== undefined && (
          <p className="text-xs text-muted-foreground">{toolCount} tools</p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-center">
        <Link to={`/categories/${category.slug}`}>
          <Button variant="secondary">View Tools</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
