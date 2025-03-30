
import { Category, Tool, User, SearchFilters } from './types';

export const categories: Category[] = [
  {
    id: "3d-model",
    name: "3D Model",
    description: "Tools for creating and manipulating 3D models",
    icon: "Cube",
    slug: "3d-model"
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    description: "Autonomous AI agents that can perform tasks",
    icon: "Bot",
    slug: "ai-agents"
  },
  {
    id: "ai-characters",
    name: "AI Characters",
    description: "Create and interact with AI-powered characters",
    icon: "Ghost",
    slug: "ai-characters"
  },
  {
    id: "ai-chat",
    name: "AI Chat & Assistant",
    description: "Conversational AI tools and assistants",
    icon: "MessageSquare",
    slug: "ai-chat"
  },
  {
    id: "ai-detection",
    name: "AI Detection",
    description: "Tools to detect AI-generated content",
    icon: "Radar",
    slug: "ai-detection"
  },
  {
    id: "ai-useful",
    name: "AI Useful",
    description: "General-purpose AI tools for everyday tasks",
    icon: "Lightbulb",
    slug: "ai-useful"
  },
  {
    id: "art",
    name: "Art",
    description: "AI tools for creating and enhancing artwork",
    icon: "Palette",
    slug: "art"
  },
  {
    id: "assistant-code",
    name: "Assistant Code",
    description: "AI-powered coding assistants and tools",
    icon: "Code",
    slug: "assistant-code"
  },
  {
    id: "assistive-tech",
    name: "Assistive Technology",
    description: "Technology designed to assist people with disabilities",
    icon: "Accessibility",
    slug: "assistive-tech"
  },
  {
    id: "audio-editing",
    name: "Audio Editing",
    description: "Tools for audio creation and manipulation",
    icon: "Music",
    slug: "audio-editing"
  },
  {
    id: "automation",
    name: "Automation",
    description: "Tools for automating tasks and workflows",
    icon: "Cpu",
    slug: "automation"
  },
  {
    id: "avatars",
    name: "Avatars",
    description: "Create personalized AI avatars and profiles",
    icon: "User",
    slug: "avatars"
  },
  {
    id: "business",
    name: "Business",
    description: "AI tools for business operations and management",
    icon: "Briefcase",
    slug: "business"
  },
  {
    id: "chatbots",
    name: "ChatBots",
    description: "Create and deploy intelligent chatbots",
    icon: "MessagesSquare",
    slug: "chatbots"
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "AI tools for enhancing customer support",
    icon: "HeadsetMic",
    slug: "customer-support"
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Tools for data analysis and visualization",
    icon: "BarChart",
    slug: "data-analytics"
  },
  {
    id: "dating-relationships",
    name: "Dating & Relationships",
    description: "AI tools for dating and relationship management",
    icon: "Heart",
    slug: "dating-relationships"
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Tools for software development and programming",
    icon: "Tool",
    slug: "developer-tools"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "AI tools for online selling and e-commerce",
    icon: "ShoppingCart",
    slug: "ecommerce"
  },
  {
    id: "email",
    name: "E-mail",
    description: "Tools for email management and automation",
    icon: "Mail",
    slug: "email"
  },
  {
    id: "education",
    name: "Education / Studies",
    description: "AI tools for learning and educational purposes",
    icon: "GraduationCap",
    slug: "education"
  },
  {
    id: "chatgpt-extensions",
    name: "Extensions ChatGPT",
    description: "Extensions and plugins for ChatGPT",
    icon: "Puzzle",
    slug: "chatgpt-extensions"
  },
  {
    id: "face-swap",
    name: "Face Swap & DeepFake",
    description: "Tools for face swapping and deepfake creation",
    icon: "Scan",
    slug: "face-swap"
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "AI tools for fashion design and styling",
    icon: "Shirt",
    slug: "fashion"
  },
  {
    id: "spreadsheets",
    name: "Files & Spreadsheets",
    description: "AI tools for document and spreadsheet management",
    icon: "FileSpreadsheet",
    slug: "spreadsheets"
  },
  {
    id: "finance",
    name: "Finance",
    description: "AI tools for financial management and analysis",
    icon: "DollarSign",
    slug: "finance"
  },
  {
    id: "future-tools",
    name: "Future Tools",
    description: "Upcoming and cutting-edge AI tools",
    icon: "Rocket",
    slug: "future-tools"
  },
  {
    id: "games",
    name: "Games",
    description: "AI-powered games and gaming tools",
    icon: "Gamepad2",
    slug: "games"
  },
  {
    id: "github-projects",
    name: "Github Projects",
    description: "AI tools and projects hosted on GitHub",
    icon: "Github",
    slug: "github-projects"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "AI tools for healthcare and medical applications",
    icon: "Stethoscope",
    slug: "healthcare"
  },
  {
    id: "human-resources",
    name: "Human Resources",
    description: "AI tools for HR and recruitment",
    icon: "Users",
    slug: "human-resources"
  },
  {
    id: "image-editing",
    name: "Image Editing",
    description: "Tools for editing and enhancing images",
    icon: "Image",
    slug: "image-editing"
  },
  {
    id: "image-generators",
    name: "Image Generators",
    description: "Create images using AI",
    icon: "ImagePlus",
    slug: "image-generators"
  },
  {
    id: "latest-ai",
    name: "Latest AI",
    description: "The newest AI tools and technologies",
    icon: "Sparkles",
    slug: "latest-ai"
  },
  {
    id: "legal-assistants",
    name: "Legal Assistants",
    description: "AI tools for legal research and assistance",
    icon: "Scale",
    slug: "legal-assistants"
  },
  {
    id: "life-assistants",
    name: "Life Assistants",
    description: "AI tools for personal productivity and life management",
    icon: "LifeBuoy",
    slug: "life-assistants"
  },
  {
    id: "llm-models",
    name: "LLM Models",
    description: "Large Language Models and related tools",
    icon: "Braces",
    slug: "llm-models"
  },
  {
    id: "logo-creation",
    name: "Logo Creation",
    description: "Create professional logos using AI",
    icon: "Shapes",
    slug: "logo-creation"
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "AI tools for marketing and promotion",
    icon: "Megaphone",
    slug: "marketing"
  },
  {
    id: "memory",
    name: "Memory",
    description: "AI tools for memory enhancement and management",
    icon: "Brain",
    slug: "memory"
  },
  {
    id: "music",
    name: "Music",
    description: "AI tools for music creation and production",
    icon: "Music2",
    slug: "music"
  },
  {
    id: "no-code",
    name: "No Code/Low Code",
    description: "Build applications without extensive coding",
    icon: "FileCode",
    slug: "no-code"
  },
  {
    id: "presentation",
    name: "Presentation",
    description: "AI tools for creating and enhancing presentations",
    icon: "PresentationScreen",
    slug: "presentation"
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Tools to enhance personal and professional productivity",
    icon: "CheckSquare",
    slug: "productivity"
  },
  {
    id: "prompts-aids",
    name: "Prompts & Aids",
    description: "Helper tools for creating effective AI prompts",
    icon: "HelpingHand",
    slug: "prompts-aids"
  },
  {
    id: "real-estate",
    name: "Real Estate / Architect",
    description: "AI tools for real estate and architecture",
    icon: "Building2",
    slug: "real-estate"
  },
  {
    id: "research-science",
    name: "Research & Science",
    description: "AI tools for scientific research and analysis",
    icon: "Microscope",
    slug: "research-science"
  },
  {
    id: "robots-devices",
    name: "Robots and Devices",
    description: "AI tools for robotics and smart devices",
    icon: "Smartphone",
    slug: "robots-devices"
  },
  {
    id: "sales-conversion",
    name: "Sales & Conversion",
    description: "AI tools to improve sales and conversion rates",
    icon: "TrendingUp",
    slug: "sales-conversion"
  },
  {
    id: "search-engine",
    name: "Search Engine",
    description: "AI-powered search engines and tools",
    icon: "Search",
    slug: "search-engine"
  },
  {
    id: "social-networks",
    name: "Social Networks",
    description: "AI tools for social media management",
    icon: "Share2",
    slug: "social-networks"
  },
  {
    id: "storytelling",
    name: "Storytelling Generator",
    description: "Create compelling stories with AI",
    icon: "BookOpen",
    slug: "storytelling"
  },
  {
    id: "summarizer",
    name: "Summarizer",
    description: "AI tools for summarizing content",
    icon: "FileText",
    slug: "summarizer"
  },
  {
    id: "supertools",
    name: "SuperTools",
    description: "All-in-one AI tools and platforms",
    icon: "Zap",
    slug: "supertools"
  },
  {
    id: "text-generators",
    name: "Text Generators",
    description: "Create various types of text content using AI",
    icon: "Type",
    slug: "text-generators"
  },
  {
    id: "text-to-speech",
    name: "Text To Speech",
    description: "Convert text to realistic speech",
    icon: "Mic",
    slug: "text-to-speech"
  },
  {
    id: "text-to-video",
    name: "Text-to-video",
    description: "Generate videos from text descriptions",
    icon: "Video",
    slug: "text-to-video"
  },
  {
    id: "does-not-exist",
    name: "This*DoesNotExist",
    description: "AI-generated content that doesn't actually exist",
    icon: "FileQuestion",
    slug: "does-not-exist"
  },
  {
    id: "transcriber",
    name: "Transcriber",
    description: "Convert audio and video to text",
    icon: "FileAudio",
    slug: "transcriber"
  },
  {
    id: "translation",
    name: "Translation",
    description: "AI-powered language translation tools",
    icon: "Languages",
    slug: "translation"
  },
  {
    id: "travel",
    name: "Travel",
    description: "AI tools for travel planning and management",
    icon: "Plane",
    slug: "travel"
  },
  {
    id: "video-editing",
    name: "Video Edition",
    description: "Tools for video editing and enhancement",
    icon: "VideoIcon",
    slug: "video-editing"
  },
  {
    id: "video-generators",
    name: "Video Generators",
    description: "Create videos using AI",
    icon: "Film",
    slug: "video-generators"
  },
  {
    id: "voice-cloning",
    name: "Voice Cloning",
    description: "Create realistic voice clones with AI",
    icon: "Mic2",
    slug: "voice-cloning"
  },
  {
    id: "websites-design",
    name: "Websites & Design",
    description: "AI tools for website creation and design",
    icon: "Globe",
    slug: "websites-design"
  },
  {
    id: "writing-seo",
    name: "Writing & Web SEO",
    description: "AI tools for content writing and SEO optimization",
    icon: "PenTool",
    slug: "writing-seo"
  }
];

