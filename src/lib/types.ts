
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  useCase: string;
  pricing: 'Free' | 'Paid' | 'Freemium';
  website: string;
  documentation: string;
  imageUrl: string;
  logoUrl: string;
  categoryIds: string[];
  featured: boolean;
  popularity: number;
  releaseDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  favoriteToolIds: string[];
}

export interface SearchFilters {
  query: string;
  categories: string[];
  pricing: string[];
  sortBy: 'popularity' | 'releaseDate' | 'name';
  sortOrder: 'asc' | 'desc';
}
