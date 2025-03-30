
import React from 'react';
import { Tool } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolCard from './ToolCard';

interface RecommendedToolsProps {
  title: string;
  tools: Tool[];
  userId?: string;
  favoriteToolIds?: string[];
  onToggleFavorite?: (toolId: string) => void;
}

const RecommendedTools: React.FC<RecommendedToolsProps> = ({ 
  title,
  tools,
  favoriteToolIds = [],
  onToggleFavorite
}) => {
  if (tools.length === 0) {
    return null;
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {tools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={favoriteToolIds.includes(tool.id)}
              onToggleFavorite={onToggleFavorite ? () => onToggleFavorite(tool.id) : undefined}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedTools;