// Since we have a large number of categories now, we should create a simplified list of tools
// Let's create placeholder tools for some of these categories, focusing on more popular ones
export const tools: Tool[] = [
  // AI Chat & Assistant
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "ChatGPT is an AI-powered chatbot developed by OpenAI, based on the GPT-4 architecture. It can engage in conversational dialogue and provide responses that can appear remarkably human.",
    shortDescription: "OpenAI's conversational AI assistant",
    useCase: "Customer support, content creation, answering questions, brainstorming ideas",
    pricing: "Freemium",
    website: "https://chat.openai.com/",
    documentation: "https://help.openai.com/en/collections/3742473-chatgpt",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-chat", "latest-ai"],
    featured: true,
    popularity: 98,
    releaseDate: "2022-11-30"
  },
  {
    id: "claude",
    name: "Claude",
    description: "Claude is an AI assistant created by Anthropic, designed to be helpful, harmless, and honest. It excels at thoughtful dialogue and complex reasoning.",
    shortDescription: "Anthropic's conversational AI assistant",
    useCase: "Content creation, reasoning tasks, creative writing, research assistance",
    pricing: "Freemium",
    website: "https://claude.ai/",
    documentation: "https://docs.anthropic.com/claude/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-chat", "latest-ai"],
    featured: true,
    popularity: 92,
    releaseDate: "2023-03-14"
  },
  
  // Image Generators
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Midjourney is an AI art generator that creates images based on text prompts, known for its artistic style and high-quality outputs.",
    shortDescription: "AI-powered image generation from text prompts",
    useCase: "Creating concept art, illustrations, creative imagery",
    pricing: "Paid",
    website: "https://www.midjourney.com/",
    documentation: "https://docs.midjourney.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["image-generators", "art"],
    featured: true,
    popularity: 95,
    releaseDate: "2022-07-12"
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    description: "DALL·E 3 is OpenAI's most advanced text-to-image generation model, capable of creating highly detailed and photorealistic images from text descriptions.",
    shortDescription: "OpenAI's advanced text-to-image AI model",
    useCase: "Generating images from text descriptions, creative design work",
    pricing: "Paid",
    website: "https://openai.com/dall-e-3",
    documentation: "https://platform.openai.com/docs",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["image-generators", "art"],
    featured: true,
    popularity: 94,
    releaseDate: "2023-09-20"
  },
  
  // Assistant Code
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "GitHub Copilot is an AI pair programmer that offers autocomplete-style suggestions as you code. It helps you write better code faster by suggesting line completions and entire function bodies as you type.",
    shortDescription: "AI pair programming assistant",
    useCase: "Code completion, function generation, programming assistance",
    pricing: "Paid",
    website: "https://github.com/features/copilot",
    documentation: "https://docs.github.com/en/copilot",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistant-code", "developer-tools"],
    featured: true,
    popularity: 93,
    releaseDate: "2021-06-29"
  },
  {
    id: "codewhisperer",
    name: "Amazon CodeWhisperer",
    description: "Amazon CodeWhisperer is an AI coding companion that helps developers build applications by generating code suggestions based on natural language comments and existing code.",
    shortDescription: "Amazon's AI code generator",
    useCase: "Code generation, code completion, programming assistance",
    pricing: "Freemium",
    website: "https://aws.amazon.com/codewhisperer/",
    documentation: "https://docs.aws.amazon.com/codewhisperer/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistant-code", "developer-tools"],
    featured: false,
    popularity: 86,
    releaseDate: "2022-06-23"
  },
  
  // Productivity
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Notion AI integrates artificial intelligence into the Notion workspace, helping users draft content, summarize notes, improve writing, and extract insights from their documents.",
    shortDescription: "AI writing assistant integrated with Notion",
    useCase: "Content creation, summarization, editing, brainstorming",
    pricing: "Paid",
    website: "https://www.notion.so/product/ai",
    documentation: "https://www.notion.so/help/guides/using-notion-ai",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["productivity", "writing-seo"],
    featured: true,
    popularity: 90,
    releaseDate: "2023-02-22"
  },
  
  // LLM Models
  {
    id: "gpt4",
    name: "GPT-4",
    description: "GPT-4 is OpenAI's most advanced large language model, capable of solving difficult problems with greater accuracy, creativity, and collaboration. It can process both image and text inputs to generate text outputs.",
    shortDescription: "OpenAI's most powerful large language model",
    useCase: "Content generation, code writing, complex reasoning tasks",
    pricing: "Paid",
    website: "https://openai.com/gpt-4",
    documentation: "https://platform.openai.com/docs/models/gpt-4",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["llm-models", "latest-ai"],
    featured: true,
    popularity: 96,
    releaseDate: "2023-03-14"
  },
  {
    id: "llama3",
    name: "Llama 3",
    description: "Llama 3 is Meta's latest open-source large language model, designed to be accessible to researchers and commercial users while maintaining strong performance across various tasks.",
    shortDescription: "Meta's open-source large language model",
    useCase: "Research, commercial applications, custom AI assistants",
    pricing: "Free",
    website: "https://llama.meta.com/",
    documentation: "https://llama.meta.com/docs/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["llm-models", "latest-ai"],
    featured: true,
    popularity: 91,
    releaseDate: "2024-04-18"
  },
  
  // Text-to-Speech
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "ElevenLabs offers AI voice technology that produces realistic speech synthesis and voice cloning, allowing users to create lifelike narrations and dialogue.",
    shortDescription: "High-quality AI voice synthesis platform",
    useCase: "Content creation, audiobooks, voiceovers, game dialogue",
    pricing: "Freemium",
    website: "https://elevenlabs.io/",
    documentation: "https://docs.elevenlabs.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["text-to-speech", "voice-cloning"],
    featured: true,
    popularity: 89,
    releaseDate: "2022-01-15"
  },
  
  // Video Generators
  {
    id: "runway",
    name: "Runway Gen-2",
    description: "Runway Gen-2 is an AI video generation model that can transform text, images, and video clips into entirely new videos, enabling creative video production capabilities.",
    shortDescription: "AI-powered video generation platform",
    useCase: "Video creation, special effects, creative content production",
    pricing: "Paid",
    website: "https://runwayml.com/",
    documentation: "https://docs.runwayml.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["video-generators", "text-to-video"],
    featured: true,
    popularity: 88,
    releaseDate: "2023-03-20"
  },
  
  // 3D Model
  {
    id: "meshy",
    name: "Meshy",
    description: "Meshy is an AI-powered platform for creating 3D assets from text or image prompts. It enables users to generate textures, models, and environments for games, AR/VR, and other 3D applications.",
    shortDescription: "AI-powered 3D asset creation",
    useCase: "Game development, 3D modeling, virtual environments",
    pricing: "Freemium",
    website: "https://www.meshy.ai/",
    documentation: "https://docs.meshy.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model"],
    featured: false,
    popularity: 85,
    releaseDate: "2023-05-10"
  }
];

