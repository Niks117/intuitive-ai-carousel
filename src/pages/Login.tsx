
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' })
});

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const success = await login(data.email, data.password);
    if (success) {
      navigate('/');
    }
  };
  
  const handleDemoLogin = async () => {
    // Use one of the mock users for demo login
    const success = await login('user@example.com', 'password');
    if (success) {
      navigate('/');
    } else {
      toast.error('Demo login failed. Please try again.');
    }
  };
  
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging In..." : "Log In"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleDemoLogin}
              disabled={loading}
            >
              Demo Login
            </Button>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary underline-offset-4 hover:underline">
              Sign up
            </Link>
          </p>
          <Button variant="link" className="text-xs text-muted-foreground p-0 h-auto">
            Forgot your password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
