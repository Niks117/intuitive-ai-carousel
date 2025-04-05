
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { categories, allTools } from '@/lib/data';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Tool } from '@/lib/types';

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tools");
  
  // Redirect if user is not admin
  React.useEffect(() => {
    // Check if user is not logged in or is not an admin
    if (!user || !user.email.includes('admin')) {
      toast.error("You don't have permission to access this page");
      navigate("/");
    }
  }, [user, navigate]);
  
  if (!user) return null;
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="tools">Manage Tools</TabsTrigger>
          <TabsTrigger value="categories">Manage Categories</TabsTrigger>
          <TabsTrigger value="users">Manage Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tools">
          <ToolsManagement />
        </TabsContent>
        
        <TabsContent value="categories">
          <CategoriesManagement />
        </TabsContent>
        
        <TabsContent value="users">
          <UsersManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ToolsManagement = () => {
  const [tools, setTools] = useState(allTools);
  const [newTool, setNewTool] = useState<Tool>({
    id: '',
    name: '',
    description: '',
    shortDescription: '',
    useCase: '',
    pricing: 'Free', // Ensure this is one of the allowed values
    website: '',
    documentation: '',
    imageUrl: '',
    logoUrl: '',
    categoryIds: [],
    featured: false,
    popularity: 0,
    releaseDate: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTool({ ...newTool, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (value: string, name: string) => {
    // For pricing, ensure it's one of the valid options
    if (name === 'pricing') {
      const validPricing = value as 'Free' | 'Paid' | 'Freemium';
      setNewTool({ ...newTool, [name]: validPricing });
    } else {
      setNewTool({ ...newTool, [name]: value });
    }
  };
  
  const addTool = () => {
    setTools([...tools, newTool]);
    setNewTool({
      id: '',
      name: '',
      description: '',
      shortDescription: '',
      useCase: '',
      pricing: 'Free',
      website: '',
      documentation: '',
      imageUrl: '',
      logoUrl: '',
      categoryIds: [],
      featured: false,
      popularity: 0,
      releaseDate: ''
    });
    toast.success("Tool added successfully!");
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tools Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tools.map((tool) => (
              <TableRow key={tool.id}>
                <TableCell>{tool.name}</TableCell>
                <TableCell>{tool.description}</TableCell>
                <TableCell>
                  <Button variant="outline">Edit</Button>
                  <Button variant="destructive" className="ml-2">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Add New Tool</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="id">ID</Label>
            <Input type="text" id="id" name="id" value={newTool.id} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={newTool.name} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="shortDescription">Short Description</Label>
            <Input type="text" id="shortDescription" name="shortDescription" value={newTool.shortDescription} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input type="text" id="website" name="website" value={newTool.website} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="pricing">Pricing</Label>
            <Select onValueChange={(value) => handleSelectChange(value, 'pricing')} value={newTool.pricing}>
              <SelectTrigger>
                <SelectValue placeholder="Select pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Free">Free</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Freemium">Freemium</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={newTool.description} onChange={handleInputChange} />
        </div>
        
        <Button className="mt-4" onClick={addTool}>Add Tool</Button>
      </CardContent>
    </Card>
  );
};

const CategoriesManagement = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  
  const addCategory = () => {
    // Implement add category logic here
    toast.success("Category added successfully!");
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="categoryName">Category Name</Label>
            <Input 
              type="text" 
              id="categoryName" 
              value={categoryName} 
              onChange={(e) => setCategoryName(e.target.value)} 
            />
          </div>
          <div>
            <Label htmlFor="categoryDescription">Category Description</Label>
            <Input 
              type="text" 
              id="categoryDescription" 
              value={categoryDescription} 
              onChange={(e) => setCategoryDescription(e.target.value)} 
            />
          </div>
        </div>
        <Button className="mt-4" onClick={addCategory}>Add Category</Button>
      </CardContent>
    </Card>
  );
};

const UsersManagement = () => {
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="outline">Edit</Button>
                  <Button variant="destructive" className="ml-2">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Admin;