// Combine the initial tools with more from different categories to create a more robust dataset
export const allTools: Tool[] = [
  ...tools,
  // Adding more tools from different categories
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "Perplexity AI is an AI-powered search engine that provides summarized answers with citations to questions, combining the capabilities of search engines and large language models.",
    shortDescription: "AI-powered search and answer engine",
    useCase: "Research, information gathering, quick answers to complex questions",
    pricing: "Freemium",
    website: "https://www.perplexity.ai/",
    documentation: "https://docs.perplexity.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["search-engine", "latest-ai"],
    featured: true,
    popularity: 90,
    releaseDate: "2022-08-30"
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "Synthesia is an AI video generation platform that allows users to create professional videos with AI avatars. It enables video creation without cameras, actors, or studios.",
    shortDescription: "AI video creation with virtual avatars",
    useCase: "Training videos, marketing content, localized videos in multiple languages",
    pricing: "Paid",
    website: "https://www.synthesia.io/",
    documentation: "https://docs.synthesia.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["video-generators", "avatars"],
    featured: false,
    popularity: 87,
    releaseDate: "2019-06-12"
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "Jasper is an AI content platform that helps teams create high-quality marketing content faster. It offers tools for writing blog posts, social media content, emails, and more.",
    shortDescription: "AI content creation for marketing teams",
    useCase: "Content marketing, copywriting, social media content",
    pricing: "Paid",
    website: "https://www.jasper.ai/",
    documentation: "https://support.jasper.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["writing-seo", "marketing"],
    featured: false,
    popularity: 86,
    releaseDate: "2021-02-01"
  },
  {
    id: "otter",
    name: "Otter.ai",
    description: "Otter.ai is an AI-powered transcription and note-taking app that records audio, transcribes speech, and generates summaries of meetings and conversations.",
    shortDescription: "AI meeting transcription and note-taking",
    useCase: "Meeting transcription, interview recording, note-taking",
    pricing: "Freemium",
    website: "https://otter.ai/",
    documentation: "https://support.otter.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["transcriber", "productivity"],
    featured: false,
    popularity: 85,
    releaseDate: "2018-02-01"
  },
  {
    id: "looka",
    name: "Looka",
    description: "Looka is an AI-powered logo maker that helps businesses create professional logo designs and brand identities without needing design experience.",
    shortDescription: "AI logo and brand identity designer",
    useCase: "Logo design, brand identity creation, business cards and marketing materials",
    pricing: "Freemium",
    website: "https://looka.com/",
    documentation: "https://support.looka.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["logo-creation", "websites-design"],
    featured: false,
    popularity: 84,
    releaseDate: "2016-11-01"
  },
  {
    id: "deepl",
    name: "DeepL",
    description: "DeepL is an AI translation service that provides remarkably accurate and natural-sounding translations for text and documents across multiple languages.",
    shortDescription: "AI-powered language translation",
    useCase: "Document translation, website localization, content translation",
    pricing: "Freemium",
    website: "https://www.deepl.com/",
    documentation: "https://support.deepl.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["translation"],
    featured: false,
    popularity: 88,
    releaseDate: "2017-08-01"
  }
];

