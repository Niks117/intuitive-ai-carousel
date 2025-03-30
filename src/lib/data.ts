
import { Category, Tool, User } from './types';

export const categories: Category[] = [
  {
    id: "ml",
    name: "Machine Learning",
    description: "Tools and frameworks for building machine learning models",
    icon: "BrainCircuit",
    slug: "machine-learning"
  },
  {
    id: "nlp",
    name: "Natural Language Processing",
    description: "Tools for processing and understanding human language",
    icon: "MessageSquare",
    slug: "nlp"
  },
  {
    id: "cv",
    name: "Computer Vision",
    description: "Tools for image and video analysis",
    icon: "Eye",
    slug: "computer-vision"
  },
  {
    id: "data",
    name: "Data Science & Analytics",
    description: "Tools for data analysis and visualization",
    icon: "BarChart",
    slug: "data-science"
  },
  {
    id: "automation",
    name: "AI-Powered Automation",
    description: "Tools for automating tasks with AI",
    icon: "Cpu",
    slug: "automation"
  },
  {
    id: "speech",
    name: "Speech & Voice Processing",
    description: "Tools for speech recognition and voice synthesis",
    icon: "Mic",
    slug: "speech"
  },
  {
    id: "code",
    name: "AI Code Assistants",
    description: "Tools for helping developers write better code",
    icon: "Code",
    slug: "code-assistants"
  },
  {
    id: "generative",
    name: "Generative AI",
    description: "Tools for generating text, images, and other content",
    icon: "Sparkles",
    slug: "generative-ai"
  },
  {
    id: "business",
    name: "AI for Business",
    description: "AI tools specifically designed for business applications",
    icon: "Briefcase",
    slug: "business"
  },
  {
    id: "robotics",
    name: "Robotics & AI Hardware",
    description: "Tools and platforms for physical AI applications",
    icon: "Bot",
    slug: "robotics"
  }
];

