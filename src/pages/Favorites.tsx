
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { allTools } from '@/lib/data';
import ToolCard from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { Tool } from '@/lib/types';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';

const Favorites = () => {
  const { user, toggleFavorite, isFavorite } = useSupabaseAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  if (!user) {
    return <div className="p-8 text-center">Loading...</div>;
  }
  
  const favoriteTools: Tool[] = allTools.filter(tool => 
    user.favoriteToolIds.includes(tool.id)
  );
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">My Favorites</h1>
      <p className="text-lg text-muted-foreground mb-8">
        {favoriteTools.length > 0 
          ? `You have ${favoriteTools.length} favorite tools`
          : 'You have no favorite tools yet'
        }
      </p>
      
      {favoriteTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(tool.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No Favorites Yet</h2>
          <p className="text-muted-foreground mb-8">
            Browse our collection of AI tools and add your favorites to view them here.
          </p>
          <Link to="/categories">
            <Button>Browse Categories</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
