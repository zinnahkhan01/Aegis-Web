export const COMING_SOON_DATA = [
  {
    id: "ms-office-suite",
    badge: "Enterprise Productivity",
    status: "In Active R&D",
    eta: "Q1 2027",
    category: "office",
    accent: "blue",
    title: "Microsoft 365 Autonomous Office Suite",
    bnTitle: "মাইক্রোসফট ৩৬৫ সম্পূর্ণ স্বয়ংক্রিয় অফিস স্যুট",
    subtitle: "Autonomous hands-free control over Word, Excel, PowerPoint, Outlook & Access via natural voice.",
    bnSubtitle: "শুধুমাত্র মুখে বলেই মাইক্রোসফট ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট ও আউটলুক স্বয়ংক্রিয়ভাবে পরিচালনা করুন।",
    desc: "Transform your daily office workflow into spoken commands. Supervex AI orchestrates deep COM/Win32 APIs and native scripting to draft legal documents, calculate financial models, generate executive slide decks, and triage thousands of emails.",
    bnDesc: "আপনার দৈনন্দিন অফিস কাজকে ভয়েস কমান্ডে রূপান্তর করুন। সুপারভেক্স এআই সরাসরি ওয়ার্ড, এক্সেল ও প্রেজেন্টেশনের গভীর এপিআই নিয়ন্ত্রণ করে জটিল কাজগুলো নিমেষেই করে ফেলবে।",
    apps: [
      {
        name: "Microsoft Word",
        icon: "FileText",
        color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        capability: "Autonomous document drafting, research paper formatting, contract generation, resume creation, and export to DOCX/PDF.",
        bnCapability: "সম্পূর্ণ রিপোর্ট, রিসার্চ পেপার, চুক্তিপত্র ও সিভি নিজে নিজে লিখে ফরম্যাট করে পিডিএফ বা ওয়ার্ড ফাইলে সেভ করে দেবে।"
      },
      {
        name: "Microsoft Excel",
        icon: "FileSpreadsheet",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        capability: "Spoken formula synthesis (VLOOKUP, XLOOKUP, INDEX/MATCH), pivot table generation, financial forecasting, dynamic charts & VBA macro scripts.",
        bnCapability: "মুখে বললেই জটিল হিসাব-নিকাশ, পিভট টেবিল, চার্ট ও ফিনান্সিয়াল মডেল তৈরি এবং ডাটা ক্লিনিং করে ফেলবে।"
      },
      {
        name: "Microsoft PowerPoint",
        icon: "Presentation",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        capability: "Spoken pitch deck creation, automatic slide typography, AI image placement, transition timing, and investor presentation structuring.",
        bnCapability: "যেকোনো টপিক দিলে আকর্ষণীয় স্লাইড, ইনফোগ্রাফিক্স, প্রফেশনাল ডিজাইন ও ট্রানজিশন সহ স্লাইড বানিয়ে দেবে।"
      },
      {
        name: "Outlook & Teams",
        icon: "Mail",
        color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        capability: "Inbox zero autonomous triaging, voice email drafting, calendar conflict resolution, and automated meeting minute summaries.",
        bnCapability: "অটোনোমাস ইমেইল ড্রাফটিং, ক্যালেন্ডার শিডিউলিং ও ইনবক্স ফিল্টারিং করবে।"
      }
    ],
    sampleVoicePrompt: "Supervex, open Excel, import last month's sales CSV, calculate the profit margin column, and create a 3D bar chart.",
    bnSampleVoicePrompt: "সুপারভেক্স, এক্সেল ওপেন করো, গত মাসের সেলস সিএসভি ফাইল থেকে প্রফিট মার্জিন বের করে সুন্দর একটা থ্রিডি বার চার্ট বানিয়ে দাও।"
  },
  {
    id: "mobile-app-builder",
    badge: "Native Mobile Engine",
    status: "Private Alpha",
    eta: "Q2 2027",
    category: "mobile",
    accent: "emerald",
    title: "Android Studio & Mobile App Builder",
    bnTitle: "অ্যান্ড্রয়েড স্টুডিও ও মোবাইল অ্যাপস বিল্ডার",
    subtitle: "Speak your app vision. Supervex plans, generates Kotlin/Flutter code, and deploys directly to your phone.",
    bnSubtitle: "যেকোনো মোবাইল অ্যাপের আইডিয়া মুখে বললেই কোড লিখে অ্যান্ড্রয়েড ফোনে বিল্ড করে রান করে দেবে।",
    desc: "Zero-friction native mobile development. The CEO Agent spins up Android Studio in headless or visual mode, designs responsive XML/Compose layouts, integrates room databases and REST APIs, executes Gradle compilation, and installs the signed APK to your phone via Supervex ADB bridge.",
    bnDesc: "কোনো কোডিং জ্ঞান ছাড়াই সম্পূর্ণ নেটিভ অ্যাপস বানান। সুপারভেক্স এআই অ্যান্ড্রয়েড স্টুডিও কন্ট্রোল করে লেআউট ডিজাইন, কোড রাইটিং, গ্রেডেল কম্পাইল এবং আপনার ফোনে সরাসরি ইনস্টল করে দেবে।",
    apps: [
      {
        name: "Kotlin & Jetpack Compose",
        icon: "Smartphone",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        capability: "Full modern native Android UI architecture with reactive state management and Material 3 design."
      },
      {
        name: "Flutter Cross-Platform",
        icon: "Layers",
        color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        capability: "Single codebase compiling simultaneously for both Android and iOS targets."
      },
      {
        name: "1-Click Wireless ADB Push",
        icon: "Cpu",
        color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        capability: "Instant wireless deployment to your physical phone without plugging in cables."
      }
    ],
    sampleVoicePrompt: "Build a modern workout tracker app with step counter, daily goal streak, and dark neon theme for my Samsung phone.",
    bnSampleVoicePrompt: "আমার স্যামসাং ফোনের জন্য একটা স্টেপ কাউন্টার ও ডেইলি গোল ট্র্যাকার অ্যাপ বানিয়ে দাও ডার্ক নিওন থিমে।"
  },
  {
    id: "fullstack-website-builder",
    badge: "Instant Web Generator",
    status: "In Prototype",
    eta: "Q1 2027",
    category: "web",
    accent: "cyan",
    title: "Full-Stack Autonomous Website Builder",
    bnTitle: "স্বয়ংক্রিয় ফুল-স্ট্যাক ওয়েবসাইট বিল্ডার",
    subtitle: "Complete production-ready websites generated, tested, and deployed from a single spoken sentence.",
    bnSubtitle: "শুধুমাত্র একটি ভয়েস কমান্ডে আধুনিক ফুল-স্ট্যাক ওয়েবসাইট ডিজাইন, ডেভেলপ এবং ক্লাউডে লাইভ হয়ে যাবে।",
    desc: "Describe your business or product, and Supervex AI architects the database schema, builds pixel-perfect responsive frontends (React, Next.js, Tailwind), writes backend APIs (Node/FastAPI), tests in stealth Playwright, and deploys live to Vercel or Cloudflare.",
    bnDesc: "আপনার ব্যবসা বা আইডিয়ার কথা বলুন। সুপারভেক্স এআই ফ্রন্টএন্ড, ব্যাকএন্ড, ডেটাবেস এবং পেমেন্ট গেটওয়ে সহ পুরো ওয়েবসাইট তৈরি করে সরাসরি ডোমেইনে লাইভ করে দেবে।",
    apps: [
      {
        name: "React, Next.js & Tailwind",
        icon: "Layout",
        color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        capability: "Ultra-fast modern interfaces with glassmorphic animations, dark mode, and SEO optimization."
      },
      {
        name: "Backend APIs & Database",
        icon: "Code2",
        color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        capability: "Automatic REST/GraphQL endpoints, PostgreSQL/SQLite schemas, and JWT auth workflows."
      },
      {
        name: "Stealth Testing & Deploy",
        icon: "Globe",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        capability: "Headless Playwright verification of all links and buttons followed by automated 1-click cloud publishing."
      }
    ],
    sampleVoicePrompt: "Create a luxury cyber-themed e-commerce website with product showcase, shopping cart, and Stripe payment support.",
    bnSampleVoicePrompt: "একটি লাক্সারি সাইবার থিম ই-কমার্স ওয়েবসাইট বানিয়ে দাও যেখানে প্রোডাক্ট গ্যালারি, শপিং কার্ট এবং পেমেন্ট থাকবে।"
  },
  {
    id: "blender-3d-addons",
    badge: "3D & Creative Studio",
    status: "Research Phase",
    eta: "Q2 2027",
    category: "creative",
    accent: "amber",
    title: "Blender 3D Modeling & Addons Studio",
    bnTitle: "ব্লেন্ডার থ্রিডি ও অ্যাডঅনস স্টুডিও",
    subtitle: "Voice-driven 3D scene creation, procedural materials, lighting rigs, and custom Python addon generation.",
    bnSubtitle: "ভয়েস দিয়ে থ্রিডি মডেল তৈরি, ম্যাটেরিয়াল টেক্সচারিং এবং ব্লেন্ডারের জন্য কাস্টম পাইথন অ্যাডঅনস বানানোর ক্ষমতা।",
    desc: "Unleash infinite 3D creation without memorizing complex keyboard shortcuts. Tell Supervex what to build in Blender—it synthesizes Python scripts, drives the Blender viewport, generates custom procedural geometry, configures camera rigs, and renders 4K scenes.",
    bnDesc: "কোনো জটিল শর্টকাট মুখস্থ না করে মুখে বললেই ব্লেন্ডারে থ্রিডি অবজেক্ট, কাস্টম অ্যাডঅনস, লাইটিং ও অ্যানিমেশন বানিয়ে রেন্ডার করবে।",
    apps: [
      {
        name: "Procedural 3D Geometry",
        icon: "Box",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        capability: "Generate complex meshes, architectural models, sci-fi props, and organic shapes on the fly."
      },
      {
        name: "Custom Blender Addons (.py)",
        icon: "Boxes",
        color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
        capability: "Autonomous creation and automated installation of specialized Blender Python plugins."
      },
      {
        name: "Automated Cycles/Eevee Render",
        icon: "Sparkles",
        color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
        capability: "Hands-free studio lighting setup, HDRI environment mapping, and 4K photorealistic rendering."
      }
    ],
    sampleVoicePrompt: "Open Blender, create a futuristic flying vehicle with metallic cyan shaders, add dramatic neon rim lighting, and render at 1080p.",
    bnSampleVoicePrompt: "ব্লেন্ডার ওপেন করো, মেটালিক সায়ান শেডার সহ একটি ফিউচারিস্টিক ফ্লাইং কার বানিয়ে স্টুডিও লাইটিং দিয়ে রেন্ডার করো।"
  },
  {
    id: "universal-voice-builder",
    badge: "Cognitive Architecture",
    status: "Core Architecture",
    eta: "Unified Engine",
    category: "universal",
    accent: "purple",
    title: "Universal Voice-to-Build Engine",
    bnTitle: "ইউনিভার্সাল ভয়েস-টু-বিল্ড ইঞ্জিন (মুখে বললেই তৈরি)",
    subtitle: "One spoken sentence is all it takes. Supervex plans the architecture, codes the files, and compiles the project.",
    bnSubtitle: "শুধু একবার মুখ দিয়ে বললেই সে নিজে নিজে প্ল্যান করে পুরো প্রজেক্ট তৈরি করে ফেলবে।",
    desc: "The pinnacle of autonomous pair programming. When you state a goal, the CEO Agent initiates a 5-phase cognitive loop: Requirements Decomposition -> Architectural Specification -> File & Logic Generation -> Compilation & Testing -> Self-Healing Error Correction.",
    bnDesc: "অটোনোমাস এআই-এর সর্বোচ্চ পর্যায়। আপনার চিন্তা প্রকাশ করুন, সুপারভেক্স এআই নিজে আর্কিটেকচার ড্রাফট করবে, ফাইল ও কোড লিখবে, এরর চেক করবে এবং তৈরি শেষ করে ভয়েসে জানিয়ে দেবে।",
    apps: [
      {
        name: "Cognitive Architectural Planning",
        icon: "BrainCircuit",
        color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        capability: "Breaks impossible goals into discrete, verifiable sub-tasks distributed to specialized worker agents."
      },
      {
        name: "Self-Healing Compilation",
        icon: "Workflow",
        color: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
        capability: "If a compiler throws an error, the agent intercepts the stack trace, rewrites the offending logic, and re-compiles automatically."
      },
      {
        name: "Natural Voice Progress Updates",
        icon: "Mic",
        color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        capability: "Speaks back to you like a lead engineer: 'Database configured, building UI layouts now... Complete!'"
      }
    ],
    sampleVoicePrompt: "Supervex, I want a complete inventory management system with SQLite database and barcode scanner support. Plan and build it.",
    bnSampleVoicePrompt: "সুপারভেক্স, আমার একটা ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম দরকার যেখানে বারকোড স্ক্যানার ও ডাটাবেস থাকবে। প্ল্যান বানিয়ে পুরোটা তৈরি করো।"
  }
];