export const tools: Tool[] = [
  // Machine Learning
  {
    id: "tensorflow",
    name: "TensorFlow",
    description: "An end-to-end open-source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications.",
    shortDescription: "Google's powerful open-source ML framework",
    useCase: "Building and deploying machine learning models for various applications",
    pricing: "Free",
    website: "https://www.tensorflow.org/",
    documentation: "https://www.tensorflow.org/learn",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml"],
    featured: true,
    popularity: 95,
    releaseDate: "2015-11-09"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    description: "An open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing. It is primarily developed by Facebook's AI Research lab.",
    shortDescription: "Facebook's flexible deep learning platform",
    useCase: "Research and production deployment of deep learning models",
    pricing: "Free",
    website: "https://pytorch.org/",
    documentation: "https://pytorch.org/docs/stable/index.html",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml"],
    featured: true,
    popularity: 90,
    releaseDate: "2016-10-01"
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    description: "A free software machine learning library for Python. It features various classification, regression and clustering algorithms including support vector machines, random forests, gradient boosting, k-means and DBSCAN.",
    shortDescription: "Simple and efficient tools for data analysis in Python",
    useCase: "Data mining and data analysis for predictive data analysis",
    pricing: "Free",
    website: "https://scikit-learn.org/",
    documentation: "https://scikit-learn.org/stable/documentation.html",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml", "data"],
    featured: false,
    popularity: 85,
    releaseDate: "2007-06-01"
  },
  
  // NLP
  {
    id: "gpt4",
    name: "OpenAI GPT-4",
    description: "GPT-4 is a multimodal large language model created by OpenAI. It's capable of understanding and generating content based on both text and image inputs, with improved reasoning capabilities over previous models.",
    shortDescription: "OpenAI's most advanced large language model",
    useCase: "Content generation, summarization, code assistance, conversation",
    pricing: "Paid",
    website: "https://openai.com/gpt-4",
    documentation: "https://platform.openai.com/docs",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["nlp", "generative"],
    featured: true,
    popularity: 98,
    releaseDate: "2023-03-14"
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "The AI community building the future. Build, train and deploy state of the art models powered by the reference open source in machine learning.",
    shortDescription: "Open source platform for state-of-the-art ML models",
    useCase: "NLP, computer vision, and other ML applications",
    pricing: "Freemium",
    website: "https://huggingface.co/",
    documentation: "https://huggingface.co/docs",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["nlp", "ml"],
    featured: true,
    popularity: 88,
    releaseDate: "2016-05-01"
  },
  
  // Computer Vision
  {
    id: "opencv",
    name: "OpenCV",
    description: "Open Source Computer Vision Library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in commercial products.",
    shortDescription: "Open source computer vision and machine learning library",
    useCase: "Image processing, object detection, facial recognition",
    pricing: "Free",
    website: "https://opencv.org/",
    documentation: "https://docs.opencv.org/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["cv"],
    featured: false,
    popularity: 87,
    releaseDate: "2000-06-01"
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
    categoryIds: ["cv", "generative"],
    featured: true,
    popularity: 92,
    releaseDate: "2023-09-20"
  },
  
  // Data Science
  {
    id: "pandas",
    name: "Pandas",
    description: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.",
    shortDescription: "Python data analysis library",
    useCase: "Data manipulation, analysis, and exploration",
    pricing: "Free",
    website: "https://pandas.pydata.org/",
    documentation: "https://pandas.pydata.org/docs/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data"],
    featured: false,
    popularity: 89,
    releaseDate: "2008-01-01"
  },
  
  // Automation
  {
    id: "zapier",
    name: "Zapier AI",
    description: "Zapier AI brings the power of AI to your automations. It can help you create, customize and manage your Zaps, streamlining your workflow automation tasks.",
    shortDescription: "AI-powered workflow automation",
    useCase: "Business process automation with AI assistance",
    pricing: "Freemium",
    website: "https://zapier.com/ai",
    documentation: "https://help.zapier.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["automation", "business"],
    featured: false,
    popularity: 82,
    releaseDate: "2023-05-01"
  },
  
  // Speech
  {
    id: "whisper",
    name: "OpenAI Whisper",
    description: "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web.",
    shortDescription: "OpenAI's speech recognition system",
    useCase: "Transcription, translation, and voice understanding",
    pricing: "Free",
    website: "https://openai.com/research/whisper",
    documentation: "https://platform.openai.com/docs/guides/speech-to-text",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["speech"],
    featured: false,
    popularity: 86,
    releaseDate: "2022-09-21"
  },
  
  // Code
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
    categoryIds: ["code"],
    featured: true,
    popularity: 94,
    releaseDate: "2021-06-29"
  },
  
  // Generative
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Midjourney is an AI art generator service that creates images from textual descriptions, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion.",
    shortDescription: "Advanced text-to-image AI generator",
    useCase: "Generating artistic images from text prompts",
    pricing: "Paid",
    website: "https://www.midjourney.com/",
    documentation: "https://docs.midjourney.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["generative"],
    featured: true,
    popularity: 93,
    releaseDate: "2022-07-12"
  },
  
  // Business
  {
    id: "jasper",
    name: "Jasper AI",
    description: "Jasper is an AI content platform that helps teams create high-quality content faster. It provides AI-powered writing assistance for marketing, sales, and communication teams.",
    shortDescription: "AI content creation for marketing teams",
    useCase: "Marketing copy, blog posts, social media content",
    pricing: "Paid",
    website: "https://www.jasper.ai/",
    documentation: "https://www.jasper.ai/support",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "generative"],
    featured: false,
    popularity: 84,
    releaseDate: "2021-01-01"
  },
  
  // Robotics
  {
    id: "ros",
    name: "Robot Operating System (ROS)",
    description: "The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.",
    shortDescription: "Flexible framework for robot software development",
    useCase: "Robotics development, autonomous systems",
    pricing: "Free",
    website: "https://www.ros.org/",
    documentation: "https://docs.ros.org/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["robotics"],
    featured: false,
    popularity: 78,
    releaseDate: "2007-11-01"
  },
  
  // Adding more tools to ensure we have at least 10-12 per category
  {
    id: "h2o",
    name: "H2O.ai",
    description: "H2O.ai is an open-source machine learning platform that makes it easier for businesses to build AI applications. It provides capabilities for distributed machine learning on big data.",
    shortDescription: "Open-source machine learning platform",
    useCase: "Enterprise AI, predictive analytics",
    pricing: "Freemium",
    website: "https://h2o.ai/",
    documentation: "https://docs.h2o.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml", "data"],
    featured: false,
    popularity: 75,
    releaseDate: "2011-09-01"
  },
  {
    id: "spacy",
    name: "spaCy",
    description: "spaCy is an open-source software library for advanced natural language processing, written in the programming languages Python and Cython.",
    shortDescription: "Industrial-strength NLP in Python",
    useCase: "Text analysis, named entity recognition, POS tagging",
    pricing: "Free",
    website: "https://spacy.io/",
    documentation: "https://spacy.io/usage",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["nlp"],
    featured: false,
    popularity: 80,
    releaseDate: "2015-01-01"
  }
];

