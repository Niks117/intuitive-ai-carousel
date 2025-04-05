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
  Box,
  Ghost,
  Radio,
  Lightbulb,
  Palette,
  Accessibility,
  Music,
  User,
  MessagesSquare,
  Headset,
  Heart,
  WrenchIcon,
  ShoppingCart,
  Mail,
  GraduationCap,
  Puzzle,
  Scan,
  Shirt,
  FileSpreadsheet,
  DollarSign,
  Rocket,
  Gamepad2,
  Github,
  Stethoscope,
  Users,
  Image,
  ImagePlus,
  Scale,
  LifeBuoy,
  Braces,
  Shapes,
  Megaphone,
  Brain,
  Music2,
  FileCode,
  Presentation,
  CheckSquare,
  HelpingHand,
  Building2,
  Microscope,
  Smartphone,
  TrendingUp,
  Search,
  Share2,
  BookOpen,
  FileText,
  Zap,
  Type,
  Video,
  FileQuestion,
  FileAudio,
  Languages,
  Plane,
  Film,
  Mic2,
  Globe,
  PenTool,
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
  "Bot": Bot,
  "Cube": Box,
  "Ghost": Ghost,
  "Radar": Radio,
  "Lightbulb": Lightbulb,
  "Palette": Palette,
  "Accessibility": Accessibility,
  "Music": Music,
  "User": User,
  "MessagesSquare": MessagesSquare,
  "HeadsetMic": Headset,
  "Heart": Heart,
  "Tool": WrenchIcon,
  "ShoppingCart": ShoppingCart,
  "Mail": Mail,
  "GraduationCap": GraduationCap,
  "Puzzle": Puzzle,
  "Scan": Scan,
  "Shirt": Shirt,
  "FileSpreadsheet": FileSpreadsheet,
  "DollarSign": DollarSign,
  "Rocket": Rocket,
  "Gamepad2": Gamepad2,
  "Github": Github,
  "Stethoscope": Stethoscope,
  "Users": Users,
  "Image": Image,
  "ImagePlus": ImagePlus,
  "Scale": Scale,
  "LifeBuoy": LifeBuoy,
  "Braces": Braces,
  "Shapes": Shapes,
  "Megaphone": Megaphone,
  "Brain": Brain,
  "Music2": Music2,
  "FileCode": FileCode,
  "PresentationScreen": Presentation,
  "CheckSquare": CheckSquare,
  "HelpingHand": HelpingHand,
  "Building2": Building2,
  "Microscope": Microscope,
  "Smartphone": Smartphone,
  "TrendingUp": TrendingUp,
  "Search": Search,
  "Share2": Share2,
  "BookOpen": BookOpen,
  "FileText": FileText,
  "Zap": Zap,
  "Type": Type,
  "Video": Video,
  "FileQuestion": FileQuestion,
  "FileAudio": FileAudio,
  "Languages": Languages,
  "Plane": Plane,
  "VideoIcon": Film,
  "Film": Film,
  "Mic2": Mic2,
  "Globe": Globe,
  "PenTool": PenTool
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