export const ROADMAP_MILESTONES = [
  {
    phase: "Phase 1 - CURRENT LIVE",
    title: "Autonomous Operating System Core",
    bnTitle: "অটোনোমাস অপারেটিং সিস্টেম কোর (বর্তমান লাইভ)",
    date: "v1.0.1 LIVE",
    status: "completed",
    items: [
      "Gemini Live Sub-120ms Duplex Voice Engine",
      "Full Local Windows Desktop Control & App Launcher",
      "Safe Execution File Engine with Instant Undo Journal",
      "Stealth Browser Automation & Ad-Free Streaming",
      "Wireless Android ADB Bridge & Remote Companion",
      "Real-Time Ephemeral Vision AI (Screen & Webcam)"
    ],
    bnItems: [
      "জেমিনি লাইভ ফুল-ডুপ্লেক্স ভয়েস ইঞ্জিন",
      "উইন্ডোজ অ্যাপ লঞ্চ ও ডেস্কটপ কন্ট্রোল",
      "সেফ এক্সিকিউশন ফাইল সিস্টেম ও আনডু হিস্ট্রি",
      "প্লে-রাইট স্টেলথ ব্রাউজার ও অ্যাড-ফ্রি স্ট্রিমিং",
      "ওয়্যারলেস অ্যান্ড্রয়েড ব্রিজ ও মোবাইল কমপ্যানিয়ন",
      "রিয়েল-টাইম স্ক্রিন ও ওয়েবক্যাম ভিশন এআই"
    ]
  },
  {
    phase: "Phase 2 - COMING Q1 2027",
    title: "Enterprise Productivity & Web Studio",
    bnTitle: "এন্টারপ্রাইজ প্রোডাক্টস ও স্বয়ংক্রিয় ওয়েব স্টুডিও",
    date: "Q1 2027",
    status: "in-progress",
    items: [
      "Full Microsoft 365 Automation (Word, Excel, PPT, Outlook)",
      "Autonomous Spoken Full-Stack Website Builder",
      "PostgreSQL / SQLite Schema Modeling & Vercel Deploy",
      "Voice-to-Spreadsheet Deep Formula & Pivot Generator",
      "Multi-Agent Parallel Task Execution Pipeline"
    ],
    bnItems: [
      "মাইক্রোসফট অফিস ৩৬৫ স্বয়ংক্রিয় হ্যান্ডস-ফ্রি কন্ট্রোল",
      "ভয়েস-টু-লাইভ ফুল-স্ট্যাক ওয়েবসাইট বিল্ডার",
      "ডাটাবেস মডেলিং ও ১-ক্লিক ক্লাউড ডিপ্লয়",
      "এক্সেল স্বয়ংক্রিয় ফর্মুলা, পিভট টেবিল ও চার্ট জেনারেটর",
      "একাধিক এজেন্টের প্যারালাল টাস্ক কমপ্লিশন"
    ]
  },
  {
    phase: "Phase 3 - COMING Q2 2027",
    title: "Mobile App Builder & 3D Studio",
    bnTitle: "মোবাইল অ্যাপস বিল্ডার ও থ্রিডি ক্রিয়েটিভ স্টুডিও",
    date: "Q2 2027",
    status: "upcoming",
    items: [
      "Android Studio Headless APK Compiler & Deployer",
      "Voice-to-Flutter / Jetpack Compose App Generator",
      "Blender 3D Procedural Mesh & Python Addon Engine",
      "Autonomous Self-Healing Compiler & Debugger",
      "Enterprise Custom Tool Synthesis on Demand"
    ],
    bnItems: [
      "অ্যান্ড্রয়েড স্টুডিও অটোনোমাস এপিকে বিল্ডার",
      "ভয়েস-টু-ফ্লাটার ও জেটপ্যাক কম্পোজ অ্যাপ জেনারেটর",
      "ব্লেন্ডার থ্রিডি সিন ও পাইথন অ্যাডঅনস স্টুডিও",
      "সেলফ-হিলিং স্বয়ংক্রিয় এরর ফিক্সার ও ডিবাগার",
      "প্রয়োজন অনুযায়ী কাস্টম এআই টুলস তৈরির ইঞ্জিন"
    ]
  }
];