// Let's add 20 more mock tools to have a robust dataset
export const allTools: Tool[] = [
  ...tools,
  // More Machine Learning tools
  {
    id: "mlflow",
    name: "MLflow",
    description: "An open-source platform for the machine learning lifecycle. It tackles four primary functions: Tracking experiments, packaging code into reproducible runs, managing and deploying models, and providing a central model registry.",
    shortDescription: "Platform for ML experiment tracking and model deployment",
    useCase: "Machine learning experiment tracking and model management",
    pricing: "Free",
    website: "https://mlflow.org/",
    documentation: "https://mlflow.org/docs/latest/index.html",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml"],
    featured: false,
    popularity: 77,
    releaseDate: "2018-06-05"
  },
  {
    id: "datarobot",
    name: "DataRobot",
    description: "DataRobot is an AI platform that automates the end-to-end process of building, deploying, and maintaining AI at scale. It helps organizations accelerate AI success.",
    shortDescription: "Enterprise AI platform for automated machine learning",
    useCase: "Automated model development, deployment, and monitoring",
    pricing: "Paid",
    website: "https://www.datarobot.com/",
    documentation: "https://docs.datarobot.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ml", "business"],
    featured: false,
    popularity: 79,
    releaseDate: "2012-01-01"
  },
  
  // More NLP tools
  {
    id: "nltk",
    name: "NLTK",
    description: "The Natural Language Toolkit (NLTK) is a suite of libraries and programs for symbolic and statistical natural language processing (NLP) for English in Python.",
    shortDescription: "Python library for working with human language data",
    useCase: "Text processing, classification, tokenization",
    pricing: "Free",
    website: "https://www.nltk.org/",
    documentation: "https://www.nltk.org/book/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["nlp"],
    featured: false,
    popularity: 76,
    releaseDate: "2001-01-01"
  },
  {
    id: "bert",
    name: "BERT",
    description: "Bidirectional Encoder Representations from Transformers (BERT) is a transformer-based machine learning technique for natural language processing pre-training developed by Google.",
    shortDescription: "Google's transformer-based NLP model",
    useCase: "Text classification, question answering, language understanding",
    pricing: "Free",
    website: "https://github.com/google-research/bert",
    documentation: "https://github.com/google-research/bert",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["nlp"],
    featured: false,
    popularity: 83,
    releaseDate: "2018-10-11"
  },
  
  // More Computer Vision tools
  {
    id: "yolo",
    name: "YOLO",
    description: "You Only Look Once (YOLO) is a state-of-the-art, real-time object detection system. It's extremely fast and accurate for object detection tasks.",
    shortDescription: "Real-time object detection system",
    useCase: "Object detection in images and video streams",
    pricing: "Free",
    website: "https://pjreddie.com/darknet/yolo/",
    documentation: "https://pjreddie.com/darknet/yolo/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["cv"],
    featured: false,
    popularity: 81,
    releaseDate: "2015-06-08"
  },
  {
    id: "detectron2",
    name: "Detectron2",
    description: "Detectron2 is Facebook AI Research's next-generation platform for object detection, segmentation and other visual recognition tasks.",
    shortDescription: "Facebook's platform for visual recognition tasks",
    useCase: "Object detection, image segmentation, pose estimation",
    pricing: "Free",
    website: "https://github.com/facebookresearch/detectron2",
    documentation: "https://detectron2.readthedocs.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["cv"],
    featured: false,
    popularity: 78,
    releaseDate: "2019-10-10"
  },
  
  // More Data Science tools
  {
    id: "numpy",
    name: "NumPy",
    description: "NumPy is the fundamental package for scientific computing in Python. It provides support for arrays, matrices, and many mathematical functions to operate on these data structures.",
    shortDescription: "Fundamental package for scientific computing in Python",
    useCase: "Numerical computations, array manipulation",
    pricing: "Free",
    website: "https://numpy.org/",
    documentation: "https://numpy.org/doc/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data"],
    featured: false,
    popularity: 88,
    releaseDate: "2005-01-01"
  },
  {
    id: "spark",
    name: "Apache Spark",
    description: "Apache Spark is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters.",
    shortDescription: "Unified analytics engine for big data processing",
    useCase: "Large-scale data processing, stream processing, machine learning",
    pricing: "Free",
    website: "https://spark.apache.org/",
    documentation: "https://spark.apache.org/docs/latest/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data"],
    featured: false,
    popularity: 84,
    releaseDate: "2014-05-30"
  }
];

// Mock users for the application
export const users: User[] = [
  {
    id: "user1",
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    favoriteToolIds: ["tensorflow", "gpt4", "copilot"]
  },
  {
    id: "user2",
    name: "Regular User",
    email: "user@example.com",
    isAdmin: false,
    favoriteToolIds: ["midjourney", "whisper"]
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