// Mock users for the application
export const users: User[] = [
  {
    id: "user1",
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    favoriteToolIds: ["chatgpt", "midjourney", "copilot"]
  },
  {
    id: "user2",
    name: "Regular User",
    email: "user@example.com",
    isAdmin: false,
    favoriteToolIds: ["dalle", "llama3"]
  }
];

// Function to get tools by category
export const getToolsByCategory = (categoryId: string): Tool[] => {
  return allTools.filter(tool => tool.categoryIds.includes(categoryId));
};

// Function to get featured tools
export const getFeaturedTools = (): Tool[] => {
  return allTools.filter(tool => tool.featured);
};

// Function to search tools
export const searchTools = (query: string): Tool[] => {
  const lowerCaseQuery = query.toLowerCase();
  return allTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerCaseQuery) ||
    tool.description.toLowerCase().includes(lowerCaseQuery) ||
    tool.useCase.toLowerCase().includes(lowerCaseQuery)
  );
};

// Function to filter tools
export const filterTools = (filters: SearchFilters): Tool[] => {
  return allTools.filter(tool => {
    // Filter by search query
    if (filters.query && 
        !tool.name.toLowerCase().includes(filters.query.toLowerCase()) &&
        !tool.description.toLowerCase().includes(filters.query.toLowerCase()) &&
        !tool.useCase.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    
    // Filter by categories
    if (filters.categories.length > 0 && 
        !tool.categoryIds.some(cat => filters.categories.includes(cat))) {
      return false;
    }
    
    // Filter by pricing
    if (filters.pricing.length > 0 && 
        !filters.pricing.includes(tool.pricing)) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort by selected criteria
    if (filters.sortBy === 'popularity') {
      return filters.sortOrder === 'desc' 
        ? b.popularity - a.popularity 
        : a.popularity - b.popularity;
    } else if (filters.sortBy === 'releaseDate') {
      return filters.sortOrder === 'desc' 
        ? new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        : new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
    } else {
      // Sort by name
      return filters.sortOrder === 'desc' 
        ? b.name.localeCompare(a.name) 
        : a.name.localeCompare(b.name);
    }
  });
};

// Function to recommend tools
export const recommendTools = (toolId: string, limit: number = 4): Tool[] => {
  const tool = allTools.find(t => t.id === toolId);
  if (!tool) return [];
  
  // Find tools in the same categories
  const relatedTools = allTools
    .filter(t => 
      t.id !== toolId && // Not the same tool
      t.categoryIds.some(cat => tool.categoryIds.includes(cat)) // Same category
    )
    .sort((a, b) => b.popularity - a.popularity) // Sort by popularity
    .slice(0, limit);
    
  return relatedTools;
};

// Function to get recommended tools for a user based on favorites
export const recommendToolsForUser = (userId: string, limit: number = 4): Tool[] => {
  const user = users.find(u => u.id === userId);
  if (!user || user.favoriteToolIds.length === 0) {
    // If no user or no favorites, return popular tools
    return allTools
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit);
  }
  
  // Get categories from user's favorite tools
  const favoriteTools = allTools.filter(tool => user.favoriteToolIds.includes(tool.id));
  const favoriteCategories = Array.from(
    new Set(favoriteTools.flatMap(tool => tool.categoryIds))
  );
  
  // Find tools in those categories that user hasn't favorited yet
  const recommendations = allTools
    .filter(tool => 
      !user.favoriteToolIds.includes(tool.id) && // Not already favorited
      tool.categoryIds.some(cat => favoriteCategories.includes(cat)) // In favorite categories
    )
    .sort((a, b) => b.popularity - a.popularity) // Sort by popularity
    .slice(0, limit);
    
  return recommendations;
};
