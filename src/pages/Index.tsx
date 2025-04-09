import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, getFeaturedTools } from '@/lib/data';
import { Search, ArrowRight } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import CategoryCard from '@/components/CategoryCard';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, toggleFavorite, isFavorite } = useAuth();
  const featuredTools = getFeaturedTools();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4">
            Discover the Best AI Tools
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our curated collection of powerful AI tools to boost your productivity and creativity.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
            <Input
              type="search"
              placeholder="Search for AI tools, categories, or use cases..."
              className="pr-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-1.5 top-1.5 h-11 w-11"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/categories">
              <Button variant="outline" size="lg" className="group">
                Browse Categories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {!user && (
              <Link to="/signup">
                <Button size="lg">
                  Sign Up Free
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Browse Categories
            </h2>
            <Link to="/categories" className="text-primary hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(0, 5).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Tools */}
      <section className={cn("py-16 px-4", "bg-secondary/50")}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured AI Tools
            </h2>
            <Link to="/search" className="text-primary hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredTools.slice(0, 8).map(tool => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                isFavorite={isFavorite(tool.id)}
                onToggleFavorite={() => toggleFavorite(tool.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why AI Toolbox Pro */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose AI Toolbox Pro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We help you navigate the ever-expanding AI landscape to find the perfect tools for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Discover</h3>
              <p className="text-muted-foreground">
                Explore our curated collection of the best AI tools across multiple categories.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                  <path d="M12 11v5"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Learn</h3>
              <p className="text-muted-foreground">
                Get detailed information about each tool, including use cases, pricing, and resources.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Save your favorite tools, get personalized recommendations, and stay updated on new releases.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16 px-4 text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Explore the Future of AI?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Join thousands of innovators, developers, and business leaders who use AI Toolbox Pro to stay ahead of the curve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {!user ? (
              <>
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="text-primary">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Browse Tools
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/categories">
                <Button size="lg" variant="secondary" className="text-primary">
                  Explore All Categories
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
