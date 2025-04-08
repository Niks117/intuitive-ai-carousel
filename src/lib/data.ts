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
    popularity: 89,
    releaseDate: "2022-04-12"
  }
];

export const allTools = tools;

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

export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.categoryIds.includes(categoryId));
};

export const filterTools = (filters: SearchFilters): Tool[] => {
  let filteredTools = [...tools];
  
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.shortDescription.toLowerCase().includes(query) ||
      tool.useCase.toLowerCase().includes(query)
    );
  }
  
  if (filters.categories.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.categories.some(categoryId => tool.categoryIds.includes(categoryId))
    );
  }
  
  if (filters.pricing.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.pricing.includes(tool.pricing)
    );
  }
  
  filteredTools.sort((a, b) => {
    let comparison = 0;
    
    switch (filters.sortBy) {
      case 'popularity':
        comparison = b.popularity - a.popularity; // Higher popularity first
        break;
      case 'releaseDate':
        comparison = new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(); // Newer first
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name); // Alphabetical
        break;
    }
    
    return filters.sortOrder === 'asc' ? -comparison : comparison;
  });
  
  return filteredTools;
};

export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.featured)
    .sort((a, b) => b.popularity - a.popularity);
};

export const recommendTools = (toolId: string, limit: number = 3): Tool[] => {
  const tool = tools.find(t => t.id === toolId);
  
  if (!tool) return [];
  
  const relatedTools = tools.filter(t => 
    t.id !== toolId && 
    t.categoryIds.some(category => tool.categoryIds.includes(category))
  );
  
  relatedTools.sort((a, b) => {
    const aMatchCount = a.categoryIds.filter(c => tool.categoryIds.includes(c)).length;
    const bMatchCount = b.categoryIds.filter(c => tool.categoryIds.includes(c)).length;
    
    if (bMatchCount !== aMatchCount) {
      return bMatchCount - aMatchCount;
    }
    
    return b.popularity - a.popularity;
  });
  
  return relatedTools.slice(0, limit);
};
