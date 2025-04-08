
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

export const tools: Tool[] = [
  // Email Tools
  {
    id: "hoppycopy",
    name: "HoppyCopy",
    description: "AI-powered email copywriting tool that helps you create compelling email content for marketing campaigns, newsletters, and outreach.",
    shortDescription: "AI-powered email copywriting",
    useCase: "Email marketing, copywriting, sales outreach",
    pricing: "Paid",
    website: "https://www.hoppycopy.co/",
    documentation: "https://help.hoppycopy.co/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["email"],
    featured: true,
    popularity: 88,
    releaseDate: "2020-05-12"
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    description: "Email & SMS marketing automation platform designed specifically for ecommerce brands, featuring AI-driven segmentation and personalization.",
    shortDescription: "Email & SMS marketing automation",
    useCase: "Ecommerce marketing, customer retention, automated campaigns",
    pricing: "Freemium",
    website: "https://www.klaviyo.com/",
    documentation: "https://help.klaviyo.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["email", "automation"],
    featured: true,
    popularity: 92,
    releaseDate: "2012-08-15"
  },
  {
    id: "mailerlite",
    name: "Mailerlite",
    description: "Simple yet powerful email marketing platform with drag-and-drop editor, automation workflows, and AI-assisted content suggestions.",
    shortDescription: "Simple email marketing platform",
    useCase: "Newsletter creation, email automation, subscriber management",
    pricing: "Freemium",
    website: "https://www.mailerlite.com/",
    documentation: "https://www.mailerlite.com/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["email"],
    featured: false,
    popularity: 85,
    releaseDate: "2010-09-22"
  },
  {
    id: "getresponse",
    name: "GetResponse",
    description: "All-in-one email marketing tool featuring landing pages, automated funnels, webinars, and AI-powered optimization.",
    shortDescription: "All-in-one email marketing tool",
    useCase: "Email campaigns, marketing automation, sales funnels",
    pricing: "Paid",
    website: "https://www.getresponse.com/",
    documentation: "https://www.getresponse.com/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["email", "marketing"],
    featured: false,
    popularity: 86,
    releaseDate: "1998-06-30"
  },
  {
    id: "beehiiv-ai",
    name: "Beehiiv AI",
    description: "Newsletter platform designed for growth and monetization, featuring AI-powered content suggestions and audience analytics.",
    shortDescription: "Newsletter growth & monetization",
    useCase: "Newsletter publishing, audience growth, content monetization",
    pricing: "Freemium",
    website: "https://www.beehiiv.com/",
    documentation: "https://beehiiv.com/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["email", "writing-seo"],
    featured: true,
    popularity: 89,
    releaseDate: "2021-03-08"
  },
  
  // E-commerce Tools
  {
    id: "magic-shopify",
    name: "Magic by Shopify",
    description: "Suite of AI tools developed by Shopify to help sellers create product descriptions, respond to customer queries, and optimize their stores.",
    shortDescription: "AI tools by Shopify for sellers",
    useCase: "Product listing optimization, customer support, content creation",
    pricing: "Freemium",
    website: "https://www.shopify.com/magic",
    documentation: "https://help.shopify.com/en/manual/shopify-magic",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ecommerce", "ai-useful"],
    featured: true,
    popularity: 91,
    releaseDate: "2023-06-22"
  },
  {
    id: "echowin-ai-ecommerce",
    name: "Echowin AI",
    description: "AI-powered system that automates customer interactions through voice and chat for e-commerce businesses, handling order status, returns, and inquiries.",
    shortDescription: "AI for customer interaction automation",
    useCase: "Customer service automation, order processing, support",
    pricing: "Paid",
    website: "https://www.echowin.ai/",
    documentation: "https://docs.echowin.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ecommerce", "customer-support"],
    featured: false,
    popularity: 85,
    releaseDate: "2022-02-15"
  },
  {
    id: "pokecut",
    name: "Pokecut",
    description: "AI image background remover specifically designed for product images, helping e-commerce sellers create clean, professional product photos.",
    shortDescription: "AI image background remover for product images",
    useCase: "Product photography, image editing, marketplace listings",
    pricing: "Freemium",
    website: "https://www.pokecut.com/",
    documentation: "https://www.pokecut.com/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ecommerce", "image-editing"],
    featured: false,
    popularity: 83,
    releaseDate: "2021-11-03"
  },
  {
    id: "free-ai-chatbot-builder",
    name: "Free AI Chatbot Builder",
    description: "No-code platform for creating AI-powered chatbots for e-commerce websites, helping with sales, support, and customer engagement.",
    shortDescription: "No-code chatbot creation tool",
    useCase: "Customer support, lead generation, sales assistance",
    pricing: "Free",
    website: "https://www.chatbot.com/free-ai-chatbot/",
    documentation: "https://help.chatbot.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ecommerce", "chatbots", "no-code"],
    featured: false,
    popularity: 82,
    releaseDate: "2022-08-17"
  },
  {
    id: "namelix",
    name: "Namelix",
    description: "AI business name generator that creates short, brandable names for e-commerce stores and other businesses using machine learning algorithms.",
    shortDescription: "AI business name generator",
    useCase: "Brand creation, business naming, domain finding",
    pricing: "Free",
    website: "https://namelix.com/",
    documentation: "https://namelix.com/app/how-it-works",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ecommerce", "business"],
    featured: false,
    popularity: 84,
    releaseDate: "2019-05-20"
  },
  
  // Dating & Relationships Tools
  {
    id: "roast-dating",
    name: "Roast Dating",
    description: "Fun AI tool that provides personalized feedback on dating profiles, helping users improve their photos, bios, and overall dating app presence.",
    shortDescription: "Fun dating profile feedback",
    useCase: "Dating profile optimization, photo selection, bio writing",
    pricing: "Freemium",
    website: "https://roast.dating/",
    documentation: "https://help.roast.dating/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["dating-relationships"],
    featured: true,
    popularity: 87,
    releaseDate: "2021-07-14"
  },
  {
    id: "wingman-ai",
    name: "Wingman",
    description: "AI-powered dating assistant that helps users craft better messages, suggests conversation starters, and provides real-time advice during chats.",
    shortDescription: "AI-powered dating assistant",
    useCase: "Conversation improvement, message crafting, dating advice",
    pricing: "Paid",
    website: "https://wingman.ai/",
    documentation: "https://support.wingman.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["dating-relationships", "ai-chat"],
    featured: false,
    popularity: 84,
    releaseDate: "2022-02-10"
  },
  {
    id: "lovegpt",
    name: "LoveGPT",
    description: "AI-based romantic chat assistant designed to help users practice flirting, craft romantic messages, and improve their dating communication skills.",
    shortDescription: "AI-based romantic chat assistant",
    useCase: "Romantic message writing, flirting practice, relationship communication",
    pricing: "Freemium",
    website: "https://lovegpt.ai/",
    documentation: "https://lovegpt.ai/guide",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["dating-relationships", "ai-characters"],
    featured: false,
    popularity: 83,
    releaseDate: "2023-02-14"
  },
  {
    id: "texts-from-my-ex",
    name: "Texts from My Ex",
    description: "Curated database of breakup and relationship texts with AI analysis to help users understand communication patterns in relationships.",
    shortDescription: "Curated breakup text database",
    useCase: "Relationship advice, communication analysis, breakup support",
    pricing: "Free",
    website: "https://textsfromyourex.com/",
    documentation: "https://textsfromyourex.com/about",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["dating-relationships"],
    featured: false,
    popularity: 78,
    releaseDate: "2020-11-22"
  },
  {
    id: "realfake",
    name: "RealFake",
    description: "AI-generated relationship simulations that help users practice difficult conversations, conflict resolution, and emotional intelligence in relationships.",
    shortDescription: "AI-generated relationship simulations",
    useCase: "Relationship skills practice, conflict resolution, communication improvement",
    pricing: "Paid",
    website: "https://realfake.io/",
    documentation: "https://realfake.io/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["dating-relationships", "ai-characters"],
    featured: false,
    popularity: 80,
    releaseDate: "2022-09-05"
  },
  
  // Data & Analytics Tools
  {
    id: "databricks",
    name: "Databricks",
    description: "Unified data analytics platform that combines data engineering, science, and business analytics with AI capabilities for large-scale data processing.",
    shortDescription: "Unified data analytics platform",
    useCase: "Big data processing, machine learning, business intelligence",
    pricing: "Paid",
    website: "https://www.databricks.com/",
    documentation: "https://docs.databricks.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data-analytics"],
    featured: true,
    popularity: 93,
    releaseDate: "2013-06-30"
  },
  {
    id: "kaggle",
    name: "Kaggle",
    description: "Platform for data science competitions, datasets, and notebooks with AI tools for analysis and collaboration among data scientists.",
    shortDescription: "Data science competitions & datasets",
    useCase: "Data analysis, machine learning practice, model development",
    pricing: "Free",
    website: "https://www.kaggle.com/",
    documentation: "https://www.kaggle.com/docs",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data-analytics", "research-science"],
    featured: true,
    popularity: 91,
    releaseDate: "2010-04-01"
  },
  {
    id: "censius",
    name: "Censius",
    description: "AI observability platform that monitors ML models in production, detects issues, and provides insights for model improvement and maintenance.",
    shortDescription: "AI observability platform",
    useCase: "ML model monitoring, AI performance tracking, data drift detection",
    pricing: "Freemium",
    website: "https://www.censius.ai/",
    documentation: "https://docs.censius.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data-analytics", "developer-tools"],
    featured: false,
    popularity: 84,
    releaseDate: "2021-03-18"
  },
  {
    id: "arttheble-ai",
    name: "Arttheble AI",
    description: "AI-powered data visualization tool that automatically generates interactive charts, graphs, and dashboards from raw data with minimal configuration.",
    shortDescription: "AI for data visualization",
    useCase: "Business reporting, data presentation, insight generation",
    pricing: "Paid",
    website: "https://www.arttheble.ai/",
    documentation: "https://help.arttheble.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data-analytics", "business"],
    featured: false,
    popularity: 82,
    releaseDate: "2022-07-12"
  },
  {
    id: "tability",
    name: "Tability",
    description: "Goal tracking and OKR (Objectives and Key Results) tool with AI insights to help teams track progress and align on strategic objectives.",
    shortDescription: "Goal tracking & OKR tool",
    useCase: "Performance management, team alignment, strategic planning",
    pricing: "Freemium",
    website: "https://www.tability.io/",
    documentation: "https://help.tability.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["data-analytics", "business"],
    featured: false,
    popularity: 81,
    releaseDate: "2019-10-15"
  },
  
  // Customer Support Tools
  {
    id: "echowin-ai-support",
    name: "Echowin AI",
    description: "AI system that answers customer calls using natural language processing, handling common queries and routing complex issues to human agents.",
    shortDescription: "AI answering customer calls",
    useCase: "Call center automation, customer inquiry handling, support triage",
    pricing: "Paid",
    website: "https://www.echowin.ai/",
    documentation: "https://docs.echowin.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["customer-support", "ai-useful"],
    featured: true,
    popularity: 88,
    releaseDate: "2022-02-15"
  },
  {
    id: "luma-ai-support",
    name: "Luma AI",
    description: "AI platform for customer query management that automatically categorizes, prioritizes, and routes customer inquiries to the right team members.",
    shortDescription: "AI for customer query management",
    useCase: "Support ticket management, query prioritization, customer communication",
    pricing: "Paid",
    website: "https://luma.ai/support",
    documentation: "https://docs.luma.ai/support",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["customer-support"],
    featured: false,
    popularity: 85,
    releaseDate: "2021-09-14"
  },
  {
    id: "salesforce-einstein",
    name: "Salesforce Einstein",
    description: "AI-powered CRM assistant that provides predictive insights, automates routine tasks, and helps support agents deliver better customer service.",
    shortDescription: "AI-powered CRM assistant",
    useCase: "Customer relationship management, service predictions, case routing",
    pricing: "Paid",
    website: "https://www.salesforce.com/products/einstein/overview/",
    documentation: "https://help.salesforce.com/s/articleView?id=sf.einstein.htm",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["customer-support", "business"],
    featured: true,
    popularity: 90,
    releaseDate: "2016-09-19"
  },
  {
    id: "zendesk-ai",
    name: "Zendesk AI",
    description: "AI-powered solutions for smart ticket resolution, automated responses, and agent assistance within the Zendesk customer support platform.",
    shortDescription: "AI for smart ticket resolution",
    useCase: "Support automation, agent augmentation, customer self-service",
    pricing: "Paid",
    website: "https://www.zendesk.com/service/answer-bot/",
    documentation: "https://support.zendesk.com/hc/en-us/articles/4408882153498",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["customer-support"],
    featured: false,
    popularity: 87,
    releaseDate: "2017-12-12"
  },
  {
    id: "tidio",
    name: "Tidio",
    description: "Live chat and AI chatbot platform for customer support, featuring automated responses, custom workflows, and integration with multiple channels.",
    shortDescription: "Live chat & AI chatbot for support",
    useCase: "Real-time customer support, lead generation, sales assistance",
    pricing: "Freemium",
    website: "https://www.tidio.com/",
    documentation: "https://help.tidio.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["customer-support", "chatbots"],
    featured: false,
    popularity: 86,
    releaseDate: "2018-05-30"
  },
  
  // 3D Model Tools
  {
    id: "leonardo-ai-3d",
    name: "Leonardo AI",
    description: "AI platform that generates high-quality 3D assets and concept art, helping designers and developers create immersive experiences quickly.",
    shortDescription: "Generate high-quality 3D assets with AI",
    useCase: "Game development, VR/AR content, product visualization",
    pricing: "Freemium",
    website: "https://leonardo.ai/",
    documentation: "https://docs.leonardo.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model", "image-generators"],
    featured: true,
    popularity: 90,
    releaseDate: "2022-08-17"
  },
  {
    id: "genie-lumalabs",
    name: "Genie by Lumalabs",
    description: "AI tool that instantly converts sketches, images, or text descriptions into detailed 3D models ready for games, AR, or VR applications.",
    shortDescription: "Turn sketches or images into 3D models",
    useCase: "Quick 3D prototyping, concept visualization, game asset creation",
    pricing: "Freemium",
    website: "https://lumalabs.ai/genie",
    documentation: "https://docs.lumalabs.ai/genie",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model"],
    featured: false,
    popularity: 86,
    releaseDate: "2022-11-30"
  },
  {
    id: "deep-motion",
    name: "Deep Motion",
    description: "AI-powered motion capture technology that transforms video into 3D animations, allowing for character animation without specialized equipment.",
    shortDescription: "Animate characters using AI motion capture",
    useCase: "Character animation, motion design, game development",
    pricing: "Paid",
    website: "https://www.deepmotion.com/",
    documentation: "https://docs.deepmotion.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model", "video-generators"],
    featured: false,
    popularity: 84,
    releaseDate: "2019-05-23"
  },
  {
    id: "interior-ai",
    name: "Interior AI",
    description: "AI visualization tool that helps redesign interior spaces by generating realistic 3D renderings based on room photos and style preferences.",
    shortDescription: "Redesign rooms with AI visualization",
    useCase: "Interior design, real estate staging, renovation planning",
    pricing: "Freemium",
    website: "https://interiorai.com/",
    documentation: "https://help.interiorai.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model", "real-estate"],
    featured: false,
    popularity: 82,
    releaseDate: "2021-10-05"
  },
  {
    id: "getfloorplan",
    name: "GetFloorPlan",
    description: "AI tool that transforms 2D floor plans into interactive 3D models with realistic textures and lighting for real estate and architectural visualization.",
    shortDescription: "Convert 2D floor plans into 3D models",
    useCase: "Real estate marketing, architectural visualization, property development",
    pricing: "Paid",
    website: "https://getfloorplan.com/",
    documentation: "https://support.getfloorplan.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model", "real-estate"],
    featured: false,
    popularity: 80,
    releaseDate: "2018-11-12"
  },
  {
    id: "ai-town",
    name: "AI Town",
    description: "Platform for creating AI-driven NPCs in custom virtual town simulations, enabling interactive storytelling and game world building.",
    shortDescription: "Create AI-driven NPCs in virtual towns",
    useCase: "Game development, interactive storytelling, virtual worlds",
    pricing: "Freemium",
    website: "https://www.ai-town.com/",
    documentation: "https://docs.ai-town.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["3d-model", "games"],
    featured: false,
    popularity: 78,
    releaseDate: "2022-03-18"
  },
  
  // AI Agents
  {
    id: "autogpt",
    name: "AutoGPT",
    description: "Open-source autonomous AI agent that can chain together LLM calls to accomplish complex tasks with minimal human intervention.",
    shortDescription: "Autonomous AI agent for complex tasks",
    useCase: "Research, content creation, data analysis, autonomous task completion",
    pricing: "Free",
    website: "https://github.com/Significant-Gravitas/Auto-GPT",
    documentation: "https://docs.agpt.co/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-agents", "automation"],
    featured: true,
    popularity: 92,
    releaseDate: "2023-04-01"
  },
  {
    id: "stoom",
    name: "Stoom",
    description: "AI bot creation platform that enables users to build and deploy automated agents for web browsing, data collection, and task automation.",
    shortDescription: "Create and deploy AI bots for web automation",
    useCase: "Web scraping, data collection, process automation",
    pricing: "Freemium",
    website: "https://stoom.ai/",
    documentation: "https://help.stoom.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-agents", "automation"],
    featured: false,
    popularity: 85,
    releaseDate: "2022-09-10"
  },
  {
    id: "replit-agent",
    name: "Replit Agent",
    description: "AI-powered coding assistant that helps developers write, debug, and understand code directly within the Replit development environment.",
    shortDescription: "AI assistant for coding in Replit",
    useCase: "Code development, debugging, learning to code",
    pricing: "Freemium",
    website: "https://replit.com/ai",
    documentation: "https://docs.replit.com/ai",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-agents", "assistant-code"],
    featured: true,
    popularity: 88,
    releaseDate: "2023-05-25"
  },
  {
    id: "manus-ai",
    name: "Manus AI Agent",
    description: "AI-powered robotic hand control system that enables natural interaction with physical objects using computer vision and reinforcement learning.",
    shortDescription: "AI-powered robotic hand control",
    useCase: "Robotics, manufacturing automation, research",
    pricing: "Paid",
    website: "https://manus.ai/",
    documentation: "https://docs.manus.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-agents", "robots-devices"],
    featured: false,
    popularity: 81,
    releaseDate: "2021-08-15"
  },
  {
    id: "ai-dungeon",
    name: "AI Dungeon",
    description: "Interactive fiction game powered by AI that creates endless adventure scenarios and responds to player actions in natural language.",
    shortDescription: "AI-driven interactive fiction adventures",
    useCase: "Gaming, storytelling, creative writing",
    pricing: "Freemium",
    website: "https://play.aidungeon.io/",
    documentation: "https://help.aidungeon.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-agents", "games", "storytelling"],
    featured: false,
    popularity: 86,
    releaseDate: "2019-12-05"
  },
  
  // AI Characters
  {
    id: "character-ai",
    name: "Character AI",
    description: "Platform for creating and chatting with AI-powered characters across various styles, personas, and themes, offering realistic conversations.",
    shortDescription: "Chat with custom AI personas",
    useCase: "Entertainment, roleplay, storytelling, customer service",
    pricing: "Freemium",
    website: "https://character.ai/",
    documentation: "https://support.character.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-characters", "ai-chat"],
    featured: true,
    popularity: 92,
    releaseDate: "2022-09-20"
  },
  {
    id: "janitor-ai",
    name: "Janitor AI",
    description: "NSFW AI character interaction tool that allows users to create and engage with AI personalities that have distinct traits and characteristics.",
    shortDescription: "NSFW AI character interaction tool",
    useCase: "Adult entertainment, roleplay, character simulation",
    pricing: "Freemium",
    website: "https://janitorai.com/",
    documentation: "https://help.janitorai.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-characters"],
    featured: false,
    popularity: 83,
    releaseDate: "2022-11-18"
  },
  {
    id: "polybuzz",
    name: "PolyBuzz",
    description: "AI character and avatar creation platform focused on entertainment and media applications, enabling interactive virtual personalities.",
    shortDescription: "AI characters for entertainment media",
    useCase: "Media production, virtual influencers, content creation",
    pricing: "Paid",
    website: "https://polybuzz.ai/",
    documentation: "https://docs.polybuzz.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-characters", "avatars"],
    featured: false,
    popularity: 80,
    releaseDate: "2021-06-30"
  },
  {
    id: "museland-ai",
    name: "Museland AI",
    description: "AI-powered character platform focused on music and creativity, allowing users to interact with virtual musicians and music-oriented personalities.",
    shortDescription: "AI characters focused on music and creativity",
    useCase: "Music creation, entertainment, educational content",
    pricing: "Freemium",
    website: "https://museland.ai/",
    documentation: "https://help.museland.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-characters", "music"],
    featured: false,
    popularity: 79,
    releaseDate: "2022-08-12"
  },
  {
    id: "chai-ai",
    name: "CHAI AI",
    description: "Social platform where users can create, share, and chat with AI characters in a community setting, featuring a wide range of personalities.",
    shortDescription: "Chat with user-created AI characters",
    useCase: "Social interaction, entertainment, chatbot creation",
    pricing: "Freemium",
    website: "https://chai.ai/",
    documentation: "https://help.chai.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-characters", "social-networks"],
    featured: false,
    popularity: 84,
    releaseDate: "2021-10-11"
  },
  
  // AI Detection Tools
  {
    id: "facecheck-id",
    name: "FaceCheck ID",
    description: "AI-powered face recognition tool that helps identify people in images and videos, offering security and verification applications.",
    shortDescription: "Identify people using AI face recognition",
    useCase: "Identity verification, security, photo organization",
    pricing: "Freemium",
    website: "https://facecheck.id/",
    documentation: "https://help.facecheck.id/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-detection"],
    featured: true,
    popularity: 85,
    releaseDate: "2021-03-17"
  },
  {
    id: "pimeyes",
    name: "PimEyes",
    description: "Advanced face search engine that uses AI to find faces across the internet, helping users discover where their images appear online.",
    shortDescription: "Reverse image search for human faces",
    useCase: "Online privacy monitoring, identity protection, image tracking",
    pricing: "Paid",
    website: "https://pimeyes.com/",
    documentation: "https://pimeyes.com/en/faq",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-detection", "search-engine"],
    featured: false,
    popularity: 83,
    releaseDate: "2017-11-25"
  },
  {
    id: "freeface-search",
    name: "FreeFace Search Online",
    description: "Open-source face search tool that allows users to match faces across image databases for identity verification purposes.",
    shortDescription: "Open-source face search for identity matching",
    useCase: "Identity verification, security applications, research",
    pricing: "Free",
    website: "https://freefacesearch.com/",
    documentation: "https://docs.freefacesearch.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-detection"],
    featured: false,
    popularity: 78,
    releaseDate: "2020-09-05"
  },
  {
    id: "originality-ai",
    name: "Originality AI",
    description: "AI content detection tool that identifies AI-generated text and plagiarism with high accuracy, helping maintain content authenticity.",
    shortDescription: "Detect AI-generated and plagiarized content",
    useCase: "Academic integrity, content publishing, editorial review",
    pricing: "Paid",
    website: "https://originality.ai/",
    documentation: "https://help.originality.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-detection", "writing-seo"],
    featured: true,
    popularity: 88,
    releaseDate: "2022-12-15"
  },
  {
    id: "gpt-zero",
    name: "GPT Zero",
    description: "Free tool that helps determine if a text was written by AI or a human by analyzing language patterns and complexity markers.",
    shortDescription: "Determine if text is written by AI or human",
    useCase: "Education, publishing, content verification",
    pricing: "Free",
    website: "https://gptzero.me/",
    documentation: "https://gptzero.me/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["ai-detection"],
    featured: false,
    popularity: 86,
    releaseDate: "2023-01-05"
  },
  
  // Assistive Technology Tools
  {
    id: "goblintools",
    name: "GoblinTOOLS",
    description: "Collection of AI tools designed specifically for neurodivergent individuals to help with productivity, planning, and organization.",
    shortDescription: "AI tools for neurodivergent productivity",
    useCase: "ADHD management, executive functioning, productivity",
    pricing: "Freemium",
    website: "https://goblintools.io/",
    documentation: "https://help.goblintools.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistive-tech", "productivity"],
    featured: true,
    popularity: 84,
    releaseDate: "2021-07-15"
  },
  {
    id: "woebot-health",
    name: "Woebot Health",
    description: "Mental health chatbot that uses AI to provide therapy-inspired conversations, mood tracking, and emotional support techniques.",
    shortDescription: "Mental health chatbot for therapy and support",
    useCase: "Mental health management, anxiety reduction, mood tracking",
    pricing: "Freemium",
    website: "https://woebothealth.com/",
    documentation: "https://woebothealth.com/faq/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistive-tech", "healthcare"],
    featured: false,
    popularity: 87,
    releaseDate: "2017-06-20"
  },
  {
    id: "allinone-accessibility",
    name: "AllInOne Accessibility",
    description: "One-click AI widget that makes websites more accessible to people with disabilities by adding features like screen reading, color contrast, and focus aids.",
    shortDescription: "One-click AI accessibility widget for websites",
    useCase: "Web accessibility, disability accommodation, compliance",
    pricing: "Paid",
    website: "https://allinoneaccessibility.com/",
    documentation: "https://help.allinoneaccessibility.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistive-tech", "websites-design"],
    featured: false,
    popularity: 82,
    releaseDate: "2020-05-10"
  },
  {
    id: "atom-limbs",
    name: "Atom Limbs",
    description: "AI-powered bionic limbs that use machine learning to provide natural movement and sensation for amputees and people with mobility challenges.",
    shortDescription: "AI-powered bionic limbs for mobility",
    useCase: "Prosthetics, mobility assistance, rehabilitation",
    pricing: "Paid",
    website: "https://atomlimbs.com/",
    documentation: "https://support.atomlimbs.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistive-tech", "healthcare"],
    featured: true,
    popularity: 89,
    releaseDate: "2019-11-28"
  },
  {
    id: "elevenlabs-reader",
    name: "ElevenLabs Reader",
    description: "AI-driven voice reader that converts text to natural-sounding speech, helping those with visual impairments or reading difficulties access written content.",
    shortDescription: "AI-driven voice reader for accessibility",
    useCase: "Text-to-speech, accessibility, content consumption",
    pricing: "Freemium",
    website: "https://elevenlabs.io/reader",
    documentation: "https://help.elevenlabs.io/reader",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["assistive-tech", "text-to-speech"],
    featured: false,
    popularity: 86,
    releaseDate: "2022-03-22"
  },
  
  // Avatars Tools
  {
    id: "heygen-ai",
    name: "HeyGen AI",
    description: "Platform for creating realistic AI video avatars that speak in multiple languages, perfect for marketing, training, and personalized communication.",
    shortDescription: "Create realistic talking video avatars",
    useCase: "Video marketing, training materials, personalized messages",
    pricing: "Paid",
    website: "https://www.heygen.com/",
    documentation: "https://help.heygen.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["avatars", "video-generators"],
    featured: true,
    popularity: 91,
    releaseDate: "2022-01-25"
  },
  {
    id: "elai",
    name: "Elai",
    description: "AI video generation platform that transforms text scripts into professional videos with realistic digital avatars, requiring no technical skills.",
    shortDescription: "Turn scripts into AI avatar videos",
    useCase: "Video production, educational content, marketing",
    pricing: "Paid",
    website: "https://elai.io/",
    documentation: "https://help.elai.io/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["avatars", "video-generators"],
    featured: false,
    popularity: 85,
    releaseDate: "2021-04-18"
  },
  {
    id: "krea-ai",
    name: "Krea AI",
    description: "AI design tool that generates custom avatars, illustrations, and design assets based on text prompts and visual references.",
    shortDescription: "Generate design assets and avatars",
    useCase: "Graphic design, social media content, branding",
    pricing: "Freemium",
    website: "https://www.krea.ai/",
    documentation: "https://docs.krea.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["avatars", "image-generators"],
    featured: false,
    popularity: 83,
    releaseDate: "2022-07-20"
  },
  {
    id: "humata",
    name: "Humata",
    description: "AI avatars that can analyze, summarize, and explain complex documents, turning PDFs into interactive chatbots that answer questions about the content.",
    shortDescription: "AI avatars that analyze PDFs",
    useCase: "Document analysis, research, study assistance",
    pricing: "Freemium",
    website: "https://www.humata.ai/",
    documentation: "https://help.humata.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["avatars", "summarizer"],
    featured: false,
    popularity: 84,
    releaseDate: "2022-11-10"
  },
  {
    id: "vidnoz-ai",
    name: "Vidnoz AI",
    description: "AI avatar video creation platform featuring facial animation, lip-syncing, and diverse virtual characters for various business applications.",
    shortDescription: "Create avatar videos with facial animation",
    useCase: "Video production, marketing, training, explainer videos",
    pricing: "Freemium",
    website: "https://www.vidnoz.com/",
    documentation: "https://support.vidnoz.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["avatars", "video-generators"],
    featured: false,
    popularity: 82,
    releaseDate: "2021-09-15"
  },
  
  // Chatbots Tools
  {
    id: "chatsonic",
    name: "Chatsonic",
    description: "Conversational AI similar to ChatGPT but with internet access and current information, capable of generating text, images, and code.",
    shortDescription: "Conversational AI with internet access",
    useCase: "Content creation, research, programming assistance",
    pricing: "Freemium",
    website: "https://writesonic.com/chat",
    documentation: "https://help.writesonic.com/en/collections/3803170-chatsonic",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["chatbots", "ai-chat"],
    featured: true,
    popularity: 88,
    releaseDate: "2022-12-15"
  },
  {
    id: "fraintext",
    name: "Fraintext",
    description: "Customer support chatbot trained on your specific data and documents, providing accurate answers to customer inquiries based on your content.",
    shortDescription: "Customer support chatbot trained on your data",
    useCase: "Customer support, knowledge base, FAQs",
    pricing: "Paid",
    website: "https://fraintext.com/",
    documentation: "https://docs.fraintext.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["chatbots", "customer-support"],
    featured: false,
    popularity: 83,
    releaseDate: "2021-08-22"
  },
  {
    id: "dataskrive",
    name: "DataSkrive",
    description: "Automated content generation platform specializing in sports and fantasy sports content, using AI to create engaging and data-driven narratives.",
    shortDescription: "Automated content generation for sports",
    useCase: "Sports media, fantasy sports, automated journalism",
    pricing: "Paid",
    website: "https://dataskrive.com/",
    documentation: "https://help.dataskrive.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["chatbots", "text-generators"],
    featured: false,
    popularity: 81,
    releaseDate: "2018-05-15"
  },
  {
    id: "pioneergpt",
    name: "PioneerGPT",
    description: "AI chatbot specifically designed for entrepreneurs and startups, offering business advice, strategy suggestions, and founder-focused guidance.",
    shortDescription: "AI chatbot for entrepreneurs and startups",
    useCase: "Business planning, startup advice, entrepreneurship",
    pricing: "Freemium",
    website: "https://pioneergpt.com/",
    documentation: "https://help.pioneergpt.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["chatbots", "business"],
    featured: false,
    popularity: 80,
    releaseDate: "2023-02-10"
  },
  {
    id: "faraday-dev",
    name: "Faraday.dev",
    description: "Developer-focused chatbot assistant that helps with code understanding, documentation navigation, and technical problem solving.",
    shortDescription: "Dev-focused chatbot assistant",
    useCase: "Programming help, code explanation, documentation",
    pricing: "Freemium",
    website: "https://faraday.dev/",
    documentation: "https://docs.faraday.dev/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["chatbots", "assistant-code"],
    featured: false,
    popularity: 84,
    releaseDate: "2022-08-05"
  },
  
  // Business Tools
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "Suite of AI tools integrated into Canva's design platform, including Magic Write for text generation and Magic Design for automated layouts.",
    shortDescription: "AI tools inside Canva for design and copy",
    useCase: "Graphic design, content creation, marketing materials",
    pricing: "Freemium",
    website: "https://www.canva.com/ai-image-generator/",
    documentation: "https://www.canva.com/help/ai-features/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "websites-design"],
    featured: true,
    popularity: 92,
    releaseDate: "2022-11-09"
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    description: "AI tool that allows users to ask questions and get answers from any PDF file, making document analysis and information extraction easy.",
    shortDescription: "Ask questions and get answers from PDFs",
    useCase: "Document analysis, research, study, legal review",
    pricing: "Freemium",
    website: "https://www.chatpdf.com/",
    documentation: "https://help.chatpdf.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "productivity"],
    featured: true,
    popularity: 90,
    releaseDate: "2023-03-20"
  },
  {
    id: "durable-ai",
    name: "Durable AI",
    description: "AI-powered website builder that can create complete business websites in under a minute based on text prompts and industry specifications.",
    shortDescription: "Build business websites in under a minute",
    useCase: "Website creation, small business marketing, personal branding",
    pricing: "Paid",
    website: "https://durable.co/",
    documentation: "https://help.durable.co/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "websites-design"],
    featured: false,
    popularity: 87,
    releaseDate: "2022-07-15"
  },
  {
    id: "semrush-social-ai",
    name: "Semrush Social AI",
    description: "AI-powered content generation tool specifically designed for social media, helping businesses create engaging posts based on their brand voice.",
    shortDescription: "AI-powered social media content generation",
    useCase: "Social media marketing, content creation, brand engagement",
    pricing: "Paid",
    website: "https://www.semrush.com/social-media-poster/",
    documentation: "https://www.semrush.com/kb/social-media-poster/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "social-networks"],
    featured: false,
    popularity: 85,
    releaseDate: "2022-02-18"
  },
  {
    id: "tome-ai",
    name: "Tome AI",
    description: "AI-powered storytelling tool that helps create professional-looking presentations and pitch decks with minimal effort using text prompts.",
    shortDescription: "AI tool for pitch decks and storytelling",
    useCase: "Presentations, pitch decks, visual storytelling",
    pricing: "Freemium",
    website: "https://tome.app/",
    documentation: "https://help.tome.app/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["business", "presentation"],
    featured: false,
    popularity: 86,
    releaseDate: "2021-11-30"
  },
  
  // Audio Editing Tools
  {
    id: "llama-audio",
    name: "Llama",
    description: "Lightweight AI model for fast, resource-efficient voice editing and audio manipulation with minimal computing requirements.",
    shortDescription: "Lightweight model for fast voice editing",
    useCase: "Audio production, voice editing, podcast creation",
    pricing: "Freemium",
    website: "https://llama.audio/",
    documentation: "https://docs.llama.audio/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["audio-editing"],
    featured: true,
    popularity: 84,
    releaseDate: "2022-09-15"
  },
  {
    id: "audiobox-meta",
    name: "AudioBox by Meta",
    description: "AI tool that can generate custom sound effects, music, and voices based on text prompts, ideal for content creators and producers.",
    shortDescription: "Generate sound effects from text prompts",
    useCase: "Sound design, content creation, game development",
    pricing: "Free",
    website: "https://audiobox.meta.com/",
    documentation: "https://help.audiobox.meta.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["audio-editing", "music"],
    featured: true,
    popularity: 88,
    releaseDate: "2023-06-22"
  },
  {
    id: "adobe-podcast",
    name: "Adobe Podcast",
    description: "AI-powered audio editing tool that enhances voice recordings by removing background noise, echo, and improving overall sound quality.",
    shortDescription: "Enhance voice recordings using AI cleaning",
    useCase: "Podcast production, voice recording, audio cleanup",
    pricing: "Freemium",
    website: "https://podcast.adobe.com/",
    documentation: "https://helpx.adobe.com/adobe-podcast.html",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["audio-editing", "transcriber"],
    featured: false,
    popularity: 86,
    releaseDate: "2022-04-12"
  },
  {
    id: "voiceerry-ai",
    name: "Voiceerry.ai",
    description: "AI-powered voiceover generator and audio editor that creates natural-sounding voice narrations in multiple languages and styles.",
    shortDescription: "AI-powered voiceover generator and editor",
    useCase: "Video narration, e-learning, IVR systems",
    pricing: "Paid",
    website: "https://voiceerry.ai/",
    documentation: "https://help.voiceerry.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["audio-editing", "text-to-speech"],
    featured: false,
    popularity: 83,
    releaseDate: "2021-10-08"
  },
  {
    id: "jammable",
    name: "Jammable",
    description: "AI music tool that allows musicians to jam in real-time with AI companions that adapt to playing style and musical preferences.",
    shortDescription: "AI music tool for real-time jam sessions",
    useCase: "Music creation, practice, entertainment",
    pricing: "Freemium",
    website: "https://jammable.app/",
    documentation: "https://support.jammable.app/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["audio-editing", "music"],
    featured: false,
    popularity: 80,
    releaseDate: "2022-08-30"
  },
  
  // Automation Tools
  {
    id: "make",
    name: "Make",
    description: "Visual workflow automation platform connecting apps and services with thousands of integrations and AI-powered workflow suggestions.",
    shortDescription: "Visual workflow automation with integrations",
    useCase: "Business process automation, data integration, workflow design",
    pricing: "Freemium",
    website: "https://www.make.com/",
    documentation: "https://www.make.com/en/help",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["automation"],
    featured: true,
    popularity: 89,
    releaseDate: "2019-02-14"
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Market-leading workflow automation platform that connects 5,000+ apps, featuring AI-powered automation suggestions and workflow optimization.",
    shortDescription: "Connect apps and automate workflows",
    useCase: "Task automation, data transfer, process streamlining",
    pricing: "Freemium",
    website: "https://zapier.com/",
    documentation: "https://help.zapier.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["automation", "no-code"],
    featured: true,
    popularity: 92,
    releaseDate: "2011-06-01"
  },
  {
    id: "instantly-ai",
    name: "Instantly.ai",
    description: "AI tool specializing in cold email outreach automation and lead generation with personalization capabilities and performance analytics.",
    shortDescription: "AI tool for cold email outreach",
    useCase: "Sales outreach, lead generation, email marketing",
    pricing: "Paid",
    website: "https://instantly.ai/",
    documentation: "https://help.instantly.ai/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["automation", "email"],
    featured: false,
    popularity: 85,
    releaseDate: "2020-09-22"
  },
  {
    id: "jobotpilot",
    name: "Jobotpilot",
    description: "AI assistant that automates job applications, creates tailored resumes, and helps prepare for interviews using applicant's background information.",
    shortDescription: "AI assistant for job applications",
    useCase: "Job seeking, resume creation, interview preparation",
    pricing: "Freemium",
    website: "https://jobotpilot.com/",
    documentation: "https://help.jobotpilot.com/",
    imageUrl: "/placeholder.svg",
    logoUrl: "/placeholder.svg",
    categoryIds: ["automation", "productivity"],
    featured: false,
    popularity: 82,
    releaseDate: "2022-03-15"
  }
];

// Helper functions for working with the data
export const allTools = tools;

export const getFeaturedTools = (count: number = 6): Tool[] => {
  return tools
    .filter(tool => tool.featured)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, count);
};

export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.categoryIds.includes(categoryId));
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const searchTools = (filters: SearchFilters): Tool[] => {
  let filteredTools = [...tools];
  
  // Filter by search query
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.shortDescription.toLowerCase().includes(query)
    );
  }
  
  // Filter by categories
  if (filters.categories && filters.categories.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.categories.some(categoryId => tool.categoryIds.includes(categoryId))
    );
  }
  
  // Filter by pricing
  if (filters.pricing && filters.pricing.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.pricing.includes(tool.pricing)
    );
  }
  
  // Sort results
  filteredTools = filteredTools.sort((a, b) => {
    if (filters.sortBy === 'popularity') {
      return filters.sortOrder === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity;
    } else if (filters.sortBy === 'releaseDate') {
      return filters.sortOrder === 'asc' 
        ? new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        : new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    } else { // sortBy === 'name'
      return filters.sortOrder === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
  });
  
  return filteredTools;
};
