
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  categories, 
  allTools 
} from '@/lib/data';
import { Tool } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const AdminPanel = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tools, setTools] = useState<Tool[]>(allTools);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentTool, setCurrentTool] = useState<Tool | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // In a real app, you'd fetch this data from an API
  
  const emptyTool: Tool = {
    id: '',
    name: '',
    description: '',
    shortDescription: '',
    useCase: '',
    pricing: 'Free',
    website: '',
    documentation: '',
    imageUrl: '/placeholder.svg',
    logoUrl: '/placeholder.svg',
    categoryIds: [],
    featured: false,
    popularity: 50,
    releaseDate: new Date().toISOString().split('T')[0]
  };
  
  // Redirect if not admin
  React.useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access the admin panel",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [user, isAdmin, navigate]);
  
  const [formData, setFormData] = useState<Tool>(emptyTool);
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFormData(prev => {
      const updatedCategories = checked
        ? [...prev.categoryIds, categoryId]
        : prev.categoryIds.filter(id => id !== categoryId);
      
      return { ...prev, categoryIds: updatedCategories };
    });
  };
  
  const handleFeaturedChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, featured: checked }));
  };
  
  const handlePricingChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      pricing: value as 'Free' | 'Paid' | 'Freemium' 
    }));
  };
  
  const handleAddTool = () => {
    // In a real app, you'd send this to an API
    // For the MVP, we'll just update our local state
    
    const newTool: Tool = {
      ...formData,
      id: `tool-${Date.now()}`,
    };
    
    setTools(prev => [...prev, newTool]);
    setIsAddDialogOpen(false);
    setFormData(emptyTool);
    
    toast({
      title: "Tool added",
      description: `${newTool.name} has been added successfully`,
    });
  };
  
  const handleEditTool = () => {
    // In a real app, you'd send this to an API
    // For the MVP, we'll just update our local state
    
    setTools(prev => 
      prev.map(tool => tool.id === formData.id ? formData : tool)
    );
    
    setIsEditDialogOpen(false);
    
    toast({
      title: "Tool updated",
      description: `${formData.name} has been updated successfully`,
    });
  };
  
  const handleDeleteTool = () => {
    if (!currentTool) return;
    
    // In a real app, you'd send this to an API
    // For the MVP, we'll just update our local state
    
    setTools(prev => prev.filter(tool => tool.id !== currentTool.id));
    setIsDeleteDialogOpen(false);
    setCurrentTool(null);
    
    toast({
      title: "Tool deleted",
      description: `The tool has been deleted successfully`,
    });
  };
  
  const openEditDialog = (tool: Tool) => {
    setFormData(tool);
    setIsEditDialogOpen(true);
  };
  
  const openDeleteDialog = (tool: Tool) => {
    setCurrentTool(tool);
    setIsDeleteDialogOpen(true);
  };
  
  if (isLoading || (!user || !isAdmin)) {
    return <div className="p-8 text-center">Loading...</div>;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Manage AI tools and categories
      </p>
      
      <div className="flex justify-between items-center mb-6">
        <Input
          type="search"
          placeholder="Search tools..."
          className="max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Tool
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Tool</DialogTitle>
              <DialogDescription>
                Fill in the details to add a new AI tool to the database.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-4 md:col-span-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Tool Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                    Short Description* (1-2 sentences)
                  </label>
                  <Input
                    id="shortDescription"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4 md:col-span-2">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Full Description*
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium mb-1">
                    Primary Use Case*
                  </label>
                  <Textarea
                    id="useCase"
                    name="useCase"
                    rows={2}
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-1">
                  Website URL*
                </label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="documentation" className="block text-sm font-medium mb-1">
                  Documentation URL
                </label>
                <Input
                  id="documentation"
                  name="documentation"
                  type="url"
                  value={formData.documentation}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="pricing" className="block text-sm font-medium mb-1">
                  Pricing*
                </label>
                <Select
                  value={formData.pricing}
                  onValueChange={handlePricingChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Free">Free</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Freemium">Freemium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="releaseDate" className="block text-sm font-medium mb-1">
                  Release Date
                </label>
                <Input
                  id="releaseDate"
                  name="releaseDate"
                  type="date"
                  value={formData.releaseDate.split('T')[0]}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="popularity" className="block text-sm font-medium mb-1">
                  Popularity (0-100)
                </label>
                <Input
                  id="popularity"
                  name="popularity"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.popularity}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    popularity: parseInt(e.target.value) 
                  }))}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={handleFeaturedChange}
                />
                <label
                  htmlFor="featured"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Featured Tool
                </label>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Categories* (select at least one)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={formData.categoryIds.includes(category.id)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddTool}>
                Add Tool
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Tools</CardTitle>
          <CardDescription>
            Showing {filteredTools.length} of {tools.length} tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Pricing</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTools.map(tool => (
                <TableRow key={tool.id}>
                  <TableCell className="font-medium">{tool.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {tool.categoryIds.map(categoryId => {
                        const category = categories.find(c => c.id === categoryId);
                        return category ? (
                          <Badge key={categoryId} variant="outline">
                            {category.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                  <TableCell>{tool.pricing}</TableCell>
                  <TableCell>{tool.featured ? "Yes" : "No"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(tool)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openDeleteDialog(tool)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Tool</DialogTitle>
            <DialogDescription>
              Update the details for this AI tool.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {/* Same form fields as Add dialog */}
            <div className="space-y-4 md:col-span-2">
              <div>
                <label htmlFor="edit-name" className="block text-sm font-medium mb-1">
                  Tool Name*
                </label>
                <Input
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="edit-shortDescription" className="block text-sm font-medium mb-1">
                  Short Description* (1-2 sentences)
                </label>
                <Input
                  id="edit-shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-4 md:col-span-2">
              <div>
                <label htmlFor="edit-description" className="block text-sm font-medium mb-1">
                  Full Description*
                </label>
                <Textarea
                  id="edit-description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="edit-useCase" className="block text-sm font-medium mb-1">
                  Primary Use Case*
                </label>
                <Textarea
                  id="edit-useCase"
                  name="useCase"
                  rows={2}
                  value={formData.useCase}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="edit-website" className="block text-sm font-medium mb-1">
                Website URL*
              </label>
              <Input
                id="edit-website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="edit-documentation" className="block text-sm font-medium mb-1">
                Documentation URL
              </label>
              <Input
                id="edit-documentation"
                name="documentation"
                type="url"
                value={formData.documentation}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="edit-pricing" className="block text-sm font-medium mb-1">
                Pricing*
              </label>
              <Select
                value={formData.pricing}
                onValueChange={handlePricingChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select pricing model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Free">Free</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                  <SelectItem value="Freemium">Freemium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="edit-releaseDate" className="block text-sm font-medium mb-1">
                Release Date
              </label>
              <Input
                id="edit-releaseDate"
                name="releaseDate"
                type="date"
                value={formData.releaseDate.split('T')[0]}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="edit-popularity" className="block text-sm font-medium mb-1">
                Popularity (0-100)
              </label>
              <Input
                id="edit-popularity"
                name="popularity"
                type="number"
                min="0"
                max="100"
                value={formData.popularity}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  popularity: parseInt(e.target.value) 
                }))}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="edit-featured"
                checked={formData.featured}
                onCheckedChange={handleFeaturedChange}
              />
              <label
                htmlFor="edit-featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Featured Tool
              </label>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Categories* (select at least one)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`edit-category-${category.id}`}
                      checked={formData.categoryIds.includes(category.id)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`edit-category-${category.id}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditTool}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {currentTool?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteTool}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
