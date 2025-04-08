
import { User } from '../types';

export const users: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    isAdmin: false,
    favoriteToolIds: ["leonardo-ai-3d", "hoppycopy", "kaggle"]
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    favoriteToolIds: []
  }
];
