/**
 * Supervex AI - Microsoft Office Automation Guide Data
 * Comprehensive step-by-step user guide & command reference for Voice and Text AI control.
 */

export const MS_OFFICE_SUITE = [
  {
    id: "ms-word",
    name: "Microsoft Word",
    tagline: "সম্পূর্ণ স্বয়ংক্রিয় ওয়ার্ড ডকুমেন্ট ক্রিয়েশন, ফাইল ইনফো, সিকিউরিটি ও কলাম রাইটিং",
    taglineEn: "Full Automated Word Creation, File Info, Security & Column Precision",
    status: "Live & Automated v2.1",
    statusType: "live", // live | coming_soon | roadmap
    color: "#2B579A",
    accent: "#00F2FF",
    icon: "FileText",
    featuresCount: "230+ Voice & Chat Actions",
    description: "ডকুমেন্ট তৈরি থেকে শুরু করে পাসওয়ার্ড এনক্রিপশন, টেবিলের নির্দিষ্ট কলামে লেখা, প্রফেশনাল সিভি তৈরি এবং ফাইল ইন্সপেকশন—সবকিছু নিয়ন্ত্রণ করুন সরাসরি বাংলা বা ইংরেজি ভয়েস ও টেক্সট কমান্ডে।"
  },
  {
    id: "ms-excel",
    name: "Microsoft Excel",
    tagline: "অ্যাডভান্সড স্প্রেডশিট, ফর্মুলা, পিভট টেবিল ও চার্ট অটোমেশন",
    taglineEn: "Advanced Spreadsheets, Formulas, Pivot Tables & Data Analysis",
    status: "Coming Next",
    statusType: "coming_soon",
    color: "#217346",
    accent: "#10B981",
    icon: "Table",
    featuresCount: "Roadmap Q1",
    description: "ডাটা এন্ট্রি, স্বয়ংক্রিয় গাণিতিক ফর্মুলা (SUM, VLOOKUP, XLOOKUP), পিভট টেবিল এবং ডায়নামিক গ্রাফ ও চার্ট তৈরি করার সক্ষমতা অতি শীঘ্রই আসছে।"
  },
  {
    id: "ms-powerpoint",
    name: "Microsoft PowerPoint",
    tagline: "এআই প্রেজেন্টেশন স্লাইড, থিম ও স্পিকার নোট জেনারেশন",
    taglineEn: "AI Slide Decks, Layouts, Animation & Speaker Notes",
    status: "Coming Soon",
    statusType: "coming_soon",
    color: "#D24726",
    accent: "#F59E0B",
    icon: "Presentation",
    featuresCount: "Roadmap Q2",
    description: "যেকোনো টপিক বা রিপোর্ট থেকে স্বয়ংক্রিয়ভাবে আকর্ষণীয় প্রেজেন্টেশন স্লাইড তৈরি, কাস্টম থিম প্রয়োগ এবং স্মার্ট এনিমেশন যুক্ত করার সুবিধা।"
  }
];

export const MS_WORD_STEPS = [
  {
    stepId: "step-1",
    stepNumber: "Step 01",
    menuName: "File Menu ➔ 1.1 Info",
    title: "ডকুমেন্ট নিরাপত্তা, এনক্রিপশন ও প্রোপার্টিজ (Security & Info)",
    titleEn: "Document Protection, Password Encryption, Inspection & Properties",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "ফাইল লক করা, পাসওয়ার্ড দিয়ে এনক্রিপ্ট করা, এডিটিং সীমাবদ্ধ করা, মেটাডেটা মুছে ফেলা এবং লাইভ পরিসংখ্যান জানার পূর্ণাঙ্গ গাইড।",
    commands: [
      {
        id: "cmd-1-1",
        featureName: "পাসওয়ার্ড দিয়ে ফাইল লক (Encrypt with Password)",
        featureNameEn: "Encrypt Document with Password",
        description: "ডকুমেন্টটি ওপেন করতে পাসওয়ার্ড বাধ্যতামূলক করে। AI স্বয়ংক্রিয়ভাবে পাসওয়ার্ড সেট করার পূর্বে একটি সুরক্ষা স্ন্যাপশট নিয়ে রাখে।",
        voicePrompt: "পাসওয়ার্ড ১২৩৪ দিয়ে ফাইলটি লক করে দাও",
        chatPrompt: "Encrypt this document with password '1234'",
        aiAction: "WordEngine doc.Password = '1234' সেট করে এবং ব্যাকগ্রাউন্ডে নিরাপদ এনক্রিপশন কার্যকর করে।",
        category: "Protect Document"
      },
      {
        id: "cmd-1-2",
        featureName: "অনুমতি ছাড়া পরিবর্তন রোধ (Restrict Editing)",
        featureNameEn: "Restrict Editing (Read-Only / Comments)",
        description: "ডকুমেন্টটি রিড-অনলি বা শুধুমাত্র কমেন্ট করার মোডে সুরক্ষিত করে, যাতে অন্যরা টেক্সট পরিবর্তন করতে না পারে।",
        voicePrompt: "ডকুমেন্টের এডিটিং রেস্ট্রিক্ট করো পাসওয়ার্ড 1234 দিয়ে",
        chatPrompt: "Restrict document editing with password '1234'",
        aiAction: "doc.Protect(Type=3, Password='1234') প্রয়োগ করে নো-চেঞ্জেস রিড-অনলি লক চালু করে।",
        category: "Protect Document"
      },
      {
        id: "cmd-1-3",
        featureName: "রিড-অনলি রিকমেন্ডেশন (Always Open Read-Only)",
        featureNameEn: "Always Open Read-Only Recommendation",
        description: "পাঠকদের জন্য ফাইলটি খোলার সময় রিড-অনলি মোডে ওপেন করার পরামর্শ ডায়ালগ সক্রিয় করে।",
        voicePrompt: "Always Open Read-Only মোড চালু করো",
        chatPrompt: "Set always open read-only recommended to true",
        aiAction: "doc.ReadOnlyRecommended = True সেট করে ফাইলের আকস্মিক পরিবর্তন রোধ করে।",
        category: "Protect Document"
      },
      {
        id: "cmd-1-4",
        featureName: "চূড়ান্ত ডকুমেন্ট সিলমোহর (Mark as Final)",
        featureNameEn: "Mark as Final Document",
        description: "রিভিউয়ারদের জন্য রিবন এডিটিং নিষ্ক্রিয় করে এবং ডকুমেন্টটি চূড়ান্ত বা সমাপ্ত হিসেবে চিহ্নিত করে।",
        voicePrompt: "ফাইলটি Mark as Final হিসেবে চিহ্নিত করো",
        chatPrompt: "Mark this document as final",
        aiAction: "doc.Final = True সক্রিয় করে টাইপিং ও ফরম্যাটিং রিবন অপশনগুলো ডিসেবল করে।",
        category: "Protect Document"
      },
      {
        id: "cmd-1-5",
        featureName: "পাসওয়ার্ড ও রেস্ট্রিকশন অপসারণ (Unprotect & Unlock)",
        featureNameEn: "Unprotect & Remove Password",
        description: "আগের দেওয়া পাসওয়ার্ড বা এডিটিং সীমাবদ্ধতা সম্পূর্ণভাবে তুলে দিয়ে স্বাভাবিক এডিটিং ফিরিয়ে আনে।",
        voicePrompt: "ডকুমেন্টটি আনপ্রোটেক্ট করো",
        chatPrompt: "Unprotect document and remove password",
        aiAction: "doc.Unprotect() এবং doc.Password = '' এর মাধ্যমে ডকুমেন্টের সকল বাধ্যবাধকতা অপসারণ করে।",
        category: "Protect Document"
      },
      {
        id: "cmd-1-6",
        featureName: "সমস্যা পরীক্ষা ও ব্যক্তিগত তথ্য মোছা (Inspect & Clean)",
        featureNameEn: "Inspect Document & Sanitize Metadata",
        description: "ডকুমেন্টে থাকা কমেন্ট, ট্র্যাক রিভিশন, ব্যক্তিগত মেটাডেটা (Author, Company) পরীক্ষা করে এবং নির্দেশ দিলে এক ক্লিকে মুছে সাফ করে।",
        voicePrompt: "ডকুমেন্ট ইন্সপেক্ট করে মেটাডেটা ও কমেন্ট মুছে সাফ করো",
        chatPrompt: "Inspect document and clean all personal info and comments",
        aiAction: "doc.RemovePersonalInformation এবং doc.RemoveDocumentInformation(99) ব্যবহার করে ডকুমেন্টকে সম্পূর্ণ সেনিটাইজ করে।",
        category: "Inspect Document"
      },
      {
        id: "cmd-1-7",
        featureName: "অটো-সেভ ও অসংরক্ষিত ফাইল স্থিতি (Manage Document)",
        featureNameEn: "Manage Document & Unsaved Changes Status",
        description: "ডকুমেন্টে কোনো অসংরক্ষিত ডাটা বা হিস্ট্রি ব্যাকআপ রয়েছে কি না তা তাৎক্ষণিক যাচাই করে জানায়।",
        voicePrompt: "ডকুমেন্ট ম্যানেজ স্ট্যাটাস দেখাও",
        chatPrompt: "Check unsaved changes and document recovery status",
        aiAction: "doc.Saved প্রোপার্টি ও ব্যাকআপ ডিরেক্টরি বিশ্লেষণ করে ফাইলের লাইভ অবস্থা রিটার্ন করে।",
        category: "Manage Document"
      },
      {
        id: "cmd-1-8",
        featureName: "ভার্সন ইতিহাস ও পুনরুদ্ধার (Version History & Restore)",
        featureNameEn: "Version History & Safe Rollback",
        description: "পূর্বে স্বয়ংক্রিয়ভাবে সংরক্ষিত সমস্ত স্ন্যাপশটের তালিকা প্রদর্শন করে এবং যেকোনো পূর্ববর্তী সংস্করণে ফিরে যায়।",
        voicePrompt: "ভার্সন ১ এ রিস্টোর করো",
        chatPrompt: "Show version history and restore to version 1",
        aiAction: "টাইমস্ট্যাম্পড ব্যাকআপ থেকে পূর্ববর্তী সংস্করণ নিরাপদভাবে রিলোড করে বর্তমান উইন্ডোতে ওপেন করে।",
        category: "Version History"
      },
      {
        id: "cmd-1-9",
        featureName: "ডকুমেন্ট প্রোপার্টিজ ও লাইভ পরিসংখ্যান (Properties & Stats)",
        featureNameEn: "Document Properties & Live Word Count",
        description: "ডকুমেন্টের শিরোনাম, লেখক ও প্রতিষ্ঠানের নাম সেট করে এবং লাইভ শব্দ সংখ্যা, পৃষ্ঠা সংখ্যা ও অনুচ্ছেদ সংখ্যা প্রদর্শন করে।",
        voicePrompt: "ডকুমেন্টের টাইটেল 'Executive Report' এবং লেখক 'জিন্নাহ স্যার' সেট করো",
        chatPrompt: "Set author to 'Mohammad Zinnah' and show live word count statistics",
        aiAction: "BuiltInDocumentProperties আপডেট করে এবং ComputeStatistics এর মাধ্যমে তাৎক্ষণিক শব্দ ও পৃষ্ঠা সংখ্যা রিটার্ন করে।",
        category: "Properties"
      }
    ]
  },
  {
    stepId: "step-1-2",
    stepNumber: "Step 02",
    menuName: "File Menu ➔ 1.2 New",
    title: "নতুন ডকুমেন্ট ও টেমপ্লেট লাইব্রেরি (Blank & Template Engine)",
    titleEn: "Blank Document, Built-in Template Library & Profile Auto-Hydration",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "সম্পূর্ণ নতুন ব্ল্যাঙ্ক ডকুমেন্ট তৈরি, ৫টি ভিন্ন ক্যাটাগরির (Personal, Business, Academic, Resume, Letter) প্রফেশনাল টেমপ্লেট লোড করা এবং প্রোফাইল ডাটা স্বয়ংক্রিয়ভাবে বসানোর পূর্ণাঙ্গ ব্যবস্থা।",
    commands: [
      {
        id: "cmd-new-1",
        featureName: "নতুন ব্ল্যাঙ্ক ডকুমেন্ট (Blank Document)",
        featureNameEn: "Create Fresh Blank Word Document",
        description: "মাইক্রোসফট ওয়ার্ডে একটি সম্পূর্ণ পরিষ্কার ও নতুন সাদা পৃষ্ঠা তৈরি করে এবং স্ক্রিনের সামনে ফোকাস নিয়ে আসে।",
        voicePrompt: "একটি নতুন ব্ল্যাঙ্ক ডকুমেন্ট তৈরি করো",
        chatPrompt: "Create a new blank document in Word",
        aiAction: "WordCOMWorkerThread app.Documents.Add() এক্সিকিউট করে উইন্ডো ফোকাস প্রদান করে।",
        category: "Blank Document"
      },
      {
        id: "cmd-new-2",
        featureName: "ব্যক্তিগত টেমপ্লেট (Personal Templates)",
        featureNameEn: "Personal Planner & Biography Template",
        description: "ব্যক্তিগত দৈনিক পরিকল্পনা, লক্ষ্য নির্ধারণ ও লাইফ অর্গানাইজার অথবা ব্যক্তিগত বায়োডাটা টেমপ্লেট তৈরি করে।",
        voicePrompt: "একটি পার্সোনাল প্ল্যানার টেমপ্লেট দিয়ে নতুন ফাইল খোলো",
        chatPrompt: "Create a new document from personal planner template",
        aiAction: "Personal_Planner.docx টেমপ্লেট লোড করে ব্যবহারকারীর নাম ও আজকের তারিখ স্বয়ংক্রিয়ভাবে প্রতিস্থাপন করে।",
        category: "Personal Templates"
      },
      {
        id: "cmd-new-3",
        featureName: "ব্যবসায়িক টেমপ্লেট (Business Templates)",
        featureNameEn: "Business Proposal, Meeting Minutes & Executive Report",
        description: "কর্পোরেট ক্লায়েন্ট প্রপোজাল, মিটিং কার্যবিবরণী (Minutes) এবং ত্রৈমাসিক এক্সিকিউটিভ রিপোর্ট টেমপ্লেট তৈরি করে।",
        voicePrompt: "একটি বিজনেস প্রপোজাল টেমপ্লেট দিয়ে নতুন ফাইল খোলো",
        chatPrompt: "Open a new business proposal template in Word",
        aiAction: "Business_Proposal.docx টেমপ্লেট লোড করে কোম্পানি, সাবজেক্ট ও প্রজেক্ট কাঠামো প্রস্তুত করে।",
        category: "Business Templates"
      },
      {
        id: "cmd-new-4",
        featureName: "একাডেমিক টেমপ্লেট (Academic Templates)",
        featureNameEn: "Academic Research Paper & Scientific Lab Report",
        description: "বিশ্ববিদ্যালয় বা প্রাতিষ্ঠানিক রিসার্চ পেপার (IEEE/APA ফরম্যাট কাঠামো) এবং বৈজ্ঞানিক ল্যাব এক্সপেরিমেন্ট রিপোর্ট টেমপ্লেট তৈরি করে।",
        voicePrompt: "একটি একাডেমিক রিসার্চ পেপার টেমপ্লেট খোলো",
        chatPrompt: "Create a document using academic research paper template",
        aiAction: "Academic_Research_Paper.docx থেকে অ্যাবস্ট্রাক্ট, মেথডলজি ও রেফারেন্স ফরম্যাট লোড করে।",
        category: "Academic Templates"
      },
      {
        id: "cmd-new-5",
        featureName: "সিভি ও রেজুমে টেমপ্লেট (Resume / CV Templates)",
        featureNameEn: "Modern Executive CV & Technical Resume",
        description: "আধুনিক চাকরির বাজারের উপযোগী এক্সিকিউটিভ সিভি অথবা সফটওয়্যার/ইঞ্জিনিয়ারিং টেকনিক্যাল রেজুমে টেমপ্লেট ওপেন করে।",
        voicePrompt: "রেজুমে টেমপ্লেট থেকে একটি নতুন ফাইল ওপেন করো",
        chatPrompt: "Create a new resume document from Modern CV template",
        aiAction: "Modern_CV.docx টেমপ্লেট লোড করে ব্যবহারকারীর সংরক্ষিত প্রোফাইল ডাটা (ইমেইল, ফোন, ভূমিকা) অটোফিল করে।",
        category: "Resume Templates"
      },
      {
        id: "cmd-new-6",
        featureName: "চিঠি ও আবেদনপত্র টেমপ্লেট (Letter Templates)",
        featureNameEn: "Formal Leave Letter & Job Application Cover Letter",
        description: "অফিসিয়াল ছুটির আবেদনপত্র কিংবা চাকরির কভার লেটারের নির্ভুল প্রাতিষ্ঠানিক কাঠামোর টেমপ্লেট তৈরি করে।",
        voicePrompt: "একটি ফরমাল লেটার টেমপ্লেট দিয়ে নতুন ডকুমেন্ট খোলো",
        chatPrompt: "Open a formal leave letter template in Word",
        aiAction: "Formal_Leave_Letter.docx ওপেন করে স্বয়ংক্রিয়ভাবে ফরমাল প্রাপক ও সমাপনী কাঠামো প্রস্তুত করে।",
        category: "Letter Templates"
      },
      {
        id: "cmd-new-7",
        featureName: "টেমপ্লেট হিসেবে সংরক্ষণ (Save as Template)",
        featureNameEn: "Save Current Document as Custom Reusable Template",
        description: "বর্তমানে ওপেন থাকা বা ডিজাইন করা যেকোনো ডকুমেন্টকে কাস্টম টেমপ্লেট ফোল্ডারে সেভ করে রাখে যাতে পরবর্তীতে বারবার ব্যবহার করা যায়।",
        voicePrompt: "বর্তমান ফাইলটি টেমপ্লেট হিসেবে সেভ করো",
        chatPrompt: "Save current document as template",
        aiAction: "WordEngine ফাইলটিকে ব্যবহারকারীর কাস্টম টেমপ্লেট লাইব্রেরিতে .docx/.dotx হিসেবে রেজিস্টার করে।",
        category: "Template Management"
      },
      {
        id: "cmd-new-8",
        featureName: "উপলব্ধ টেমপ্লেটের তালিকা (List All Templates)",
        featureNameEn: "List All Templates with Category Filter",
        description: "সিস্টেমে বিল্ট-ইন এবং ব্যবহারকারীর নিজস্ব তৈরিকৃত সমস্ত টেমপ্লেট ক্যাটাগরি অনুযায়ী সাজিয়ে প্রদর্শন করে।",
        voicePrompt: "কি কি টেমপ্লেট আছে দেখাও",
        chatPrompt: "List all available Word templates in system",
        aiAction: "Personal, Business, Academic, Resume, Letter ফোল্ডার স্ক্যান করে ফাইলের আকারসহ সম্পূর্ণ তালিকা রিটার্ন করে।",
        category: "Template Management"
      }
    ]
  },
  {
    stepId: "step-1-3",
    stepNumber: "Step 03",
    menuName: "File Menu ➔ 1.3 Open",
    title: "ফাইল ও ডকুমেন্ট ওপেনিং সিস্টেম (Open & Recovery Engine)",
    titleEn: "Local Files, Recent History, Cloud Drives & Unsaved Recovery",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "পিসির যেকোনো ডিরেক্টরি থেকে ফাইল ওপেন, সাম্প্রতিক ডকুমেন্টের ইতিহাস দেখা ও ইনডেক্স অনুযায়ী খোলা, ফাইল ব্রাউজ করা, OneDrive, SharePoint ও দাপ্তরিক ক্লাউড থেকে ফাইল লোড এবং অসংরক্ষিত (AutoRecover) ড্রাফট পুনরুদ্ধারের পূর্ণাঙ্গ গাইড।",
    commands: [
      {
        id: "cmd-open-1",
        featureName: "লোকাল ফাইল ওপেন (Open Local File)",
        featureNameEn: "Open Local File with Smart Fallback Search",
        description: "যেকোনো নির্দিষ্ট ফাইলের নাম বা লোকেশন উল্লেখ করলে সিস্টেম স্বয়ংক্রিয়ভাবে ডেস্কটপ, ডকুমেন্টস বা ডাউনলোড ফোল্ডার খুঁজে ফাইলটি ওপেন করে উইন্ডো সামনে আনে।",
        voicePrompt: "ডেস্কটপ থেকে my_doc.docx ফাইলটি খোলো",
        chatPrompt: "Open local file report.docx in Word",
        aiAction: "WordEngine multi-folder candidate search চালিয়ে doc = app.Documents.Open(resolved_path) কার্যকর করে।",
        category: "Local File"
      },
      {
        id: "cmd-open-2",
        featureName: "সাম্প্রতিক ফাইলের তালিকা (Recent Documents)",
        featureNameEn: "List Recent Documents History",
        description: "মাইক্রোসফট ওয়ার্ডে ইতিপূর্বে ওপেন করা সাম্প্রতিক সমস্ত ফাইলের টাইমস্ট্যাম্প ও লোকেশনসহ সম্পূর্ণ তালিকা প্রদর্শন করে।",
        voicePrompt: "রিসেন্ট ফাইলগুলো দেখাও",
        chatPrompt: "Show recent Word documents history",
        aiAction: "app.RecentFiles স্ক্যান করে ইনডেক্সসহ সাম্প্রতিক ফাইলের তালিকা রিটার্ন করে।",
        category: "Recent Documents"
      },
      {
        id: "cmd-open-3",
        featureName: "ইনডেক্স ধরে রিসেন্ট ফাইল ওপেন (Open Recent by Index)",
        featureNameEn: "Open Specific Recent Document by Order",
        description: "রিসেন্ট লিস্টের ১ নম্বর, ২ নম্বর বা ৩ নম্বর যেকোনো ফাইল তাৎক্ষণিক মুখের কথায় ওপেন করে দেয়।",
        voicePrompt: "১ নম্বর রিসেন্ট ফাইলটি খোলো",
        chatPrompt: "Open 1st recent document from history",
        aiAction: "app.RecentFiles(index).Open() এক্সিকিউট করে নির্দিষ্ট সাম্প্রতিক ফাইল স্ক্রিনে হাজির করে।",
        category: "Recent Documents"
      },
      {
        id: "cmd-open-4",
        featureName: "ফাইল ব্রাউজ করা (Browse Files)",
        featureNameEn: "Browse Word Documents with Size & Date",
        description: "ডেস্কটপ বা নির্দিষ্ট ফোল্ডারে থাকা সমস্ত ওয়ার্ড ফাইল সাইজ ও পরিবর্তনের সময়সহ ব্রাউজ করে দেখায় কিংবা ওয়ার্ডের অফিশিয়াল ব্রাউজার ডায়ালগ চালু করে।",
        voicePrompt: "ডেস্কটপের ফাইল ব্রাউজ করো",
        chatPrompt: "Browse Word documents on Desktop",
        aiAction: "ডকুমেন্টস স্ক্যান করে মেটাডেটা প্রদান করে অথবা app.Dialogs(80).Show() ডায়ালগ উইন্ডো ওপেন করে।",
        category: "Browse Files"
      },
      {
        id: "cmd-open-5",
        featureName: "ওয়ানড্রাইভ থেকে ওপেন (Open from OneDrive)",
        featureNameEn: "Open Synced Document from OneDrive",
        description: "পিসির ক্লাউড সিঙ্কড OneDrive ডিরেক্টরি স্বয়ংক্রিয়ভাবে শনাক্ত করে সেখান থেকে যেকোনো প্রজেক্ট বা ফাইল ওপেন করে।",
        voicePrompt: "OneDrive থেকে মিটিং নোটস ফাইলটি খোলো",
        chatPrompt: "Open synced documents from OneDrive",
        aiAction: "OneDrive রুটে রিকার্সিভ সার্চ চালিয়ে ম্যাচিং ফাইলটি ওয়ার্ডে ওপেন করে।",
        category: "Cloud Open"
      },
      {
        id: "cmd-open-6",
        featureName: "শেয়ারপয়েন্ট থেকে ওপেন (Open from SharePoint)",
        featureNameEn: "Open from SharePoint Sync or Cloud URL",
        description: "অফিসিয়াল টিম বা কোম্পানির শেয়ারপয়েন্ট সিঙ্ক ফোল্ডার থেকে ফাইল লোড করে অথবা সরাসরি শেয়ারপয়েন্ট ওয়েব ইউআরএল দিয়ে ডকুমেন্ট খোলে।",
        voicePrompt: "শেয়ারপয়েন্ট থেকে ডকুমেন্ট ওপেন করো",
        chatPrompt: "Open cloud document from SharePoint URL",
        aiAction: "SharePoint HTTPS লিংক বা কর্পোরেট ডিরেক্টরি থেকে স্বয়ংক্রিয়ভাবে ফাইল লোড করে।",
        category: "Cloud Open"
      },
      {
        id: "cmd-open-7",
        featureName: "এই পিসি থেকে ওপেন (Open from This PC)",
        featureNameEn: "Search & Open across This PC Libraries",
        description: "ডেস্কটপ, ডকুমেন্টস, ডাউনলোড সহ পিসির সমস্ত লোকাল ড্রাইভে কি-ওয়ার্ড বা ফাইলের নাম মিলিয়ে স্বয়ংক্রিয়ভাবে খুঁজে বের করে ওপেন করে।",
        voicePrompt: "এই পিসি থেকে my_cv.docx ফাইলটি খোলো",
        chatPrompt: "Find and open file from This PC libraries",
        aiAction: "লাইব্রেরি ও ড্রাইভ রুট স্ক্যান করে ফাইলের নাম ম্যাচ করে তাৎক্ষণিক ওপেন করে।",
        category: "This PC"
      },
      {
        id: "cmd-open-8",
        featureName: "অসংরক্ষিত ফাইল উদ্ধার (Recover Unsaved Documents)",
        featureNameEn: "Recover Unsaved Drafts from AutoRecover",
        description: "হঠাৎ ওয়ার্ড ক্র্যাশ করলে কিংবা সেভ না করে বন্ধ হয়ে গেলে মাইক্রোসফট ওয়ার্ডের AutoRecover ফোল্ডার ও এআই স্ন্যাপশট স্ক্যান করে ফাইল অক্ষত অবস্থায় পুনরুদ্ধার করে।",
        voicePrompt: "অসংরক্ষিত ফাইল রিকভার করো",
        chatPrompt: "Recover unsaved documents from AutoRecover",
        aiAction: "wdAutoRecoverPath (%APPDATA%\\Microsoft\\Word) ও এআই স্ন্যাপশট ব্যাকআপ থেকে লেটেস্ট ড্রাফট ফিরিয়ে আনে।",
        category: "Unsaved Recovery"
      }
    ]
  },
  {
    stepId: "step-1-4",
    stepNumber: "Step 04",
    menuName: "File Menu ➔ 1.4 Save",
    title: "ডকুমেন্ট সংরক্ষণ ও ক্লাউড সিঙ্ক (Save & Cloud Sync Engine)",
    titleEn: "In-Place Save, Save As, Duplicate Copy & Cloud Synchronization",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "বর্তমান ডকুমেন্টে ইন-প্লেস সেভ, নতুন নাম ও ফরম্যাটে সেভ অ্যাজ, মূল ফাইল অক্ষত রেখে আলাদা ডুপ্লিকেট কপি সেভ এবং OneDrive ও ক্লাউড ড্রাইভে স্বয়ংক্রিয় সিঙ্কের পূর্ণাঙ্গ নির্দেশিকা।",
    commands: [
      {
        id: "cmd-save-1",
        featureName: "ডকুমেন্ট সংরক্ষণ (Save Document)",
        featureNameEn: "Normal In-Place Document Save",
        description: "পূর্বে সংরক্ষিত ফাইলে ইন-প্লেস সেভ করে কিংবা নতুন ব্ল্যাঙ্ক ফাইলের ক্ষেত্রে নিরাপদ ডেস্কটপ পাথে অটো-সেভ করে যাতে কোনো ডায়েলগ পপ-আপে কাজ আটকে না যায়।",
        voicePrompt: "ডকুমেন্টটি সেভ করো",
        chatPrompt: "Save active document in Word",
        aiAction: "doc.Save() কল করে ফাইল সাইজ ও পাথসহ আপডেট রিটার্ন করে।",
        category: "Save"
      },
      {
        id: "cmd-save-2",
        featureName: "নতুন নামে সেভ অ্যাজ (Save As)",
        featureNameEn: "Save Document with New Name & Format",
        description: "বর্তমান ডকুমেন্টটিকে অন্য একটি নাম, নতুন ফোল্ডার বা নতুন ফরম্যাটে (.docx, .pdf, .txt, .rtf) সেভ করে এবং ওয়ার্ডের ফোকাস নতুন ফাইলে পরিবর্তন করে।",
        voicePrompt: "ফাইলটি my_project.docx নামে সেভ অ্যাজ করো",
        chatPrompt: "Save document as 'my_project.docx'",
        aiAction: "doc.SaveAs2(FileName=dest_path) ব্যবহার করে ফরম্যাট কনভার্সন ও ফাইল স্যুইচ সম্পন্ন করে।",
        category: "Save As"
      },
      {
        id: "cmd-save-3",
        featureName: "ডুপ্লিকেট কপি সেভ (Save a Copy)",
        featureNameEn: "Save a Duplicate Copy Without Context Switch",
        description: "ওয়ার্ডে খোলা মূল ডকুমেন্ট অক্ষত ও সচল রেখেই ব্যাকগ্রাউন্ডে একটি নির্ভুল ডুপ্লিকেট ব্যাকআপ কপি (_copy.docx) সেভ করে রাখে।",
        voicePrompt: "ডকুমেন্টের একটি কপি সেভ করো",
        chatPrompt: "Save a duplicate copy of this document",
        aiAction: "shutil.copy2 এবং ফাইল-লক প্রিজার্ভেশন ব্যবহার করে মূল ডকুমেন্ট ফোকাস অক্ষত রেখে কপি তৈরি করে।",
        category: "Save a Copy"
      },
      {
        id: "cmd-save-4",
        featureName: "ক্লাউড ড্রাইভে সংরক্ষণ (Save to Cloud)",
        featureNameEn: "Save to Active Cloud Storage Vault",
        description: "পিসির সক্রিয় ক্লাউড সিঙ্ক ড্রাইভে ফাইলটি নিরাপদে সংরক্ষণ করে যাতে যেকোনো ডিভাইস থেকে তাৎক্ষণিক অ্যাক্সেস পাওয়া যায়।",
        voicePrompt: "ক্লাউডে সেভ করো",
        chatPrompt: "Save active document to cloud vault",
        aiAction: "Supervex Cloud Vault ও ক্লাউড ডিরেক্টরি পাথ শনাক্ত করে স্বয়ংক্রিয় ক্লাউড ব্যাকআপ নিশ্চিত করে।",
        category: "Cloud Save"
      },
      {
        id: "cmd-save-5",
        featureName: "ওয়ানড্রাইভে সংরক্ষণ (Save to OneDrive)",
        featureNameEn: "Save to Microsoft OneDrive with Live Sync",
        description: "মাইক্রোসফট OneDrive রুট ডিরেক্টরি শনাক্ত করে সরাসরি OneDrive ক্লাউড ফোল্ডারে ফাইল সেভ করে, যা তাৎক্ষণিক উইন্ডোজ সিঙ্ক ক্লাউডে আপলোড করে।",
        voicePrompt: "OneDrive এ সেভ করো",
        chatPrompt: "Save document to OneDrive with auto-sync",
        aiAction: "OneDrive ডিরেক্টরিতে SaveAs বা Copy সম্পাদন করে ক্লাউড মেটাডেটা রিটার্ন করে।",
        category: "OneDrive Save"
      }
    ]
  },
  {
    stepId: "step-1-5",
    stepNumber: "Step 05",
    menuName: "File Menu ➔ 1.5 Print",
    title: "ডকুমেন্ট প্রিন্ট, প্রিন্টার নির্বাচন ও প্রিন্ট প্রিভিউ (Print Pipeline)",
    titleEn: "Print Automation, Printer Selection, Duplex, Custom Range & Print Preview",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "উইন্ডোজের ইনস্টল করা প্রিন্টার তালিকা দেখা, প্রিন্টার সুইচ করা, ফুল পেজ বা নির্দিষ্ট পেজ রেঞ্জ প্রিন্ট, ডুপ্লেক্স (উভয় পিঠ), পেজ প্রতি শিট (N-Up Zoom) এবং প্রিন্ট প্রিভিউ নিয়ন্ত্রণের পূর্ণাঙ্গ নির্দেশিকা।",
    commands: [
      {
        id: "cmd-print-1",
        featureName: "ডকুমেন্ট প্রিন্ট (Print Document)",
        featureNameEn: "Execute Document Print",
        description: "অ্যাক্টিভ প্রিন্টারে পুরো ডকুমেন্ট অথবা নির্দিষ্ট কপি সংখ্যা সরাসরি প্রিন্ট করে।",
        voicePrompt: "ডকুমেন্টটি ২ কপি প্রিন্ট করো",
        chatPrompt: "Print 2 copies of this document",
        aiAction: "doc.PrintOut(Copies=2, Background=False) কার্যকর করে প্রিন্ট স্পুলারে পাঠায়।",
        category: "Print"
      },
      {
        id: "cmd-print-2",
        featureName: "প্রিন্টার নির্বাচন (Select Printer)",
        featureNameEn: "Switch Active Printer",
        description: "পিসির যেকোনো প্রিন্টার (যেমন Microsoft Print to PDF, HP LaserJet) সক্রিয় প্রিন্টার হিসেবে নির্ধারণ করে।",
        voicePrompt: "Microsoft Print to PDF প্রিন্টার নির্বাচন করো",
        chatPrompt: "Select printer 'Microsoft Print to PDF'",
        aiAction: "ActivePrinter প্রোপার্টিতে রিকুয়েস্টেড প্রিন্টার নাম সেট করে প্রিন্টার সুইচ সম্পন্ন করে।",
        category: "Select Printer"
      },
      {
        id: "cmd-print-3",
        featureName: "প্রিন্টার তালিকা প্রদর্শন (List Printers)",
        featureNameEn: "List All Installed Printers",
        description: "উইন্ডোজে ইনস্টল করা সকল লোকাল, নেটওয়ার্ক এবং ভার্চুয়াল প্রিন্টারের নাম ও বর্তমান অ্যাক্টিভ প্রিন্টার প্রদর্শন করে।",
        voicePrompt: "সব প্রিন্টারের তালিকা দেখাও",
        chatPrompt: "Show list of all installed printers",
        aiAction: "win32print ও COM এনামারেশন চালিয়ে প্রিন্টার তালিকা ও ডিফল্ট প্রিন্টার রিটার্ন করে।",
        category: "Select Printer"
      },
      {
        id: "cmd-print-4",
        featureName: "সব পৃষ্ঠা প্রিন্ট (Print All Pages)",
        featureNameEn: "Print Entire Document",
        description: "ডকুমেন্টের ১ম পৃষ্ঠা থেকে শেষ পৃষ্ঠা পর্যন্ত সম্পূর্ণ অংশ প্রিন্ট করে।",
        voicePrompt: "সম্পূর্ণ ডকুমেন্ট সব পৃষ্ঠা প্রিন্ট করো",
        chatPrompt: "Print all pages of active document",
        aiAction: "Range=wdPrintAllDocument (0) দিয়ে প্রিন্ট এক্সিকিউট করে।",
        category: "Print Range"
      },
      {
        id: "cmd-print-5",
        featureName: "বর্তমান পৃষ্ঠা প্রিন্ট (Print Current Page)",
        featureNameEn: "Print Currently Active Page Only",
        description: "ওয়ার্ডে কার্সার যে পৃষ্ঠায় অবস্থান করছে শুধুমাত্র সেই নির্দিষ্ট পৃষ্ঠাটি প্রিন্ট করে।",
        voicePrompt: "বর্তমান পৃষ্ঠাটি প্রিন্ট করো",
        chatPrompt: "Print current page only",
        aiAction: "Range=wdPrintCurrentPage (2) নির্ধারণ করে সরাসরি কারেন্ট পেজ প্রিন্ট করে।",
        category: "Print Range"
      },
      {
        id: "cmd-print-6",
        featureName: "সিলেকশন প্রিন্ট (Print Selection)",
        featureNameEn: "Print Highlighted Selection",
        description: "ব্যবহারকারী ডকুমেন্টের যে অংশটি সিলেক্ট বা হাইলাইট করেছেন শুধুমাত্র সেই টেক্সট বা টেবিল প্রিন্ট করে।",
        voicePrompt: "সিলেক্ট করা অংশটুকু প্রিন্ট করো",
        chatPrompt: "Print selected text only",
        aiAction: "Range=wdPrintSelection (1) পাঠিয়ে নির্বাচিত কন্টেন্ট প্রিন্টারে পাঠায়।",
        category: "Print Range"
      },
      {
        id: "cmd-print-7",
        featureName: "কাস্টম পৃষ্ঠা রেঞ্জ (Custom Page Range)",
        featureNameEn: "Print Custom Pages (e.g. 1-3, 5)",
        description: "আপনার নির্দেশমতো নির্দিষ্ট পৃষ্ঠা বা পেজ রেঞ্জ (যেমন ১ থেকে ৩ বা ৫ নম্বর পৃষ্ঠা) প্রিন্ট করে।",
        voicePrompt: "পৃষ্ঠা ১ থেকে ৩ প্রিন্ট করো",
        chatPrompt: "Print custom page range 1-3",
        aiAction: "Range=wdPrintRangeOfPages (4) এবং Pages='1-3' আর্গুমেন্ট দিয়ে প্রিন্ট সম্পন্ন করে।",
        category: "Print Range"
      },
      {
        id: "cmd-print-8",
        featureName: "এক পিঠে প্রিন্ট (Print One-Sided)",
        featureNameEn: "One-Sided Simplex Printing",
        description: "কাগজের একপাশে প্রিন্ট করার জন্য ওয়ান-সাইডেড মোড কার্যকর করে।",
        voicePrompt: "এক পাশে প্রিন্ট করো",
        chatPrompt: "Print one-sided simplex",
        aiAction: "ManualDuplexPrint=False কনফিগার করে স্ট্যান্ডার্ড সিমপ্লেক্স প্রিন্ট নিশ্চিত করে।",
        category: "Duplex"
      },
      {
        id: "cmd-print-9",
        featureName: "উভয় পিঠে প্রিন্ট (Print Both Sides / Duplex)",
        featureNameEn: "Two-Sided Duplex Printing",
        description: "কাগজ সাশ্রয় করতে পৃষ্ঠার উভয় পিঠে প্রিন্ট করার জন্য ডুপ্লেক্স মোড চালু করে।",
        voicePrompt: "উভয় পিঠে দুই পাশে প্রিন্ট করো",
        chatPrompt: "Print on both sides (duplex)",
        aiAction: "ManualDuplexPrint=True সক্রিয় করে উইন্ডোজ ডুপ্লেক্স প্রিন্টিং কার্যকর করে।",
        category: "Duplex"
      },
      {
        id: "cmd-print-10",
        featureName: "কোলেট ও আনকোলেট (Collated / Uncollated)",
        featureNameEn: "Collated vs Uncollated Copies",
        description: "একাধিক কপি প্রিন্টের সময় পৃষ্ঠাগুলো সেট আকারে (১,২,৩ - ১,২,৩) সাজানো বা প্রতিটি পৃষ্ঠা আলাদা রাখা নির্ধারণ করে।",
        voicePrompt: "কপিগুলো কোলেট করো",
        chatPrompt: "Print with collated copies",
        aiAction: "Collate=True / False সেট করে ডকুমেন্টের বান্ডলিং অর্ডার নিয়ন্ত্রণ করে।",
        category: "Collation"
      },
      {
        id: "cmd-print-11",
        featureName: "পোর্ট্রেট ও ল্যান্ডস্কেপ (Orientation)",
        featureNameEn: "Portrait & Landscape Orientation",
        description: "প্রিন্টের কাগজের দিক লম্বালম্বি (Portrait) কিংবা আড়াআড়ি (Landscape) কনফিগার করে।",
        voicePrompt: "ল্যান্ডস্কেপে প্রিন্ট করো",
        chatPrompt: "Set orientation to landscape and print",
        aiAction: "doc.PageSetup.Orientation = wdOrientLandscape (1) সেট করে সঠিক ওরিয়েন্টেশনে পাঠায়।",
        category: "Page Setup"
      },
      {
        id: "cmd-print-12",
        featureName: "কাগজের সাইজ নির্বাচন (Paper Size)",
        featureNameEn: "Paper Size Setup (A4, Letter, Legal)",
        description: "প্রিন্টারের পেপার ট্রে অনুযায়ী A4, Letter, Legal, A3 বা A5 সাইজ স্বয়ংক্রিয়ভাবে নির্ধারণ করে।",
        voicePrompt: "A4 সাইজে প্রিন্ট করো",
        chatPrompt: "Set paper size to A4 and print",
        aiAction: "doc.PageSetup.PaperSize = wdPaperA4 (7) কনফিগার করে প্রিন্ট স্পুল প্রস্তুত করে।",
        category: "Paper Size"
      },
      {
        id: "cmd-print-13",
        featureName: "মার্জিন প্রি-সেট (Margins Setup)",
        featureNameEn: "Margin Configuration (Normal, Narrow, Wide)",
        description: "প্রিন্টের সুবিধার জন্য মার্জিন স্বাভাবিক (Normal 1\"), সংকীর্ণ (Narrow 0.5\"), মাঝারি (Moderate) বা প্রশস্ত (Wide 2\") করে।",
        voicePrompt: "ন্যারো মার্জিনে প্রিন্ট করো",
        chatPrompt: "Print with narrow margins",
        aiAction: "PageSetup এর Top/Bottom/Left/Right মার্জিন স্বয়ংক্রিয়ভাবে সেট করে।",
        category: "Margins"
      },
      {
        id: "cmd-print-14",
        featureName: "প্রতি শিটে একাধিক পেজ (Pages Per Sheet)",
        featureNameEn: "N-Up Zoom (1, 2, 4, 6, 8, 16 Pages Per Sheet)",
        description: "কাগজ সাশ্রয় ও নোট প্রিন্ট করার জন্য একই কাগজের পাতায় ২, ৪, ৬ বা ৮টি পৃষ্ঠা একসাথে প্রিন্ট করে।",
        voicePrompt: "প্রতি শিটে ২ পেজ প্রিন্ট করো",
        chatPrompt: "Print 2 pages per sheet (N-Up)",
        aiAction: "PrintZoomColumn=2, PrintZoomRow=1 কনফিগার করে জুম আউটপুট প্রদান করে।",
        category: "Pages Per Sheet"
      },
      {
        id: "cmd-print-15",
        featureName: "প্রিন্ট প্রিভিউ প্রদর্শন ও বন্ধ (Print Preview)",
        featureNameEn: "Interactive Print Preview Show / Close",
        description: "কাগজে ছাপার পূর্বে পুরো ডকুমেন্টটি কেমন দেখাবে তা বড় করে সরাসরি ওয়ার্ডে প্রদর্শন ও প্রিভিউ ক্লোজ করে।",
        voicePrompt: "ডকুমেন্টের প্রিন্ট প্রিভিউ দেখাও",
        chatPrompt: "Show print preview of active document",
        aiAction: "doc.PrintPreview() ও doc.ClosePrintPreview() পরিচালনা করে এডিটিং ভিউ নিয়ন্ত্রণ করে।",
        category: "Print Preview"
      }
    ]
  },
  {
    stepId: "step-1-6",
    stepNumber: "Step 06",
    menuName: "File Menu ➔ 1.6 Share",
    title: "ডকুমেন্ট শেয়ারিং ও কোলাবোরেশন (Share & Co-Authoring Engine)",
    titleEn: "Share Document, Copy Link, Invite People, Manage Access, Email & OneDrive",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "ডকুমেন্টের শেয়ারেবল লিংক ক্লিপবোর্ডে কপি করা, এডিট বা ভিউ পারমিশন সহ ইমেইলে সহকর্মীদের ইনভাইট করা, অ্যাক্সেস লিস্ট দেখা বা বাতিল করা এবং সরাসরি আউটলুক বা OneDrive এর মাধ্যমে শেয়ারের পূর্ণাঙ্গ নির্দেশিকা।",
    commands: [
      {
        id: "cmd-share-1",
        featureName: "ডকুমেন্ট শেয়ার (Share Document)",
        featureNameEn: "Master Document Share Coordinator",
        description: "ডকুমেন্টের বর্তমান স্থিতি ও ক্লাউড সিঙ্ক যাচাই করে স্বয়ংক্রিয়ভাবে শেয়ারিং লিংক প্রস্তুত করে এবং ক্লিপবোর্ডে কপি করে।",
        voicePrompt: "ডকুমেন্টটি শেয়ার করো",
        chatPrompt: "Share active document",
        aiAction: "share_document() কল করে স্বয়ংক্রিয় ক্লাউড সিঙ্ক ও শেয়ার লিংক প্রদান করে।",
        category: "Share"
      },
      {
        id: "cmd-share-2",
        featureName: "শেয়ার লিংক কপি (Copy Share Link)",
        featureNameEn: "Copy Cloud / Local Document Link to Clipboard",
        description: "ডকুমেন্টের নিরাপদ ক্লাউড URL অথবা লোকাল URI লিংক উইন্ডোজ ক্লিপবোর্ডে তাৎক্ষণিক কপি করে যাতে যেকোনো জায়গায় পেস্ট করা যায়।",
        voicePrompt: "ডকুমেন্টের লিংক কপি করো",
        chatPrompt: "Copy share link to document",
        aiAction: "PowerShell Set-Clipboard দিয়ে সরাসরি সিস্টেমে লিংক কপি করে এবং লিংক পাথ রিটার্ন করে।",
        category: "Copy Link"
      },
      {
        id: "cmd-share-3",
        featureName: "সহকর্মী আমন্ত্রণ (Invite People)",
        featureNameEn: "Invite Collaborators with Edit or View Access",
        description: "ইমেইল এড্রেস দিয়ে সহকর্মীদের এডিটর বা ভিউয়ার হিসেবে ডকুমেন্টে যুক্ত করে এবং স্বয়ংক্রিয় আমন্ত্রণ ইমেইল ড্রাফট করে।",
        voicePrompt: "rahim@example.com কে এডিটর হিসেবে ইনভাইট করো",
        chatPrompt: "Invite 'rahim@example.com' with edit access to this document",
        aiAction: "মেটাডেটা স্টোরে এক্সেস এন্ট্রি সেভ করে এবং Outlook COM দিয়ে সরাসরি আমন্ত্রণ ড্রাফট ওপেন করে।",
        category: "Invite People"
      },
      {
        id: "cmd-share-4",
        featureName: "অ্যাক্সেস ব্যবস্থাপনা ও রিমুভ (Manage Access)",
        featureNameEn: "List, Update Role & Revoke Collaborator Access",
        description: "ডকুমেন্টে কার কার এক্সেস রয়েছে তার তালিকা দেখা, পারমিশন পরিবর্তন করা বা নির্দিষ্ট কারো এক্সেস তাৎক্ষণিক বাতিল (Revoke) করা।",
        voicePrompt: "কার কার অ্যাক্সেস আছে দেখাও",
        chatPrompt: "Manage access list and show collaborators",
        aiAction: "ডকুমেন্টের অ্যাক্সেস কন্ট্রোল স্টোর থেকে সক্রিয় সহকর্মীদের তালিকা ও তাদের রোল প্রদর্শন করে।",
        category: "Manage Access"
      },
      {
        id: "cmd-share-5",
        featureName: "ইমেইলের মাধ্যমে শেয়ার (Share via Email)",
        featureNameEn: "Send as DOCX, Exported PDF or Cloud Link via Email",
        description: "মাইক্রোসফট আউটলুক বা ডিফল্ট ইমেইল অ্যাপের মাধ্যমে বর্তমান ফাইলটি সরাসরি .docx, স্বয়ংক্রিয় .pdf কিংবা লিংক হিসেবে ইমেইল করে।",
        voicePrompt: "ডকুমেন্টটি পিডিএফ হিসেবে ইমেইল করো zinnah@example.com এ",
        chatPrompt: "Email this document as PDF to 'zinnah@example.com'",
        aiAction: "ডকুমেন্টকে তাৎক্ষণিক পিডিএফে কনভার্ট করে Outlook MailItem-এ এটাচমেন্ট হিসেবে যুক্ত করে উইন্ডো প্রদর্শন করে।",
        category: "Email Share"
      },
      {
        id: "cmd-share-6",
        featureName: "ওয়ানড্রাইভে শেয়ার ও লাইভ লিংক (Share to OneDrive)",
        featureNameEn: "Sync to OneDrive and Generate Real-Time Co-Authoring Link",
        description: "ডকুমেন্টটি সরাসরি ব্যবহারকারীর OneDrive ফোল্ডারে সেভ করে, রিয়েল-টাইম কো-অথরিং সিঙ্ক কার্যকর করে এবং ওয়েব লিংক কপি করে।",
        voicePrompt: "OneDrive এ শেয়ার করে লিংক কপি করো",
        chatPrompt: "Share document to OneDrive and copy live sync link",
        aiAction: "OneDrive ড্রাইভে ফাইল সিঙ্ক করে ক্লাউড শেয়ার লিংক ক্লিপবোর্ডে কপি করে।",
        category: "OneDrive Share"
      }
    ]
  },
  {
    stepId: "step-1-7",
    stepNumber: "Step 07",
    menuName: "File Menu ➔ 1.7 Export",
    title: "ডকুমেন্ট এক্সপোর্ট ও প্রকাশনা (Export, Convert & Publish Engine)",
    titleEn: "Create PDF, Create XPS, Change File Type, Export Document & Publish",
    badge: "100% Tested & Live",
    badgeColor: "purple",
    summary: "ডকুমেন্টকে উচ্চ-রেজোলিউশন PDF ও XPS ফাইলে রূপান্তর, ODT, RTF, TXT, HTML ফরম্যাটে ফাইল টাইপ পরিবর্তন, মাস্টার এক্সপোর্ট এবং সম্পূর্ণ ওয়েব/রিলিজ পাবলিকেশন প্যাকেজ তৈরির স্বয়ংক্রিয় নির্দেশিকা।",
    commands: [
      {
        id: "cmd-export-1",
        featureName: "পিডিএফ তৈরি (Create PDF)",
        featureNameEn: "Create High-Fidelity PDF Document",
        description: "ডকুমেন্টকে প্রিন্ট কোয়ালিটি বা অন-স্ক্রিন অপটিমাইজেশন সহ স্ট্যান্ডার্ড .pdf ফাইলে রূপান্তর করে এবং প্রয়োজনে স্বয়ংক্রিয়ভাবে খুলে দেখায়।",
        voicePrompt: "ডকুমেন্টটি পিডিএফ করো",
        chatPrompt: "Create PDF of active document",
        aiAction: "Word COM ExportAsFixedFormat(wdExportFormatPDF=17) দিয়ে তাৎক্ষণিক পিডিএফ তৈরি করে ফাইলের সাইজ ও পাথ রিটার্ন করে।",
        category: "PDF Export"
      },
      {
        id: "cmd-export-2",
        featureName: "এক্সপিএস তৈরি (Create XPS)",
        featureNameEn: "Create XML Paper Specification (.xps)",
        description: "মাইক্রোসফটের ফিক্সড লেআউট ডকুমেন্ট স্ট্যান্ডার্ড .xps ফাইলে এক্সপোর্ট করে যাতে কোনো লেআউট পরিবর্তন ছাড়াই সংরক্ষণ করা যায়।",
        voicePrompt: "ডকুমেন্টটি XPS ফাইলে এক্সপোর্ট করো",
        chatPrompt: "Export active document to XPS format",
        aiAction: "ExportAsFixedFormat(wdExportFormatXPS=18) দিয়ে ১০০% লেআউট সুরক্ষাসহ .xps ফাইল উৎপন্ন করে।",
        category: "XPS Export"
      },
      {
        id: "cmd-export-3",
        featureName: "ফাইলের টাইপ পরিবর্তন (Change File Type)",
        featureNameEn: "Change File Type to ODT, RTF, TXT, HTML, DOC",
        description: "ওপেন-অফিস ও লিব্রে-অফিস স্ট্যান্ডার্ড .odt, রিচ টেক্সট .rtf, প্লেইন টেক্সট .txt, ওয়েব পেজ .html অথবা লিগ্যাসি Word 97-2003 .doc ফরম্যাটে রূপান্তর।",
        voicePrompt: "ফাইলের টাইপ পরিবর্তন করে ODT তে সেভ করো",
        chatPrompt: "Change file type to OpenDocument Text (.odt)",
        aiAction: "SaveAs2 ব্যবহার করে নির্ধারিত ফরম্যাট কোডে (ODT=23, RTF=6, TXT=2, HTML=10) রূপান্তর সম্পন্ন করে।",
        category: "Change File Type"
      },
      {
        id: "cmd-export-4",
        featureName: "মাস্টার ডকুমেন্ট এক্সপোর্ট (Export Document)",
        featureNameEn: "Unified Document Exporter Gateway",
        description: "নির্দিষ্ট যেকোনো ফরম্যাট (PDF, XPS, RTF, ODT, HTML) নাম ও পাথ উল্লেখ করে স্বয়ংক্রিয়ভাবে এক্সপোর্ট ও ফাইল সাইজ ভেরিফিকেশন।",
        voicePrompt: "ডকুমেন্টটি এক্সপোর্ট করো",
        chatPrompt: "Export document with auto optimization",
        aiAction: "আউটপুট পাথ ও ফরম্যাট প্যারামিটার স্বয়ংক্রিয়ভাবে প্রসেস করে 4-টিয়ার ভ্যালিডেশন সম্পন্ন করে।",
        category: "Export Gateway"
      },
      {
        id: "cmd-export-5",
        featureName: "পাবলিশ ও ওয়েব প্যাকেজ (Publish Document)",
        featureNameEn: "Publish Ready-to-Distribute Web Package & Release Bundle",
        description: "ডকুমেন্টকে প্রকাশনা উপযোগী করার জন্য ফিল্টার্ড HTML, এসেটস, PDF কপি এবং SHA256 চেকসাম ও মেটাডেটা সহ পাবলিকেশন ম্যানিফেস্ট তৈরি।",
        voicePrompt: "ডকুমেন্টটি ওয়েব ও পাবলিকেশনের জন্য প্রকাশ করো",
        chatPrompt: "Publish document as web distribution package",
        aiAction: "একটি স্বতন্ত্র পাবলিকেশন ফোল্ডার তৈরি করে HTML, PDF এবং publish_manifest.json সমন্বিত রিলিজ বান্ডেল তৈরি করে।",
        category: "Publish"
      }
    ]
  },
  {
    stepId: "step-1-8",
    stepNumber: "Step 08",
    menuName: "File Menu ➔ 1.8 Account",
    title: "অ্যাকাউন্ট, ইউজার প্রোফাইল ও থিম সেটিংস (Account, Theme & License Engine)",
    titleEn: "Microsoft Account, User Profile, Office Theme, Connected Services & License",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "মাইক্রোসফট একাউন্ট তথ্য ও আইডি দেখা, ওয়ার্ডের ইউজার নাম ও ইনিশিয়াল আপডেট, ডার্ক মোড / ব্ল্যাক / কালারফুল থিম পরিবর্তন, সংযুক্ত ক্লাউড ড্রাইভ যাচাই এবং সফটওয়্যার লাইসেন্স ও আপডেট ম্যানেজমেন্টের স্বয়ংক্রিয় নির্দেশিকা।",
    commands: [
      {
        id: "cmd-account-1",
        featureName: "মাইক্রোসফট একাউন্ট তথ্য (Microsoft Account)",
        featureNameEn: "Signed-In Identity, UPN & Account GUID",
        description: "মাইক্রোসফট ওয়ার্ডে সাইন-ইন থাকা লাইভ আইডি, ইমেইল (UPN) এবং ওয়ান-অথ একাউন্ট আইডি স্বয়ংক্রিয়ভাবে প্রদর্শন করে।",
        voicePrompt: "আমার মাইক্রোসফট একাউন্ট দেখাও",
        chatPrompt: "Show my Microsoft account info",
        aiAction: "উইন্ডোজ রেজিস্ট্রি থেকে OneAuth আইডি ও সার্ভিসেস ক্যাশ স্ক্যান করে সক্রিয় একাউন্ট তথ্য রিটার্ন করে।",
        category: "Microsoft Account"
      },
      {
        id: "cmd-account-2",
        featureName: "ইউজার প্রোফাইল পরিবর্তন (User Profile & Initials)",
        featureNameEn: "Word User Profile (UserName, Initials & Address)",
        description: "ডকুমেন্টের কমেন্ট ও ট্র্যাকিংয়ে ব্যবহৃত ওয়ার্ডের ব্যবহারকারীর নাম ও ইনিশিয়াল তাৎক্ষণিক পরিবর্তন বা যাচাই করে।",
        voicePrompt: "ইউজার নাম Zinnah Khan এবং ইনিশিয়াল ZK দাও",
        chatPrompt: "Set Word user name to 'Zinnah Khan' and initials to 'ZK'",
        aiAction: "Application.UserName ও Application.UserInitials প্রোপার্টি লাইভ আপডেট করে কনফার্মেশন দেয়।",
        category: "User Profile"
      },
      {
        id: "cmd-account-3",
        featureName: "অফিস থিম ও ডার্ক মোড (Office Theme)",
        featureNameEn: "Switch Office Theme: Colorful, Dark Gray, Black, White, System",
        description: "চোখের আরামের জন্য কালো (Dark Mode), গাঢ় ধূসর (Dark Gray), রঙিন (Colorful), সাদা (White) অথবা সিস্টেম অনুযায়ী থিম পরিবর্তন।",
        voicePrompt: "অফিস থিম ডার্ক মোডে পরিবর্তন করো",
        chatPrompt: "Change Office theme to Black / Dark Mode",
        aiAction: "Office Common রেজিস্ট্রি কি-তে UI Theme (DWORD 0/3/4/5/6) কনফিগার করে সম্পূর্ণ অফিস স্যুটের থিম পরিবর্তন করে।",
        category: "Office Theme"
      },
      {
        id: "cmd-account-4",
        featureName: "সংযুক্ত ক্লাউড সার্ভিস (Connected Services)",
        featureNameEn: "Enumerate Connected OneDrive & Cloud Storage Services",
        description: "অফিসের সাথে সংযুক্ত পার্সোনাল ও বিজনেস OneDrive, SharePoint কিংবা ক্লাউড স্টোরেজের সক্রিয় তালিকা ও লিংক প্রদর্শন।",
        voicePrompt: "কানেক্টেড সার্ভিসগুলো দেখাও",
        chatPrompt: "Show connected cloud services and accounts",
        aiAction: "ServicesManagerCache থেকে সংযুক্ত ড্রাইভের নাম, একাউন্ট ও URL স্ক্যান করে তালিকাভুক্ত করে।",
        category: "Connected Services"
      },
      {
        id: "cmd-account-5",
        featureName: "প্রোডাক্ট তথ্য ও লাইসেন্স (Product Information)",
        featureNameEn: "Office Edition, Version, Build, Architecture & License Status",
        description: "মাইক্রোসফট অফিস/৩৬৫ এর সংস্করণ (যেমন: Microsoft 365 Family), ৬৪-বিট আর্কিটেকচার, চ্যানেল এবং লাইসেন্স সক্রিয়তা যাচাই।",
        voicePrompt: "ওয়ার্ডের প্রোডাক্ট ইনফরমেশন ও লাইসেন্স দেখাও",
        chatPrompt: "Show Office product information, version and license status",
        aiAction: "ClickToRun Configuration ও Word COM ইঞ্জিন থেকে বিল্ড নম্বর, প্রোডাক্ট কোড ও সক্রিয় সাবস্ক্রিপশন স্ট্যাটাস প্রদান করে।",
        category: "Product Info"
      },
      {
        id: "cmd-account-6",
        featureName: "অফিস আপডেট ও রিলিজ নোট (Update Office)",
        featureNameEn: "Trigger ClickToRun Update Wizard or View Release History",
        description: "ব্যাকগ্রাউন্ডে অফিস আপডেট চেক ও ডাউনলোড উইজার্ড চালু করা অথবা কারেন্ট চ্যানেলের রিলিজ নোট ব্রাউজারে দেখা।",
        voicePrompt: "অফিস আপডেট চেক করো",
        chatPrompt: "Check for Microsoft Office updates",
        aiAction: "OfficeC2RClient.exe /update user এক্সিকিউট করে অথবা অফিশিয়াল আপডেট পোর্টাল ওপেন করে।",
        category: "Update Office"
      },
      {
        id: "cmd-account-7",
        featureName: "একাউন্ট ও সাবস্ক্রিপশন ম্যানেজমেন্ট (Manage Account)",
        featureNameEn: "Launch Official Microsoft Account & Subscription Management Portal",
        description: "পেমেন্ট, ডিভাইস, পাসওয়ার্ড ও সাবস্ক্রিপশন পরিচালনার জন্য সরাসরি অফিশিয়াল মাইক্রোসফট একাউন্ট পোর্টাল ওপেন করে।",
        voicePrompt: "আমার মাইক্রোসফট একাউন্ট ম্যানেজ করো",
        chatPrompt: "Manage my Microsoft account and subscription",
        aiAction: "ডিফল্ট ব্রাউজারে account.microsoft.com অথবা portal.office.com সিকিউর পোর্টাল চালু করে।",
        category: "Manage Account"
      }
    ]
  },
  {
    stepId: "step-1-9",
    stepNumber: "Step 09",
    menuName: "File Menu ➔ 1.9 Options",
    title: "ওয়ার্ড অপশন ও কনফিগারেশন ইঞ্জিন (Word Options & Settings Engine)",
    titleEn: "General, Display, Proofing, Save, Language, Accessibility, Advanced, Ribbon, QAT, Add-ins, Trust Center",
    badge: "100% Tested & Live",
    badgeColor: "emerald",
    summary: "ওয়ার্ডের সকল প্রধান অপশন ক্যাটাগরি—সাধারণ সেটিংস, ডিসপ্লে ফরম্যাটিং মার্কস, বানান ও ব্যাকরণ যাচাই, অটো-সেভ ইন্টারভাল, ভাষা সেটিংস, এক্সেসিবিলিটি চেকার, অ্যাডভান্সড এডিটিং, রিবন, কুইক এক্সেস টুলবার, অ্যাড-ইন এবং ট্রাস্ট সেন্টার সিকিউরিটির পূর্ণাঙ্গ নির্দেশিকা।",
    commands: [
      {
        id: "cmd-options-1",
        featureName: "সাধারণ অপশন ও লাইভ প্রিভিউ (General Options)",
        featureNameEn: "Live Preview, User Information & General Settings",
        description: "ওয়ার্ডে ফরম্যাটিংয়ের লাইভ প্রিভিউ (Live Preview) চালু বা বন্ধ করা, পরিমাপ একক এবং ব্যবহারকারীর নাম ও ইনিশিয়াল নির্ধারণ।",
        voicePrompt: "লাইভ প্রিভিউ অপশন চালু করো",
        chatPrompt: "Enable Live Preview in Word general options",
        aiAction: "Application.Options.EnableLivePreview প্রোপার্টি তাৎক্ষণিক পরিবর্তন করে সাধারণ সেটিংস কনফিগার করে।",
        category: "General"
      },
      {
        id: "cmd-options-2",
        featureName: "ডিসপ্লে ও ফরম্যাটিং মার্কস (Display Options)",
        featureNameEn: "Formatting Marks (Spaces, Paragraphs, Tabs) & Background Printing",
        description: "ডকুমেন্টে গোপন ফরম্যাটিং চিহ্ন—প্যারাগ্রাফ মার্ক, স্পেস, ট্যাব প্রদর্শন এবং ডকুমেন্টের ব্যাকগ্রাউন্ড কালার প্রিন্ট অপশন কনফিগারেশন।",
        voicePrompt: "প্যারাগ্রাফ ও স্পেস মার্ক দেখাও",
        chatPrompt: "Show formatting marks in Word display options",
        aiAction: "ActiveWindow.View.ShowAll এবং Options.PrintBackgrounds প্রোপার্টি নিয়ন্ত্রণ করে ভিউ আপডেট করে।",
        category: "Display"
      },
      {
        id: "cmd-options-3",
        featureName: "বানান ও ব্যাকরণ প্রুফিং (Proofing Options)",
        featureNameEn: "Check Spelling & Grammar As You Type, Ignore Uppercase",
        description: "টাইপ করার সাথে সাথে বানান ও ব্যাকরণ ভুল চিহ্নিতকরণ (লাল ও নীল দাগ) চালু বা বন্ধ এবং ক্যাপিটাল লেটারের শব্দ যাচাই সেটিংস।",
        voicePrompt: "টাইপ করার সময় বানান যাচাই বন্ধ করো",
        chatPrompt: "Disable check spelling as you type in Word proofing options",
        aiAction: "Options.CheckSpellingAsYouType এবং CheckGrammarAsYouType প্রোপার্টি লাইভ আপডেট করে।",
        category: "Proofing"
      },
      {
        id: "cmd-options-4",
        featureName: "অটো-সেভ ও রিকভারি ইন্টারভাল (Save Options)",
        featureNameEn: "AutoRecover Save Interval, Background Save & File Locations",
        description: "বিদ্যুৎ চলে যাওয়া বা ক্র্যাশ হওয়া থেকে বাঁচাতে অটো-রিকভার সেভ ইন্টারভাল (মিনিট), ব্যাকগ্রাউন্ড সেভ এবং ডিফল্ট ফাইল লোকেশন নির্ধারণ।",
        voicePrompt: "ওয়ার্ডের অটো-রিকভার সেভ ইন্টারভাল ৫ মিনিট করো",
        chatPrompt: "Set AutoRecover save interval to 5 minutes",
        aiAction: "Application.Options.SaveInterval প্রোপার্টিতে নিরাপদ মিনিট ভ্যালু সেট করে এবং অটো-রিকভার পাথ রিপোর্ট করে।",
        category: "Save"
      },
      {
        id: "cmd-options-5",
        featureName: "ভাষা ও এডিটিং সেটিংস (Language Options)",
        featureNameEn: "Office Authoring, Editing & Display Language Settings",
        description: "ওয়ার্ডের মূল এডিটিং ভাষা, ইউজার ইন্টারফেস (UI) ভাষা, হেল্প ভাষা এবং উইন্ডোজে ইনস্টল থাকা ভাষা প্যাকের তালিকা যাচাই।",
        voicePrompt: "ওয়ার্ডের ভাষা সেটিংস ও ইনস্টল করা ভাষাগুলো দেখাও",
        chatPrompt: "Show Word display and editing language options",
        aiAction: "Office Common LanguageResources রেজিস্ট্রি সাবকি এবং Application.CheckLanguage স্ট্যাটাস বিশ্লেষণ করে।",
        category: "Language"
      },
      {
        id: "cmd-options-6",
        featureName: "এক্সেসিবিলিটি চেকার (Accessibility Checker)",
        featureNameEn: "Run Accessibility Checker & Inspect Alternative Text (Alt Text)",
        description: "প্রতিবন্ধী বা বিশেষ চাহিদাসম্পন্ন পাঠকদের পড়ার সুবিধার্থে ডকুমেন্টের ছবিতে অল্টারনেটিভ টেক্সট (Alt Text) ও টেবিল হেডার স্বয়ংক্রিয়ভাবে যাচাই এবং ওয়ার্ডের এক্সেসিবিলিটি প্যানেল চালু করা।",
        voicePrompt: "এক্সেসিবিলিটি চেকার চালু করো",
        chatPrompt: "Run accessibility checker on this document",
        aiAction: "ডকুমেন্টের শেপ ও টেবিলে Alt Text ও হেডার স্ক্যান করে রিপোর্ট দেয় এবং নেটিভ Accessibility Checker টাস্ক প্যানেল চালু করে।",
        category: "Accessibility"
      },
      {
        id: "cmd-options-7",
        featureName: "উন্নত এডিটিং ও ওভারটাইপ (Advanced Options)",
        featureNameEn: "Typing Replaces Selection, Overtype Mode & Smart Cut/Paste",
        description: "টাইপিং সিলেকশন প্রতিস্থাপন, ওভারটাইপ মোড (Overtype mode), ড্র্যাগ অ্যান্ড ড্রপ টেক্সট এডিটিং এবং স্মার্ট কাট ও পেস্ট ফরম্যাটিং নিয়ন্ত্রণ।",
        voicePrompt: "ওভারটাইপ মোড সেটিংস এবং এডভান্সড অপশন দেখাও",
        chatPrompt: "Enable overtype mode in Word advanced options",
        aiAction: "Application.Options-এর ReplaceSelection, Overtype, AllowDragAndDrop ও SmartCutPaste স্টেট পরিবর্তন করে।",
        category: "Advanced"
      },
      {
        id: "cmd-options-8",
        featureName: "রিবন কাস্টমাইজেশন (Customize Ribbon)",
        featureNameEn: "CommandBars Inspection & Ribbon Tab Visibility",
        description: "ওয়ার্ডের ২২০+ কমান্ডবার, স্ট্যান্ডার্ড রিবন ট্যাব (Home, Insert, Layout, Review) এবং কাস্টম অ্যাকশন স্ট্যাটাস বিশ্লেষণ।",
        voicePrompt: "ওয়ার্ডের রিবন সেটিংস ও কমান্ডবার অপশন দেখাও",
        chatPrompt: "Show customize ribbon command bars and tab options",
        aiAction: "Application.CommandBars কালেকশন স্ক্যান করে সক্রিয় কমান্ডবার ও মেজর রিবন ট্যাবের স্টেট প্রস্তুত করে।",
        category: "Customize Ribbon"
      },
      {
        id: "cmd-options-9",
        featureName: "কুইক এক্সেস টুলবার (Quick Access Toolbar)",
        featureNameEn: "QAT Standard Tools, Shortcuts & Visibility",
        description: "ওয়ার্ডের কুইক এক্সেস টুলবারের দ্রুত সংরক্ষণ, আনডু/রিডু, প্রিন্ট প্রিভিউ ইত্যাদি স্ট্যান্ডার্ড শর্টকাট টুল এবং সক্রিয় কমান্ড যাচাই।",
        voicePrompt: "কুইক এক্সেস টুলবার অপশন ও টুল তালিকা দেখাও",
        chatPrompt: "Show Quick Access Toolbar (QAT) tools and options",
        aiAction: "Standard কমান্ডবারের সক্রিয় কন্ট্রোল ও শর্টকাট বাটনগুলো শনাক্ত করে তালিকা প্রদান করে।",
        category: "Quick Access Toolbar"
      },
      {
        id: "cmd-options-10",
        featureName: "অ্যাড-ইন ও প্লাগইন তালিকা (Add-ins)",
        featureNameEn: "COM Add-ins, Word Templates & Active Plugins",
        description: "ওয়ার্ডে সংযুক্ত সমস্ত সক্রিয় ও নিষ্ক্রিয় COM Add-ins এবং স্টার্টআপ টেমপ্লেট অ্যাড-ইনসমূহের তালিকা ও কানেকশন স্ট্যাটাস প্রদর্শন।",
        voicePrompt: "ওয়ার্ডে যুক্ত করা অ্যাড-ইনগুলো এবং COM add-ins দেখাও",
        chatPrompt: "Show active Word add-ins and COM plugins",
        aiAction: "Application.COMAddIns এবং Application.AddIns কালেকশন থেকে অ্যাড-ইনের নাম, পাথ এবং কানেকশন যাচাই করে।",
        category: "Add-ins"
      },
      {
        id: "cmd-options-11",
        featureName: "ট্রাস্ট সেন্টার ও ম্যাক্রো সিকিউরিটি (Trust Center)",
        featureNameEn: "Automation Security Levels, Trusted Locations & Macro Protection",
        description: "ডকুমেন্টের ম্যাক্রো নিরাপত্তা লেভেল (Low, Medium/ByUI, High Disable) নির্ধারণ, ট্রাস্টেড ফাইল লোকেশন এবং সিকিউরিটি পলিসি যাচাই।",
        voicePrompt: "ওয়ার্ডের ট্রাস্ট সেন্টার ও ম্যাক্রো সিকিউরিটি সেটিংস দেখাও",
        chatPrompt: "Show Trust Center macro security level and trusted locations",
        aiAction: "Application.AutomationSecurity প্রোপার্টি এবং Word Security রেজিস্ট্রি স্ক্যান করে সিকিউরিটি ও ট্রাস্টেড লোকেশন রিপোর্ট করে।",
        category: "Trust Center"
      }
    ]
  },
  {
    stepId: "step-2",
    stepNumber: "Step 10",
    menuName: "Table Menu ➔ Precise Cell & Column Control",
    title: "স্মার্ট টেবিল ও নির্দিষ্ট কলামে লেখা (Table Column Precision)",
    titleEn: "Smart Table Generation & Multi-Column Precision Writing",
    badge: "100% Tested & Live",
    badgeColor: "cyan",
    summary: "টেবিলের ১ নম্বর কলামে নাম, ২ নম্বর কলামে নাম্বার কিংবা ৩ নম্বর কলামে টেক্সট লেখার ১০০% নির্ভুল স্বয়ংক্রিয় ব্যবস্থা।",
    commands: [
      {
        id: "cmd-2-1",
        featureName: "নির্দিষ্ট ২য় কলামে নাম্বার লেখা (Write in 2nd Column)",
        featureNameEn: "Fill Specific Column with Numbers",
        description: "১ম কলাম অক্ষত রেখে সরাসরি ২য় কলামের প্রতিটি সারিতে ১, ২, ৩ বা নির্দিষ্ট নম্বর বসিয়ে দেয়।",
        voicePrompt: "টেবিলের ২nd column এ নাম্বার লেখো",
        chatPrompt: "Write numbers in the 2nd column of the table",
        aiAction: "WordEngine কলাম ইনডেক্স col=2 ডিটেক্ট করে এবং টেবিলের শুধুমাত্র দ্বিতীয় কলামে সারিবদ্ধভাবে সংখ্যা যুক্ত করে।",
        category: "Column Control"
      },
      {
        id: "cmd-2-2",
        featureName: "নির্দিষ্ট ৩য় কলামে টেক্সট লেখা (Write in 3rd Column)",
        featureNameEn: "Write Custom Text in 3rd Column",
        description: "৩য় কলামে আপনার নির্দেশিত তথ্য বা বিবরণ নিখুঁতভাবে ইনসার্ট করে।",
        voicePrompt: "টেবিলের ৩rd column এ কিছু লেখো",
        chatPrompt: "Write data in the 3rd column of the table",
        aiAction: "কলাম col=3 এর ফাঁকা ঘরগুলোতে তথ্য ইনসার্ট করে এবং সেল ফরম্যাট ঠিক রাখে।",
        category: "Column Control"
      },
      {
        id: "cmd-2-3",
        featureName: "নতুন টেবিল তৈরি (Create Structured Table)",
        featureNameEn: "Create Multi-Row Multi-Column Table",
        description: "আপনার চাহিদামতো সারি ও কলাম দিয়ে সুন্দর গ্রিড টেবিল প্রস্তুত করে।",
        voicePrompt: "একটি ৫ রো এবং ৪ কলামের টেবিল তৈরি করো",
        chatPrompt: "Create a table with 5 rows and 4 columns",
        aiAction: "টেবিলের বর্ডার, হেডার রো এবং সেল ডাইমেনশন তৈরি করে ডকুমেন্টে যুক্ত করে।",
        category: "Table Creation"
      },
      {
        id: "cmd-2-4",
        featureName: "টেবিল হেডার ও স্টাইলিং (Format Table Header)",
        featureNameEn: "Header Row Styling & Alignment",
        description: "টেবিলের প্রথম সারির টেক্সট বোল্ড করা, সেন্টারে নেওয়া এবং ব্যাকগ্রাউন্ড রঙ দেওয়া।",
        voicePrompt: "টেবিলের ১ম রো বোল্ড এবং সেন্টার অ্যালাইন করো",
        chatPrompt: "Bold the 1st row of table and align center",
        aiAction: "Table.Rows(1).Range.Bold = True এবং Alignment = wdAlignParagraphCenter কার্যকর করে।",
        category: "Table Formatting"
      }
    ]
  },
  {
    stepId: "step-3",
    stepNumber: "Step 11",
    menuName: "Auto Assembly ➔ Full Document Generation",
    title: "সম্পূর্ণ সিভি, রিপোর্ট ও দরখাস্ত তৈরি (Full Document Assembly)",
    titleEn: "End-to-End Professional CV, Business Reports & Formal Letters",
    badge: "100% Tested & Live",
    badgeColor: "purple",
    summary: "শুধু মুখে বলুন কি চান—AI স্বয়ংক্রিয়ভাবে পুরো ডকুমেন্ট, হেডিংস, অনুচ্ছেদ এবং টেবিলসহ ফাইল বানিয়ে ডেস্কটপে সংরক্ষণ করে ওপেন করে দেবে।",
    commands: [
      {
        id: "cmd-3-1",
        featureName: "এক ক্লিকে প্রফেশনাল সিভি তৈরি (Executive CV Generation)",
        featureNameEn: "Executive Resume & CV Generation",
        description: "আপনার সংরক্ষিত প্রোফাইল ডাটা, নাম, ইমেইল, স্কিলস এবং শিক্ষাগত যোগ্যতার টেবিলসহ একটি সম্পূর্ণ আধুনিক সিভি তৈরি করে।",
        voicePrompt: "ওয়ার্ডে আমার একটি সম্পূর্ণ প্রফেশনাল সিভি তৈরি করো",
        chatPrompt: "Create a complete professional modern CV in Word",
        aiAction: "ডেস্কটপে .docx ফাইল তৈরি করে প্রোফাইল ডাটা ইনজেকশন, এক্সিকিউটিভ থিম এবং একাডেমিক টেবিল তৈরি করে সেভ করে।",
        category: "Document Assembly"
      },
      {
        id: "cmd-3-2",
        featureName: "বিজনেস রিপোর্ট ও প্রজেক্ট প্রপোজাল (Business Report)",
        featureNameEn: "Business Report with Evaluation Table",
        description: "এক্সিকিউটিভ সামারি, উদ্দেশ্য, মূল্যায়ন টেবিল এবং ভবিষ্যতের পরিকল্পনা সম্বলিত অফিসিয়াল রিপোর্ট তৈরি করে।",
        voicePrompt: "একটি প্রজেক্ট এনালাইসিস রিপোর্ট তৈরি করো",
        chatPrompt: "Draft a comprehensive project analysis report in Word",
        aiAction: "টাইটেল, হেডিং ১, ২, বিশ্লেষণী টেবিল ও মার্জিত ফরম্যাটিং যুক্ত করে পূর্ণাঙ্গ ফাইল প্রস্তুত করে।",
        category: "Document Assembly"
      },
      {
        id: "cmd-3-3",
        featureName: "অফিসিয়াল ছুটির আবেদনপত্র (Leave Application)",
        featureNameEn: "Formal Leave & Official Application",
        description: "যথার্থ ফরমাল কাঠামোর আবেদনপত্র লিখে স্বয়ংক্রিয়ভাবে প্রস্তুত করে দেয়।",
        voicePrompt: "ছুটির জন্য একটি আনুষ্ঠানিক আবেদনপত্র লেখো",
        chatPrompt: "Write a formal leave application letter in Word",
        aiAction: "প্রাপক, বিষয়, অভিবাদন ও সমাপ্তিসূচক বাক্যাংশসহ সম্পূর্ণ দরখাস্ত ওয়ার্ডে সাজিয়ে দেয়।",
        category: "Document Assembly"
      }
    ]
  },
  {
    stepId: "step-4",
    stepNumber: "Step 12",
    menuName: "Design & Layout ➔ Themes, Colors & Page Setup",
    title: "ডিজাইন থিম, মার্জিন ও লেআউট (Design, Margin & Layout)",
    titleEn: "Executive Typography, Themes, Borders & Page Setup",
    badge: "100% Tested & Live",
    badgeColor: "cyan",
    summary: "মার্জিন সংকীর্ণ বা প্রশস্ত করা, পোর্ট্রেট থেকে ল্যান্ডস্কেপ পরিবর্তন, পেজ বর্ডার এবং আকর্ষণীয় থিম এক নির্দেশে কার্যকর করুন।",
    commands: [
      {
        id: "cmd-4-1",
        featureName: "এক্সিকিউটিভ থিম প্রয়োগ (Executive Design Theme)",
        featureNameEn: "Apply Executive Typography Theme",
        description: "হেডিং ও প্যারাগ্রাফের ফন্ট, অনুপাত এবং লাইন স্পেসিং এক ক্লিকে পেশাদার লুক প্রদান করে।",
        voicePrompt: "ডকুমেন্টে Executive থিম প্রয়োগ করো",
        chatPrompt: "Apply executive theme to this document",
        aiAction: "ফন্টের কালার প্যালেট, হেডিং স্টাইল এবং ১.১৫ লাইন স্পেসিং একযোগে কনফিগার করে।",
        category: "Design & Themes"
      },
      {
        id: "cmd-4-2",
        featureName: "পেজ বর্ডার ও ব্যাকগ্রাউন্ড কালার (Borders & Page Color)",
        featureNameEn: "Page Borders & Custom Color Fill",
        description: "ডকুমেন্টের চারধারে মার্জিত বর্ডার এবং চোখের আরামদায়ক হালকা ব্যাকগ্রাউন্ড কালার প্রদান করে।",
        voicePrompt: "পেজে হালকা আকাশী ব্যাকগ্রাউন্ড কালার এবং ডাবল বর্ডার দাও",
        chatPrompt: "Add double line page border and light blue background color",
        aiAction: "Background.Fill.ForeColor এবং Borders(wdBorderTop/Bottom/Left/Right) স্টাইল সেট করে।",
        category: "Page Styling"
      },
      {
        id: "cmd-4-3",
        featureName: "মার্জিন ও ওরিয়েন্টেশন (Margins & Landscape)",
        featureNameEn: "Margin Presets & Orientation Setup",
        description: "প্রিন্টের সুবিধার জন্য মার্জিন ন্যারো করা এবং চওড়া ডকুমেন্টের জন্য ল্যান্ডস্কেপ মোড চালু করা।",
        voicePrompt: "পেজের মার্জিন Narrow করো এবং ল্যান্ডস্কেপ মোডে দাও",
        chatPrompt: "Set page margins to narrow and orientation to landscape",
        aiAction: "PageSetup.Orientation = wdOrientLandscape এবং ০.৫ ইঞ্চি মার্জিন সেট করে।",
        category: "Page Setup"
      }
    ]
  },
  {
    stepId: "step-5",
    stepNumber: "Step 13",
    menuName: "Interaction Modes ➔ Voice vs Text Guide",
    title: "ভয়েস ও চ্যাট ব্যবহারের পূর্ণাঙ্গ নিয়মাবলী (How to Use Guide)",
    titleEn: "Complete Duplex Voice & Interactive Chat Operating Guide",
    badge: "Essential Guide",
    badgeColor: "amber",
    summary: "সুপারভেক্স এআই কীভাবে আপনার মুখের ভাষা শুনে কিংবা চ্যাটে লিখে স্বয়ংক্রিয়ভাবে মাইক্রোসফট ওয়ার্ড নিয়ন্ত্রণ করে তার বিশদ নির্দেশিকা।",
    commands: [
      {
        id: "cmd-5-1",
        featureName: "ডুপ্লেক্স ভয়েস মোড (Hands-Free Duplex Voice)",
        featureNameEn: "Real-time Voice Execution",
        description: "কোনো বাটনে ক্লিক বা উইন্ডো পরিবর্তন ছাড়াই মুখে সরাসরি কথা বলুন। জেমিনি লাইভ ভয়েস ইঞ্জিন তাৎক্ষণিক কথা বুঝে অ্যাকশন সম্পন্ন করবে।",
        voicePrompt: "'হেই সুপারভেক্স, পাসওয়ার্ড ১২৩৪ দিয়ে ফাইলটি লক করো এবং ডেস্কটপে সেভ করো'",
        chatPrompt: "Voice Input: Real-time Gemini Live WebSocket Duplex Connection",
        aiAction: "ভয়েস স্ট্রিম থেকে ইনটেন্ট ডিটেক্ট করে সরাসরি MicrosoftWordAgent এবং COM প্লাগইনে পাঠায়।",
        category: "Voice Engine"
      },
      {
        id: "cmd-5-2",
        featureName: "সুপারভেক্স চ্যাট উইন্ডো (Interactive Text Chat)",
        featureNameEn: "Supervex AI Desktop App Chat",
        description: "ডেস্কটপ অ্যাপের মূল ইন্টারফেসে চ্যাট বক্সে আপনার যেকোনো নির্দেশ বাংলায় বা ইংরেজিতে লিখুন।",
        voicePrompt: "চ্যাটবক্সে লিখুন: 'টেবিলের ২য় কলামে নাম্বারিং করো'",
        chatPrompt: "Type: 'Write serial numbers in the 2nd column of Word table'",
        aiAction: "এনএলপি টাস্ক প্ল্যানার স্বয়ংক্রিয়ভাবে কলাম শনাক্ত করে কয়েক মিলি-সেকেন্ডে উত্তর ও পরিবর্তন প্রদান করে।",
        category: "Text Chat"
      },
      {
        id: "cmd-5-3",
        featureName: "স্বয়ংক্রিয় সেফটি ও ব্যাকআপ গ্যারান্টি (Auto-Safety Snapshots)",
        featureNameEn: "Automated Safety Snapshots & Rollback",
        description: "যেকোনো পাসওয়ার্ড প্রয়োগ, এডিটিং রেস্ট্রিক্ট বা বড় পরিবর্তনের পূর্বে সিস্টেম নিজে থেকে একটি ব্যাকআপ স্ন্যাপশট সংরক্ষণ করে।",
        voicePrompt: "'আগের ভার্সনে ফিরে যাও'",
        chatPrompt: "Restore to previous snapshot version",
        aiAction: "ব্যবহারকারীর কাজ যাতে কোনোভাবেই নষ্ট না হয়, সেজন্য ডাবল-লেয়ার প্রি-চেঞ্জ স্ন্যাপশট পলিসি কার্যকর থাকে।",
        category: "Reliability"
      }
    ]
  },
  {
    stepId: "step-6",
    stepNumber: "Step 14",
    menuName: "Smart Context ➔ Same-Page Continuation",
    title: "স্মার্ট কনটেক্সট ও একই পেজে অবিচ্ছিন্ন ধারাবাহিক কাজ (Same-Page Flow Engine)",
    titleEn: "Active Document State Inspection & Seamless In-Place Continuation",
    badge: "Context Intelligence",
    badgeColor: "emerald",
    summary: "সুপারভেক্স এআই নির্দেশ দেওয়ার সাথে সাথে আগে দেখে কাজটা কোথায় আছে, কী বলা হয়েছে তা গভীরভাবে বুঝে একই সক্রিয় ডকুমেন্টে ধারাবাহিক নিখুঁত কাজ সম্পন্ন করে; অযথা নতুন পেজ খোলে না।",
    commands: [
      {
        id: "cmd-6-1",
        featureName: "সচল ডকুমেন্ট ও কনটেন্ট অবস্থান পরিদর্শন (Active Document Inspection)",
        featureNameEn: "Inspect Active Document & Content Hierarchy",
        description: "ওয়ার্ডে কোনো কাজ দেওয়ার সাথে সাথে এআই COM ইন্টারফেসে সচল ডকুমেন্টের নাম, কনটেন্ট, প্যারাগ্রাফ ও টেবিল সংখ্যা নিখুঁতভাবে পর্যবেক্ষণ করে অবস্থান নিশ্চিত করে।",
        voicePrompt: "'আমার খোলা ডকুমেন্টের অবস্থান দেখে নাও'",
        chatPrompt: "Inspect active document state and verify existing content structure",
        aiAction: "WordCOMWorkerThread-এর মাধ্যমে app.ActiveDocument এবং doc.Content বিশ্লেষণ করে কার্সরের সঠিক এন্ট্রি পয়েন্ট নির্ধারণ করে।",
        category: "Context Inspection"
      },
      {
        id: "cmd-6-2",
        featureName: "একই ডকুমেন্টে ধারাবাহিক কাজ (Same-Page In-Place Continuation)",
        featureNameEn: "Sequential Same-Document Flow",
        description: "একটি কাজের পর একই ডকুমেন্টে অন্য কাজ (যেমন হেডিংয়ের পর টেবিল, টেবিলের পর প্যারাগ্রাফ) বললে কোনো নতুন ফাইল না খুলে বর্তমান পেজেই নিচে নিচে কাজ করে।",
        voicePrompt: "'এর নিচে একটি ৩ রো ও ৩ কলামের টেবিল বানাও এবং তার নিচে অনুচ্ছেদ লেখো'",
        chatPrompt: "Insert a 3x3 table below current heading and append paragraph on the same active page",
        aiAction: "target_policy='active' বজায় রেখে doc.Content.InsertParagraphAfter() নিশ্চিত করে একই পেজে সুশৃঙ্খলভাবে কনটেন্ট যুক্ত করে।",
        category: "Seamless Continuation"
      },
      {
        id: "cmd-6-3",
        featureName: "নতুন ডকুমেন্ট খোলার বুদ্ধিমান নীতি (Explicit vs Implicit Targeting)",
        featureNameEn: "Intelligent Explicit New Document Resolution",
        description: "বানাও বা তৈরি করো বললেই নতুন উইন্ডো খোলে না; কেবল ব্যবহারকারী স্পষ্টভাবে 'নতুন ফাইল/ডকুমেন্ট' বললে তখনই কেবল নতুন ব্ল্যাঙ্ক ডকুমেন্ট ওপেন করা হয়।",
        voicePrompt: "'একটি সম্পূর্ণ নতুন ব্ল্যাঙ্ক ডকুমেন্ট তৈরি করো'",
        chatPrompt: "Create an explicit new blank document",
        aiAction: "is_explicit_new_doc ফিল্টারের মাধ্যমে গ্র্যানুলার এলিমেন্ট ('নতুন রো', 'নতুন টেবিল') কে বাদ দিয়ে কেবল আসল ফাইল ক্রিয়েশন নির্দেশ শনাক্ত করে।",
        category: "Targeting Policy"
      }
    ]
  },
  {
    stepId: "step-2-1",
    stepNumber: "Step 15",
    menuName: "Home Menu ➔ 2.1 Clipboard",
    title: "হোম মেনু ➔ ২.১ ক্লিপবোর্ড (Home Menu ➔ 2.1 Clipboard)",
    titleEn: "Complete Word Clipboard Management & Format Painter",
    badge: "Home Ribbon",
    badgeColor: "blue",
    summary: "মাইক্রোসফট ওয়ার্ডের সবচেয়ে বেশি ব্যবহৃত মেনু হোম রিবনের ক্লিপবোর্ড গ্রুপ—পেস্ট, পেস্ট স্পেশাল, কিপ টেক্সট অনলি, ফরম্যাট ম্যাচিং, কাট, কপি, ফরম্যাট পেইন্টার, ক্লিপবোর্ড হিস্ট্রি ও অফিস প্যানেল নিয়ন্ত্রণের পূর্ণাঙ্গ এআই সমাধান।",
    commands: [
      {
        id: "cmd-clip-1",
        featureName: "পেস্ট (Paste)",
        featureNameEn: "Standard Clipboard Paste at Cursor",
        description: "ক্লিপবোর্ডে থাকা যেকোনো লেখা, টেবিল বা অবজেক্ট সক্রিয় ডকুমেন্টে কার্সরের বর্তমান অবস্থানে পেস্ট করে।",
        voicePrompt: "ক্লিপবোর্ডের লেখা এখানে পেস্ট করো",
        chatPrompt: "Paste clipboard content at current position",
        aiAction: "Selection.Paste() এক্সিকিউট করে এবং সদ্য পেস্ট করা কনটেন্ট অ্যাক্টিভ ডকুমেন্টে যুক্ত করে।",
        category: "Paste"
      },
      {
        id: "cmd-clip-2",
        featureName: "পেস্ট স্পেশাল (Paste Special)",
        featureNameEn: "Paste Special with Explicit Data Types",
        description: "নির্দিষ্ট ফরম্যাট যেমন Unformatted Text, RTF, HTML, বা Bitmap হিসেবে ডাটা পেস্ট করে।",
        voicePrompt: "পেস্ট স্পেশাল করো আনফরম্যাটেড টেক্সট হিসেবে",
        chatPrompt: "Paste special as unformatted text",
        aiAction: "Selection.PasteSpecial(DataType=wdPasteText/wdPasteRTF/wdPasteHTML) কল করে নির্দিষ্ট ডাটা ফরম্যাটে রূপান্তর করে পেস্ট করে।",
        category: "Paste Special"
      },
      {
        id: "cmd-clip-3",
        featureName: "শুধুমাত্র টেক্সট পেস্ট (Paste as Text / Keep Text Only)",
        featureNameEn: "Keep Text Only Unformatted Paste",
        description: "উৎস ফাইলের কোনো স্টাইল, কালার বা ফন্ট ছাড়াই শুধুমাত্র প্লেইন টেক্সট হিসেবে ক্লিপবোর্ড ডাটা পেস্ট করে।",
        voicePrompt: "শুধুমাত্র টেক্সট হিসেবে পেস্ট করো",
        chatPrompt: "Paste as plain text keeping text only",
        aiAction: "উৎস ফরম্যাটিং সম্পূর্ণ স্ট্রিপ করে Selection.PasteSpecial(DataType=2) অথবা TypeText() প্রয়োগ করে।",
        category: "Paste as Text"
      },
      {
        id: "cmd-clip-4",
        featureName: "ফরম্যাট পেস্ট (Paste Formatting / Match Destination)",
        featureNameEn: "Paste Formatting & Match Destination Style",
        description: "ডকুমেন্টের বর্তমান প্যারাগ্রাফ ও ফন্ট স্টাইলের সাথে ম্যাচ করিয়ে বা ফরম্যাট পেইন্টারের স্টাইল কার্সরে পেস্ট করে।",
        voicePrompt: "ডকুমেন্টের ফরম্যাটের সাথে মিলিয়ে পেস্ট করো",
        chatPrompt: "Paste formatting and match destination style",
        aiAction: "Selection.PasteFormat() বা wdFormatSurroundingFormatting রুলস কার্যকর করে স্টাইল অক্ষুণ্ণ রাখে।",
        category: "Paste Formatting"
      },
      {
        id: "cmd-clip-5",
        featureName: "কাট (Cut Selection)",
        featureNameEn: "Cut Selected Text or Paragraph to Clipboard",
        description: "নির্বাচিত টেক্সট, টেবিল বা প্যারাগ্রাফ মুছে ফেলে সিস্টেম ক্লিপবোর্ডে সংরক্ষণ করে।",
        voicePrompt: "সিলেক্ট করা অংশটি কাট করো",
        chatPrompt: "Cut selected text to clipboard",
        aiAction: "Selection.Cut() এক্সিকিউট করে কার্সরের সিলেক্টেড রেঞ্জ ক্লিপবোর্ডে কপি করে এবং ডকুমেন্ট থেকে রিমুভ করে।",
        category: "Cut"
      },
      {
        id: "cmd-clip-6",
        featureName: "কপি (Copy Selection)",
        featureNameEn: "Copy Selected Content to Clipboard",
        description: "সিলেক্টেড টেক্সট বা উপাদান ডকুমেন্ট থেকে না মুছে ক্লিপবোর্ড হিস্ট্রিতে কপি করে সংরক্ষণ করে।",
        voicePrompt: "সিলেক্ট করা লেখাটি কপি করো",
        chatPrompt: "Copy selected text to clipboard",
        aiAction: "Selection.Copy() মেথড এক্সিকিউট করে এবং ইন-মেমোরি ও ওএস ক্লিপবোর্ডে টেক্সট রেকর্ড করে।",
        category: "Copy"
      },
      {
        id: "cmd-clip-7",
        featureName: "ফরম্যাট পেইন্টার (Format Painter)",
        featureNameEn: "Copy and Apply Formatting Styles",
        description: "কোনো টেক্সটের ফন্ট, কালার, সাইজ ও স্টাইল কপি করে অন্য কোনো নির্বাচিত লেখার উপর হুবহু পেইন্ট/প্রয়োগ করে।",
        voicePrompt: "এই লেখার ফরম্যাট কপি করে নিচের অংশে পেইন্ট করো",
        chatPrompt: "Use format painter to copy format and paint on target text",
        aiAction: "Selection.CopyFormat() দিয়ে স্টাইল ক্যাপচার করে এবং টার্গেট সিলেকশনে Selection.PasteFormat() কল করে।",
        category: "Format Painter"
      },
      {
        id: "cmd-clip-8",
        featureName: "ক্লিপবোর্ড হিস্ট্রি (Clipboard History)",
        featureNameEn: "Inspect Recent Cut and Copied Clipboard Items",
        description: "সম্প্রতি কাট বা কপি করা টেক্সট ও আইটেমসমূহের তালিকা, টাইমস্ট্যাম্প ও অক্ষরের দৈর্ঘ্য প্রদর্শন করে।",
        voicePrompt: "ক্লিপবোর্ড হিস্ট্রি দেখাও",
        chatPrompt: "Show recent clipboard history",
        aiAction: "সিস্টেম ও ওয়ার্ড ইঞ্জিনের _clipboard_history লগ থেকে সাম্প্রতিক আইটেমগুলোর প্রিভিউ ও সময় রিটার্ন করে।",
        category: "Clipboard History"
      },
      {
        id: "cmd-clip-9",
        featureName: "ক্লিপবোর্ড টাস্ক প্যানেল (Office Clipboard Pane)",
        featureNameEn: "Toggle Microsoft Word Office Clipboard Side Pane",
        description: "মাইক্রোসফট ওয়ার্ডের পাশের অফিস ক্লিপবোর্ড টাস্ক প্যানেলটি ওপেন বা ক্লোজ করে।",
        voicePrompt: "অফিস ক্লিপবোর্ড প্যানেল খোলো",
        chatPrompt: "Open Office Clipboard task pane in Word",
        aiAction: "Application.CommandBars('Office Clipboard').Visible প্রোপার্টি টগল করে রিয়েল প্যানেল প্রদর্শন বা বন্ধ করে।",
        category: "Clipboard Pane"
      },
      {
        id: "cmd-clip-10",
        featureName: "ক্লিপবোর্ড ক্লিয়ার (Clear All Clipboard)",
        featureNameEn: "Clear System and Office Clipboard Memory",
        description: "উইন্ডোজ ও অফিস ক্লিপবোর্ডে সংরক্ষিত সমস্ত পূর্ববর্তী ডাটা ও হিস্ট্রি সম্পূর্ণ খালি বা মুছে দেয়।",
        voicePrompt: "ক্লিপবোর্ডের সব ডাটা মুছে দাও",
        chatPrompt: "Clear all items from clipboard memory",
        aiAction: "win32clipboard.EmptyClipboard() এবং ইন-মেমোরি হিস্ট্রি ফ্লাশ করে মেমোরি নিরাপদ ও পরিষ্কার করে।",
        category: "Clear Clipboard"
      }
    ]
  },
  {
    stepId: "step-2-2",
    stepNumber: "Step 16",
    menuName: "Home Menu ➔ 2.2 Font",
    title: "হোম মেনু ➔ ২.২ ফন্ট ও টাইপোগ্রাফি (Home Menu ➔ 2.2 Font)",
    titleEn: "Complete 23-Feature Font Styling, Case Conversion, Color, Effects & OpenType Typography",
    badge: "Home Ribbon",
    badgeColor: "blue",
    summary: "ফন্ট ফ্যামিলি, ফন্ট সাইজ বৃদ্ধি/হ্রাস, বোল্ড, ইটালিক, আন্ডারলাইন, ডাবল আন্ডারলাইন, স্ট্রাইকথ্রু, সাবস্ক্রিপ্ট, সুপারস্ক্রিপ্ট, ৫ ধরনের চেঞ্জ কেস, হাইলাইট ও ফন্ট কালার, ক্লিয়ার ফরম্যাটিং, টেক্সট ইফেক্ট, ওপেনটাইপ টাইপোগ্রাফি এবং ক্যারেক্টার স্পেসিংয়ের ২৩টি ফিচারের শতভাগ স্বয়ংক্রিয় নিয়ন্ত্রণ।",
    commands: [
      {
        id: "cmd-font-1",
        featureName: "ফন্ট ফ্যামিলি পরিবর্তন (Font Family)",
        featureNameEn: "Set Font Typeface (English & Bengali Fonts)",
        description: "নির্বাচিত লেখা বা ডকুমেন্টের ফন্ট ফ্যামিলি পরিবর্তন করে যেকোনো ফন্ট (যেমন: Times New Roman, Arial, Calibri, SolaimanLipi, SutonnyMJ, Nikosh) সেট করে।",
        voicePrompt: "ফন্ট ফ্যামিলি Times New Roman করো",
        chatPrompt: "Change font family to Times New Roman",
        aiAction: "Range.Font.Name, NameAscii, NameBi এবং NameOther প্রোপার্টিতে কাঙ্ক্ষিত ফন্ট সেট করে।",
        category: "Font Family"
      },
      {
        id: "cmd-font-2",
        featureName: "ফন্ট সাইজ নির্ধারণ (Font Size)",
        featureNameEn: "Set Exact Font Size in Points",
        description: "লেখার আকার নির্দিষ্ট পয়েন্টে (যেমন: ১০, ১২, ১৪, ১৬, ১৮, ২৪ বা ৩৬ pt) নির্ধারণ করে।",
        voicePrompt: "ফন্ট সাইজ ১৬ করো",
        chatPrompt: "Set font size to 16 pt",
        aiAction: "Range.Font.Size এবং Font.SizeBi প্রোপার্টিতে পয়েন্ট সাইজ সেট করে।",
        category: "Font Size"
      },
      {
        id: "cmd-font-3",
        featureName: "ফন্ট সাইজ বৃদ্ধি (Increase Font Size)",
        featureNameEn: "Grow Font Size Step-by-Step (A^)",
        description: "ওয়ার্ড রিবনের Grow Font বাটনের মতো নির্বাচিত লেখার আকার এক ধাপ বা নির্দিষ্ট পয়েন্টে বড় করে।",
        voicePrompt: "ফন্ট সাইজ বাড়াও",
        chatPrompt: "Increase font size of the selected text",
        aiAction: "Range.Font.Grow() মেথড কল করে স্ট্যান্ডার্ড স্কেলে ফন্ট সাইজ বৃদ্ধি করে।",
        category: "Increase Size"
      },
      {
        id: "cmd-font-4",
        featureName: "ফন্ট সাইজ হ্রাস (Decrease Font Size)",
        featureNameEn: "Shrink Font Size Step-by-Step (Av)",
        description: "ওয়ার্ড রিবনের Shrink Font বাটনের মতো নির্বাচিত লেখার আকার এক ধাপ বা নির্দিষ্ট পয়েন্টে ছোট করে।",
        voicePrompt: "ফন্ট সাইজ কমাও",
        chatPrompt: "Decrease font size of the selected text",
        aiAction: "Range.Font.Shrink() মেথড কল করে স্ট্যান্ডার্ড স্কেলে ফন্ট সাইজ হ্রাস করে।",
        category: "Decrease Size"
      },
      {
        id: "cmd-font-5",
        featureName: "বোল্ড ফরম্যাটিং (Bold)",
        featureNameEn: "Apply or Toggle Bold Text",
        description: "নির্বাচিত টেক্সট বা প্যারাগ্রাফকে বোল্ড (মোটা অক্ষর) করে অথবা বোল্ড বন্ধ করে।",
        voicePrompt: "লেখাটি বোল্ড করো",
        chatPrompt: "Make the selected text bold",
        aiAction: "Range.Font.Bold = -1 এবং Font.BoldBi = -1 প্রোপার্টি সক্রিয় করে।",
        category: "Bold"
      },
      {
        id: "cmd-font-6",
        featureName: "ইটালিক ফরম্যাটিং (Italic)",
        featureNameEn: "Apply or Toggle Italic Text",
        description: "নির্বাচিত টেক্সটকে ইটালিক (বাঁকা অক্ষর) করে অথবা ইটালিক ফরম্যাট তুলে দেয়।",
        voicePrompt: "লেখাটি ইটালিক করো",
        chatPrompt: "Make the selected text italic",
        aiAction: "Range.Font.Italic = -1 এবং Font.ItalicBi = -1 প্রোপার্টি সক্রিয় করে।",
        category: "Italic"
      },
      {
        id: "cmd-font-7",
        featureName: "আন্ডারলাইন (Underline)",
        featureNameEn: "Single, Dotted, Dashed, Wavy or Thick Underline",
        description: "লেখার নিচে সিঙ্গেল, ডটেড, ড্যাশড, ওয়েভি বা মোটা আন্ডারলাইন দাগ যুক্ত করে।",
        voicePrompt: "লেখায় আন্ডারলাইন দাও",
        chatPrompt: "Underline the selected text",
        aiAction: "Range.Font.Underline = wdUnderlineSingle (1) অথবা কাঙ্ক্ষিত আন্ডারলাইন স্টাইল সেট করে।",
        category: "Underline"
      },
      {
        id: "cmd-font-8",
        featureName: "ডাবল আন্ডারলাইন (Double Underline)",
        featureNameEn: "Apply Double Line Underline",
        description: "গুরুত্বপূর্ণ শিরোনাম বা মোট হিসাবের নিচে জোড়া দাগ (Double Underline) প্রয়োগ করে।",
        voicePrompt: "ডাবল আন্ডারলাইন করো",
        chatPrompt: "Apply double underline to the selected text",
        aiAction: "Range.Font.Underline = wdUnderlineDouble (3) প্রোপার্টি সরাসরি প্রয়োগ করে।",
        category: "Double Underline"
      },
      {
        id: "cmd-font-9",
        featureName: "স্ট্রাইকথ্রু (Strikethrough)",
        featureNameEn: "Single or Double Strikethrough Line",
        description: "লেখার মাঝ বরাবর কাটা দাগ (Single বা Double Strikethrough) টেনে দেয়।",
        voicePrompt: "লেখায় স্ট্রাইকথ্রু দাও",
        chatPrompt: "Apply strikethrough to the selected text",
        aiAction: "Range.Font.StrikeThrough = -1 (অথবা DoubleStrikeThrough = -1) সেট করে।",
        category: "Strikethrough"
      },
      {
        id: "cmd-font-10",
        featureName: "সাবস্ক্রিপ্ট (Subscript — H₂O)",
        featureNameEn: "Format Text as Subscript Baseline",
        description: "রাসায়নিক সংকেত বা নিচের ভিত্তি সূচক লেখার জন্য টেক্সটকে বেসলাইনের নিচে ছোট আকারে (Subscript) বসায়।",
        voicePrompt: "সাবস্ক্রিপ্ট করো",
        chatPrompt: "Format selected text as subscript",
        aiAction: "Range.Font.Subscript = -1 সেট করে এবং Superscript স্বয়ংক্রিয়ভাবে বন্ধ করে।",
        category: "Subscript"
      },
      {
        id: "cmd-font-11",
        featureName: "সুপারস্ক্রিপ্ট (Superscript — x²)",
        featureNameEn: "Format Text as Superscript Exponent",
        description: "গাণিতিক ঘাত বা ক্রমিক সূচক (যেমন x², 1st) লেখার জন্য টেক্সটকে লাইনের উপরে ছোট আকারে (Superscript) বসায়।",
        voicePrompt: "সুপারস্ক্রিপ্ট করো",
        chatPrompt: "Format selected text as superscript",
        aiAction: "Range.Font.Superscript = -1 সেট করে এবং Subscript স্বয়ংক্রিয়ভাবে বন্ধ করে।",
        category: "Superscript"
      },
      {
        id: "cmd-font-12",
        featureName: "চেঞ্জ কেস মেনু (Change Case)",
        featureNameEn: "Unified Case Transformation Engine",
        description: "যেকোনো নির্বাচিত ইংরেজি লেখার কেস (Sentence, lower, UPPER, Capitalize Each Word, Toggle) তাৎক্ষণিক পরিবর্তন করে।",
        voicePrompt: "চেঞ্জ কেস করে আপারকেস করো",
        chatPrompt: "Change case of selected text",
        aiAction: "Range.Case এবং ডিটারমিনিস্টিক কেস কনভার্টারের মাধ্যমে অক্ষরের রূপান্তর সম্পন্ন করে।",
        category: "Change Case"
      },
      {
        id: "cmd-font-13",
        featureName: "সেন্টেন্স কেস (Sentence Case)",
        featureNameEn: "Capitalize First Letter of Each Sentence",
        description: "প্রতিটি বাক্যের প্রথম অক্ষর বড় হাতের এবং বাকি সব অক্ষর ছোট হাতের অক্ষরে রূপান্তর করে।",
        voicePrompt: "সেন্টেন্স কেস করো",
        chatPrompt: "Convert text to Sentence case",
        aiAction: "Range.Case = wdTitleSentence (4) এবং রেজেক্স ভেরিফিকেশনের মাধ্যমে বাক্যের প্রথম অক্ষর বড় করে।",
        category: "Sentence Case"
      },
      {
        id: "cmd-font-14",
        featureName: "লোয়ারকেস / ছোট হাতের অক্ষর (lowercase)",
        featureNameEn: "Convert All Letters to lowercase",
        description: "নির্বাচিত লেখার সব ইংরেজি অক্ষরকে ছোট হাতের অক্ষরে (lowercase) রূপান্তর করে।",
        voicePrompt: "সব ছোট হাতের অক্ষর করো",
        chatPrompt: "Convert selected text to lowercase",
        aiAction: "Range.Case = wdLowerCase (0) প্রয়োগ করে সম্পূর্ণ টেক্সট ছোট হাতের অক্ষরে রূপান্তর করে।",
        category: "lowercase"
      },
      {
        id: "cmd-font-15",
        featureName: "আপারকেস / বড় হাতের অক্ষর (UPPERCASE)",
        featureNameEn: "Convert All Letters to UPPERCASE",
        description: "নির্বাচিত লেখার সব ইংরেজি অক্ষরকে বড় হাতের অক্ষরে (UPPERCASE / ALL CAPS) রূপান্তর করে।",
        voicePrompt: "সব বড় হাতের অক্ষর করো",
        chatPrompt: "Convert selected text to UPPERCASE",
        aiAction: "Range.Case = wdUpperCase (1) প্রয়োগ করে সম্পূর্ণ টেক্সট বড় হাতের অক্ষরে রূপান্তর করে।",
        category: "UPPERCASE"
      },
      {
        id: "cmd-font-16",
        featureName: "ক্যাপিটালাইজ ইচ ওয়ার্ড (Capitalize Each Word)",
        featureNameEn: "Title Case — Capitalize First Letter of Every Word",
        description: "প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের এবং বাকি অক্ষর ছোট হাতের (Title Case) করে।",
        voicePrompt: "ক্যাপিটালাইজ ইচ ওয়ার্ড করো",
        chatPrompt: "Capitalize each word in selected text",
        aiAction: "Range.Case = wdTitleWord (2) প্রয়োগ করে প্রতিটি শব্দের প্রথম অক্ষর ক্যাপিটাল করে।",
        category: "Capitalize Each Word"
      },
      {
        id: "cmd-font-17",
        featureName: "টগল কেস (tOGGLE cASE)",
        featureNameEn: "Invert Uppercase and Lowercase Letters",
        description: "বড় হাতের অক্ষরগুলোকে ছোট হাতের এবং ছোট হাতের অক্ষরগুলোকে বড় হাতের অক্ষরে উল্টে দেয়।",
        voicePrompt: "টগল কেস করো",
        chatPrompt: "Toggle case of the selected text",
        aiAction: "Range.Case = wdToggleCase (5) এবং swapcase() মেথডের মাধ্যমে প্রতিটি অক্ষরের কেস রিভার্স করে।",
        category: "Toggle Case"
      },
      {
        id: "cmd-font-18",
        featureName: "টেক্সট হাইলাইট কালার (Text Highlight Color)",
        featureNameEn: "Apply Marker Highlight Background Color",
        description: "লেখার পেছনে হলুদ, উজ্জ্বল সবুজ, আসমানী, গোলাপি, নীল বা লাল হাইলাইটার কালার দেয় অথবা হাইলাইট মুছে ফেলে।",
        voicePrompt: "হলুদ হাইলাইট কালার দাও",
        chatPrompt: "Highlight selected text in yellow",
        aiAction: "Range.HighlightColorIndex = wdYellow (7) বা নির্দিষ্ট WdColorIndex মান প্রয়োগ করে।",
        category: "Highlight Color"
      },
      {
        id: "cmd-font-19",
        featureName: "ফন্ট কালার / লেখার রঙ (Font Color)",
        featureNameEn: "Set Text Color by Name, RGB or Hex",
        description: "লেখার ফন্টের রঙ পরিবর্তন করে লাল, নীল, সবুজ, সোনালী, বেগুনি, কালো বা যেকোনো Hex কোডে রূপান্তর করে।",
        voicePrompt: "ফন্টের রঙ লাল করো",
        chatPrompt: "Change font color to red",
        aiAction: "২৪-বিট BGR কালার ইন্টিজার হিসাব করে Range.Font.Color প্রোপার্টিতে সরাসরি সেট করে।",
        category: "Font Color"
      },
      {
        id: "cmd-font-20",
        featureName: "ক্লিয়ার ফরম্যাটিং (Clear Formatting)",
        featureNameEn: "Strip All Formatting and Reset to Normal",
        description: "নির্বাচিত লেখার সকল বোল্ড, ইটালিক, আন্ডারলাইন, রঙ, হাইলাইট ও ইফেক্ট মুছে ডিফল্ট প্লেইন লেখায় ফিরিয়ে আনে।",
        voicePrompt: "সব ফরম্যাট মুছে ফেলো",
        chatPrompt: "Clear all formatting from selected text",
        aiAction: "Range.Font.Reset(), HighlightColorIndex = 0 এবং ডিফল্ট ফন্ট প্রোপার্টি রিসেট করে।",
        category: "Clear Formatting"
      },
      {
        id: "cmd-font-21",
        featureName: "টেক্সট ইফেক্টস (Text Effects)",
        featureNameEn: "Shadow, Outline, Emboss, Engrave, Glow & Reflection",
        description: "লেখায় দৃষ্টিনন্দন শ্যাডো (ছায়া), আউটলাইন, এমবস, এনগ্রেভ, গ্লো, রিফ্লেকশন বা স্মল ক্যাপস ইফেক্ট প্রয়োগ করে।",
        voicePrompt: "লেখায় শ্যাডো টেক্সট ইফেক্ট দাও",
        chatPrompt: "Apply shadow text effect to selected text",
        aiAction: "Font.Shadow, Font.Outline, Font.Emboss, Font.Engrave, Font.Glow ও Reflection প্রোপার্টি নিয়ন্ত্রণ করে।",
        category: "Text Effects"
      },
      {
        id: "cmd-font-22",
        featureName: "টাইপোগ্রাফি সেটিংস (Typography Settings)",
        featureNameEn: "OpenType Ligatures, Number Spacing, Number Forms & Stylistic Sets",
        description: "ওপেনটাইপ ফন্টের লিগেচার (Standard/Contextual/All), নাম্বার স্পেসিং (Proportional/Tabular), নাম্বার ফর্ম এবং স্টাইলিস্টিক সেট (১-২০) কনফিগার করে।",
        voicePrompt: "টাইপোগ্রাফি সেটিংস থেকে সব লিগেচার এবং ট্যাবুলার নাম্বার স্পেসিং চালু করো",
        chatPrompt: "Enable all OpenType ligatures and tabular number spacing",
        aiAction: "Font.Ligatures, Font.NumberSpacing, Font.NumberForm এবং Font.StylisticSet প্রোপার্টি সেট করে।",
        category: "Typography"
      },
      {
        id: "cmd-font-23",
        featureName: "ক্যারেক্টার স্পেসিং (Character Spacing)",
        featureNameEn: "Expanded/Condensed Letter Spacing, Scaling %, Position & Kerning",
        description: "অক্ষরের মধ্যকার দূরত্ব বাড়ানো (Expanded) বা কমানো (Condensed), হরাইজন্টাল স্কেলিং শতাংশ, পজিশন (Raised/Lowered) এবং কার্নিং নিয়ন্ত্রণ করে।",
        voicePrompt: "ক্যারেক্টার স্পেসিং ২ পয়েন্ট বাড়াও",
        chatPrompt: "Set character spacing to expanded by 2 pt",
        aiAction: "Font.Spacing, Font.Scaling, Font.Position এবং Font.Kerning প্রোপার্টিতে নির্ভুল মান প্রয়োগ করে।",
        category: "Character Spacing"
      }
    ]
  },
  {
    stepId: "step-2-3",
    stepNumber: "Step 17",
    menuName: "Home Menu ➔ 2.3 Paragraph",
    title: "প্যারাগ্রাফ, বুলেট ও নাম্বারিং, অ্যালাইনমেন্ট, স্পেসিং, বর্ডার ও সর্টিং (Paragraph Menu)",
    titleEn: "Home ➔ Paragraph: Bullets, Numbering, Multilevel List, Indents, Alignment, Line & Paragraph Spacing, Shading, Borders, Sort & Pagination",
    badge: "20 Paragraph Actions Live",
    summary: "মাইক্রোসফট ওয়ার্ডের হোম মেনুর প্যারাগ্রাফ (Paragraph) গ্রুপের সকল ২০টি অপারেশন—বুলেট ও নাম্বারিং লিস্ট, মাল্টিলেভেল লিস্ট, ইনডেন্ট কমানো ও বাড়ানো, বামে/মাঝখানে/ডানে/জাস্টিফাই অ্যালাইনমেন্ট, লাইন ও প্যারাগ্রাফ স্পেসিং, ব্যাকগ্রাউন্ড শেডিং, প্যারাগ্রাফ বর্ডার, বর্ণানুক্রমে সর্টিং (A to Z / Z to A), ফরম্যাটিং চিহ্ন (¶) টগল এবং পেজ ব্রেক কন্ট্রোল (Keep with Next, Keep Lines Together, Page Break Before, Widow/Orphan Control)—সরাসরি ভয়েস ও টেক্সট কমান্ডে নিয়ন্ত্রণ করুন।",
    commands: [
      {
        id: "cmd-para-1",
        featureName: "বুলেট লিস্ট (Bullets)",
        featureNameEn: "Apply or Remove Bulleted List",
        description: "নির্বাচিত প্যারাগ্রাফ বা আইটেমগুলোতে সুন্দর বুলেট পয়েন্ট তালিকা (• Bulleted List) প্রয়োগ করে অথবা বুলেট তুলে দেয়।",
        voicePrompt: "প্যারাগ্রাফে বুলেট লিস্ট দাও",
        chatPrompt: "Apply bullets to the selected paragraphs",
        aiAction: "Range.ListFormat.ApplyBulletDefault() মেথড কল করে প্যারাগ্রাফে বুলেট ফরম্যাট সেট করে।",
        category: "Lists"
      },
      {
        id: "cmd-para-2",
        featureName: "নাম্বারিং লিস্ট (Numbering)",
        featureNameEn: "Apply or Remove Numbered List (1., 2., 3.)",
        description: "নির্বাচিত প্যারাগ্রাফ বা লাইনগুলোকে ক্রমিক নম্বরযুক্ত তালিকায় (1., 2., 3.) রূপান্তর করে।",
        voicePrompt: "নাম্বারিং লিস্ট করো",
        chatPrompt: "Apply numbered list to the paragraphs",
        aiAction: "Range.ListFormat.ApplyNumberDefault() এর মাধ্যমে স্বয়ংক্রিয় ক্রমিক নাম্বারিং চালু করে।",
        category: "Lists"
      },
      {
        id: "cmd-para-3",
        featureName: "মাল্টিলেভেল লিস্ট (Multilevel List)",
        featureNameEn: "Apply Hierarchical Outline Multilevel List (Levels 1-9)",
        description: "বহুস্তর বিশিষ্ট আউটলাইন নাম্বারিং তালিকা (1, 1.1, 1.1.1) তৈরি করে এবং নির্দিষ্ট লেভেল (১-৯) সেট করে।",
        voicePrompt: "মাল্টিলেভেল লিস্ট করো লেভেল ২ সহ",
        chatPrompt: "Apply multilevel list at level 2",
        aiAction: "ListFormat.ApplyOutlineNumberDefault() এবং ListLevelNumber প্রোপার্টি কনফিগার করে।",
        category: "Lists"
      },
      {
        id: "cmd-para-4",
        featureName: "ইনডেন্ট কমানো (Decrease Indent)",
        featureNameEn: "Decrease Left Paragraph Indentation",
        description: "প্যারাগ্রাফের বাম পাশের মার্জিন ইনডেন্ট এক ধাপ (৩৬ পয়েন্ট বা ০.৫ ইঞ্চি) বামে সরিয়ে কমায়।",
        voicePrompt: "প্যারাগ্রাফের ইনডেন্ট কমাও",
        chatPrompt: "Decrease paragraph indent",
        aiAction: "ParagraphFormat.LeftIndent প্রোপার্টির মান নির্ধারিত পয়েন্ট অনুযায়ী কমিয়ে বামে আনে।",
        category: "Indentation"
      },
      {
        id: "cmd-para-5",
        featureName: "ইনডেন্ট বাড়ানো (Increase Indent)",
        featureNameEn: "Increase Left Paragraph Indentation",
        description: "প্যারাগ্রাফের বাম পাশের ইনডেন্ট এক ধাপ (৩৬ পয়েন্ট বা ০.৫ ইঞ্চি) ডানে সরিয়ে বাড়ায়।",
        voicePrompt: "প্যারাগ্রাফের ইনডেন্ট বাড়াও",
        chatPrompt: "Increase paragraph indent",
        aiAction: "ParagraphFormat.LeftIndent প্রোপার্টির মান বাড়িয়ে প্যারাগ্রাফ ভেতরের দিকে সরায়।",
        category: "Indentation"
      },
      {
        id: "cmd-para-6",
        featureName: "বাম পাশে অ্যালাইন (Align Left)",
        featureNameEn: "Align Paragraph Text to the Left",
        description: "প্যারাগ্রাফের লেখা বাম মার্জিনের সাথে সমান্তরালভাবে অ্যালাইন (Left Align) করে।",
        voicePrompt: "বাম পাশে অ্যালাইন করো",
        chatPrompt: "Align paragraph to the left",
        aiAction: "ParagraphFormat.Alignment = 0 (wdAlignParagraphLeft) প্রোপার্টি সেট করে।",
        category: "Alignment"
      },
      {
        id: "cmd-para-7",
        featureName: "মাঝখানে অ্যালাইন / সেন্টার (Center)",
        featureNameEn: "Center Align Paragraph Text",
        description: "শিরোনাম বা প্যারাগ্রাফের লেখা পৃষ্ঠার ঠিক মাঝখানে (Center Align) স্থাপন করে।",
        voicePrompt: "সেন্টার অ্যালাইন করো",
        chatPrompt: "Center align the paragraph",
        aiAction: "ParagraphFormat.Alignment = 1 (wdAlignParagraphCenter) প্রোপার্টি সেট করে।",
        category: "Alignment"
      },
      {
        id: "cmd-para-8",
        featureName: "ডান পাশে অ্যালাইন (Align Right)",
        featureNameEn: "Align Paragraph Text to the Right",
        description: "তারিখ, স্বাক্ষর বা প্যারাগ্রাফের লেখা ডান মার্জিনের সাথে সমান্তরালভাবে (Right Align) সাজায়।",
        voicePrompt: "ডান পাশে অ্যালাইন করো",
        chatPrompt: "Align paragraph to the right",
        aiAction: "ParagraphFormat.Alignment = 2 (wdAlignParagraphRight) প্রোপার্টি সেট করে।",
        category: "Alignment"
      },
      {
        id: "cmd-para-9",
        featureName: "জাস্টিফাই অ্যালাইনমেন্ট (Justify)",
        featureNameEn: "Justify Paragraph Text Evenly on Both Sides",
        description: "প্যারাগ্রাফের বাম এবং ডান উভয় পাশ সমান ও পরিপাটি করে সাজায় (প্রফেশনাল রিপোর্ট ও বইয়ের জন্য আদর্শ)।",
        voicePrompt: "প্যারাগ্রাফ জাস্টিফাই করো",
        chatPrompt: "Justify paragraph alignment",
        aiAction: "ParagraphFormat.Alignment = 3 (wdAlignParagraphJustify) প্রোপার্টি সেট করে।",
        category: "Alignment"
      },
      {
        id: "cmd-para-10",
        featureName: "লাইন স্পেসিং (Line Spacing)",
        featureNameEn: "Set Line Spacing (1.0, 1.15, 1.5, 2.0, 2.5, 3.0)",
        description: "প্যারাগ্রাফের লাইনগুলোর মধ্যকার উল্লম্ব দূরত্ব (Single, 1.15, 1.5, Double বা যেকোনো মান) নির্ধারণ করে।",
        voicePrompt: "লাইন স্পেসিং 1.5 করো",
        chatPrompt: "Set line spacing to 1.5",
        aiAction: "ParagraphFormat.LineSpacingRule এবং LineSpacing প্রোপার্টি পয়েন্ট মানে কনফিগার করে।",
        category: "Spacing"
      },
      {
        id: "cmd-para-11",
        featureName: "প্যারাগ্রাফ স্পেসিং (Paragraph Spacing)",
        featureNameEn: "Set Space Before and Space After Paragraph (pt)",
        description: "প্যারাগ্রাফের আগে (Space Before) এবং পরে (Space After) কত পয়েন্ট ফাঁকা জায়গা থাকবে তা নির্ধারণ বা অপসারণ করে।",
        voicePrompt: "প্যারাগ্রাফ স্পেসিং before 6 এবং after 12 করো",
        chatPrompt: "Set paragraph spacing before 6 pt and after 12 pt",
        aiAction: "ParagraphFormat.SpaceBefore এবং ParagraphFormat.SpaceAfter প্রোপার্টি সরাসরি আপডেট করে।",
        category: "Spacing"
      },
      {
        id: "cmd-para-12",
        featureName: "প্যারাগ্রাফ শেডিং (Shading)",
        featureNameEn: "Apply Background Shading Color to Paragraph",
        description: "নির্বাচিত প্যারাগ্রাফের সম্পূর্ণ ব্যাকগ্রাউন্ডে হালকা নীল, ধূসর, হলুদ, সবুজ বা যেকোনো কাস্টম শেডিং রঙ দেয়।",
        voicePrompt: "প্যারাগ্রাফ শেডিং light blue করো",
        chatPrompt: "Apply light blue shading to the paragraph",
        aiAction: "ParagraphFormat.Shading.BackgroundPatternColor প্রোপার্টিতে BGR কালার কোড সেট করে।",
        category: "Shading & Borders"
      },
      {
        id: "cmd-para-13",
        featureName: "প্যারাগ্রাফ বর্ডার (Borders)",
        featureNameEn: "Apply Outside, Bottom, Top, Left, Right or No Borders",
        description: "প্যারাগ্রাফের চারপাশে বক্স বর্ডার (Outside Borders), শুধু নিচে (Bottom Border), উপরে বা ডানে/বামে বর্ডার যোগ বা অপসারণ করে।",
        voicePrompt: "প্যারাগ্রাফে আউটসাইড বর্ডার দাও",
        chatPrompt: "Add outside border to the paragraph",
        aiAction: "ParagraphFormat.Borders(-1..-4).LineStyle ও Enable প্রোপার্টি নিয়ন্ত্রণ করে।",
        category: "Shading & Borders"
      },
      {
        id: "cmd-para-14",
        featureName: "প্যারাগ্রাফ সর্ট (Sort A to Z / Z to A)",
        featureNameEn: "Sort Paragraphs Alphabetically or Numerically (Ascending / Descending)",
        description: "ডকুমেন্ট বা নির্বাচিত অংশের প্যারাগ্রাফগুলো বর্ণানুক্রমে A থেকে Z (Ascending) অথবা Z থেকে A (Descending) ক্রমে সাজায়।",
        voicePrompt: "প্যারাগ্রাফ A থেকে Z সর্ট করো",
        chatPrompt: "Sort paragraphs A to Z ascending",
        aiAction: "Range.Sort() এবং ডিটারমিনিস্টিক আলফানিউমেরিক সর্টিং ইঞ্জিনের মাধ্যমে প্যারাগ্রাফগুলো ক্রমানুসারে সাজায়।",
        category: "Sort & Marks"
      },
      {
        id: "cmd-para-15",
        featureName: "শো/হাইড ফরম্যাটিং মার্কস (Show/Hide ¶)",
        featureNameEn: "Toggle Paragraph & Formatting Marks (¶)",
        description: "ডকুমেন্টের লুকানো প্যারাগ্রাফ চিহ্ন (¶), স্পেস ডট ও ট্যাব চিহ্নগুলো এক কমান্ডে দেখায় (Show) অথবা লুকিয়ে ফেলে (Hide)।",
        voicePrompt: "শো হাইড ফরম্যাটিং মার্ক চালু করো",
        chatPrompt: "Toggle Show/Hide paragraph formatting marks",
        aiAction: "ActiveWindow.ActivePane.View.ShowAll প্রোপার্টি টগল করে ফরম্যাটিং চিহ্ন নিয়ন্ত্রণ করে।",
        category: "Sort & Marks"
      },
      {
        id: "cmd-para-16",
        featureName: "প্যারাগ্রাফ সেটিংস (Paragraph Settings)",
        featureNameEn: "Configure Complete Paragraph Dialog (Special Indent, Spacing & Alignment)",
        description: "একসাথে প্যারাগ্রাফের অ্যালাইনমেন্ট, বাম/ডান ইনডেন্ট, First Line বা Hanging Indent এবং লাইন ও প্যারাগ্রাফ স্পেসিং কনফিগার করে।",
        voicePrompt: "প্যারাগ্রাফ সেটিংস থেকে ফার্স্ট লাইন ইনডেন্ট ও জাস্টিফাই চালু করো",
        chatPrompt: "Configure paragraph settings with first line indent and 1.15 line spacing",
        aiAction: "ParagraphFormat এর সকল ইনডেন্টেশন, ফার্স্ট লাইন/হ্যাঙ্গিং ইনডেন্ট ও স্পেসিং প্রোপার্টি একত্রে সেট করে।",
        category: "Paragraph Dialog"
      },
      {
        id: "cmd-para-17",
        featureName: "কিপ উইথ নেক্সট (Keep with Next)",
        featureNameEn: "Prevent Page Break Between Current and Next Paragraph",
        description: "শিরোনাম বা বর্তমান প্যারাগ্রাফ যেন পরবর্তী প্যারাগ্রাফ থেকে বিচ্ছিন্ন হয়ে আগের পৃষ্ঠায় একা থেকে না যায় তা নিশ্চিত করে।",
        voicePrompt: "Keep with Next চালু করো",
        chatPrompt: "Enable Keep with Next for the paragraph",
        aiAction: "ParagraphFormat.KeepWithNext = -1 প্রোপার্টি সক্রিয় করে।",
        category: "Pagination"
      },
      {
        id: "cmd-para-18",
        featureName: "কিপ লাইনস টুগেদার (Keep Lines Together)",
        featureNameEn: "Prevent Page Break Inside a Paragraph",
        description: "একটি প্যারাগ্রাফের লাইনগুলো যেন দুই পৃষ্ঠায় ভেঙে না গিয়ে একই পৃষ্ঠায় একত্রে থাকে তা নিশ্চিত করে।",
        voicePrompt: "Keep Lines Together চালু করো",
        chatPrompt: "Enable Keep Lines Together on selected paragraph",
        aiAction: "ParagraphFormat.KeepTogether = -1 প্রোপার্টি সক্রিয় করে।",
        category: "Pagination"
      },
      {
        id: "cmd-para-19",
        featureName: "পেজ ব্রেক বিফোর (Page Break Before)",
        featureNameEn: "Force Paragraph to Start on a New Page",
        description: "নির্বাচিত প্যারাগ্রাফ বা অধ্যায়ের শিরোনাম সর্বদা নতুন পৃষ্ঠার শুরুতে স্থাপন করে।",
        voicePrompt: "Page Break Before চালু করো",
        chatPrompt: "Enable Page Break Before on the current paragraph",
        aiAction: "ParagraphFormat.PageBreakBefore = -1 প্রোপার্টি সেট করে।",
        category: "Pagination"
      },
      {
        id: "cmd-para-20",
        featureName: "উইডো/অরফান কন্ট্রোল (Widow/Orphan Control)",
        featureNameEn: "Prevent Single Isolated First or Last Paragraph Line on a Page",
        description: "প্যারাগ্রাফের প্রথম বা শেষ একটিমাত্র লাইন যেন পৃষ্ঠার শেষে বা নতুন পৃষ্ঠার শুরুতে একা বিচ্ছিন্ন হয়ে না থাকে তা রোধ করে।",
        voicePrompt: "উইডো অরফান কন্ট্রোল চালু করো",
        chatPrompt: "Enable Widow/Orphan Control for the document",
        aiAction: "ParagraphFormat.WidowControl = -1 প্রোপার্টি সক্রিয় করে।",
        category: "Pagination"
      }
    ]
  },
  {
    stepId: "step-2-4",
    stepNumber: "Step 18",
    menuName: "Home Menu ➔ 2.4 Styles",
    title: "প্রফেশনাল ডকুমেন্ট স্টাইল গ্যালারি ও কাস্টম স্টাইল ম্যানেজমেন্ট (২৩টি অপারেশন)",
    titleEn: "Complete Word Styles Gallery, Heading 1–9, Quotes, Emphasis & Custom Style Engine",
    subtitle: "Normal, No Spacing, Title, Subtitle, Heading 1 থেকে Heading 9, Quote, Intense Quote, Subtle Emphasis, Emphasis, Strong, Book Title এবং নতুন স্টাইল তৈরি, মডিফাই ও ম্যানেজমেন্ট।",
    badge: "Styles Gallery Engine",
    icon: "Palette",
    commands: [
      {
        id: "cmd-style-1",
        featureName: "নরমাল স্টাইল (Normal)",
        featureNameEn: "Apply Built-in Normal Body Style",
        description: "নির্বাচিত প্যারাগ্রাফ বা টেক্সটে ওয়ার্ডের ডিফল্ট Normal বডি টেক্সট স্টাইল প্রয়োগ করে।",
        voicePrompt: "নরমাল স্টাইল দাও",
        chatPrompt: "Apply Normal style to the paragraph",
        aiAction: "target_range.Style = wdStyleNormal (-1) প্রয়োগ করে ডিফল্ট বডি টেক্সট স্টাইল সেট করে।",
        category: "Core Styles"
      },
      {
        id: "cmd-style-2",
        featureName: "নো স্পেসিং স্টাইল (No Spacing)",
        featureNameEn: "Apply No Spacing Compact Style",
        description: "প্যারাগ্রাফের মধ্যকার অতিরিক্ত স্পেসিং দূর করে কম্প্যাক্ট No Spacing স্টাইল (SpaceBefore=0, SpaceAfter=0, Single Line) প্রয়োগ করে।",
        voicePrompt: "নো স্পেসিং স্টাইল দাও",
        chatPrompt: "Apply No Spacing style to the paragraph",
        aiAction: "No Spacing স্টাইল এবং SpaceBefore=0, SpaceAfter=0 ও LineSpacingRule=0 নিশ্চিত করে।",
        category: "Core Styles"
      },
      {
        id: "cmd-style-3",
        featureName: "টাইটেল স্টাইল (Title)",
        featureNameEn: "Apply Document Title Style",
        description: "ডকুমেন্টের প্রধান শিরোনামকে আকর্ষণীয় বড় টাইপোগ্রাফির Title স্টাইলে রূপান্তর করে।",
        voicePrompt: "টাইটেল স্টাইল দাও",
        chatPrompt: "Apply Title style to the heading",
        aiAction: "target_range.Style = wdStyleTitle (-63) প্রয়োগ করে।",
        category: "Core Styles"
      },
      {
        id: "cmd-style-4",
        featureName: "সাবটাইটেল স্টাইল (Subtitle)",
        featureNameEn: "Apply Document Subtitle Style",
        description: "প্রধান শিরোনামের নিচে উপশিরোনাম বা সাবটাইটেল স্টাইল (Subtitle) প্রয়োগ করে।",
        voicePrompt: "সাবটাইটেল স্টাইল দাও",
        chatPrompt: "Apply Subtitle style to the text",
        aiAction: "target_range.Style = wdStyleSubtitle (-75) প্রয়োগ করে।",
        category: "Core Styles"
      },
      {
        id: "cmd-style-5",
        featureName: "হেডিং ১ স্টাইল (Heading 1)",
        featureNameEn: "Apply Top-Level Heading 1 Style",
        description: "অধ্যায় বা প্রধান সেকশনের জন্য প্রথম স্তরের শিরোনাম স্টাইল (Heading 1) প্রয়োগ করে।",
        voicePrompt: "হেডিং ১ স্টাইল দাও",
        chatPrompt: "Apply Heading 1 style",
        aiAction: "target_range.Style = wdStyleHeading1 (-2) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-6",
        featureName: "হেডিং ২ স্টাইল (Heading 2)",
        featureNameEn: "Apply Second-Level Heading 2 Style",
        description: "সাব-সেকশনের জন্য দ্বিতীয় স্তরের শিরোনাম স্টাইল (Heading 2) প্রয়োগ করে।",
        voicePrompt: "হেডিং ২ স্টাইল দাও",
        chatPrompt: "Apply Heading 2 style",
        aiAction: "target_range.Style = wdStyleHeading2 (-3) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-7",
        featureName: "হেডিং ৩ স্টাইল (Heading 3)",
        featureNameEn: "Apply Third-Level Heading 3 Style",
        description: "তৃতীয় স্তরের উপ-শিরোনাম স্টাইল (Heading 3) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৩ স্টাইল দাও",
        chatPrompt: "Apply Heading 3 style",
        aiAction: "target_range.Style = wdStyleHeading3 (-4) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-8",
        featureName: "হেডিং ৪ স্টাইল (Heading 4)",
        featureNameEn: "Apply Fourth-Level Heading 4 Style",
        description: "চতুর্থ স্তরের শিরোনাম স্টাইল (Heading 4) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৪ স্টাইল দাও",
        chatPrompt: "Apply Heading 4 style",
        aiAction: "target_range.Style = wdStyleHeading4 (-5) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-9",
        featureName: "হেডিং ৫ স্টাইল (Heading 5)",
        featureNameEn: "Apply Fifth-Level Heading 5 Style",
        description: "পঞ্চম স্তরের শিরোনাম স্টাইল (Heading 5) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৫ স্টাইল দাও",
        chatPrompt: "Apply Heading 5 style",
        aiAction: "target_range.Style = wdStyleHeading5 (-6) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-10",
        featureName: "হেডিং ৬ স্টাইল (Heading 6)",
        featureNameEn: "Apply Sixth-Level Heading 6 Style",
        description: "ষষ্ঠ স্তরের শিরোনাম স্টাইল (Heading 6) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৬ স্টাইল দাও",
        chatPrompt: "Apply Heading 6 style",
        aiAction: "target_range.Style = wdStyleHeading6 (-7) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-11",
        featureName: "হেডিং ৭ স্টাইল (Heading 7)",
        featureNameEn: "Apply Seventh-Level Heading 7 Style",
        description: "সপ্তম স্তরের শিরোনাম স্টাইল (Heading 7) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৭ স্টাইল দাও",
        chatPrompt: "Apply Heading 7 style",
        aiAction: "target_range.Style = wdStyleHeading7 (-8) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-12",
        featureName: "হেডিং ৮ স্টাইল (Heading 8)",
        featureNameEn: "Apply Eighth-Level Heading 8 Style",
        description: "অষ্টম স্তরের শিরোনাম স্টাইল (Heading 8) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৮ স্টাইল দাও",
        chatPrompt: "Apply Heading 8 style",
        aiAction: "target_range.Style = wdStyleHeading8 (-9) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-13",
        featureName: "হেডিং ৯ স্টাইল (Heading 9)",
        featureNameEn: "Apply Ninth-Level Heading 9 Style",
        description: "নবম স্তরের গভীরতম শিরোনাম স্টাইল (Heading 9) প্রয়োগ করে।",
        voicePrompt: "হেডিং ৯ স্টাইল দাও",
        chatPrompt: "Apply Heading 9 style",
        aiAction: "target_range.Style = wdStyleHeading9 (-10) প্রয়োগ করে।",
        category: "Headings 1–9"
      },
      {
        id: "cmd-style-14",
        featureName: "কোট স্টাইল (Quote)",
        featureNameEn: "Apply Block Quote Style",
        description: "উদ্ধৃতি বা উক্তিকে আলাদাভাবে ফুটিয়ে তুলতে ইটালিক ও ইনডেন্টেড Quote স্টাইল প্রয়োগ করে।",
        voicePrompt: "কোট স্টাইল দাও",
        chatPrompt: "Apply Quote style to the paragraph",
        aiAction: "target_range.Style = wdStyleQuote (-181) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-15",
        featureName: "ইনটেনস কোট স্টাইল (Intense Quote)",
        featureNameEn: "Apply Highlighted Intense Quote Style",
        description: "গুরুত্বপূর্ণ উদ্ধৃতিকে বর্ডার ও অ্যাকসেন্ট কালারসহ Intense Quote স্টাইলে সাজায়।",
        voicePrompt: "ইনটেনস কোট স্টাইল দাও",
        chatPrompt: "Apply Intense Quote style",
        aiAction: "target_range.Style = wdStyleIntenseQuote (-182) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-16",
        featureName: "সাবটল এমফাসিস (Subtle Emphasis)",
        featureNameEn: "Apply Subtle Emphasis Style",
        description: "টেক্সটে হালকা ও মার্জিত ইটালিক জোর প্রদানের জন্য Subtle Emphasis স্টাইল প্রয়োগ করে।",
        voicePrompt: "সাবটল এমফাসিস স্টাইল দাও",
        chatPrompt: "Apply Subtle Emphasis style",
        aiAction: "target_range.Style = wdStyleSubtleEmphasis (-261) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-17",
        featureName: "এমফাসিস স্টাইল (Emphasis)",
        featureNameEn: "Apply Italic Emphasis Style",
        description: "শব্দ বা বাক্যাংশে বিশেষ গুরুত্ব দিতে Emphasis স্টাইল প্রয়োগ করে।",
        voicePrompt: "এমফাসিস স্টাইল দাও",
        chatPrompt: "Apply Emphasis style to the text",
        aiAction: "target_range.Style = wdStyleEmphasis (-89) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-18",
        featureName: "স্ট্রং স্টাইল (Strong)",
        featureNameEn: "Apply Bold Strong Style",
        description: "গুরুত্বপূর্ণ টেক্সটকে গাঢ় ও স্পষ্ট করতে Strong স্টাইল প্রয়োগ করে।",
        voicePrompt: "স্ট্রং স্টাইল দাও",
        chatPrompt: "Apply Strong style to the text",
        aiAction: "target_range.Style = wdStyleStrong (-88) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-19",
        featureName: "বুক টাইটেল স্টাইল (Book Title)",
        featureNameEn: "Apply Book Title Character Style",
        description: "বই, জার্নাল বা প্রকাশনার নামের জন্য স্মল-ক্যাপস ও ইটালিক Book Title স্টাইল প্রয়োগ করে।",
        voicePrompt: "বুক টাইটেল স্টাইল দাও",
        chatPrompt: "Apply Book Title style",
        aiAction: "target_range.Style = wdStyleBookTitle (-265) প্রয়োগ করে।",
        category: "Quotes & Emphasis"
      },
      {
        id: "cmd-style-20",
        featureName: "নতুন কাস্টম স্টাইল তৈরি (Create New Style)",
        featureNameEn: "Create a New Custom Paragraph or Character Style",
        description: "পছন্দের নাম, ফন্ট, সাইজ, কালার, বোল্ড/ইটালিক ও স্পেসিং দিয়ে সম্পূর্ণ নতুন কাস্টম স্টাইল তৈরি করে এবং সাথে সাথে টেক্সটে প্রয়োগ করে।",
        voicePrompt: "SupervexStyle নামে নতুন স্টাইল তৈরি করো",
        chatPrompt: "Create new style named SupervexStyle with font size 14 and bold",
        aiAction: "doc.Styles.Add(Name, Type) কল করে ফন্ট ও প্যারাগ্রাফ প্রোপার্টি সেট করে নতুন স্টাইল তৈরি করে।",
        category: "Style Management"
      },
      {
        id: "cmd-style-21",
        featureName: "স্টাইল মডিফাই করা (Modify Style)",
        featureNameEn: "Modify Existing Built-in or Custom Style Properties",
        description: "যেমন Heading 1 বা যেকোনো কাস্টম স্টাইলের ফন্ট, সাইজ, কালার, অ্যালাইনমেন্ট বা স্পেসিং পরিবর্তন করে পুরো ডকুমেন্টে একসাথে আপডেট করে।",
        voicePrompt: "Heading 1 স্টাইল মডিফাই করে সাইজ ১৮ ও বোল্ড করো",
        chatPrompt: "Modify style Heading 1 with font size 18 and blue color",
        aiAction: "doc.Styles(style_name).Font ও ParagraphFormat প্রোপার্টি সরাসরি আপডেট করে।",
        category: "Style Management"
      },
      {
        id: "cmd-style-22",
        featureName: "স্টাইল ম্যানেজমেন্ট (Manage Styles)",
        featureNameEn: "List, Inspect, Rename or Delete Styles in Document",
        description: "ডকুমেন্টে ব্যবহৃত সকল স্টাইলের তালিকা দেখা (List), নির্দিষ্ট স্টাইলের প্রোপার্টি পরীক্ষা (Inspect), নাম পরিবর্তন (Rename) বা কাস্টম স্টাইল মুছে ফেলা (Delete) সম্পন্ন করে।",
        voicePrompt: "ম্যানেজ স্টাইলস দেখাও",
        chatPrompt: "Manage styles and list active document styles",
        aiAction: "doc.Styles কালেকশন স্ক্যান করে InUse ও কাস্টম স্টাইলগুলোর তালিকা, প্রোপার্টি, রিনেম ও ডিলিট নিয়ন্ত্রণ করে।",
        category: "Style Management"
      },
      {
        id: "cmd-style-23",
        featureName: "যেকোনো স্টাইল প্রয়োগ (Apply Styles)",
        featureNameEn: "Apply Any Built-in or Custom Style by Name",
        description: "ওয়ার্ডের যেকোনো বিল্ট-ইন স্টাইল বা আপনার তৈরি কাস্টম স্টাইল নাম উল্লেখ করে সরাসরি প্যারাগ্রাফে প্রয়োগ করে।",
        voicePrompt: "SupervexStyle স্টাইল অ্যাপ্লাই করো",
        chatPrompt: "Apply style SupervexStyle to the current paragraph",
        aiAction: "apply_style(style_name) এর মাধ্যমে যেকোনো বিল্ট-ইন বা কাস্টম স্টাইল প্যারাগ্রাফে প্রয়োগ করে।",
        category: "Style Management"
      }
    ]
  },
  {
    stepId: "step-2-5",
    stepNumber: "Step 19",
    menuName: "Home Menu ➔ 2.5 Editing",
    title: "স্মার্ট ফাইন্ড, অ্যাডভান্সড সার্চ, রিপ্লেস, গো টু ও সিলেকশন ইঞ্জিন (৮টি অপারেশন)",
    titleEn: "Complete Word Editing Suite: Find, Advanced Find, Replace, Replace All, Go To & Smart Selection",
    subtitle: "Find, Advanced Find (Match Case, Whole Word, Wildcards), একক Replace, Replace All, Go To (Page, Section, Line, Heading, Table, Bookmark), Select All, Select Objects এবং Select Text with Similar Formatting।",
    badge: "Editing & Navigation Engine",
    icon: "Search",
    commands: [
      {
        id: "cmd-edit-1",
        featureName: "ফাইন্ড টেক্সট (Find)",
        featureNameEn: "Find Text & Count Occurrences Across Document",
        description: "ডকুমেন্টের ভেতরে নির্দিষ্ট কোনো শব্দ বা বাক্য খুঁজে বের করে, মোট কতবার আছে তা গণনা করে এবং প্রথম বা নির্দিষ্ট ম্যাচটি সিলেক্ট করে দেখায়।",
        voicePrompt: "Supervex শব্দটি খুঁজো",
        chatPrompt: "Find text Supervex in the document",
        aiAction: "Range.Find.Execute লুপের মাধ্যমে শব্দটি খুঁজে মোট সংখ্যা গণনা করে এবং কার্সরে সিলেক্ট করে।",
        category: "Find & Search"
      },
      {
        id: "cmd-edit-2",
        featureName: "অ্যাডভান্সড ফাইন্ড (Advanced Find)",
        featureNameEn: "Advanced Search with Match Case, Whole Word, Wildcards & Format Filters",
        description: "Match Case (বড়/ছোট হাতের অক্ষর ভেদে), Find Whole Words Only, Use Wildcards (*, ?), Sounds Like এবং ফন্ট/স্টাইল ফিল্টারসহ অ্যাডভান্সড সার্চ সম্পন্ন করে।",
        voicePrompt: "অ্যাডভান্সড ফাইন্ড দিয়ে হুবহু কেস ও পুরো শব্দ Supervex খুঁজো",
        chatPrompt: "Advanced find Supervex with match case and whole word",
        aiAction: "Find.MatchCase, MatchWholeWord, MatchWildcards, MatchSoundsLike ও Format প্রোপার্টি সক্রিয় করে সার্চ করে।",
        category: "Find & Search"
      },
      {
        id: "cmd-edit-3",
        featureName: "সিঙ্গেল রিপ্লেস (Replace)",
        featureNameEn: "Replace Single / Next Occurrence of Text",
        description: "ডকুমেন্টের সব জায়গায় পরিবর্তন না করে শুধুমাত্র প্রথম বা নির্দিষ্ট একটি স্থানের শব্দ নতুন শব্দ দিয়ে প্রতিস্থাপন (Replace One) করে।",
        voicePrompt: "AlphaToken কে BetaToken দিয়ে রিপ্লেস করো",
        chatPrompt: "Replace AlphaToken with BetaToken",
        aiAction: "নির্দিষ্ট অকারেন্সটি খুঁজে শুধুমাত্র সেই স্থানটি নতুন টেক্সট দিয়ে প্রতিস্থাপন করে সিলেক্ট করে।",
        category: "Find & Replace"
      },
      {
        id: "cmd-edit-4",
        featureName: "রিপ্লেস অল (Replace All)",
        featureNameEn: "Replace All Occurrences Across Document & Tables",
        description: "ডকুমেন্টের মূল অংশ, হেডার/ফুটার এবং সকল টেবিলের সেলে থাকা কোনো শব্দের সবগুলো উপস্থিতি এক কমান্ডে নতুন শব্দ দিয়ে প্রতিস্থাপন করে।",
        voicePrompt: "সব জায়গায় AlphaToken কে OmegaToken দিয়ে সব রিপ্লেস করো",
        chatPrompt: "Replace all AlphaToken with OmegaToken",
        aiAction: "বডি টেক্সট ও সকল টেবিল সেলে থাকা প্রতিটি ম্যাচ খুঁজে একসাথে প্রতিস্থাপন করে মোট সংখ্যা জানায়।",
        category: "Find & Replace"
      },
      {
        id: "cmd-edit-5",
        featureName: "গো টু নেভিগেশন (Go To)",
        featureNameEn: "Navigate Directly to Page, Section, Line, Paragraph, Heading, Table or Bookmark",
        description: "ডকুমেন্টের নির্দিষ্ট পৃষ্ঠা (Page), সেকশন (Section), লাইন (Line), প্যারাগ্রাফ (Paragraph), হেডিং (Heading), টেবিল (Table) বা বুকমার্কে (Bookmark) সরাসরি কার্সর নিয়ে যায়।",
        voicePrompt: "২ নম্বর প্যারাগ্রাফে যাও / ১ নম্বর পৃষ্ঠায় যাও",
        chatPrompt: "Go to page 2 / Go to heading 1 / Go to paragraph 3",
        aiAction: "Selection.GoTo(What, Which, Count) এবং ডিরেক্ট রেঞ্জ নেভিগেশনের মাধ্যমে কার্সর নির্ধারিত স্থানে স্থাপন করে।",
        category: "Navigation"
      },
      {
        id: "cmd-edit-6",
        featureName: "সিলেক্ট অল (Select All)",
        featureNameEn: "Select Entire Document Content",
        description: "ডকুমেন্টের শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ টেক্সট, প্যারাগ্রাফ ও টেবিল একসাথে সিলেক্ট করে এবং মোট শব্দ ও প্যারাগ্রাফ সংখ্যা জানায়।",
        voicePrompt: "সব সিলেক্ট করো",
        chatPrompt: "Select all content in the document",
        aiAction: "doc.Content.Select() / Selection.WholeStory() কল করে সম্পূর্ণ ডকুমেন্ট সিলেক্ট করে।",
        category: "Selection"
      },
      {
        id: "cmd-edit-7",
        featureName: "সিলেক্ট অবজেক্টস (Select Objects)",
        featureNameEn: "Select Drawing Shapes, Inline Images or Tables",
        description: "ডকুমেন্টে থাকা ড্রয়িং শেপ (Shapes), ছবি (InlineShapes) অথবা টেবিল অবজেক্টগুলো স্বয়ংক্রিয়ভাবে সিলেক্ট করে।",
        voicePrompt: "অবজেক্ট সিলেক্ট করো",
        chatPrompt: "Select all objects and shapes in the document",
        aiAction: "doc.Shapes.SelectAll(), InlineShapes বা Tables কালেকশন স্ক্যান করে অবজেক্টগুলো সিলেক্ট করে।",
        category: "Selection"
      },
      {
        id: "cmd-edit-8",
        featureName: "একই ফরম্যাটিংয়ের লেখা সিলেক্ট (Select Text with Similar Formatting)",
        featureNameEn: "Select All Text Matching Current Font & Style Formatting",
        description: "বর্তমান কার্সর বা নির্বাচিত লেখার স্টাইল, ফন্ট, সাইজ, বোল্ড/ইটালিক ও কালারের সাথে মিল থাকা ডকুমেন্টের অন্যান্য সকল প্যারাগ্রাফ খুঁজে বের করে সিলেক্ট করে।",
        voicePrompt: "একই ফরম্যাটিংয়ের লেখা সিলেক্ট করো",
        chatPrompt: "Select text with similar formatting",
        aiAction: "রেফারেন্স প্যারাগ্রাফের Style ও Font সিগনেচার বিশ্লেষণ করে সমজাতীয় সকল প্যারাগ্রাফ চিহ্নিত ও সিলেক্ট করে।",
        category: "Selection"
      }
    ]
  },
  {
    stepId: "step-2-6",
    stepNumber: "Step 20",
    menuName: "Home Menu ➔ 2.6 Editor",
    title: "মাইক্রোসফট এডিটর, বানান ও ব্যাকরণ সংশোধন, রিফাইনমেন্ট, এডিটর স্কোর ও সিমিলারিটি চেক (৬টি অপারেশন)",
    titleEn: "Complete Microsoft Editor Suite: Spelling, Grammar, Writing Suggestions, Refinements, Score & Similarity Check",
    subtitle: "Spelling, Grammar, Writing Suggestions, Refinements (Clarity, Conciseness, Formality, Vocabulary), Editor Score (0–100%) এবং Similarity Check (Originality & Duplicate Analysis)।",
    badge: "AI Editor & Proofing",
    icon: "Sparkles",
    commands: [
      {
        id: "cmd-edr-1",
        featureName: "বানান যাচাই ও সংশোধন (Spelling)",
        featureNameEn: "Check & Auto-Fix Spelling Errors Across Document",
        description: "ডকুমেন্টের সকল বানান ভুল (SpellingErrors) চিহ্নিত করে, সঠিক শব্দের সাজেশন দেখায় এবং কমান্ড দিলে স্বয়ংক্রিয়ভাবে বানান সংশোধন করে।",
        voicePrompt: "বানান চেক করো / বানান ঠিক করো",
        chatPrompt: "Check spelling and auto-fix errors in the document",
        aiAction: "doc.SpellingErrors ও GetSpellingSuggestions() এর মাধ্যমে বানান যাচাই ও স্বয়ংক্রিয় সংশোধন করে।",
        category: "Proofing"
      },
      {
        id: "cmd-edr-2",
        featureName: "ব্যাকরণ যাচাই ও সংশোধন (Grammar)",
        featureNameEn: "Check & Auto-Fix Grammatical Issues",
        description: "ডকুমেন্টের ব্যাকরণগত ত্রুটি (GrammaticalErrors), পুনরাবৃত্ত শব্দ, অতিরিক্ত স্পেস ও বাক্য গঠন যাচাই করে এবং স্বয়ংক্রিয়ভাবে সংশোধন করে।",
        voicePrompt: "গ্রামার চেক করো / ব্যাকরণ ঠিক করো",
        chatPrompt: "Check grammar and fix grammatical issues",
        aiAction: "doc.GrammaticalErrors ও ব্যাকরণ রুল ইঞ্জিনের মাধ্যমে ত্রুটি শনাক্ত ও সংশোধন করে।",
        category: "Proofing"
      },
      {
        id: "cmd-edr-3",
        featureName: "রাইটিং সাজেশনস (Writing Suggestions)",
        featureNameEn: "Comprehensive Writing Suggestions & Editor Pane",
        description: "বানান, ব্যাকরণ, স্পষ্টতা ও সংক্ষিপ্ততার সমন্বিত রাইটিং সাজেশন প্রদান করে এবং প্রয়োজনে এক কমান্ডে সব সাজেশন ডকুমেন্টে প্রয়োগ করে।",
        voicePrompt: "রাইটিং সাজেশন দেখাও",
        chatPrompt: "Show writing suggestions for the document",
        aiAction: "Spelling, Grammar ও Refinements একত্রিত করে সম্পূর্ণ রাইটিং সাজেশন তালিকা ও অ্যাকশন তৈরি করে।",
        category: "Suggestions"
      },
      {
        id: "cmd-edr-4",
        featureName: "এডিটর রিফাইনমেন্টস (Refinements)",
        featureNameEn: "Clarity, Conciseness, Formality, Vocabulary & Punctuation Refinements",
        description: "লেখাকে আরও পেশাদার ও সংক্ষিপ্ত করতে Clarity (স্পষ্টতা), Conciseness (বাহুল্য বর্জন), Formality (আনুষ্ঠানিক রূপ) ও Vocabulary পরিমার্জন করে।",
        voicePrompt: "রিফাইনমেন্ট চেক করো / রিফাইনমেন্ট প্রয়োগ করো",
        chatPrompt: "Analyze and apply Editor refinements for clarity and conciseness",
        aiAction: "Wordy phrases, informal contractions ও দীর্ঘ বাক্য বিশ্লেষণ করে এক্সিকিউটিভ মানদণ্ডে পরিমার্জন করে।",
        category: "Refinements"
      },
      {
        id: "cmd-edr-5",
        featureName: "এডিটর স্কোর (Editor Score)",
        featureNameEn: "Calculate 0–100% Microsoft Editor Quality Score",
        description: "ডকুমেন্টের বানান, ব্যাকরণ, রিফাইনমেন্ট এবং Readability Statistics মূল্যায়ন করে ০% থেকে ১০০% পর্যন্ত এডিটর স্কোর ও গ্রেড প্রদান করে।",
        voicePrompt: "এডিটর স্কোর দেখাও",
        chatPrompt: "Calculate Microsoft Editor score for the document",
        aiAction: "Spelling, Grammar, Refinements ও ReadabilityStatistics বিশ্লেষণ করে 0–100% স্কোর গণনা করে।",
        category: "Score & Originality"
      },
      {
        id: "cmd-edr-6",
        featureName: "সিমিলারিটি চেক (Similarity Check)",
        featureNameEn: "Originality Percentage, Duplicate Detection & Citation Check",
        description: "ডকুমেন্টের মৌলিকত্ব (Originality %) যাচাই, ডুপ্লিকেট বাক্য শনাক্তকরণ, রেফারেন্স টেক্সটের সাথে মিল (Similarity %) এবং উদ্ধৃতি (Citations) পরীক্ষা করে।",
        voicePrompt: "সিমিলারিটি চেক করো",
        chatPrompt: "Run similarity and originality check on the document",
        aiAction: "3-gram Shingle Similarity ও ডুপ্লিকেট বাক্য স্ক্যান করে Originality % ও Similarity % রিপোর্ট তৈরি করে।",
        category: "Score & Originality"
      }
    ]
  },
  {
    stepId: "step-3-1",
    stepNumber: "Step 21",
    menuName: "Insert Menu ➔ 3.1 Pages",
    title: "ইনসার্ট মেনু: কভার পেজ, ব্ল্যাঙ্ক পেজ ও পেজ ব্রেক (৩টি অপারেশন)",
    titleEn: "Insert Menu Pages: Cover Page, Blank Page & Page Break",
    subtitle: "ডকুমেন্টের শুরুতে প্রফেশনাল এক্সিকিউটিভ কভার পেজ যুক্ত করা, যেকোনো অবস্থানে খালি বা নতুন পৃষ্ঠা যোগ করা এবং পেজ ব্রেক সন্নিবেশ করা।",
    badge: "Insert Pages Suite",
    icon: "FilePlus",
    commands: [
      {
        id: "cmd-pg-1",
        featureName: "কভার পেজ যুক্তকরণ (Cover Page)",
        featureNameEn: "Insert Executive Designed Cover Page",
        description: "ডকুমেন্টের শুরুতে একটি আকর্ষণীয় এক্সিকিউটিভ কভার পেজ যুক্ত করে, যার মধ্যে টাইটেল, সাবটাইটেল, লেখকের নাম ও তারিখ বিন্যস্ত থাকে।",
        voicePrompt: "একটি কভার পেজ যোগ করো / প্রফেশনাল কভার পেজ দাও",
        chatPrompt: "Insert an executive cover page titled 'Annual Strategic Report 2026'",
        aiAction: "ডকুমেন্টের শুরুতে সেকশন ব্রেক সহ টাইটেল, সাবটাইটেল, মেটাডেটা ও স্টাইলিং সহ এক্সিকিউটিভ কভার পেজ তৈরি করে।",
        category: "Cover Page"
      },
      {
        id: "cmd-pg-2",
        featureName: "ব্ল্যাঙ্ক পেজ বা খালি পৃষ্ঠা (Blank Page)",
        featureNameEn: "Insert Blank Page at Cursor or Document End",
        description: "বর্তমান কার্সর পয়েন্টে অথবা ডকুমেন্টের শেষে সম্পূর্ণ খালি একটি নতুন পৃষ্ঠা সন্নিবেশ করে পরবর্তী কাজের ক্ষেত্র তৈরি করে।",
        voicePrompt: "একটি ব্ল্যাঙ্ক পেজ যোগ করো / খালি পেজ দাও",
        chatPrompt: "Insert a blank page at the end of the document",
        aiAction: "নির্দিষ্ট রেঞ্জে বা ডকুমেন্টের শেষে পেজ ব্রেক প্রয়োগ করে সম্পূর্ণ নতুন ব্ল্যাঙ্ক পেজ তৈরি করে।",
        category: "Blank Page"
      },
      {
        id: "cmd-pg-3",
        featureName: "পেজ ব্রেক (Page Break)",
        featureNameEn: "Insert Standard Page Break (wdPageBreak)",
        description: "বর্তমান লাইনের শেষে পেজ ব্রেক (Ctrl+Enter) প্রয়োগ করে পরবর্তী টেক্সটকে সরাসরি নতুন পৃষ্ঠায় নিয়ে যায়।",
        voicePrompt: "পেজ ব্রেক দাও / নতুন পৃষ্ঠায় যাও",
        chatPrompt: "Insert a page break at current position",
        aiAction: "doc.Selection বা Range এ wdPageBreak (Word COM ধ্রুবক ৭) সন্নিবেশ করে পরবর্তী পৃষ্ঠায় টেক্সট ফ্লো নিয়ে যায়।",
        category: "Page Break"
      }
    ]
  },
  {
    stepId: "step-3-3-pic",
    stepNumber: "Step 22",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ Pictures",
    title: "ইনসার্ট মেনু: ছবি ও চিত্রশালা (৬টি অপারেশন)",
    titleEn: "Insert Illustrations: Pictures (This Device, Stock, Online, Insert, Replace, From File)",
    subtitle: "ডিভাইস থেকে ছবি, ক্যাটাগরি ভিত্তিক রয়্যালটি-ফ্রি স্টক ইমেজ, অনলাইন বা ওয়েব ছবি সার্চ, ডাইমেনশন ও ক্যাপশন সহ ছবি সংযোজন, বিদ্যমান ছবি প্রতিস্থাপন এবং নির্দিষ্ট ফাইল পাথ থেকে ছবি যুক্তকরণ।",
    badge: "Illustrations & Pictures",
    icon: "Image",
    commands: [
      {
        id: "cmd-pic-1",
        featureName: "এই ডিভাইস থেকে ছবি (This Device)",
        featureNameEn: "Insert Picture from This Device",
        description: "কম্পিউটার বা লোকাল ড্রাইভ থেকে পছন্দের ছবি বা স্ক্রিনশট ডকুমেন্টে স্বয়ংক্রিয়ভাবে সন্নিবেশ করে।",
        voicePrompt: "এই ডিভাইস থেকে একটি ছবি যোগ করো",
        chatPrompt: "Insert a picture from this device into the active document",
        aiAction: "লোকাল ড্রাইভ বা লাইব্রেরি থেকে ইমেজ পাথ শনাক্ত করে ইনলাইন পিকচার হিসেবে যুক্ত করে।",
        category: "Local Device"
      },
      {
        id: "cmd-pic-2",
        featureName: "স্টক ইমেজ লাইব্রেরি (Stock Images)",
        featureNameEn: "Curated High-Res Royalty-Free Stock Images",
        description: "বিজনেস, প্রযুক্তি, নেতৃত্ব, প্রকৃতি, ফাইন্যান্স, স্বাস্থ্যসেবা ও অ্যাবস্ট্রাক্ট ক্যাটাগরির রয়্যালটি-ফ্রি হাই-রেজোলিউশন স্টক ছবি ডকুমেন্টে বসায়।",
        voicePrompt: "একটি বিজনেস স্টক ইমেজ যোগ করো / টেকনোলজি স্টক ছবি দাও",
        chatPrompt: "Insert a stock image of technology category into the document",
        aiAction: "সাতটি প্রিমিয়াম ক্যাটাগরি থেকে কিউরেটেড হাই-রেজোলিউশন স্টক ইমেজ নির্বাচন ও স্কেলিং সহ ইনসার্ট করে।",
        category: "Stock Images"
      },
      {
        id: "cmd-pic-3",
        featureName: "অনলাইন ছবি অনুসন্ধান (Online Pictures)",
        featureNameEn: "Search & Fetch Pictures Online",
        description: "অনলাইন ওয়েব বা সার্চ ইঞ্জিন থেকে নির্দিষ্ট বিষয়ের ওপর ছবি খুঁজে সরাসরি ডকুমেন্টে যুক্ত করে।",
        voicePrompt: "অনলাইন থেকে সাইবার সিকিউরিটির ছবি যোগ করো",
        chatPrompt: "Search online and insert a picture of 'artificial intelligence'",
        aiAction: "অনলাইন কুয়েরি বা ইমেজ ইউআরএল ডাউনলোড ও লোকাল ক্যাশ করে সরাসরি ডকুমেন্টের নির্দিষ্ট রেঞ্জে যুক্ত করে।",
        category: "Online Pictures"
      },
      {
        id: "cmd-pic-4",
        featureName: "নির্দিষ্ট ফাইল থেকে ছবি (Picture from File)",
        featureNameEn: "Insert Picture from Absolute File Path",
        description: "কম্পিউটারের যেকোনো নির্দিষ্ট ফোল্ডারের ফাইল পাথ নির্দেশ করে নির্ভুলভাবে ছবি ইনসার্ট করে।",
        voicePrompt: "ফাইল পাথ থেকে ছবি যোগ করো",
        chatPrompt: "Insert picture from file 'C:\\path\\to\\image.png'",
        aiAction: "প্রদত্ত পরম ফাইল পাথ (Absolute Path) যাচাই করে ডকুমেন্টের নির্দিষ্ট স্থানে ছবি যুক্ত করে।",
        category: "Picture File"
      },
      {
        id: "cmd-pic-5",
        featureName: "ছবি প্রতিস্থাপন (Replace Image)",
        featureNameEn: "Replace Existing Picture Preserving Dimensions & Position",
        description: "ডকুমেন্টে পূর্বে যুক্ত করা কোনো ছবির অবস্থান, আকার (উইথ ও হাইট) এবং ফরম্যাটিং বজায় রেখে নতুন ছবি দিয়ে প্রতিস্থাপন করে।",
        voicePrompt: "১ নম্বর ছবিটি পরিবর্তন করো / নতুন ছবি দিয়ে বদলাও",
        chatPrompt: "Replace image 1 in the document preserving original dimensions",
        aiAction: "InlineShapes কালেকশনের নির্দিষ্ট ইনডেক্সের আকার ও পজিশন মেমোরিতে রেখে নতুন ইমেজ দিয়ে নিখুঁতভাবে প্রতিস্থাপন করে।",
        category: "Image Editing"
      },
      {
        id: "cmd-pic-6",
        featureName: "ছবি সন্নিবেশ ও সাইজিং (Insert Image)",
        featureNameEn: "Standard Image Insertion with Width, Alignment & Caption",
        description: "নির্দিষ্ট প্রস্থ (ইঞ্চি), অনুপাত (Aspect Ratio), অ্যালাইনমেন্ট (Left, Center, Right) এবং ক্যাপশন সহ স্ট্যান্ডার্ড ছবি যোগ করে।",
        voicePrompt: "ডকুমেন্টে ৪ ইঞ্চি চওড়া ছবি ইনসার্ট করো",
        chatPrompt: "Insert an image with width 4 inches, center aligned and caption",
        aiAction: "doc.InlineShapes.AddPicture() দিয়ে ছবি বসিয়ে রেশিও লক ও কাঙ্ক্ষিত পরিমাপে ফরম্যাট করে।",
        category: "Image Insertion"
      }
    ]
  },
  {
    stepId: "step-3-3-shp",
    stepNumber: "Step 23",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ Shapes",
    title: "ইনসার্ট মেনু: শেপ ও ভেক্টর আকার সন্নিবেশ (৮টি ক্যাটাগরি)",
    titleEn: "Insert Illustrations: Shapes (Lines, Rectangles, Basic Shapes, Block Arrows, Equation Shapes, Flowchart, Callouts, Stars & Banners)",
    subtitle: "ডকুমেন্টে লাইন, আয়তক্ষেত্র, বৃত্ত ও ত্রিভুজ সহ বেসিক শেপ, ব্লক অ্যারো, সমীকরণ চিহ্ন, ফ্লোচার্ট উপাদান, ডায়ালগ কলআউট এবং স্টার ও ব্যানার সন্নিবেশ, কাস্টম কালার ও টেক্সট ফরম্যাটিং।",
    badge: "Illustrations & Shapes",
    icon: "Shapes",
    commands: [
      {
        id: "cmd-shp-1",
        featureName: "লাইন ও কানেক্টর (Lines)",
        featureNameEn: "Straight Line, Arrow, Double Arrow, Elbow & Curved Connectors",
        description: "ডকুমেন্টে সোজা লাইন, একমুখী তীর, দ্বিমুখী তীর, এলবো কানেক্টর ও কার্ভড কানেক্টর নির্দিষ্ট দৈর্ঘ্য, রং ও পুরুত্ব সহ সন্নিবেশ করে।",
        voicePrompt: "একটি নীল রঙের তীর চিহ্ন লাইন যোগ করো / কানেক্টর দাও",
        chatPrompt: "Insert a blue arrow line with length 3 inches",
        aiAction: "doc.Shapes.AddLine() ও AddConnector() দিয়ে নিখুঁত কোঅর্ডিনেট, অ্যারোহেড ও কালার সহ লাইন আঁকে।",
        category: "Lines"
      },
      {
        id: "cmd-shp-2",
        featureName: "আয়তক্ষেত্র ও কোণা রূপান্তর (Rectangles)",
        featureNameEn: "Standard Rectangle, Rounded Rectangle & Snipped Corners",
        description: "স্ট্যান্ডার্ড আয়তক্ষেত্র, রাউন্ডেড আয়তক্ষেত্র, সিঙ্গেল স্নপ কর্নার ও ডায়াগোনাল স্নপ কর্নার শেপ তৈরি এবং ভেতরের টেক্সট ও ফিল কালার নির্ধারণ।",
        voicePrompt: "ডকুমেন্টে 'সুপারভেক্স এআই' লেখা সহ একটি আয়তক্ষেত্র যোগ করো",
        chatPrompt: "Insert a rounded rectangle with text 'Supervex AI' and blue fill",
        aiAction: "msoShapeRectangle বা msoShapeRoundedRectangle দিয়ে শেপ যুক্ত করে টেক্সট ও ফরম্যাটিং প্রয়োগ করে।",
        category: "Rectangles"
      },
      {
        id: "cmd-shp-3",
        featureName: "বেসিক শেপ (Basic Shapes)",
        featureNameEn: "Oval, Circle, Triangle, Diamond, Heart, Smiley Face, Sun & Cloud",
        description: "বৃত্ত/ওভাল, ত্রিভুজ, সমকোণী ত্রিভুজ, হীরা (ডায়মন্ড), সামান্তরিক, ট্রাপিজিয়াম, ষড়ভুজ, অষ্টভুজ, হার্ট, স্মাইলি, সূর্য ও মেঘ শেপ সংযোজন।",
        voicePrompt: "ডকুমেন্টে একটি লাল রঙের হার্ট শেপ বসাও / একটি বৃত্ত আঁকো",
        chatPrompt: "Insert an oval basic shape with width 2.0 and height 2.0 inches",
        aiAction: "msoShapeOval, msoShapeHeart, msoShapeDiamond ইত্যাদি ধ্রুবক ব্যবহার করে বেসিক শেপ তৈরি ও স্টাইল করে।",
        category: "Basic Shapes"
      },
      {
        id: "cmd-shp-4",
        featureName: "ব্লক অ্যারো (Block Arrows)",
        featureNameEn: "Right, Left, Up, Down, Left-Right, Quad, Circular & Chevron Arrows",
        description: "ডান, বাম, উপর, নিচ, দ্বিমুখী, চারমুখী, বাঁকা, ইউ-টার্ন, বৃত্তাকার তীর এবং শেভরন ব্লক অ্যারো ডকুমেন্টে যুক্ত করে।",
        voicePrompt: "ডকুমেন্টে একটি ডান তীর ব্লক অ্যারো যোগ করো",
        chatPrompt: "Insert a right block arrow with emerald green fill",
        aiAction: "msoShapeRightArrow, msoShapeLeftRightArrow ইত্যাদি ব্লক অ্যারো তৈরি করে ডাইমেনশন ও কালার সেট করে।",
        category: "Block Arrows"
      },
      {
        id: "cmd-shp-5",
        featureName: "সমীকরণ চিহ্ন শেপ (Equation Shapes)",
        featureNameEn: "Math Plus, Minus, Multiply, Divide, Equal & Not Equal Shapes",
        description: "গণিত ও সমীকরণের জন্য যোগ (+), বিয়োগ (-), গুণ (×), ভাগ (÷), সমান (=) এবং অসমান (≠) চিহ্ন শেপ তৈরি।",
        voicePrompt: "ডকুমেন্টে একটি যোগ চিহ্ন সমীকরণ শেপ যোগ করো",
        chatPrompt: "Insert a math plus equation shape with yellow fill",
        aiAction: "msoShapeMathPlus, msoShapeMathMultiply ইত্যাদি ম্যাথ শেপ কোড ব্যবহার করে সমীকরণ চিহ্ন সন্নিবেশ করে।",
        category: "Equation Shapes"
      },
      {
        id: "cmd-shp-6",
        featureName: "ফ্লোচার্ট উপাদান (Flowchart)",
        featureNameEn: "Flowchart Process, Decision, Data, Terminator & Document Elements",
        description: "প্রসেস বক্স (আয়তাকার), ডিসিশন বক্স (হীরা), ইনপুট/আউটপুট ডাটা (সামান্তরিক), টার্মিনেটর (স্টার্ট/স্টপ) ও ডকুমেন্ট সিম্বল যোগ করে।",
        voicePrompt: "ডকুমেন্টে 'ডাটা প্রসেসিং' লেখা সহ একটি ফ্লোচার্ট প্রসেস শেপ যোগ করো",
        chatPrompt: "Insert a flowchart process box with text 'Data Processing'",
        aiAction: "msoShapeFlowchartProcess, msoShapeFlowchartDecision ইত্যাদি উপাদান তৈরি করে ডাটা ফ্লো ডায়াগ্রাম তৈরি করে।",
        category: "Flowchart"
      },
      {
        id: "cmd-shp-7",
        featureName: "কলআউট ও স্পীচ বাবল (Callouts)",
        featureNameEn: "Rectangular, Rounded, Oval & Cloud Speech/Dialogue Callouts",
        description: "ডায়ালগ ও ব্যাখ্যার জন্য আয়তাকার, রাউন্ডেড, ওভাল এবং মেঘের মতো ক্লাউড স্পীচ বাবল কলআউট তৈরি করে ভেতরে বার্তা সন্নিবেশ করে।",
        voicePrompt: "ডকুমেন্টে 'জরুরি বার্তা' লেখা সহ একটি ক্লাউড কলআউট যোগ করো",
        chatPrompt: "Insert a cloud callout with text 'Important Message'",
        aiAction: "msoShapeCloudCallout বা msoShapeRectangularCallout তৈরি করে স্বয়ংক্রিয় পয়েন্টার ও টেক্সট ফ্রেম যুক্ত করে।",
        category: "Callouts"
      },
      {
        id: "cmd-shp-8",
        featureName: "স্টার ও ব্যানার (Stars and Banners)",
        featureNameEn: "4/5/8/16/24/32 Point Stars, Explosion, Ribbons & Scrolls",
        description: "৪ থেকে ৩২ কোণা বিশিষ্ট তারা, বিস্ফোরণ (Explosion), আপ/ডাউন রিবন এবং হরাইজন্টাল/ভার্টিক্যাল স্ক্রোল ব্যানার ডকুমেন্টে বসায়।",
        voicePrompt: "ডকুমেন্টে একটি ৫ কোণা তারা যোগ করো / গোল্ডেন রিবন দাও",
        chatPrompt: "Insert a 5-point star with orange fill and 2.5 inches width",
        aiAction: "msoShape5pointStar, msoShapeUpRibbon ইত্যাদি কোড ব্যবহার করে আকর্ষণীয় স্টার ও ব্যানার তৈরি করে।",
        category: "Stars & Banners"
      }
    ]
  },
  {
    stepId: "step-3-3-ico",
    stepNumber: "Step 24",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ Icons",
    title: "ইনসার্ট মেনু: ভেক্টর আইকন ও এসভিজি গ্রাফিক্স (Icons & SVG)",
    titleEn: "Insert Illustrations: Icons (Insert Icons, SVG Graphics)",
    subtitle: "ডকুমেন্টে টেকনোলজি, সিকিউরিটি, অ্যানালিটিক্স, ক্লাউড ও বিজনেস ক্যাটাগরির ভেক্টর আইকন এবং কাস্টম এসভিজি (SVG) গ্রাফিক্স নিখুঁত রেজোলিউশন ও স্কেলিং সহ সন্নিবেশ।",
    badge: "Icons & SVG",
    icon: "Sparkles",
    commands: [
      {
        id: "cmd-ico-1",
        featureName: "ভেক্টর আইকন সন্নিবেশ (Insert Icons)",
        featureNameEn: "Insert Scalable Vector Icons (Tech, Security, Cloud, Analytics, User, etc.)",
        description: "Word ডকুমেন্টে টেকনোলজি, সাইবার নিরাপত্তা, ডাটা অ্যানালিটিক্স, ক্লাউড কম্পিউটিং, ইউজার প্রোফাইল ও বিজনেস ক্যাটাগরির হাই-রেজোলিউশন ভেক্টর আইকন ইনলাইন বা ফ্লোটিং আকারে যোগ করে।",
        voicePrompt: "ডকুমেন্টে একটি ক্লাউড আইকন যোগ করো / সিকিউরিটি আইকন দাও",
        chatPrompt: "Insert a security vector icon with 1.5 inches size",
        aiAction: "উচ্চমানের ভেক্টর আইকন অ্যাসেট নির্বাচন করে Word InlineShapes.AddPicture দিয়ে নেটিভ wdInlineShapeGraphic ফরম্যাটে সন্নিবেশ করে।",
        category: "Icons"
      },
      {
        id: "cmd-ico-2",
        featureName: "এসভিজি গ্রাফিক্স (SVG Graphics)",
        featureNameEn: "Insert Custom SVG Graphics (Raw Markup or File with Dimensions)",
        description: "র' এক্সএমএল (XML/SVG) মার্কআপ অথবা কম্পিউটারের যেকোনো .svg ফাইল থেকে সরাসরি স্কেলেবল ভেক্টর গ্রাফিক্স নির্দিষ্ট প্রস্থ, উচ্চতা ও সেন্টার অ্যালাইনমেন্ট সহ ডকুমেন্টে সন্নিবেশ করে।",
        voicePrompt: "ডকুমেন্টে এই এসভিজি গ্রাফিক্সটি যোগ করো / কাস্টম এসভিজি ফাইল দাও",
        chatPrompt: "Insert custom SVG graphic with width 2.5 inches and center alignment",
        aiAction: "SVG ফাইল বা কোড ভ্যালিডেট করে টেম্পোরারি/অ্যাসেট পাথে সংরক্ষণ করে wdInlineShapeGraphic ফরম্যাটে ডকুমেন্টে রেন্ডার করে।",
        category: "SVG Graphics"
      }
    ]
  },
  {
    stepId: "step-3-3-3d",
    stepNumber: "Step 25",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ 3D Models",
    title: "ইনসার্ট মেনু: ৩ডি মডেল সন্নিবেশ (3D Models)",
    titleEn: "Insert Illustrations: 3D Models (Insert 3D Models, 3D Model from File)",
    subtitle: "ডকুমেন্টে কিউব, পিরামিড, সিলিন্ডার ও ডায়মন্ড সহ নেটিভ ৩ডি মডেল এবং লোকাল .obj, .glb, .gltf, .3mf, .stl ফাইল থেকে সরাসরি ৩ডি অবজেক্ট সন্নিবেশ ও প্রদর্শন।",
    badge: "3D Models",
    icon: "Layers",
    commands: [
      {
        id: "cmd-3d-1",
        featureName: "৩ডি মডেল যোগ করা (Insert 3D Models)",
        featureNameEn: "Insert Prebuilt 3D Geometric Models (Cube, Pyramid, Cylinder, Diamond)",
        description: "Word ডকুমেন্টে ত্রিমাত্রিক (3D) কিউব, পিরামিড, সিলিন্ডার বা ডায়মন্ড মডেল নির্দিষ্ট প্রস্থ, উচ্চতা ও ইনলাইন লেআউটে সংযুক্ত করে।",
        voicePrompt: "ডকুমেন্টে একটি ৩ডি সিলিন্ডার মডেল যোগ করো / ৩ডি কিউব বসাও",
        chatPrompt: "Insert a 3D cube model with width 2.5 inches",
        aiAction: "Word COM-এর InlineShapes.Add3DModel API ব্যবহার করে নেটিভ wdInlineShapeModel3D হিসেবে ত্রিমাত্রিক মডেল রেন্ডার করে।",
        category: "3D Models"
      },
      {
        id: "cmd-3d-2",
        featureName: "ফাইল থেকে ৩ডি মডেল (3D Model from File)",
        featureNameEn: "Insert 3D Model from Local File (.obj, .glb, .gltf, .3mf, .stl, .fbx)",
        description: "কম্পিউটারের নির্দিষ্ট ডিরেক্টরি বা পাথ থেকে স্ট্যান্ডার্ড ৩ডি ফাইল ফরম্যাট যেমন .obj, .glb, .gltf, .3mf, .stl ইত্যাদি স্বয়ংক্রিয়ভাবে যাচাই করে Word ডকুমেন্টে যুক্ত করে।",
        voicePrompt: "ফাইল থেকে ৩ডি মডেল যোগ করো 'C:/models/sample.obj'",
        chatPrompt: "Insert 3D model from file 'C:/models/robot.glb' with height 3 inches",
        aiAction: "ফাইলের অস্তিত্ব ও ফরম্যাট ভ্যালিডেট করে doc.InlineShapes.Add3DModel(FileName) দিয়ে সম্পূর্ণ ৩ডি অবজেক্ট ডকুমেন্টে লোড করে।",
        category: "3D Model from File"
      }
    ]
  },
  {
    stepId: "step-3-3-sa",
    stepNumber: "Step 26",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ SmartArt",
    title: "ইনসার্ট মেনু: স্মার্টআর্ট ডায়াগ্রাম ও ভিজ্যুয়াল গ্রাফিক্স (৮টি ক্যাটাগরি)",
    titleEn: "Insert Illustrations: SmartArt (List, Process, Cycle, Hierarchy, Relationship, Matrix, Pyramid, Picture SmartArt)",
    subtitle: "ডকুমেন্টে লিস্ট, প্রসেস ওয়ার্কফ্লো, বৃত্তাকার সাইকেল, হায়ারার্কি অর্গানাইজেশন চার্ট, রিলেশনশিপ, ম্যাট্রিক্স গ্রিড, পিরামিড ও ছবি যুক্ত স্মার্টআর্ট ডায়াগ্রাম স্বয়ংক্রিয় নোড, কালার থিম ও স্টাইল সহ সন্নিবেশ।",
    badge: "SmartArt Graphics",
    icon: "Layers",
    commands: [
      {
        id: "cmd-sa-1",
        featureName: "লিস্ট স্মার্টআর্ট (List SmartArt)",
        featureNameEn: "Basic Block List, Vertical Bullet List & Horizontal Lists",
        description: "তথ্য বা বুলেট পয়েন্টগুলোকে আকর্ষণীয় ব্লক, হেক্সাগন বা সাজানো লিস্ট ডায়াগ্রাম আকারে উপস্থাপন করে।",
        voicePrompt: "ডকুমেন্টে ৩টি ধাপের একটি লিস্ট স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert List SmartArt with layout 'Basic Block List' and items ['Alpha', 'Beta', 'Gamma']",
        aiAction: "Word COM-এর InlineShapes.AddSmartArt API দিয়ে লিস্ট ক্যাটাগরির স্মার্টআর্ট তৈরি ও টেক্সট সেট করে।",
        category: "List"
      },
      {
        id: "cmd-sa-2",
        featureName: "প্রসেস স্মার্টআর্ট (Process SmartArt)",
        featureNameEn: "Sequential Workflows, Timelines, Step-Up & Chevron Process",
        description: "পর্যায়ক্রমিক ধাপ, প্রজেক্ট ওয়ার্কফ্লো বা টাইমলাইন ডায়াগ্রাম তৈরি করে স্টেপ-বাই-স্টেপ প্রসেস চিত্রায়িত করে।",
        voicePrompt: "ডকুমেন্টে একটি প্রসেস স্মার্টআর্ট বসাও / ওয়ার্কফ্লো ডায়াগ্রাম দাও",
        chatPrompt: "Insert Process SmartArt with steps ['Planning', 'Design', 'Development', 'Launch']",
        aiAction: "Basic Process বা Chevron লেআউটে স্মার্টআর্ট নোড অ্যাডজাস্ট করে ধারাবাহিক প্রসেস সাজায়।",
        category: "Process"
      },
      {
        id: "cmd-sa-3",
        featureName: "সাইকেল স্মার্টআর্ট (Cycle SmartArt)",
        featureNameEn: "Circular, Continuous, Block & Multidirectional Cycles",
        description: "চক্রাকার বা পুনরাবৃত্তিমূলক প্রক্রিয়া (যেমন PDCA সাইকেল, লাইফসাইকেল) বৃত্তাকার ডায়াগ্রামে উপস্থাপন করে।",
        voicePrompt: "ডকুমেন্টে একটি সাইকেল স্মার্টআর্ট যোগ করো / চক্রাকার ডায়াগ্রাম দাও",
        chatPrompt: "Insert Cycle SmartArt with layout 'Basic Cycle' and 4 steps",
        aiAction: "Basic Cycle বা Text Cycle লেআউটে চক্রাকার স্মার্টআর্ট সন্নিবেশ করে কালার স্কিম প্রয়োগ করে।",
        category: "Cycle"
      },
      {
        id: "cmd-sa-4",
        featureName: "হায়ারার্কি ও অর্গানাইজেশন চার্ট (Hierarchy SmartArt)",
        featureNameEn: "Organization Chart, Tree Hierarchy, Table Hierarchy & Architecture",
        description: "কোম্পানি বা প্রজেক্টের দলগত কাঠামো, অর্গানাইজেশন চার্ট এবং ট্রি হায়ারার্কি ডায়াগ্রাম তৈরি করে।",
        voicePrompt: "ডকুমেন্টে একটি অর্গানাইজেশন চার্ট স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert Hierarchy SmartArt with layout 'Organization Chart' and leader nodes",
        aiAction: "Organization Chart লেআউট লোড করে এক্সিকিউটিভ ও টিম মেম্বারদের পদের বিন্যাস তৈরি করে।",
        category: "Hierarchy"
      },
      {
        id: "cmd-sa-5",
        featureName: "রিলেশনশিপ ও ভেন ডায়াগ্রাম (Relationship SmartArt)",
        featureNameEn: "Target List, Venn Diagram, Funnel, Gear & Balance Layouts",
        description: "উপাদানসমূহের পারস্পরিক সম্পর্ক, ওভারল্যাপ (Venn), টার্গেট ও ফানেল ডায়াগ্রাম তৈরি করে।",
        voicePrompt: "ডকুমেন্টে একটি টার্গেট বা ভেন ডায়াগ্রাম স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert Relationship SmartArt with layout 'Target List' and 3 elements",
        aiAction: "Target List বা Venn ডায়াগ্রাম তৈরি করে নোডগুলোর ভেতরের টেক্সট ও রং সাজায়।",
        category: "Relationship"
      },
      {
        id: "cmd-sa-6",
        featureName: "ম্যাট্রিক্স ও সোয়াট গ্রিড (Matrix SmartArt)",
        featureNameEn: "Basic Matrix, Titled Matrix, Grid Matrix & SWOT Quadrants",
        description: "৪টি চতুর্ভুজ বা কোয়াড্রেন্টে বিভক্ত ম্যাট্রিক্স ডায়াগ্রাম তৈরি করে (যেমন SWOT অ্যানালাইসিস বা প্রায়োরিটি গ্রিড)।",
        voicePrompt: "ডকুমেন্টে একটি সোয়াট (SWOT) ম্যাট্রিক্স স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert Matrix SmartArt with layout 'Basic Matrix' for SWOT analysis",
        aiAction: "৪টি কোয়াড্রেন্ট সহ Basic Matrix তৈরি করে শক্তি, দুর্বলতা, সুযোগ ও হুমকি বিন্যস্ত করে।",
        category: "Matrix"
      },
      {
        id: "cmd-sa-7",
        featureName: "পিরামিড কাঠামো (Pyramid SmartArt)",
        featureNameEn: "Basic Pyramid, Inverted Pyramid & Segmented Pyramid",
        description: "আনুপাতিক বা স্তরীভূত তথ্যের জন্য বেসিক পিরামিড, ইনভার্টেড পিরামিড বা সেগমেন্টেড পিরামিড তৈরি করে।",
        voicePrompt: "ডকুমেন্টে একটি ৩ স্তরের পিরামিড স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert Pyramid SmartArt with layout 'Basic Pyramid' and 3 tier levels",
        aiAction: "Basic Pyramid লেআউটে টপ ও বটম লেভেলের টেক্সট ও লেআউট স্কেল সাজায়।",
        category: "Pyramid"
      },
      {
        id: "cmd-sa-8",
        featureName: "পিকচার স্মার্টআর্ট (Picture SmartArt)",
        featureNameEn: "Picture Accent List, Alternating Picture Blocks & Photo Callouts",
        description: "প্রতিটি নোডে ছবি বা ফটোর সাথে ক্যাপশন ও টেক্সট যুক্ত করে আকর্ষণীয় টিম শোকেস বা প্রোডাক্ট শোকেস তৈরি করে।",
        voicePrompt: "ডকুমেন্টে ছবি সহ একটি পিকচার স্মার্টআর্ট যোগ করো",
        chatPrompt: "Insert Picture SmartArt with layout 'Picture Accent List' and member names",
        aiAction: "ছবি প্লেসহোল্ডার সহ পিকচার স্মার্টআর্ট সন্নিবেশ করে ইউজার পিকচার ও টেক্সট যুক্ত করে।",
        category: "Picture SmartArt"
      }
    ]
  },
  {
    stepId: "step-3-3-ch",
    stepNumber: "Step 27",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ Charts",
    title: "ইনসার্ট মেনু: বিশ্লেষণমূলক চার্ট ও গ্রাফ (১০টি চার্ট টাইপ)",
    titleEn: "Insert Illustrations: Charts (Column, Bar, Line, Pie, Area, Scatter, Stock, Surface, Radar, Combo Chart)",
    subtitle: "ডকুমেন্টে কলাম, বার, লাইন, পাই, এরিয়া, স্ক্যাটার, স্টক, ৩ডি সারফেস, রাডার ও কম্বো চার্ট সহ কাস্টম ক্যাটাগরি, ডাটা সিরিজ ও স্বয়ংক্রিয় ব্যাকগ্রাউন্ড এক্সেল ইন্টিগ্রেশন।",
    badge: "Charts & Visuals",
    icon: "Table",
    commands: [
      {
        id: "cmd-ch-1",
        featureName: "কলাম চার্ট (Column Chart)",
        featureNameEn: "Clustered Column, Stacked Column & 100% Stacked Column",
        description: "উল্লম্ব স্তম্ভ আকারে ডাটা ক্যাটাগরি তুলনা করার জন্য ক্লাস্টার্ড কলাম, স্ট্যাকড কলাম বা ৩ডি কলাম চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে 'ত্রৈমাসিক বিক্রয়' শিরোনামে একটি কলাম চার্ট তৈরি করো",
        chatPrompt: "Insert Column Chart titled 'Quarterly Sales' with categories ['Q1', 'Q2', 'Q3', 'Q4'] and values [150, 280, 320, 410]",
        aiAction: "Word COM AddChart2(51) দিয়ে কলাম চার্ট তৈরি করে ব্যাকগ্রাউন্ড ওয়ার্কবুকে ডাটা সেট করে।",
        category: "Column Chart"
      },
      {
        id: "cmd-ch-2",
        featureName: "বার চার্ট (Bar Chart)",
        featureNameEn: "Clustered Bar, Stacked Bar & 100% Stacked Horizontal Bars",
        description: "অনুভূমিক বার আকারে একাধিক ক্যাটাগরির মান ও রেঞ্জ তুলনামূলক বিশ্লেষণ করার চার্ট।",
        voicePrompt: "ডকুমেন্টে একটি বার চার্ট তৈরি করো / অনুভূমিক বার দাও",
        chatPrompt: "Insert Bar Chart titled 'Regional Comparison' with categories ['North', 'South', 'East', 'West']",
        aiAction: "xlBarClustered (57) টাইপে বার চার্ট সন্নিবেশ করে সঠিক স্কেলিং ও সিরিজ মান ইনপুট করে।",
        category: "Bar Chart"
      },
      {
        id: "cmd-ch-3",
        featureName: "লাইন চার্ট (Line Chart)",
        featureNameEn: "Standard Line, Line with Markers & Stacked Trend Lines",
        description: "সময়ের সাথে সাথে ট্রেন্ড, ধারাবাহিক বৃদ্ধি বা ওঠানামা প্রদর্শনের জন্য রেখাচিত্র বা লাইন চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে একটি মাসিক ট্রেন্ড লাইন চার্ট যোগ করো",
        chatPrompt: "Insert Line Chart titled 'Performance Trend' with categories ['Jan', 'Feb', 'Mar', 'Apr']",
        aiAction: "xlLine (4) টাইপে লাইন চার্ট সন্নিবেশ করে ট্রেন্ড মার্কার ও টাইটেল সেট করে।",
        category: "Line Chart"
      },
      {
        id: "cmd-ch-4",
        featureName: "পাই চার্ট ও ডোনাট (Pie Chart)",
        featureNameEn: "2D/3D Pie, Exploded Pie & Doughnut Proportional Charts",
        description: "শতকরা হার বা আনুপাতিক শেয়ার দেখানোর জন্য বৃত্তাকার পাই চার্ট, এক্সপ্লোডেড পাই বা ডোনাট চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে 'বাজেট বণ্টন' শিরোনামে একটি পাই চার্ট তৈরি করো",
        chatPrompt: "Insert Pie Chart titled 'Budget Allocation' with categories ['R&D', 'Marketing', 'Ops'] and values [40, 35, 25]",
        aiAction: "xlPie (5) বা xlDoughnut দিয়ে পাই চার্ট রেন্ডার করে শতাংশের স্লাইস প্রদর্শন করে।",
        category: "Pie Chart"
      },
      {
        id: "cmd-ch-5",
        featureName: "এরিয়া চার্ট (Area Chart)",
        featureNameEn: "Standard Area, Stacked Area & 100% Stacked Area Charts",
        description: "লাইনের নিচের অংশ ভরাট করে সময়ের সাথে পরিমাণের সমষ্টি ও পরিবর্তন প্রদর্শনের জন্য এরিয়া চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে একটি ইউজার গ্রোথ এরিয়া চার্ট যোগ করো",
        chatPrompt: "Insert Area Chart titled 'User Growth Area' with categories ['2021', '2022', '2023', '2024']",
        aiAction: "xlArea (1) ধ্রুবক ব্যবহার করে মসৃণ ক্ষেত্রফল ভরাট চার্ট তৈরি করে।",
        category: "Area Chart"
      },
      {
        id: "cmd-ch-6",
        featureName: "স্ক্যাটার চার্ট (Scatter / XY Chart)",
        featureNameEn: "XY Scatter with Points, Smooth Lines & Straight Markers",
        description: "দুটি সংখ্যার ভেরিয়েবলের মধ্যে সম্পর্ক বা ক্লাস্টার নির্দেশ করার জন্য এক্স-ওয়াই (XY) স্ক্যাটার চার্ট।",
        voicePrompt: "ডকুমেন্টে একটি স্ক্যাটার চার্ট তৈরি করো / বিন্দু চার্ট দাও",
        chatPrompt: "Insert Scatter Chart titled 'Latency vs Load' with XY data points",
        aiAction: "xlXYScatter (-4169) কোডে স্ক্যাটার প্লট তৈরি করে কোঅর্ডিনেট ডাটা ম্যাপ করে।",
        category: "Scatter Chart"
      },
      {
        id: "cmd-ch-7",
        featureName: "স্টক চার্ট (Stock Chart)",
        featureNameEn: "High-Low-Close (HLC), Open-High-Low-Close (OHLC) & Volume Charts",
        description: "শেয়ার বাজার বা ফাইন্যান্সিয়াল ট্রেডিং ডাটার জন্য হাই, লো, ওপেন ও ক্লোজ প্রাইস চার্ট।",
        voicePrompt: "ডকুমেন্টে একটি স্টক চার্ট যোগ করো / শেয়ার বাজার গ্রাফ দাও",
        chatPrompt: "Insert Stock Chart titled 'Daily Stock Performance' with High, Low, Close values",
        aiAction: "xlStockHLC (88) বা xlStockOHLC (89) তৈরি করে ৩টি কলামের ট্রেডিং রেঞ্জ লোড করে।",
        category: "Stock Chart"
      },
      {
        id: "cmd-ch-8",
        featureName: "সারফেস চার্ট (Surface Chart)",
        featureNameEn: "3D Surface, Wireframe Surface & Contour Top-View Charts",
        description: "টপোগ্রাফিক ম্যাপ বা ত্রিমাত্রিক সারফেস ডাটার জন্য ৩ডি সারফেস চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে একটি ৩ডি সারফেস চার্ট তৈরি করো / ভূ-প্রকৃতি গ্রাফ দাও",
        chatPrompt: "Insert Surface Chart titled 'Topographic Terrain' with 3D wireframe mesh",
        aiAction: "xlSurface (83) ব্যবহার করে ত্রিমাত্রিক ভূ-সংস্থান বা ম্যাট্রিক্স পৃষ্ঠতল তৈরি করে।",
        category: "Surface Chart"
      },
      {
        id: "cmd-ch-9",
        featureName: "রাডার চার্ট (Radar Chart)",
        featureNameEn: "Standard Radar, Filled Radar & Radar with Markers (Spider Chart)",
        description: "মাল্টি-ভেরিয়েবল পারফরম্যান্স বা দক্ষতা ম্যাট্রিক্স দেখানোর জন্য মাকড়শার জালের মতো রাডার চার্ট তৈরি।",
        voicePrompt: "ডকুমেন্টে একটি রাডার চার্ট তৈরি করো / স্পাইডার চার্ট দাও",
        chatPrompt: "Insert Radar Chart titled 'Competency Matrix' with skills ['Speed', 'Accuracy', 'Reliability']",
        aiAction: "xlRadar (-4151) বা xlRadarFilled দিয়ে বহুমাত্রিক অক্ষবিশিষ্ট রাডার চার্ট তৈরি করে।",
        category: "Radar Chart"
      },
      {
        id: "cmd-ch-10",
        featureName: "কম্বো চার্ট (Combo Chart)",
        featureNameEn: "Dual-Axis Combination Chart (Clustered Column + Line Trend Overlay)",
        description: "একই চার্টে কলাম ও লাইন মিলিয়ে একাধিক মেট্রিক (যেমন ভলিউম ও গ্রোথ রেট) একসাথে প্রদর্শনের জন্য কম্বো চার্ট।",
        voicePrompt: "ডকুমেন্টে একটি কম্বো চার্ট যোগ করো (কলাম এবং লাইন মিলিয়ে)",
        chatPrompt: "Insert Combo Chart titled 'Revenue vs Growth' with column volume and line percentage",
        aiAction: "কলাম ক্লাস্টার্ড চার্ট তৈরি করে দ্বিতীয় সিরিজটিকে xlLine (4) টাইপে রূপান্তর করে নিখুঁত কম্বো চার্ট বানায়।",
        category: "Combo Chart"
      }
    ]
  },
  {
    stepId: "step-3-3-sc",
    stepNumber: "Step 28",
    menuName: "Insert Menu ➔ 3.3 Illustrations ➔ Screenshot",
    title: "ইনসার্ট মেনু: স্ক্রিনশট ও স্ক্রিন ক্লিপিং (উইন্ডো ও কাস্টম রিজিয়ন ক্যাপচার)",
    titleEn: "Insert Illustrations: Screenshot (Available Windows & Screen Clipping)",
    subtitle: "ডেস্কটপের চলমান উইন্ডো তালিকা থেকে নির্দিষ্ট উইন্ডোর স্ন্যাপশট অথবা কাস্টম আয়তাকার স্ক্রিন ক্লিপিং সরাসরি ওয়ার্ড ডকুমেন্টে ইনলাইন পিকচার হিসেবে সংযোজন।",
    badge: "Screenshot & Clipping",
    icon: "Monitor",
    commands: [
      {
        id: "cmd-sc-1",
        featureName: "চলমান উইন্ডোর তালিকা (Available Windows List)",
        featureNameEn: "Enumerate Desktop Open Application Windows",
        description: "ডেস্কটপে চলমান দৃশ্যমান অ্যাপ্লিকেশন উইন্ডোগুলোর তালিকা (টাইটেল, HWND ও সাইজ) পর্যবেক্ষণ।",
        voicePrompt: "ডেস্কটপে কোন কোন উইন্ডো খোলা আছে দেখাও / উন্মুক্ত উইন্ডোর তালিকা দাও",
        chatPrompt: "List available desktop windows for screenshot capture",
        aiAction: "Windows Desktop Session-এ EnumWindows কল করে সক্রিয় অ্যাপ্লিকেশন উইন্ডোর তালিকা তৈরি করে।",
        category: "Available Windows"
      },
      {
        id: "cmd-sc-2",
        featureName: "উন্মুক্ত উইন্ডোর স্ক্রিনশট (Available Windows Screenshot)",
        featureNameEn: "Capture and Insert Window Screenshot as InlineShape",
        description: "চলমান অ্যাপ্লিকেশন উইন্ডোর নিখুঁত স্ন্যাপশট গ্রহণ করে ওয়ার্ড ডকুমেন্টে নির্দিষ্ট প্রস্থ ও এলাইনমেন্টে সন্নিবেশ।",
        voicePrompt: "উন্মুক্ত উইন্ডোর স্ক্রিনশট ডকুমেন্টে যোগ করো / সক্রিয় উইন্ডো ক্যাপচার করো",
        chatPrompt: "Capture available window screenshot and insert into document with 5.5 inches width",
        aiAction: "উইন্ডোর বাউন্ডিং বক্স ক্যাপচার করে Word InlineShapes.AddPicture দিয়ে ডকুমেন্টে যুক্ত করে।",
        category: "Available Windows"
      },
      {
        id: "cmd-sc-3",
        featureName: "স্ক্রিন ক্লিপিং (Screen Clipping / Custom Region)",
        featureNameEn: "Capture Custom Rectangular Screen Region or Full Screen",
        description: "পর্দার যেকোনো নির্দিষ্ট আয়তাকার অংশ বা সম্পূর্ণ স্ক্রিনের ক্লিপিং কেটে ওয়ার্ড ডকুমেন্টে ইনসার্ট।",
        voicePrompt: "স্ক্রিন ক্লিপিং ডকুমেন্টে যুক্ত করো / নির্দিষ্ট এলাকার স্ক্রিনশট নাও",
        chatPrompt: "Insert screen clipping with bounding box [100, 100, 600, 450] aligned center",
        aiAction: "কাস্টম কোঅর্ডিনেট থেকে PIL/GDI দিয়ে স্ক্রিন এরিয়া ক্রপ করে Word ডকুমেন্টে সন্নিবেশ করে।",
        category: "Screen Clipping"
      },
      {
        id: "cmd-sc-4",
        featureName: "স্ক্রিনশট ইউনিফাইড রাউটার (Manage Illustrations Screenshot)",
        featureNameEn: "Unified Router for Screenshot and Clipping Workflow",
        description: "একক সমন্বিত রাউটার দিয়ে উইন্ডো স্ন্যাপশট, স্ক্রিন ক্লিপিং ও উইন্ডো তালিকা ম্যানেজমেন্ট।",
        voicePrompt: "স্ক্রিনশট অপারেশন পরিচালনা করো / স্ক্রিন ক্লিপিং ম্যানেজ করো",
        chatPrompt: "Manage illustrations screenshot with screen clipping action and 4.5 inches width",
        aiAction: "manage_illustrations_screenshot রাউটার দিয়ে সমস্ত স্ক্রিনশট মেথড স্বয়ংক্রিয় পরিচালনা করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepId: "step-3-2-tb",
    stepNumber: "Step 29",
    menuName: "Insert Menu ➔ 3.2 Tables",
    title: "ইনসার্ট মেনু: টেবিল আর্কিটেকচার (৯টি প্রফেশনাল অপারেশন)",
    titleEn: "Insert Menu: Tables (Insert Table, Draw Table, Convert Text, Excel Spreadsheet, Quick Tables, Rows & Columns)",
    subtitle: "ডকুমেন্টে গ্রিড টেবিল তৈরি, পেন্সিল দিয়ে ড্র টেবিল, টেক্সট থেকে টেবিল রূপান্তর, লাইভ এক্সেল স্প্রেডশিট সংযোজন, কুইক টেবিল টেমপ্লেট এবং সারি ও কলাম যোগ/মুছে ফেলার পূর্ণ নিয়ন্ত্রণ।",
    badge: "Tables Architecture",
    icon: "Table",
    commands: [
      {
        id: "cmd-tb-1",
        featureName: "ইনসার্ট টেবিল (Insert Table)",
        featureNameEn: "Standard Table Grid with Custom Headers & Auto-Fit",
        description: "নির্দিষ্ট সংখ্যক সারি ও কলাম বিশিষ্ট টেবিল তৈরি করে কাস্টম হেডার, ডাটা ও গ্রিড স্টাইল প্রয়োগ।",
        voicePrompt: "ডকুমেন্টে একটি ৩ বাই ৩ টেবিল তৈরি করো / নতুন টেবিল ইনসার্ট করো",
        chatPrompt: "Insert 3x3 table with headers ['ID', 'Name', 'Department'] and custom data",
        aiAction: "Word COM doc.Tables.Add কল করে স্বয়ংক্রিয় উইন্ডো অটোফিট ও হেডার ফরম্যাটিং সহ টেবিল তৈরি করে।",
        category: "Insert Table"
      },
      {
        id: "cmd-tb-2",
        featureName: "ড্র টেবিল (Draw Table)",
        featureNameEn: "Pencil Draw Table with Custom Border Width, Style & Dimensions",
        description: "পেন্সিল দিয়ে টেবিল আঁকার মতো কাস্টম বর্ডার প্রস্থ, লাইন স্টাইল, ডাইমেনশন ও ব্যাকগ্রাউন্ড শেডিং সহ টেবিল নির্মাণ।",
        voicePrompt: "পেন্সিল দিয়ে টেবিল ড্র করো / কাস্টম বর্ডারসহ টেবিল আঁকো",
        chatPrompt: "Draw custom table 2x2 with 2.25pt single border and dark blue theme color",
        aiAction: "Borders.Enable এবং LineWidth/LineStyle কনফিগার করে ড্র টেবিল লেআউট প্রস্তুত করে।",
        category: "Draw Table"
      },
      {
        id: "cmd-tb-3",
        featureName: "টেক্সট থেকে টেবিল রূপান্তর (Convert Text to Table)",
        featureNameEn: "Convert Delimited Text (Commas, Tabs, Paragraphs) into Table",
        description: "কমা, ট্যাব, সেমিকোলন বা প্যারাগ্রাফ দ্বারা বিভক্ত কাঁচা টেক্সটকে সুসংগঠিত টেবিলে রূপান্তর।",
        voicePrompt: "কমা দিয়ে আলাদা করা টেক্সট থেকে টেবিল বানাও / টেক্সট টু টেবিল কনভার্ট করো",
        chatPrompt: "Convert comma-delimited text into structured table with auto column detection",
        aiAction: "Word COM Range.ConvertToTable মেথড ব্যবহার করে টেক্সটকে টেবিলে রূপান্তর করে।",
        category: "Convert Text"
      },
      {
        id: "cmd-tb-4",
        featureName: "এক্সেল স্প্রেডশিট সংযোজন (Excel Spreadsheet)",
        featureNameEn: "Live Embedded Excel Worksheet OLE Object with Formula Engine",
        description: "ওয়ার্ড ডকুমেন্টের ভেতরেই এক্সেল স্প্রেডশিট OLE অবজেক্ট এমবেড করে ফর্মুলা ও গ্রিড গণনা সক্রিয়করণ।",
        voicePrompt: "ডকুমেন্টে একটি এক্সেল স্প্রেডশিট যোগ করো / লাইভ এক্সেল শীট দাও",
        chatPrompt: "Insert live embedded Excel Spreadsheet with financial formula grid",
        aiAction: "doc.InlineShapes.AddOLEObject(ClassType='Excel.Sheet') দিয়ে এক্সেল ওয়ার্কশিট এমবেড করে।",
        category: "Excel Spreadsheet"
      },
      {
        id: "cmd-tb-5",
        featureName: "কুইক টেবিল টেমপ্লেট (Quick Tables)",
        featureNameEn: "Pre-formatted Quick Tables (Calendar, Tabular List, Matrix, Comparative)",
        description: "আকর্ষণীয় ডিজাইনের রেডিমেড ক্যালেন্ডার, টাস্ক লিস্ট, স্ট্র্যাটেজিক ম্যাট্রিক্স বা তুলনামূলক টেবিল টেমপ্লেট ইনসার্ট।",
        voicePrompt: "একটি ক্যালেন্ডার কুইক টেবিল দাও / রেডিমেড টেবিল টেমপ্লেট বসাও",
        chatPrompt: "Insert Quick Table with 'calendar' template and project schedule title",
        aiAction: "প্রি-বিল্ট আধুনিক সিএসএস/কালার শেডিং যুক্ত ক্যালেন্ডার বা ম্যাট্রিক্স টেমপ্লেট ইনসার্ট করে।",
        category: "Quick Tables"
      },
      {
        id: "cmd-tb-6",
        featureName: "নতুন সারি যোগ (Insert Rows Above / Below)",
        featureNameEn: "Insert Table Rows Above or Below Target Index with Cell Data",
        description: "চলমান টেবিলের নির্দিষ্ট সারির উপরে বা নিচে এক বা একাধিক নতুন সারি যোগ ও মান সন্নিবেশ।",
        voicePrompt: "টেবিলে একটি নতুন রো যোগ করো / নিচে নতুন সারি দাও",
        chatPrompt: "Insert table row below row 1 with values ['103', 'Zinnah', 'Architecture']",
        aiAction: "tbl.Rows.Add(BeforeRow) দিয়ে সঠিক পজিশনে রো যোগ করে বাংলা ফন্টসহ ডাটা পূরণ করে।",
        category: "Rows Management"
      },
      {
        id: "cmd-tb-7",
        featureName: "নতুন কলাম যোগ (Insert Columns Left / Right)",
        featureNameEn: "Insert Table Columns Left or Right with Header & Cell Values",
        description: "চলমান টেবিলের বামে বা ডানে নতুন কলাম যোগ করে কলাম শিরোনাম ও ডেটা ভরাট।",
        voicePrompt: "টেবিলে একটি নতুন কলাম যোগ করো / ডানে কলাম যুক্ত করো",
        chatPrompt: "Insert table column to the right with header 'Status' and values",
        aiAction: "tbl.Columns.Add(BeforeColumn) দিয়ে নির্ভুল পজিশনে কলাম ইনসার্ট করে শিরোনাম সেট করে।",
        category: "Columns Management"
      },
      {
        id: "cmd-tb-8",
        featureName: "সারি মুছে ফেলা (Delete Rows)",
        featureNameEn: "Delete Specific Row Index or Last Row from Table",
        description: "টেবিল থেকে নির্দিষ্ট সারির ইনডেক্স বা সর্বশেষ সারি নিরাপদে মুছে ফেলা।",
        voicePrompt: "টেবিল থেকে শেষ রো মুছে ফেলো / নির্দিষ্ট সারি ডিলিট করো",
        chatPrompt: "Delete last row from table 1 while maintaining table integrity",
        aiAction: "tbl.Rows(row_index).Delete() কল করে সারি অপসারণ করে অবশিষ্ট সারির সংখ্যা রিপোর্ট করে।",
        category: "Rows Management"
      },
      {
        id: "cmd-tb-9",
        featureName: "কলাম মুছে ফেলা (Delete Columns)",
        featureNameEn: "Delete Specific Column Index or Last Column from Table",
        description: "টেবিল থেকে নির্দিষ্ট কলামের ইনডেক্স বা সর্বশেষ কলাম নিরাপদে মুছে ফেলা।",
        voicePrompt: "টেবিল থেকে শেষ কলাম ডিলিট করো / কলাম মুছে ফেলো",
        chatPrompt: "Delete last column from table 1 while preserving data columns",
        aiAction: "tbl.Columns(col_index).Delete() কল করে কলাম অপসারণ করে অবশিষ্ট কলামের হিসাব দেয়।",
        category: "Columns Management"
      },
      {
        id: "cmd-tb-10",
        featureName: "টেবিল ইউনিফাইড রাউটার (Manage Insert Tables)",
        featureNameEn: "Unified Central Router for All Table Creation & Management",
        description: "একক কমান্ডের মাধ্যমে সমস্ত টেবিল তৈরি, ড্র, টেক্সট রূপান্তর, এক্সেল শিট, কুইক টেবিল ও রো/কলাম সম্পাদনা পরিচালনা।",
        voicePrompt: "টেবিল অপারেশন পরিচালনা করো / টেবিল ম্যানেজ করো",
        chatPrompt: "Manage insert tables with quick_tables action and tabular_list template",
        aiAction: "manage_insert_tables রাউটার ব্যবহার করে ডায়নামিকালি টেবিলের সকল অ্যাকশন হ্যান্ডল করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 30",
    menuName: "Insert Menu ➔ 3.4 Media",
    title: "ইনসার্ট মেনু: অনলাইন ভিডিও ও ভিডিও এমবেড (3.4 Media)",
    titleEn: "Insert Menu: Media (Online Video & Video Embed)",
    subtitle: "ডকুমেন্টে সরাসরি ইউটিউব, ভিমিও, ডেইলি মোশন বা মাইক্রোসফট স্ট্রিম থেকে অনলাইন ভিডিও যুক্ত করা অথবা কাস্টম HTML iframe এমবেড কোড সন্নিবেশ।",
    badge: "Media & Video",
    commands: [
      {
        id: "cmd-media-1",
        featureName: "অনলাইন ভিডিও সন্নিবেশ (Online Video)",
        featureNameEn: "Insert Online Video by Streaming URL (YouTube, Vimeo, Dailymotion, Stream)",
        description: "ভিডিওর URL (যেমন: YouTube, Vimeo, Dailymotion বা SharePoint/Stream) দিয়ে সরাসরি ডকুমেন্টে রেসপনসিভ প্লেয়েবল ভিডিও অবজেক্ট যুক্ত করা।",
        voicePrompt: "ডকুমেন্টে একটি ইউটিউব ভিডিও যোগ করো / অনলাইন ভিডিও ইনসার্ট করো",
        chatPrompt: "Insert online video from YouTube 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' with title 'Product Overview'",
        aiAction: "Word COM-এর InlineShapes.AddWebVideo API দিয়ে স্বয়ংক্রিয়ভাবে ভিডিও আইডি ও থার্ম্বনেইল পোস্টারসহ ডকুমেন্টে ভিডিও যোগ করে।",
        category: "Online Video"
      },
      {
        id: "cmd-media-2",
        featureName: "ভিডিও এমবেড কোড (Video Embed)",
        featureNameEn: "Insert Video Embed Code via Raw HTML iframe / Embed Tags",
        description: "কাস্টম HTML <iframe> বা এমবেড কোড ব্যবহার করে যেকোনো প্ল্যাটফর্মের ভিডিও নির্ভুল ডাইমেনশন ও প্লেব্যাক কন্ট্রোলসহ ডকুমেন্টে এমবেড করা।",
        voicePrompt: "ভিডিও এমবেড কোড ইনসার্ট করো / আইফ্রেম দিয়ে ভিডিও যুক্ত করো",
        chatPrompt: "Insert video embed code '<iframe width=\"560\" height=\"315\" src=\"https://player.vimeo.com/video/76979871\"></iframe>'",
        aiAction: "রॉ HTML এমবেড কোড পার্স করে সাইজ ও রেশিও স্কেল করে wdInlineShapeWebVideo হিসেবে ইনসার্ট করে।",
        category: "Video Embed"
      },
      {
        id: "cmd-media-3",
        featureName: "মিডিয়া ইউনিফাইড রাউটার (Manage Insert Media)",
        featureNameEn: "Unified Central Router for Online Video and Video Embed Operations",
        description: "একক কমান্ডের মাধ্যমে অনলাইন স্ট্রিমিং ভিডিও এবং কাস্টম এমবেড কোড স্বয়ংক্রিয়ভাবে শনাক্ত ও ইনসার্ট করার কেন্দ্রীয় রাউটার।",
        voicePrompt: "মিডিয়া ইনসার্ট করো / ভিডিও যোগ করো",
        chatPrompt: "Manage insert media with url 'https://youtu.be/dQw4w9WgXcQ' alignment center and width 5.5 inches",
        aiAction: "manage_insert_media রাউটার ব্যবহার করে ইনপুট টাইপ (URL বা iframe) স্বয়ংক্রিয়ভাবে শনাক্ত করে ডকুমেন্টে যুক্ত করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 31",
    menuName: "Insert Menu ➔ 3.5 Links",
    title: "ইনসার্ট মেনু: হাইপারলিংক, বুকমার্ক ও ক্রস-রেফারেন্স (3.5 Links)",
    titleEn: "Insert Menu: Links (Hyperlink, Bookmark & Cross-reference)",
    subtitle: "ডকুমেন্টে ওয়েব ও ফাইল হাইপারলিংক সংযোজন, নির্দিষ্ট টেক্সট বা স্থানে নামযুক্ত বুকমার্ক তৈরি ও নেভিগেশন এবং হেডিং/পৃষ্ঠা নম্বরে ক্রস-রেফারেন্স লিঙ্ক সন্নিবেশ।",
    badge: "Navigation & Links",
    commands: [
      {
        id: "cmd-link-1",
        featureName: "হাইপারলিংক সন্নিবেশ (Hyperlink)",
        featureNameEn: "Insert Hyperlink to Web URL, Email, File, or Document Target",
        description: "ডকুমেন্টে ক্লিকযোগ্য হাইপারলিংক তৈরি করা, ডিসপ্লে টেক্সট ও কাস্টম স্ক্রিনটিপ (টুলটিপ) সেট করা অথবা বিদ্যমান টেক্সটকে লিংকে রূপান্তর করা।",
        voicePrompt: "ডকুমেন্টে একটি হাইপারলিংক যোগ করো / গুগল লিঙ্ক তৈরি করো",
        chatPrompt: "Insert hyperlink to 'https://github.com/zinnahkhan01/Aegis-AI' with display text 'Aegis AI Repository' and tooltip",
        aiAction: "Word COM-এর Hyperlinks.Add API দিয়ে টার্গেট রেঞ্জে হাইপারলিংক, স্ক্রিনটিপ ও ডিসপ্লে টেক্সট যুক্ত করে।",
        category: "Hyperlinks"
      },
      {
        id: "cmd-link-2",
        featureName: "বুকমার্ক তৈরি ও ব্যবস্থাপনা (Bookmark)",
        featureNameEn: "Insert, List, Navigate & Delete Named Bookmarks",
        description: "ডকুমেন্টের নির্দিষ্ট অনুচ্ছেদ, শিরোনাম বা অবস্থানে নামযুক্ত বুকমার্ক তৈরি করা, বুকমার্কের তালিকা দেখা, নির্দিষ্ট বুকমার্কে জাম্প করা বা মুছে ফেলা।",
        voicePrompt: "Section1 নামে একটি বুকমার্ক যোগ করো / বুকমার্কে যাও",
        chatPrompt: "Insert bookmark named 'ProjectOverview' on selected text and list all document bookmarks",
        aiAction: "doc.Bookmarks.Add ও doc.Bookmarks.Delete API দিয়ে বুকমার্ক তৈরি, তালিকাভুক্তকরণ ও জাম্প পরিচালনা করে।",
        category: "Bookmarks"
      },
      {
        id: "cmd-link-3",
        featureName: "ক্রস-রেফারেন্স সংযোজন (Cross-reference)",
        featureNameEn: "Insert Dynamic Cross-reference to Headings, Bookmarks & Page Numbers",
        description: "ডকুমেন্টের ভেতরের হেডিং, বুকমার্ক, নাম্বারড আইটেম বা ফুটনোটের সাথে ডায়নামিক লিঙ্কযুক্ত ক্রস-রেফারেন্স (যেমন: 'See page 2' বা শিরোনাম টেক্সট) তৈরি।",
        voicePrompt: "হেডিং এর জন্য ক্রস রেফারেন্স দাও / পৃষ্ঠা নম্বরের রেফারেন্স যোগ করো",
        chatPrompt: "Insert cross-reference to bookmark 'ProjectOverview' showing page number with prefix 'See page: '",
        aiAction: "Range.InsertCrossReference API দিয়ে নির্ভুল হেডিং/বুকমার্ক ইনডেক্সে ক্লিকযোগ্য ক্রস-রেফারেন্স লিঙ্ক তৈরি করে।",
        category: "Cross-reference"
      },
      {
        id: "cmd-link-4",
        featureName: "লিংকস ইউনিফাইড রাউটার (Manage Insert Links)",
        featureNameEn: "Unified Central Router for Hyperlinks, Bookmarks & Cross-references",
        description: "একক কমান্ডের মাধ্যমে সমস্ত লিঙ্ক, বুকমার্ক এবং ক্রস-রেফারেন্সের অপারেশন স্বয়ংক্রিয়ভাবে শনাক্ত ও পরিচালনা করার কেন্দ্রীয় রাউটার।",
        voicePrompt: "লিংক অপারেশন পরিচালনা করো / বুকমার্ক ম্যানেজ করো",
        chatPrompt: "Manage insert links with action 'hyperlink' and address 'https://python.org'",
        aiAction: "manage_insert_links রাউটার দিয়ে ডায়নামিকালি লিঙ্ক, বুকমার্ক ও ক্রস-রেফারেন্স এক্সিকিউট করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 32",
    menuName: "Insert Menu ➔ 3.6 Comments",
    title: "ইনসার্ট মেনু: মন্তব্য ব্যবস্থাপনা (3.6 Comments)",
    titleEn: "Insert Menu: Comments (New Comment, Insert Comment, Reply, Resolve & Delete)",
    subtitle: "ডকুমেন্টের যেকোনো টেক্সট, সিলেকশন বা কার্সার অবস্থানে নতুন মন্তব্য (New Comment / Insert Comment) যোগ করা, কমেন্ট থ্রেডে রিপ্লাই দেওয়া, রিজলভ করা ও মুছে ফেলা।",
    badge: "Collaboration & Review",
    commands: [
      {
        id: "cmd-comment-1",
        featureName: "নতুন মন্তব্য সন্নিবেশ (New Comment / Insert Comment)",
        featureNameEn: "Insert New Comment on Selection, Word, or Cursor Range",
        description: "ডকুমেন্টের নির্বাচিত শব্দ, প্যারাগ্রাফ বা কার্সার অবস্থানে পর্যালোচনার জন্য নতুন মন্তব্য সন্নিবেশ করা, লেখক ও আদ্যক্ষর সেট করা।",
        voicePrompt: "ডকুমেন্টে একটি নতুন কমেন্ট যোগ করো / এই প্যারায় মন্তব্য দাও",
        chatPrompt: "Insert new comment on text 'budget figures': 'Please verify these figures with the accounting team'",
        aiAction: "Word COM doc.Comments.Add(Range, Text) দিয়ে টার্গেট টেক্সটে নতুন কমেন্ট থ্রেড তৈরি করে লেখক ও টাইমস্ট্যাম্প যুক্ত করে।",
        category: "Comments"
      },
      {
        id: "cmd-comment-2",
        featureName: "মন্তব্যের উত্তর প্রদান (Reply to Comment)",
        featureNameEn: "Reply to Existing Comment Thread",
        description: "বিদ্যমান যেকোনো কমেন্ট থ্রেডে সরাসরি প্রতিউত্তর (Reply) যোগ করা এবং দলীয় সহযোগিতামূলক আলোচনা বজায় রাখা।",
        voicePrompt: "১ নম্বর কমেন্টে রিপ্লাই দাও / মন্তব্যের উত্তর লিখো",
        chatPrompt: "Reply to comment 1: 'All figures verified and approved by the finance director'",
        aiAction: "Modern Word comment.Replies.Add(Range, Text) API দিয়ে সংশ্লিষ্ট কমেন্ট থ্রেডে চাইল্ড রিপ্লাই যোগ করে।",
        category: "Replies"
      },
      {
        id: "cmd-comment-3",
        featureName: "মন্তব্য সমাধান চিহ্নিতকরণ (Resolve Comment)",
        featureNameEn: "Mark Comment as Resolved / Done",
        description: "পর্যালোচনা সম্পন্ন হওয়া মন্তব্যসমূহকে সমাধান (Resolved/Done) হিসেবে চিহ্নিত করা অথবা প্রয়োজনে পুনরায় উন্মুক্ত করা।",
        voicePrompt: "কমেন্টটি সমাধান হিসেবে মার্ক করো / কমেন্ট রিজলভ করো",
        chatPrompt: "Resolve comment 1 and mark review status as done",
        aiAction: "Word COM comment.Done = True দিয়ে কমেন্ট থ্রেড সফলভাবে সমাধান চিহ্নিত করে।",
        category: "Resolve"
      },
      {
        id: "cmd-comment-4",
        featureName: "মন্তব্য পরিদর্শন ও মুছে ফেলা (List & Delete Comments)",
        featureNameEn: "List All Comments & Delete Single or All Comments",
        description: "ডকুমেন্টের সকল মন্তব্য, উত্তর ও মেটাডাটা তালিকাভুক্ত করে দেখা এবং নির্দিষ্ট বা সমস্ত মন্তব্য নিরাপদে মুছে ফেলা।",
        voicePrompt: "সব কমেন্ট দেখাও / সব মন্তব্য মুছে ফেলো",
        chatPrompt: "List all comments in document or delete all resolved comments",
        aiAction: "doc.Comments মেটাডাটা রিড করে এবং DeleteRecursively() দিয়ে পুরো থ্রেডসহ মন্তব্য নিখুঁতভাবে রিমুভ করে।",
        category: "Manage & Delete"
      },
      {
        id: "cmd-comment-5",
        featureName: "কমেন্টস ইউনিফাইড রাউটার (Manage Insert Comments)",
        featureNameEn: "Unified Central Router for Insert Comments",
        description: "একক কমান্ডের মাধ্যমে নতুন কমেন্ট তৈরি, রিপ্লাই, রিজলভ, লিস্ট ও ডিলিট অপারেশন স্বয়ংক্রিয়ভাবে শনাক্ত ও পরিচালনা করার কেন্দ্রীয় রাউটার।",
        voicePrompt: "কমেন্টস অপারেশন পরিচালনা করো / কমেন্ট ম্যানেজ করো",
        chatPrompt: "Manage insert comments with action 'insert_comment' text 'Final review required'",
        aiAction: "manage_insert_comments কেন্দ্রীয় রাউটার দিয়ে ডায়নামিকালি সমস্ত কমেন্ট কার্যক্রম পরিচালনা করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 33",
    menuName: "Insert Menu ➔ 3.7 Header & Footer",
    title: "ইনসার্ট মেনু: হেডার, ফুটার ও পৃষ্ঠা নম্বর (3.7 Header & Footer)",
    titleEn: "Insert Menu: Header, Footer, Page Number & Page Layouts",
    subtitle: "ডকুমেন্টের প্রতিটি সেকশনে হেডার ও ফুটার সংযোজন, কাস্টম এলাইনমেন্ট ও টাইপোগ্রাফি, ডায়নামিক পৃষ্ঠা নম্বর (Page X of Y), প্রথম পৃষ্ঠায় আলাদা হেডার/ফুটার এবং জোড়-বিজোড় পৃষ্ঠার বিন্যাস।",
    badge: "Document Layout",
    commands: [
      {
        id: "cmd-hf-1",
        featureName: "হেডার সন্নিবেশ ও ফরম্যাটিং (Header)",
        featureNameEn: "Insert & Format Document Header",
        description: "ডকুমেন্টের উপরে শিরোনাম, কোম্পানির নাম বা গোপনীয়তা বার্তা যোগ করা এবং বাম, কেন্দ্র বা ডান এলাইনমেন্ট সেট করা।",
        voicePrompt: "ডকুমেন্টে হেডার যোগ করো / হেডারে লিখো Aegis AI Architecture",
        chatPrompt: "Set document header text: 'Aegis AI System Architecture 2026' alignment: 'center' font_size: 10",
        aiAction: "Word COM Section.Headers(wdHeaderFooterPrimary) API দিয়ে টেক্সট, ফন্ট ও অনুচ্ছেদ এলাইনমেন্ট সেট করে।",
        category: "Header"
      },
      {
        id: "cmd-hf-2",
        featureName: "ফুটার সন্নিবেশ ও ফরম্যাটিং (Footer)",
        featureNameEn: "Insert & Format Document Footer",
        description: "ডকুমেন্টের নিচে পাদটীকা, কপিরাইট নোটিশ বা মেটাডাটা সংযোজন এবং মার্জিত ধূসর বা কাস্টম রঙে উপস্থাপন করা।",
        voicePrompt: "ফুটারে কপিরাইট নোটিশ দাও / ফুটার সেট করো",
        chatPrompt: "Set document footer text: 'Confidential & Proprietary - Supervex AI' alignment: 'left'",
        aiAction: "Word COM Section.Footers(wdHeaderFooterPrimary) API দিয়ে ফুটার টেক্সট ও টাইপোগ্রাফি প্রয়োগ করে।",
        category: "Footer"
      },
      {
        id: "cmd-hf-3",
        featureName: "ডায়নামিক পৃষ্ঠা নম্বর (Page Number)",
        featureNameEn: "Insert Dynamic Page Numbers (Simple or Page X of Y)",
        description: "ফুটার বা হেডারে স্বয়ংক্রিয় পৃষ্ঠা নম্বর যোগ করা, 'Page X of Y' অথবা রোমান/আরবি সংখ্যা ফরম্যাট প্রয়োগ করা।",
        voicePrompt: "ফুটারে পৃষ্ঠা নম্বর যোগ করো / পেজ ১ অফ ৫ দাও",
        chatPrompt: "Insert page number in footer right alignment with format 'page_x_of_y'",
        aiAction: "Word COM PageNumbers.Add ও wdFieldPage/wdFieldNumPages ডায়নামিক ফিল্ড দিয়ে নিখুঁত পৃষ্ঠা গণনা সন্নিবেশ করে।",
        category: "Page Number"
      },
      {
        id: "cmd-hf-4",
        featureName: "প্রথম পৃষ্ঠা আলাদা হেডার/ফুটার (Different First Page)",
        featureNameEn: "Different First Page Header & Footer",
        description: "কভার পেজ বা প্রচ্ছদের জন্য আলাদা হেডার/ফুটার সক্রিয় করা যাতে মূল পৃষ্ঠার হেডার প্রথম পৃষ্ঠায় প্রদর্শিত না হয়।",
        voicePrompt: "প্রথম পৃষ্ঠায় আলাদা হেডার সেট করো / কভার পেজের হেডার বন্ধ করো",
        chatPrompt: "Set different first page header with text 'Executive Summary' and remove page number from first page",
        aiAction: "PageSetup.DifferentFirstPageHeaderFooter = True সেট করে wdHeaderFooterFirstPage দিয়ে কাস্টম কভার হেডার বসায়।",
        category: "First Page Layout"
      },
      {
        id: "cmd-hf-5",
        featureName: "জোড় ও বিজোড় পৃষ্ঠা আলাদা হেডার/ফুটার (Different Odd & Even Pages)",
        featureNameEn: "Different Odd & Even Pages Header/Footer for Book Binding",
        description: "বই বা দ্বিমুখী প্রিন্টিংয়ের জন্য জোড় এবং বিজোড় পৃষ্ঠায় বিপরীতমুখী হেডার ও পৃষ্ঠা নম্বর (যেমন: বিজোড়ে ডানে, জোড়ে বামে) বিন্যাস করা।",
        voicePrompt: "জোড় ও বিজোড় পৃষ্ঠায় আলাদা হেডার চালু করো / বইয়ের মতো হেডার সাজাও",
        chatPrompt: "Set different odd & even pages with odd_header 'Aegis Core' and even_header 'Technical Manual'",
        aiAction: "PageSetup.OddAndEvenPagesHeaderFooter = True সক্রিয় করে wdHeaderFooterEvenPages হ্যান্ডেল করে।",
        category: "Book Binding Layout"
      },
      {
        id: "cmd-hf-6",
        featureName: "হেডার ও ফুটার ইউনিফাইড রাউটার (Manage Insert Header & Footer)",
        featureNameEn: "Unified Central Router for Headers, Footers & Page Numbers",
        description: "একক কমান্ডের মাধ্যমে হেডার, ফুটার, পেজ নাম্বার, ফার্স্ট পেজ ও অড-ইভেন পেজ লেআউট স্বয়ংক্রিয়ভাবে শনাক্ত ও পরিচালনা করার কেন্দ্রীয় রাউটার।",
        voicePrompt: "হেডার ও ফুটার পরিচালনা করো / পেজ লেআউট ম্যানেজ করো",
        chatPrompt: "Manage insert header footer with action 'page_number' position 'bottom' format 'page_x_of_y'",
        aiAction: "manage_insert_header_footer কেন্দ্রীয় রাউটার দিয়ে ডায়নামিকালি সমস্ত হেডার-ফুটার অপারেশন সম্পাদন করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 34",
    menuName: "Insert Menu ➔ 3.8 Text",
    title: "ইনসার্ট মেনু: টেক্সট বক্স, কুইক পার্টস ও টেক্সট এলিমেন্টস (3.8 Text)",
    titleEn: "Insert Menu: Text Box, Quick Parts, WordArt, Drop Cap & Text Elements",
    subtitle: "ডকুমেন্টে টেক্সট বক্স, কুইক পার্টস বিল্ডিং ব্লক, ডকুমেন্ট মেটাডাটা প্রোপার্টিজ, ডায়নামিক ফিল্ডস, স্টাইলিশ ওয়ার্ডআর্ট, ড্রপ ক্যাপ, ডিজিটাল স্বাক্ষর ব্লক, তারিখ-সময় ও এক্সটার্নাল ফাইল ইনসার্ট।",
    badge: "Text Elements",
    commands: [
      {
        name: "টেক্সট বক্স যোগ (Text Box)",
        nameEn: "Insert Text Box",
        voiceCmd: "ডকুমেন্টে একটি টেক্সট বক্স যোগ করো: 'বিশেষ বিজ্ঞপ্তি'",
        voiceCmdEn: "Insert bordered text box with text 'Important Notice'",
        chatPrompt: "Insert a text box with text 'Executive Summary' and preset 'bordered' at position left 100 top 120",
        aiAction: "insert_textbox এর মাধ্যমে কাস্টম স্টাইল, বর্ডার ও ফিল কালারসহ ফ্লোটিং টেক্সট বক্স ইনসার্ট করে।",
        category: "Text Box"
      },
      {
        name: "কোট টেক্সট বক্স (Quote Box)",
        nameEn: "Quote Text Box Preset",
        voiceCmd: "একটি কোট টেক্সট বক্স যোগ করো: 'উদ্ভাবনই নেতৃত্ব নির্ধারণ করে'",
        voiceCmdEn: "Insert quote text box 'Innovation distinguishes between a leader and a follower'",
        chatPrompt: "Insert text box with preset 'quote' and text 'Design is not just what it looks like'",
        aiAction: "উদ্ধৃতি বা সাইড নোটের জন্য প্রি-স্টাইলড কোট টেক্সট বক্স যুক্ত করে।",
        category: "Text Box"
      },
      {
        name: "কুইক পার্টস যোগ (Quick Parts)",
        nameEn: "Insert Quick Part",
        voiceCmd: "ডকুমেন্টে ডিসক্লেইমার কুইক পার্ট যোগ করো",
        voiceCmdEn: "Insert quick part disclaimer boilerplate",
        chatPrompt: "Insert quick part with name 'disclaimer' at end of document",
        aiAction: "insert_quick_part এর মাধ্যমে ডিসক্লেইমার, কনফিডেনশিয়ালিটি বা কোম্পানি হেডারের মতো পুনঃব্যবহারযোগ্য ব্লক যোগ করে।",
        category: "Quick Parts"
      },
      {
        name: "ডকুমেন্ট প্রোপার্টি (Document Property)",
        nameEn: "Insert Document Property",
        voiceCmd: "ডকুমেন্ট প্রোপার্টি হিসেবে author যোগ করো",
        voiceCmdEn: "Insert document property field Author",
        chatPrompt: "Insert document property 'Author' with prefix 'Prepared by: '",
        aiAction: "insert_document_property কল করে ডকুমেন্টের মেটাডাটা প্রোপার্টি ফিল্ড যুক্ত করে যা স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।",
        category: "Document Property"
      },
      {
        name: "ডায়নামিক ফিল্ড (Insert Field)",
        nameEn: "Insert Dynamic Word Field",
        voiceCmd: "ডকুমেন্টে মোট পৃষ্ঠাসংখ্যার ফিল্ড যোগ করো",
        voiceCmdEn: "Insert dynamic field NumPages",
        chatPrompt: "Insert field with field_name 'numpages'",
        aiAction: "insert_field এর মাধ্যমে Date, Time, FileName, FileSize, NumPages ইত্যাদি ডায়নামিক ফিল্ড যুক্ত করে।",
        category: "Field"
      },
      {
        name: "স্টাইলিশ ওয়ার্ডআর্ট (WordArt)",
        nameEn: "Insert WordArt",
        voiceCmd: "স্টাইলিশ ওয়ার্ডআর্ট যোগ করো: 'Aegis Supervex'",
        voiceCmdEn: "Insert stylish WordArt text 'Aegis Supervex' preset 1",
        chatPrompt: "Insert wordart with text 'Annual Report 2026' and font size 36 bold",
        aiAction: "insert_wordart এর মাধ্যমে আকর্ষণীয় থ্রিডি ও শ্যাডো স্টাইলসহ ওয়ার্ডআর্ট হেডলাইন তৈরি করে।",
        category: "WordArt"
      },
      {
        name: "ড্রপ ক্যাপ প্রয়োগ (Drop Cap)",
        nameEn: "Apply Drop Cap",
        voiceCmd: "প্রথম প্যারাগ্রাফে ৩ লাইনের ড্রপ ক্যাপ দাও",
        voiceCmdEn: "Apply drop cap on paragraph 1 lines to drop 3",
        chatPrompt: "Apply drop cap with position 'dropped' on paragraph 1 with 3 lines to drop",
        aiAction: "apply_drop_cap এর মাধ্যমে অনুচ্ছেদের প্রথম অক্ষরকে বড় ও দৃষ্টিনন্দন ড্রপ ক্যাপ স্টাইলে রূপান্তর করে।",
        category: "Drop Cap"
      },
      {
        name: "স্বাক্ষর লাইন ব্লক (Signature Line)",
        nameEn: "Insert Signature Line",
        voiceCmd: "স্বাক্ষর লাইন ব্লক যোগ করো: name: Zinnah Sir, title: Lead Architect",
        voiceCmdEn: "Insert signature line for John Doe - Managing Director",
        chatPrompt: "Insert signature line with signer_name 'Zinnah Sir' signer_title 'Chief Architect' organization 'Aegis AI Labs' with date",
        aiAction: "insert_signature_line এর মাধ্যমে সাইনার নেম, পদবি, প্রতিষ্ঠান, ইমেইল ও তারিখসহ প্রফেশনাল স্বাক্ষর লাইন ব্লক তৈরি করে।",
        category: "Signature Line"
      },
      {
        name: "তারিখ ও সময় (Date & Time)",
        nameEn: "Insert Date & Time",
        voiceCmd: "ডকুমেন্টে আজকের তারিখ যোগ করো",
        voiceCmdEn: "Insert current date and time with auto update",
        chatPrompt: "Insert date and time with format 'date_long' and update_automatically false",
        aiAction: "insert_date_time এর মাধ্যমে লং, শর্ট, আইএসও বা বাংলা ফরম্যাটে বর্তমান তারিখ ও সময় ইনসার্ট করে।",
        category: "Date & Time"
      },
      {
        name: "এক্সটার্নাল ফাইল থেকে টেক্সট (Text from File)",
        nameEn: "Insert Text from File",
        voiceCmd: "অন্য ফাইল থেকে টেক্সট ইনসার্ট করো: 'C:\\docs\\chapter1.docx'",
        voiceCmdEn: "Insert text from external file 'C:\\docs\\notes.txt'",
        chatPrompt: "Insert text from file with file_path 'C:\\docs\\chapter1.docx'",
        aiAction: "insert_text_from_file দিয়ে অন্য যেকোনো .docx, .doc, .txt বা .rtf ফাইলের লেখা ডকুমেন্টে ইমপোর্ট করে।",
        category: "Text from File"
      },
      {
        name: "অবজেক্ট এম্বেড (Insert Object)",
        nameEn: "Insert OLE Object",
        voiceCmd: "ডকুমেন্টে ফাইল অবজেক্ট হিসেবে এম্বেড করো: 'C:\\data\\report.pdf'",
        voiceCmdEn: "Embed file as OLE object with display as icon",
        chatPrompt: "Insert object from file_path 'C:\\data\\report.pdf' display_as_icon true",
        aiAction: "insert_object কল করে বাহ্যিক ফাইল বা অ্যাপ্লিকেশন ওএলই অবজেক্টকে আইকন অথবা সরাসরি ডকুমেন্টে এম্বেড করে।",
        category: "Object"
      },
      {
        name: "সেন্ট্রাল টেক্সট এলিমেন্টস রাউটার (Central Router)",
        nameEn: "Manage Text Elements",
        voiceCmd: "টেক্সট এলিমেন্টস অপশন থেকে কুইক পার্ট যোগ করো",
        voiceCmdEn: "Manage insert text elements action 'textbox' text 'Important Notice'",
        chatPrompt: "Manage insert text elements with action 'quick_part' name 'closing'",
        aiAction: "manage_insert_text_elements কেন্দ্রীয় রাউটার দিয়ে ডায়নামিকালি সমস্ত টেক্সট বক্স, কুইক পার্টস, ড্রপ ক্যাপ ও ওয়ার্ডআর্ট অপারেশন সম্পাদন করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 35",
    menuName: "Insert Menu ➔ 3.9 Symbols",
    title: "ইনসার্ট মেনু: সমীকরণ, গাণিতিক প্রতীক ও বিশেষ ক্যারেক্টার (3.9 Symbols)",
    titleEn: "Insert Menu: Equation, Math Symbols, Greek Letters & Special Characters",
    subtitle: "ডকুমেন্টে প্রিসেট ও কাস্টম গাণিতিক সমীকরণ, গ্রিক বর্ণমালা, বৈজ্ঞানিক ও গাণিতিক প্রতীক, কারেন্সি, বিশেষ টাইপোগ্রাফি চিহ্ন এবং সিম্বল লাইব্রেরি ইনসার্ট ও পরিচালনা।",
    badge: "Symbols & Equations",
    commands: [
      {
        name: "দ্বিঘাত সমীকরণ প্রিসেট (Quadratic Equation)",
        nameEn: "Insert Quadratic Formula",
        voiceCmd: "ডকুমেন্টে দ্বিঘাত সমীকরণ যোগ করো",
        voiceCmdEn: "Insert quadratic equation preset",
        chatPrompt: "Insert equation with preset 'quadratic' and display_style 'display'",
        aiAction: "insert_equation এর মাধ্যমে ওয়ার্ডের নেটিভ 2D OMaths ব্লকে প্রিসেট দ্বিঘাত সমীকরণ (Quadratic Formula) ইনসার্ট করে।",
        category: "Equation"
      },
      {
        name: "বৃত্তের ক্ষেত্রফল সমীকরণ (Area of Circle)",
        nameEn: "Insert Area of Circle Equation",
        voiceCmd: "বৃত্তের ক্ষেত্রফলের সমীকরণ ইনসার্ট করো",
        voiceCmdEn: "Insert area of circle equation",
        chatPrompt: "Insert equation preset 'area_of_circle'",
        aiAction: "A = πr² সূত্র সম্বলিত নেটিভ ওয়ার্ড সমীকরণ ব্লক যুক্ত করে।",
        category: "Equation"
      },
      {
        name: "পিথাগোরাসের উপপাদ্য সমীকরণ (Pythagorean Theorem)",
        nameEn: "Insert Pythagorean Equation",
        voiceCmd: "পিথাগোরাস সমীকরণ যোগ করো",
        voiceCmdEn: "Insert pythagorean equation",
        chatPrompt: "Insert equation with preset 'pythagorean'",
        aiAction: "a² + b² = c² সমীকরণ ওয়ার্ডের OMaths ফর্ম্যাটে রূপান্তর করে যুক্ত করে।",
        category: "Equation"
      },
      {
        name: "টেইলর ও ফুরিয়ার সিরিজ সমীকরণ (Series Expansions)",
        nameEn: "Insert Taylor & Fourier Series",
        voiceCmd: "ডকুমেন্টে টেইলর সিরিজ সমীকরণ বসাও",
        voiceCmdEn: "Insert taylor series equation",
        chatPrompt: "Insert equation with preset 'taylor_series'",
        aiAction: "উচ্চতর গণিতের টেইলর ও ফুরিয়ার সিরিজ সমীকরণ প্রিসেট ডকুমেন্টে স্থাপন করে।",
        category: "Equation"
      },
      {
        name: "নতুন কাস্টম সমীকরণ (Insert New Equation)",
        nameEn: "Insert Custom UnicodeMath Equation",
        voiceCmd: "নতুন সমীকরণ লিখো: 'E = mc^2'",
        voiceCmdEn: "Insert new equation 'x = (-b \\pm \\sqrt(b^2 - 4ac))/(2a)'",
        chatPrompt: "Insert new equation with formula 'x^2 + y^2 = r^2' and display_style 'display'",
        aiAction: "insert_new_equation কল করে যেকোনো কাস্টম লিনিয়ার ফর্মুলাকে OMaths.BuildUp() দ্বারা 2D ভিজ্যুয়াল সমীকরণে রূপান্তর করে।",
        category: "New Equation"
      },
      {
        name: "প্লাস-মাইনাস ও মৌলিক গাণিতিক চিহ্ন (Plus-Minus Symbol)",
        nameEn: "Insert Plus-Minus Symbol",
        voiceCmd: "প্লাস মাইনাস চিহ্ন বসাও",
        voiceCmdEn: "Insert plus minus symbol 2 times",
        chatPrompt: "Insert math symbol 'plus_minus' count 1",
        aiAction: "insert_math_symbol দিয়ে ±, ×, ÷, ≈, ≠, ≤, ≥ ইত্যাদি গাণিতিক অপারেটর ডকুমেন্টে ইনসার্ট করে।",
        category: "Mathematical Symbols"
      },
      {
        name: "অসীম বা ইনফিনিটি প্রতীক (Infinity Symbol)",
        nameEn: "Insert Infinity Symbol",
        voiceCmd: "ইনফিনিটি চিহ্ন যোগ করো",
        voiceCmdEn: "Insert infinity symbol",
        chatPrompt: "Insert math symbol 'infinity'",
        aiAction: "অসীম নির্দেশক ইনফিনিটি প্রতীক (∞) ইনসার্ট করে।",
        category: "Mathematical Symbols"
      },
      {
        name: "ইন্টিগ্রাল ও সামেশন ক্যালকুলাস চিহ্ন (Calculus Symbols)",
        nameEn: "Insert Integral & Summation Symbols",
        voiceCmd: "ইন্টিগ্রাল চিহ্ন যোগ করো",
        voiceCmdEn: "Insert summation symbol",
        chatPrompt: "Insert math symbol 'integral'",
        aiAction: "ক্যালকুলাস ও পরিসংখ্যানের জন্য ∫, ∑, ∏, √, ∛, ∂, ∇ প্রতীক ইনসার্ট করে।",
        category: "Mathematical Symbols"
      },
      {
        name: "গ্রিক বর্ণমালা (Greek Letters)",
        nameEn: "Insert Greek Letter",
        voiceCmd: "গ্রিক অক্ষর আলফা যোগ করো",
        voiceCmdEn: "Insert capital omega greek letter",
        chatPrompt: "Insert greek letter 'omega' uppercase true",
        aiAction: "insert_greek_letter দ্বারা আলফা (α), বিটা (β), পাই (π), সিগমা (σ), ক্যাপিটাল ডেল্টা (Δ), ওমেগা (Ω) ইত্যাদি ইনসার্ট করে।",
        category: "Greek Letters"
      },
      {
        name: "কপিরাইট ও ট্রেডমার্ক চিহ্ন (Copyright & Trademark)",
        nameEn: "Insert Copyright & Trademark",
        voiceCmd: "কপিরাইট চিহ্ন বসাও",
        voiceCmdEn: "Insert registered trademark symbol",
        chatPrompt: "Insert special character 'copyright'",
        aiAction: "insert_special_character দিয়ে ©, ®, ™ ইত্যাদি আন্তর্জাতিক আইনি ও বাণিজ্যিক প্রতীক যুক্ত করে।",
        category: "Special Characters"
      },
      {
        name: "টাকা ও কারেন্সি প্রতীক (Currency Symbols)",
        nameEn: "Insert Taka, Euro & Pound Symbols",
        voiceCmd: "টাকা চিহ্ন ইনসার্ট করো",
        voiceCmdEn: "Insert euro currency symbol",
        chatPrompt: "Insert special character 'taka'",
        aiAction: "বাংলাদেশি টাকা (৳), ইউরো (€), পাউন্ড (£), ইয়েন (¥), রুপি (₹) ইত্যাদি মুদ্রা চিহ্ন ইনসার্ট করে।",
        category: "Special Characters"
      },
      {
        name: "এম ড্যাশ ও টাইপোগ্রাফি (Em Dash & Typography)",
        nameEn: "Insert Em Dash & Typographical Marks",
        voiceCmd: "এম ড্যাশ চিহ্ন যোগ করো",
        voiceCmdEn: "Insert em dash character",
        chatPrompt: "Insert special character 'em_dash'",
        aiAction: "প্রফেশনাল পাবলিশিং ও টাইপোগ্রাফির জন্য এম ড্যাশ (—), এন ড্যাশ (–), এলিপসিস (…), সেকশন (§), পিলক্রো (¶) যোগ করে।",
        category: "Special Characters"
      },
      {
        name: "সিম্বল লাইব্রেরি ও টিক চিহ্ন (Symbol Library & Icons)",
        nameEn: "Insert Symbol from Library",
        voiceCmd: "সিম্বল লাইব্রেরি থেকে টিক চিহ্ন যোগ করো",
        voiceCmdEn: "Insert checkmark symbol from library",
        chatPrompt: "Insert symbol from library with symbol_or_code 'checkmark'",
        aiAction: "insert_symbol_from_library দিয়ে চেক/টিকমার্ক (✓), তীর (→, ←), স্টার (★), হার্ট (♥), ফ্র্যাকশন (½, ¼) ও হেক্স কোড (U+XXXX) ইনসার্ট করে।",
        category: "Symbol Library"
      },
      {
        name: "সেন্ট্রাল সিম্বলস রাউটার (Central Symbols Router)",
        nameEn: "Manage Insert Symbols Router",
        voiceCmd: "সিম্বলস মেনু থেকে নতুন সমীকরণ ইনসার্ট করো",
        voiceCmdEn: "Manage insert symbols action 'equation' preset 'quadratic'",
        chatPrompt: "Manage insert symbols with symbol_action 'math_symbol' symbol 'infinity'",
        aiAction: "manage_insert_symbols কেন্দ্রীয় রাউটার দিয়ে সমীকরণ, গাণিতিক প্রতীক, গ্রিক লেটার ও বিশেষ চিহ্ন এক জায়গায় নিয়ন্ত্রণ করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 36",
    menuName: "4. DRAW MENU [zk1.1] ➔ Tools",
    title: "ড্র মেনু: ডিজিটাল পেন, ফ্রিহ্যান্ড ড্রয়িং ও ইনক টুলস (4. Draw Menu Tools)",
    titleEn: "Draw Menu: Digital Pens, Inking, Stylus, Shape/Math Conversion & Canvas Tools",
    subtitle: "ডকুমেন্টে ডিজিটাল বলপয়েন্ট পেন, পেন্সিল, হাইলাইটার, ল্যাসো সিলেকশন, ইরেজার, টাচ ড্রয়িং, ইনক টু শেপ, ইনক টু ম্যাথ, ইনক রিপ্লে, ডিজিটাল রুলার ও ড্রয়িং ক্যানভাস পরিচালনা।",
    badge: "Draw & Digital Ink",
    commands: [
      {
        name: "সিলেক্ট পয়েন্টার টুল (Select Tool)",
        nameEn: "Select & Pointer Mode",
        voiceCmd: "পয়েন্টার মোডে যাও",
        voiceCmdEn: "Switch to select pointer tool",
        chatPrompt: "Switch to select tool with mode 'select'",
        aiAction: "draw_select_tool কল করে ড্রয়িং পেন থেকে সাধারণ টেক্সট ও অবজেক্ট সিলেকশন মোডে ফিরে যায়।",
        category: "Select"
      },
      {
        name: "ল্যাসো সিলেকশন টুল (Lasso Select)",
        nameEn: "Lasso Select Ink",
        voiceCmd: "ল্যাসো সিলেক্ট দিয়ে হাতের ড্রয়িং ধরো",
        voiceCmdEn: "Activate ink lasso select tool",
        chatPrompt: "Activate lasso select tool for ink strokes",
        aiAction: "draw_lasso_select এর মাধ্যমে ফ্রিহ্যান্ড ড্রয়িং বা হাতের লেখার স্ট্রোকগুলোকে বৃত্তাকারে ঘিরে সিলেক্ট করে।",
        category: "Select"
      },
      {
        name: "স্ট্রোক ও পয়েন্ট ইরেজার (Eraser Tool)",
        nameEn: "Ink Eraser Tool",
        voiceCmd: "ইরেজার টুল অন করো",
        voiceCmdEn: "Clear all ink drawings",
        chatPrompt: "Activate eraser tool with mode 'stroke'",
        aiAction: "draw_eraser দিয়ে সম্পূর্ণ স্ট্রোক বা পয়েন্ট অনুযায়ী ড্রয়িং মুছে ফেলা যায় অথবা সব ড্রয়িং ক্লিয়ার করা যায়।",
        category: "Eraser"
      },
      {
        name: "ডিজিটাল বলপয়েন্ট পেন (Ballpoint Pen)",
        nameEn: "Ballpoint Pen Tool",
        voiceCmd: "নীল বলপয়েন্ট পেন চালু করো ২ মিমি",
        voiceCmdEn: "Activate red pen tool thickness 0.5mm",
        chatPrompt: "Activate pen tool with color 'blue' and thickness 1.0",
        aiAction: "draw_pen এর মাধ্যমে ডিজিটাল বলপয়েন্ট কলম সক্রিয় করে এবং প্রয়োজনমতো ক্যানভাসে ভেক্টর স্ট্রোক আঁকে।",
        category: "Pen"
      },
      {
        name: "গ্রাফাইট পেন্সিল ড্রয়িং (Graphite Pencil)",
        nameEn: "Digital Pencil Tool",
        voiceCmd: "গ্রাফাইট পেন্সিল দিয়ে ড্র করো",
        voiceCmdEn: "Activate digital pencil tool",
        chatPrompt: "Activate pencil tool with color 'graphite' thickness 0.5",
        aiAction: "draw_pencil কল করে নরম স্কেচিং, হালকা শেডিং ও ফাইন পয়েন্ট পেন্সিল টেক্সচার সক্রিয় করে।",
        category: "Pencil"
      },
      {
        name: "ডিজিটাল হাইলাইটার মার্কার (Highlighter Tool)",
        nameEn: "Digital Ink Highlighter",
        voiceCmd: "হলুদ হাইলাইটার টুল চালু করো",
        voiceCmdEn: "Activate cyan ink highlighter tool",
        chatPrompt: "Activate highlighter with color 'yellow' thickness 3.5",
        aiAction: "draw_highlighter দ্বারা স্বচ্ছ মার্কার (হলুদ, সবুজ, সায়ান, গোলাপী ইত্যাদি) দিয়ে ড্রয়িং ও ডকুমেন্টে হাইলাইট করে।",
        category: "Highlighter"
      },
      {
        name: "টাচ ও স্টাইলাস ড্রয়িং (Draw with Touch)",
        nameEn: "Draw with Touch / Stylus",
        voiceCmd: "টাচ ড্রয়িং মোড চালু করো",
        voiceCmdEn: "Toggle draw with touch mode",
        chatPrompt: "Set draw with touch mode enabled true",
        aiAction: "draw_with_touch এর মাধ্যমে আঙুল বা ডিজিটাল স্টাইলাস পেন দিয়ে স্ক্রিনে ড্রয়িং সুবিধা অন/অফ করে।",
        category: "Touch"
      },
      {
        name: "ইনক টু শেপ জ্যামিতিক রূপান্তর (Ink to Shape)",
        nameEn: "Ink to Shape Conversion",
        voiceCmd: "হাতের ড্রয়িং বৃত্তে রূপান্তর করো",
        voiceCmdEn: "Convert ink to shape rectangle",
        chatPrompt: "Convert handwritten ink into shape 'circle'",
        aiAction: "draw_ink_to_shape ফ্রিহ্যান্ডে আঁকা অপরিচ্ছন্ন রেখাকে নিখুঁত বৃত্ত, আয়তক্ষেত্র, ত্রিভুজ বা স্টারে রূপান্তর করে।",
        category: "Conversion"
      },
      {
        name: "ইনক টু ম্যাথ সমীকরণ রূপান্তর (Ink to Math)",
        nameEn: "Ink to Math Equation",
        voiceCmd: "ইঙ্ক টু ম্যাথ চালু করো 'a^2 + b^2 = c^2'",
        voiceCmdEn: "Convert handwritten math to Word equation",
        chatPrompt: "Activate ink to math with formula 'x^2 + y^2 = 1'",
        aiAction: "draw_ink_to_math ডিজিটাল স্টাইলাসে লেখা যেকোনো গাণিতিক সমীকরণকে ওয়ার্ডের 2D OMaths ফর্ম্যাটে রূপান্তর করে।",
        category: "Conversion"
      },
      {
        name: "ইনক রিপ্লে অ্যানিমেশন (Ink Replay)",
        nameEn: "Ink Replay Playback",
        voiceCmd: "ড্রয়িংয়ের ইঙ্ক রিপ্লে দেখাও",
        voiceCmdEn: "Replay ink drawing animation",
        chatPrompt: "Play ink replay animation with speed 'normal'",
        aiAction: "draw_ink_replay ডকুমেন্টের ড্রয়িং ও হাতের লেখা যে ক্রমে আঁকা হয়েছিল তা পুনরায় ভিডিওর মতো প্লে করে দেখায়।",
        category: "Replay"
      },
      {
        name: "ডিজিটাল রুলার স্কেল (Digital Ruler)",
        nameEn: "Digital On-Screen Ruler",
        voiceCmd: "স্কেল অন করো",
        voiceCmdEn: "Toggle digital ruler on screen",
        chatPrompt: "Set ruler visibility true with angle 0.0",
        aiAction: "draw_ruler এর মাধ্যমে সোজা লাইন টানা ও কোণ পরিমাপের জন্য স্ক্রিনে ডিজিটাল রুলার প্রদর্শন বা লুকানো যায়।",
        category: "Ruler"
      },
      {
        name: "ড্রয়িং ক্যানভাস ইনসার্ট (Drawing Canvas)",
        nameEn: "Insert Drawing Canvas",
        voiceCmd: "ডকুমেন্টে একটি নতুন ড্রয়িং ক্যানভাস তৈরি করো",
        voiceCmdEn: "Insert drawing canvas 500x300",
        chatPrompt: "Insert drawing canvas with width 400 height 250 border_color 'blue'",
        aiAction: "draw_canvas কল করে ওয়ার্ডের নেটিভ ক্যানভাস ব্লক (Shapes.AddCanvas) তৈরি করে যার ভেতরে একাধিক ড্রয়িং অবজেক্ট রাখা যায়।",
        category: "Canvas"
      },
      {
        name: "পেনের রং নির্ধারণ (Pen Color)",
        nameEn: "Set Pen Color",
        voiceCmd: "পেনের রং রেইনবো কালার করো",
        voiceCmdEn: "Set pen color to galaxy",
        chatPrompt: "Set pen color to 'rainbow' for pen_type 'pen'",
        aiAction: "set_pen_color দিয়ে স্ট্যান্ডার্ড ও স্পেশাল ডিজিটাল কালার (ব্ল্যাক, রেড, রেইনবো, গ্যালাক্সি, লাভা, গোল্ড ইত্যাদি) নির্বাচন করা যায়।",
        category: "Palette"
      },
      {
        name: "পেন স্ট্রোকের পুরুত্ব (Pen Thickness)",
        nameEn: "Set Pen Thickness",
        voiceCmd: "পেন সাইজ ৩.৫ মিমি করো",
        voiceCmdEn: "Set pen thickness to 2mm",
        chatPrompt: "Set pen thickness to 2.0 unit 'mm'",
        aiAction: "set_pen_thickness দিয়ে কলমের রেখার সাইজ (০.২৫ মিমি থেকে ৩.৫ মিমি পর্যন্ত) পরিবর্তন করা হয়।",
        category: "Palette"
      },
      {
        name: "প্যালেটে নতুন পেন যুক্ত (Add Pen)",
        nameEn: "Add Custom Pen to Palette",
        voiceCmd: "প্যালেট এ একটি নতুন লাল পেন যোগ করো ২ মিমি",
        voiceCmdEn: "Add new blue highlighter to pen toolbox",
        chatPrompt: "Add pen to palette with type 'pen' color 'red' thickness 2.0",
        aiAction: "add_pen এর মাধ্যমে পছন্দের রং ও পুরুত্বসহ কাস্টম পেন, পেন্সিল বা হাইলাইটার ব্যক্তিগত প্যালেটে সংরক্ষণ করা যায়।",
        category: "Palette"
      },
      {
        name: "প্যালেট থেকে পেন মুছে ফেলা (Remove Pen)",
        nameEn: "Remove Pen from Palette",
        voiceCmd: "প্যালেট থেকে লাল পেন রিমুভ করো",
        voiceCmdEn: "Remove pen from favorites palette",
        chatPrompt: "Remove pen from palette with color 'red'",
        aiAction: "remove_pen দিয়ে ড্রয়িং টুলবক্স থেকে অপ্রয়োজনীয় পেন সহজে মুছে ফেলা যায়।",
        category: "Palette"
      },
      {
        name: "সেন্ট্রাল ড্র মেনু রাউটার (Manage Draw Tools)",
        nameEn: "Manage Draw Tools Router",
        voiceCmd: "ড্র মেনু থেকে পেন্সিল সিলেক্ট করো",
        voiceCmdEn: "Manage draw tools action 'canvas' width 400",
        chatPrompt: "Manage draw tools with draw_action 'pen' color 'blue'",
        aiAction: "manage_draw_tools কেন্দ্রীয় রাউটার দিয়ে ডিজিটাল পেন, ক্যানভাস, রুলার, ইরেজার ও রূপান্তর টুলসমূহ ডায়নামিকালি পরিচালনা করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 37",
    menuName: "4. DRAW MENU [zk1.1] ➔ Advanced",
    title: "ড্র মেনু অ্যাডভান্সড: হাতের লেখা নোট, ফ্রিহ্যান্ড ড্রয়িং, ডকুমেন্ট অ্যানোটেশন ও ইনক টু টেক্সট রূপান্তর",
    titleEn: "Draw Menu Advanced: Handwritten Notes, Freehand Curves/Signatures, Text Annotation, Handwriting Recognition & Convert Ink to Text",
    subtitle: "ডকুমেন্টে সুন্দর মার্জিন স্টিকি নোট, ডিজিটাল স্বাক্ষর/ফ্রিহ্যান্ড স্কেচ, শব্দের চারপাশে ডিজিটাল পেন বৃত্ত/আন্ডারলাইন মার্ক, হাতের লেখা স্বয়ংক্রিয় শনাক্তকরণ ও টেক্সটে রূপান্তরের পূর্ণাঙ্গ অটোমেশন।",
    badge: "Draw Advanced",
    commands: [
      {
        name: "হাতের লেখা স্টিকি নোট (Handwritten Notes)",
        nameEn: "Handwritten Sticky Notes",
        voiceCmd: "একটি হলুদ হাতের লেখা স্টিকি নোট দাও: 'মিটিংয়ের সিদ্ধান্ত দ্রুত বাস্তবায়ন করুন'",
        voiceCmdEn: "Insert handwritten note 'Review chapter 3' with yellow background",
        chatPrompt: "Insert handwritten note text 'Urgent review required' with bg_color 'yellow' font_name 'Segoe Script'",
        aiAction: "draw_handwritten_note দিয়ে ডকুমেন্টের মার্জিনে সুন্দর প্যাস্টেল রঙের স্টিকি নোট ও হস্তাক্ষর ফন্ট (Segoe Script, Lucida Handwriting) সন্নিবেশ করা হয়।",
        category: "Handwritten Notes"
      },
      {
        name: "ফ্রিহ্যান্ড ড্রয়িং ও ডিজিটাল স্বাক্ষর (Freehand Drawing & Signature)",
        nameEn: "Freehand Vector Drawing & Signature",
        voiceCmd: "ডকুমেন্টে একটি নীল ডিজিটাল স্বাক্ষর ফ্রিহ্যান্ডে আঁকো",
        voiceCmdEn: "Draw a freehand signature with blue ink",
        chatPrompt: "Draw freehand drawing with drawing_type 'signature' color 'blue' thickness 1.8",
        aiAction: "draw_freehand_drawing প্রসিডিউরাল ভেক্টর পাথ (Shapes.BuildFreeform) ব্যবহার করে স্বাক্ষর, তরঙ্গ রেখা, স্পাইরাল ও তারা ডুডল আঁকে।",
        category: "Freehand Drawing"
      },
      {
        name: "ডকুমেন্ট টেক্সট অ্যানোটেশন (Annotate Document)",
        nameEn: "Contextual Text Inking & Annotation",
        voiceCmd: "গুরুত্বপূর্ণ 'Approved' শব্দটিতে লাল বৃত্ত দিয়ে মার্ক করো",
        voiceCmdEn: "Annotate target text 'Approved' with red freehand circle",
        chatPrompt: "Annotate document with annotation_type 'circle' text_target 'Approved' color 'red'",
        aiAction: "draw_annotate_document পেজের নির্দিষ্ট শব্দ বা বাক্যের ওপর স্বয়ংক্রিয়ভাবে ডিজিটাল সার্কেল, ঢেউ খেলানো আন্ডারলাইন, মার্জিন স্টার বা অ্যারো আঁকে।",
        category: "Annotate Document"
      },
      {
        name: "হাতের লেখা শনাক্তকরণ (Handwriting Recognition)",
        nameEn: "Handwriting OCR & Recognition",
        voiceCmd: "হাতের লেখাটি শনাক্ত করো",
        voiceCmdEn: "Recognize handwriting from the latest digital note",
        chatPrompt: "Recognize handwriting with target 'latest_note'",
        aiAction: "draw_handwriting_recognition হস্তাক্ষর নোট বা ডিজিটাল ইনক থেকে শব্দ ও অক্ষরসমূহ পড়ে হাই এক্যুরেসি কনফিডেন্স স্কোর ও ভাষা নির্দেশ করে।",
        category: "Recognition"
      },
      {
        name: "ইঙ্ক থেকে টেক্সট রূপান্তর (Convert Ink to Text)",
        nameEn: "Convert Ink to Editable Text",
        voiceCmd: "হাতের লেখাটি টাইপ করা টেক্সটে রূপান্তর করো",
        voiceCmdEn: "Convert ink note to editable Word text paragraph",
        chatPrompt: "Convert ink to text with target 'latest_note' replace_with_text True",
        aiAction: "draw_convert_ink_to_text হাতের লেখা নোট বা ইনক স্ট্রোককে স্ট্যান্ডার্ড এডিটেবল প্যারাগ্রাফ টেক্সটে রূপান্তর করে ইনক শেপটি প্রতিস্থাপন করে।",
        category: "Convert to Text"
      },
      {
        name: "সেন্ট্রাল ড্র অ্যাডভান্সড রাউটার (Manage Draw Advanced)",
        nameEn: "Manage Draw Advanced Unified Router",
        voiceCmd: "ড্র অ্যাডভান্সড স্ট্যাটাস চেক করো",
        voiceCmdEn: "Manage draw advanced action 'status'",
        chatPrompt: "Manage draw advanced with action 'status'",
        aiAction: "manage_draw_advanced কেন্দ্রীয় ডিসপ্যাচার দিয়ে হস্তাক্ষর নোট, ফ্রিহ্যান্ড স্কেচ, অ্যানোটেশন, রিকগনিশন ও টেক্সট রূপান্তর সামগ্রিকভাবে সমন্বয় করে।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 38",
    menuName: "5. DESIGN MENU ➔ 5.1 Document Formatting",
    title: "ডিজাইন মেনু: ডকুমেন্ট ফরম্যাটিং, থিম, কালার প্যালেট, ফন্ট পেয়ারিং, প্যারাগ্রাফ স্পেসিং ও ডিফল্ট সেটিংস",
    titleEn: "Design Menu: Document Formatting, Themes, Color Schemes, Font Pairings, Paragraph Spacing Presets & Set as Default",
    subtitle: "সম্পূর্ণ ডকুমেন্টের ভিজ্যুয়াল লুক এক ক্লিকে পরিবর্তন করার জন্য অফিসিয়াল থিম (.thmx), ১২টি থিম কালার, টাইপোগ্রাফিক ফন্ট পেয়ারিং, প্যারাগ্রাফ স্পেসিং প্রিসেট ও Normal.dotm গ্লোবাল টেমপ্লেটে সেভ করার পূর্ণাঙ্গ অটোমেশন।",
    badge: "Design Formatting",
    commands: [
      {
        name: "ডকুমেন্ট থিম প্রয়োগ (Document Themes)",
        nameEn: "Apply Document Theme (.thmx)",
        voiceCmd: "ডকুমেন্টে Facet থিম সেট করো",
        voiceCmdEn: "Set document theme to 'Facet'",
        chatPrompt: "Apply document theme with theme_name 'Facet'",
        aiAction: "design_document_theme দিয়ে ডকুমেন্টে অফিসিয়াল Office .thmx থিম (Facet, Integral, Slice, Ion, Office ইত্যাদি) প্রয়োগ করে সার্বিক কালার, ফন্ট ও স্টাইল সেট আপডেট করা হয়।",
        category: "Themes"
      },
      {
        name: "থিম কালার প্যালেট (Theme Colors)",
        nameEn: "Theme Color Scheme & Palette",
        voiceCmd: "কালার প্যালেট ব্লু করো",
        voiceCmdEn: "Set theme color scheme to 'Blue'",
        chatPrompt: "Change theme colors with palette_name 'Blue'",
        aiAction: "design_theme_colors দিয়ে ডকুমেন্টের ১২টি থিম কালার (Dark 1/2, Light 1/2, Accent 1..6, Hyperlinks) প্রিসেট বা কাস্টম হেক্স কোড অনুযায়ী পরিবর্তন করা হয়।",
        category: "Colors"
      },
      {
        name: "থিম ফন্ট পেয়ারিং (Theme Fonts)",
        nameEn: "Theme Font Pairing (Major & Minor)",
        voiceCmd: "থিম ফন্ট Georgia করো",
        voiceCmdEn: "Set theme font pairing to 'Georgia' (Headings Georgia, Body Garamond)",
        chatPrompt: "Set theme fonts with font_scheme 'Georgia' heading_font 'Georgia' body_font 'Garamond'",
        aiAction: "design_theme_fonts দিয়ে ডকুমেন্টের ThemeFontScheme (MajorFont/শিরোনাম এবং MinorFont/মূল বক্তব্য) পেয়ারিং নির্ধারণ করা হয়।",
        category: "Fonts"
      },
      {
        name: "প্যারাগ্রাফ স্পেসিং প্রিসেট (Paragraph Spacing)",
        nameEn: "Style Set Paragraph Spacing Presets",
        voiceCmd: "প্যারাগ্রাফ স্পেসিং কম্প্যাক্ট করো",
        voiceCmdEn: "Set paragraph spacing to 'compact'",
        chatPrompt: "Configure paragraph spacing with spacing_preset 'compact'",
        aiAction: "design_paragraph_spacing দিয়ে পুরো ডকুমেন্টের জন্য Word Design ট্যাবের অফিসিয়াল স্পেসিং প্রিসেট (No Space, Compact, Tight, Open, Relaxed, Double) প্রয়োগ করা হয়।",
        category: "Paragraph Spacing"
      },
      {
        name: "থিম ইফেক্টস (Theme Effects)",
        nameEn: "Theme Visual Effects",
        voiceCmd: "থিম ইফেক্ট গ্লসি করো",
        voiceCmdEn: "Set theme effects to 'Glossy'",
        chatPrompt: "Apply theme effects with effect_name 'Glossy'",
        aiAction: "design_theme_effects দিয়ে ডকুমেন্টের শেপ, স্মার্টআর্ট ও টেবিল গ্রাফিক্সের ভিজ্যুয়াল ইফেক্ট স্কিম (Office, Glossy, Ribbon, Smoky ইত্যাদি) নির্ধারণ করা হয়।",
        category: "Effects"
      },
      {
        name: "ডিফল্ট হিসেবে সংরক্ষণ (Set as Default)",
        nameEn: "Set as Default Template (Normal.dotm)",
        voiceCmd: "এই ডিজাইনটি ডিফল্ট হিসেবে সেভ করো",
        voiceCmdEn: "Save current formatting as default template",
        chatPrompt: "Set as default design formatting with save_template True",
        aiAction: "design_set_as_default বর্তমান ডকুমেন্টের থিম, ফন্ট, কালার ও প্যারাগ্রাফ স্টাইল সেটিংস সরাসরি Normal.dotm গ্লোবাল টেমপ্লেটে সেভ করে যাতে ভবিষ্যৎ সব নতুন ফাইলে এই স্টাইল বজায় থাকে।",
        category: "Set as Default"
      },
      {
        name: "সেন্ট্রাল ডকুমেন্ট ফরম্যাটিং রাউটার (Manage Document Formatting)",
        nameEn: "Manage Document Formatting Unified Router",
        voiceCmd: "ডকুমেন্ট ফরম্যাটিং ম্যানেজ করো",
        voiceCmdEn: "Manage document formatting with action 'theme'",
        chatPrompt: "Manage document formatting with sub_action 'theme' theme_name 'Facet'",
        aiAction: "manage_document_formatting কেন্দ্রীয় কন্ট্রোলার দিয়ে থিম, কালার, ফন্ট, প্যারাগ্রাফ স্পেসিং, ইফেক্ট ও ডিফল্ট টেমপ্লেট সেটিং সামগ্রিকভাবে পরিচালনা করা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 39",
    menuName: "5. DESIGN MENU ➔ 5.2 Page Background",
    title: "ডিজাইন মেনু: পেজ ব্যাকগ্রাউন্ড, টেক্সট ও পিকচার ওয়াটারমার্ক, ব্যাকগ্রাউন্ড কালার, গ্রেডিয়েন্ট এবং পেজ বর্ডার",
    titleEn: "Design Menu: Page Background, Text & Picture Watermark, Page Fill Color & Gradients, and Page Borders & Border Art",
    subtitle: "ডকুমেন্টের পেজ ব্যাকগ্রাউন্ড আকর্ষণীয় ও সুরক্ষিত করার জন্য কনফিডেনশিয়াল/কাস্টম টেক্সট ওয়াটারমার্ক, লোগো/পিকচার ওয়াটারমার্ক, সলিড কালার ও টু-কালার গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড এবং বক্স, শ্যাডো, ডাবল লাইন ও আর্ট পেজ বর্ডারের পূর্ণাঙ্গ অটোমেশন।",
    badge: "Page Background",
    commands: [
      {
        name: "টেক্সট ওয়াটারমার্ক (Text Watermark)",
        nameEn: "Insert Text Watermark",
        voiceCmd: "ওয়াটারমার্ক দাও CONFIDENTIAL",
        voiceCmdEn: "Add 'CONFIDENTIAL' text watermark diagonal",
        chatPrompt: "Add text watermark with watermark_text 'CONFIDENTIAL' layout 'diagonal' color '#C0C0C0' semitransparent True",
        aiAction: "design_watermark দিয়ে ডকুমেন্টের হেডার ক্যানভাসে ডায়াগোনাল/হরাইজন্টাল সেমি-ট্রান্সপারেন্ট টেক্সট ওয়াটারমার্ক (CONFIDENTIAL, DRAFT, DO NOT COPY বা কাস্টম বাংলা টেক্সট) যুক্ত করা হয়।",
        category: "Watermark"
      },
      {
        name: "ছবি ওয়াটারমার্ক (Picture Watermark)",
        nameEn: "Insert Picture / Logo Watermark",
        voiceCmd: "লোগো ছবি দিয়ে ওয়াটারমার্ক করো",
        voiceCmdEn: "Add picture watermark with washout effect",
        chatPrompt: "Add picture watermark with picture_path 'logo.png' washout True scale 1.0",
        aiAction: "design_watermark দিয়ে প্রাতিষ্ঠানিক লোগো বা ছবিকে সেন্ট্রাল পেজ ব্যাকগ্রাউন্ডে ওয়াশআউট (Washout) ও স্কেলিং সহ ওয়াটারমার্ক হিসেবে স্থাপন করা হয়।",
        category: "Watermark"
      },
      {
        name: "ওয়াটারমার্ক অপসারণ (Remove Watermark)",
        nameEn: "Remove Watermark",
        voiceCmd: "ওয়াটারমার্ক মুছে ফেলো",
        voiceCmdEn: "Remove watermark from document",
        chatPrompt: "Remove watermark with watermark_action 'remove'",
        aiAction: "design_watermark ডকুমেন্টের সকল সেকশন ও হেডার থেকে বিদ্যমান সমস্ত টেক্সট ও পিকচার ওয়াটারমার্ক এক ক্লিকে সম্পূর্ণ মুছে ফেলে।",
        category: "Watermark"
      },
      {
        name: "পেজ ব্যাকগ্রাউন্ড কালার (Page Color)",
        nameEn: "Solid Page Color & Print Backgrounds",
        voiceCmd: "পেজ কালার নীল করো",
        voiceCmdEn: "Set page background color to soft blue",
        chatPrompt: "Set page color with page_color '#E6F2FF' print_backgrounds True",
        aiAction: "design_page_color দিয়ে ডকুমেন্টের ব্যাকগ্রাউন্ড ফিল কালার (Standard/Theme Palette বা কাস্টম Hex RGB) নির্ধারণ করা হয় এবং প্রিন্টিং অপশন কনফিগার করা হয়।",
        category: "Page Color"
      },
      {
        name: "গ্রেডিয়েন্ট ফিল ইফেক্ট (Fill Effects - Gradient)",
        nameEn: "Gradient Page Background",
        voiceCmd: "পেজে গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড দাও",
        voiceCmdEn: "Apply two-color gradient background",
        chatPrompt: "Apply gradient page color with gradient_type 'horizontal' color '#FFFFFF' gradient_color2 '#D9E1F2'",
        aiAction: "design_page_color দিয়ে ডকুমেন্টের ব্যাকগ্রাউন্ডে দ্বৈত রঙের দৃষ্টিনন্দন গ্রেডিয়েন্ট (Horizontal, Vertical, Diagonal, From Corner, From Center) ফিল ইফেক্ট তৈরি করা হয়।",
        category: "Fill Effects"
      },
      {
        name: "পেজ বর্ডার ও স্টাইল (Page Borders - Box / Shadow / Line)",
        nameEn: "Page Borders (Box, Shadow, Double, Triple)",
        voiceCmd: "পৃষ্ঠায় বক্স বর্ডার লাগাও",
        voiceCmdEn: "Add box page border with double line",
        chatPrompt: "Add page border with border_setting 'box' line_style 'double' line_width 1.5 border_color '#002060'",
        aiAction: "design_page_borders দিয়ে ডকুমেন্টের চতুর্দিকে বক্স, শ্যাডো বা ৩-ডি বর্ডার, বিভিন্ন লাইন স্টাইল (সিঙ্গেল, ডাবল, ট্রিপল, ড্যাশ, ওয়েভি) ও কাস্টম রঙের সীমানা যুক্ত করা হয়।",
        category: "Page Borders"
      },
      {
        name: "আর্ট পেজ বর্ডার (Border Art)",
        nameEn: "Decorative Art Borders (Stars, Apples, Trees, Hearts)",
        voiceCmd: "stars আর্ট বর্ডার দাও",
        voiceCmdEn: "Apply decorative 'stars' art border width 20pt",
        chatPrompt: "Apply art page border with art_border 'stars' art_width 20 apply_to 'whole_document'",
        aiAction: "design_page_borders দিয়ে ওয়ার্ডের সমৃদ্ধ আর্টওয়ার্ক লাইব্রেরি থেকে তারা, ফুল, গাছ, আপেল, বেলুন বা হার্ট চিহ্নের আলংকারিক বর্ডার যুক্ত করা হয়।",
        category: "Page Borders"
      },
      {
        name: "বর্ডার স্কোপ ও পেজ সিলেকশন (Border Scope - First Page Only)",
        nameEn: "Page Border Scope (First Page Only / All Except First)",
        voiceCmd: "প্রথম পেজে বর্ডার দাও",
        voiceCmdEn: "Apply page border to first page only",
        chatPrompt: "Apply page border with apply_to 'first_page'",
        aiAction: "design_page_borders এর মাধ্যমে নির্দিষ্ট পেজ স্কোপ (First page only, All except first page, This section বা Whole document) নিয়ন্ত্রণ করা হয়।",
        category: "Border Scope"
      },
      {
        name: "সেন্ট্রাল ব্যাকগ্রাউন্ড রাউটার (Manage Page Background)",
        nameEn: "Unified Page Background Router",
        voiceCmd: "ব্যাকগ্রাউন্ড রিসেট করো",
        voiceCmdEn: "Reset and clear all page background elements",
        chatPrompt: "Manage page background with sub_action 'clear'",
        aiAction: "manage_page_background কেন্দ্রীয় রাউটার দিয়ে ওয়াটারমার্ক, পেজ কালার ও পেজ বর্ডার স্ট্যাটাস চেক করা অথবা একযোগে সব উপাদান রিসেট ও মুছে ফেলা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 40",
    menuName: "5. DESIGN MENU ➔ 5.3 Advanced Design",
    title: "ডিজাইন মেনু: অ্যাডভান্সড ডিজাইন, কাস্টম থিম (.thmx), ১২-কালার কাস্টম প্যালেট (.xml), কাস্টম ফন্ট পেয়ারিং এবং আলংকারিক আর্ট বর্ডার ও ব্যাকগ্রাউন্ড",
    titleEn: "Design Menu: Advanced Design, Custom Theme (.thmx), 12-Color Theme Palette (.xml), Custom Font Pairing, Border Art, and Custom Background",
    subtitle: "ডকুমেন্টের সম্পূর্ণ ভিজ্যুয়াল আইডেন্টিটি কাস্টমাইজ করার জন্য নিজস্ব .thmx থিম ফাইল তৈরি ও সংরক্ষণ, ১২টি স্বতন্ত্র রঙের Office DrawingML কালার প্যালেট (.xml), বাংলা ইউনিকোড ফন্ট (Kalpurush, SolaimanLipi, Nikosh) সহ হেডিং ও বডি ফন্ট স্কিম (.xml), ১-১৬৪টি আলংকারিক আর্ট বর্ডার এবং পিকচার/টেক্সচার/প্যাটার্ন পেজ ব্যাকগ্রাউন্ড অটোমেশন।",
    badge: "Advanced Design",
    commands: [
      {
        name: "কাস্টম থিম তৈরি ও সেভ (Custom Theme .thmx)",
        nameEn: "Create & Save Custom Theme (.thmx)",
        voiceCmd: "কাস্টম থিম তৈরি করো 'Aegis Corporate'",
        voiceCmdEn: "Create and save custom theme 'Aegis Corporate'",
        chatPrompt: "Create custom theme with custom_theme_name 'Aegis Corporate' base_theme 'Office' save_theme True apply_now True",
        aiAction: "design_custom_theme দিয়ে কাস্টম ফন্ট ও কালার স্কিম সমন্বয় করে একটি পূর্ণাঙ্গ অফিস থিম (.thmx) তৈরি করা হয় এবং ব্যবহারকারীর Office Templates ফোল্ডারে স্বয়ংক্রিয়ভাবে সংরক্ষণ ও ডকুমেন্টে প্রয়োগ করা হয়।",
        category: "Custom Theme"
      },
      {
        name: "১২-কালার কাস্টম কালার প্যালেট (Custom Color Palette .xml)",
        nameEn: "Create 12-Color Custom Palette (.xml)",
        voiceCmd: "কাস্টম কালার প্যালেট তৈরি করো 'Cyberpunk'",
        voiceCmdEn: "Create 12-color custom palette 'Cyberpunk'",
        chatPrompt: "Create custom palette with custom_palette_name 'Cyberpunk' accent1 '#00FFCC' accent2 '#FF007F' save_palette True",
        aiAction: "design_custom_palette দিয়ে Office DrawingML স্ট্যান্ডার্ডে ১২টি শেড (Dark 1/2, Light 1/2, Accent 1..6, Hyperlinks) সমন্বিত কাস্টম কালার প্যালেট তৈরি ও %APPDATA%\\Microsoft\\Templates\\Document Themes\\Theme Colors-এ .xml হিসেবে সেভ করা হয়।",
        category: "Theme Colors"
      },
      {
        name: "কাস্টম ফন্ট পেয়ারিং ও বাংলা ফন্ট স্কিম (Custom Font Pairing .xml)",
        nameEn: "Custom Font Pairing & Bengali Font Scheme (.xml)",
        voiceCmd: "বাংলা ফন্ট Kalpurush দিয়ে ফন্ট স্কিম বানাও",
        voiceCmdEn: "Create custom font scheme pairing Aptos Display and Kalpurush",
        chatPrompt: "Create custom font pairing with custom_scheme_name 'Aegis Bengali' heading_font 'Aptos Display' body_font 'Kalpurush' bengali_font 'Kalpurush' save_scheme True",
        aiAction: "design_custom_font_pairing দিয়ে ইংরেজি হেডিং ফন্ট এবং বাংলা ইউনিকোড বডি ফন্ট (কালপুরুষ, সোলায়মানলিপি, নিকোশ) নিখুঁতভাবে সমন্বয় করে Office Theme Fonts ফোল্ডারে .xml আকারে স্থায়ীভাবে সংরক্ষণ ও ডকুমেন্টে বাস্তবায়ন করা হয়।",
        category: "Font Pairing"
      },
      {
        name: "আলংকারিক আর্ট বর্ডার (Decorative Border Art)",
        nameEn: "Decorative Border Art (Stars, Apples, Trees, Hearts)",
        voiceCmd: "stars আর্ট বর্ডার দাও ২০ pt",
        voiceCmdEn: "Apply decorative 'stars' art border with width 20pt",
        chatPrompt: "Apply border art with art_border 'stars' art_width 20 distance_from 'edge'",
        aiAction: "design_border_art দিয়ে মাইক্রোসফট ওয়ার্ডের ১৬৪টি শৈল্পিক আর্টওয়ার্ক (তারা, আপেল, গাছ, হার্ট, বেলুন ইত্যাদি) থেকে ১-৩১ pt প্রস্থে পৃষ্ঠার প্রান্তে বা টেক্সটের চারিপাশে ফ্রেম তৈরি করা হয়।",
        category: "Border Art"
      },
      {
        name: "নির্দিষ্ট দিকে আর্ট বর্ডার (Selective Border Sides - Top & Bottom)",
        nameEn: "Selective Border Sides (Top & Bottom Only)",
        voiceCmd: "শুধু উপরে এবং নিচে আর্ট বর্ডার দাও",
        voiceCmdEn: "Apply art border to top and bottom sides only",
        chatPrompt: "Apply border art with art_border 'apples' sides ['top', 'bottom'] art_width 18",
        aiAction: "design_border_art এর মাধ্যমে পৃষ্ঠার চারপাশের পরিবর্তে শুধু নির্বাচিত বাহুগুলোতে (যেমন শুধু উপরে-নিচে বা ডানে-বামে) ডেকোরেটিভ বর্ডার আর্ট সীমাবদ্ধ রাখা যায়।",
        category: "Border Art"
      },
      {
        name: "কাস্টম ছবি ব্যাকগ্রাউন্ড (Custom Picture Fill Background)",
        nameEn: "Custom Picture Fill Wallpaper",
        voiceCmd: "ছবি ব্যাকগ্রাউন্ড দাও 'wallpaper.png'",
        voiceCmdEn: "Set custom picture background wallpaper",
        chatPrompt: "Set custom background with background_mode 'picture' picture_path 'wallpaper.png' print_backgrounds True",
        aiAction: "design_custom_background এর মাধ্যমে ব্যাকগ্রাউন্ডে নির্দিষ্ট ইমেজ ফাইলকে সমগ্র পৃষ্ঠার আলংকারিক ওয়ালপেপার হিসেবে ফিল করা হয় এবং ব্যাকগ্রাউন্ড প্রিন্টিং সক্রিয় করা হয়।",
        category: "Custom Background"
      },
      {
        name: "টাইল্ড টেক্সচার ও প্যাটার্ন ব্যাকগ্রাউন্ড (Tiled Texture & Pattern Fill)",
        nameEn: "Tiled Texture & Geometric Pattern Fill",
        voiceCmd: "প্যাটার্ন ব্যাকগ্রাউন্ড সেট করো pattern 25",
        voiceCmdEn: "Apply geometric pattern background with custom colors",
        chatPrompt: "Set custom background with background_mode 'pattern' pattern_id 25 color1 '#0078D7' color2 '#FFFFFF'",
        aiAction: "design_custom_background দিয়ে ওয়ার্ডের ৫৪টি জ্যামিতিক প্যাটার্ন অথবা কাস্টম টাইল্ড টেক্সচার ফোরগ্রাউন্ড ও ব্যাকগ্রাউন্ড রঙের সমন্বয়ে ব্যাকগ্রাউন্ডে প্রয়োগ করা হয়।",
        category: "Custom Background"
      },
      {
        name: "অ্যাডভান্সড ডিজাইন সেন্ট্রাল রাউটার (Manage Advanced Design)",
        nameEn: "Unified Advanced Design Router",
        voiceCmd: "অ্যাডভান্সড ডিজাইন রিসেট করো",
        voiceCmdEn: "Reset and clear all custom advanced design elements",
        chatPrompt: "Manage advanced design with sub_action 'clear'",
        aiAction: "manage_advanced_design কেন্দ্রীয় রাউটারের মাধ্যমে অ্যাক্টিভ কাস্টম থিম, প্যালেট, ফন্ট স্কিম, আর্ট বর্ডার ও ব্যাকগ্রাউন্ডের বর্তমান অবস্থা যাচাই বা সম্পূর্ণ রিসেট করা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 41",
    menuName: "6. LAYOUT MENU ➔ 6.1 Page Setup: Margins",
    title: "লেআউট মেনু: পেজ সেটআপ - মার্জিন (নরমাল, ন্যারো, মডারেট, ওয়াইড, মিররড, অফিস ২০০৩ ও কাস্টম মার্জিন)",
    titleEn: "Layout Menu: Page Setup - Margins (Normal, Narrow, Moderate, Wide, Mirrored, Office 2003 & Custom Margins)",
    subtitle: "ডকুমেন্টের পৃষ্ঠা এবং সেকশন লেআউট নিয়ন্ত্রণের জন্য আদর্শ মার্জিন প্রিসেট (নরমাল ১\", ন্যারো ০.৫\", মডারেট ০.৭৫\", ওয়াইড ২\", বুকলেট/ডুয়াল-সাইডেড প্রিন্টিংয়ের জন্য মিররড মার্জিন, অফিস ২০০৩ ডিফল্ট ১.২৫\"), ব্যবহারকারী-নির্ধারিত কাস্টম মার্জিন (ইঞ্চি, সেমি, মিমি, পয়েন্ট ইউনিট), বাইন্ডিং গাটার (বাম/উপরে) এবং সেন্ট্রাল পেজ সেটআপ মার্জিন রাউটার।",
    badge: "Page Setup Margins",
    commands: [
      {
        name: "নরমাল মার্জিন প্রিসেট (Normal Margins 1\")",
        nameEn: "Normal Margin Preset (1-inch all sides)",
        voiceCmd: "মার্জিন নরমাল করো",
        voiceCmdEn: "Set margins to normal preset",
        chatPrompt: "Set page margin preset to 'normal' for whole document",
        aiAction: "layout_set_margin_preset দিয়ে মাইক্রোসফট ওয়ার্ডের স্ট্যান্ডার্ড নরমাল মার্জিন (Top 1\", Bottom 1\", Left 1\", Right 1\", 72pt each) ডকুমেন্টে বা নির্দিষ্ট সেকশনে প্রয়োগ করা হয়।",
        category: "Margin Presets"
      },
      {
        name: "ন্যারো মার্জিন প্রিসেট (Narrow Margins 0.5\")",
        nameEn: "Narrow Margin Preset (0.5-inch all sides)",
        voiceCmd: "মার্জিন ন্যারো করো",
        voiceCmdEn: "Set margins to narrow preset",
        chatPrompt: "Set page margin preset to 'narrow' for whole document",
        aiAction: "layout_set_margin_preset দিয়ে পৃষ্ঠার ধারণক্ষমতা বাড়াতে চারপাশে ০.৫ ইঞ্চি (Top 0.5\", Bottom 0.5\", Left 0.5\", Right 0.5\", 36pt each) ন্যারো মার্জিন সেট করা হয়।",
        category: "Margin Presets"
      },
      {
        name: "মডারেট মার্জিন প্রিসেট (Moderate Margins)",
        nameEn: "Moderate Margin Preset (Top/Bottom 1\", Left/Right 0.75\")",
        voiceCmd: "মডারেট মার্জিন সেট করো",
        voiceCmdEn: "Set margins to moderate preset",
        chatPrompt: "Set page margin preset to 'moderate'",
        aiAction: "layout_set_margin_preset দিয়ে উপরে ও নিচে ১ ইঞ্চি (72pt) এবং ডানে ও বামে ০.৭৫ ইঞ্চি (54pt) মডারেট মার্জিন সমন্বয় করা হয়।",
        category: "Margin Presets"
      },
      {
        name: "ওয়াইড মার্জিন প্রিসেট (Wide Margins)",
        nameEn: "Wide Margin Preset (Top/Bottom 1\", Left/Right 2\")",
        voiceCmd: "ওয়াইড মার্জিন দাও",
        voiceCmdEn: "Set margins to wide preset",
        chatPrompt: "Set page margin preset to 'wide'",
        aiAction: "layout_set_margin_preset দিয়ে উপরে ও নিচে ১ ইঞ্চি (72pt) এবং ডানে ও বামে ২ ইঞ্চি (144pt) ওয়াইড মার্জিন প্রয়োগ করা হয়।",
        category: "Margin Presets"
      },
      {
        name: "মিররড মার্জিন প্রিসেট (Mirrored Margins for Books)",
        nameEn: "Mirrored Margin Preset for Booklet Printing",
        voiceCmd: "বই প্রিন্টের জন্য মিররড মার্জিন দাও",
        voiceCmdEn: "Set mirrored margins for booklet printing",
        chatPrompt: "Set page margin preset to 'mirrored'",
        aiAction: "layout_set_mirrored_margins অথবা প্রিসেট দিয়ে দুই পৃষ্ঠার মুখোমুখি প্রিন্টিং বা বই বাঁধাইয়ের জন্য MirrorMargins চালু করে Inside (ভেতরে) ১.২৫\" এবং Outside (বাইরে) ১\" মার্জিন প্রয়োগ করা হয়।",
        category: "Mirrored Margins"
      },
      {
        name: "অফিস ২০০৩ ডিফল্ট মার্জিন (Office 2003 Default)",
        nameEn: "Office 2003 Default Margins (Top/Bottom 1\", Left/Right 1.25\")",
        voiceCmd: "অফিস ২০০৩ মার্জিন লাগাও",
        voiceCmdEn: "Apply Office 2003 default margins",
        chatPrompt: "Set page margin preset to 'office_2003_default'",
        aiAction: "layout_set_margin_preset দিয়ে ক্লাসিক ওয়ার্ড ২০০৩ স্ট্যান্ডার্ড অনুযায়ী উপরে/নিচে ১\" এবং ডানে/বামে ১.২৫\" (90pt) মার্জিন সেট করা হয়।",
        category: "Margin Presets"
      },
      {
        name: "কাস্টম মার্জিন ও গাটার (Custom Margins & Binding Gutter)",
        nameEn: "Custom Dimensions & Gutter Margins",
        voiceCmd: "উপরে ১.৫ ইঞ্চি নিচে ১.৫ ইঞ্চি বামে ১ ইঞ্চি ডানে ১ ইঞ্চি মার্জিন দাও",
        voiceCmdEn: "Set custom margins top 1.5in bottom 1.5in left 1in right 1in with 0.25in gutter",
        chatPrompt: "Set custom margins with top '1.5in' bottom '1.5in' left '1in' right '1in' gutter '0.25in' gutter_position 'left'",
        aiAction: "layout_set_custom_margins দিয়ে ব্যবহারকারীর পছন্দমতো ইঞ্চি (in), সেন্টিমিটার (cm), মিলিমিটার (mm) বা পয়েন্ট (pt) ইউনিটে শীর্ষ, পাদদেশ, বাম ও ডান মার্জিন এবং বাঁধাইয়ের গাটার মার্জিন নির্ধারণ করা হয়।",
        category: "Custom Margins"
      },
      {
        name: "মার্জিন কোয়েরি ও বর্তমান তথ্য (Get Margins Status)",
        nameEn: "Inspect & Query Current Margins",
        voiceCmd: "বর্তমান মার্জিন কত চেক করো",
        voiceCmdEn: "Check current document margins and page setup",
        chatPrompt: "Get current document margin measurements and preset status",
        aiAction: "layout_get_margins দিয়ে সক্রিয় ওয়ার্ড ডকুমেন্টের প্রতিটি মার্জিনের সঠিক মান (ইঞ্চি, সেমি এবং পয়েন্টে), সক্রিয় প্রিসেট নাম এবং মিরর মার্জিন স্ট্যাটাস পরিদর্শন করা হয়।",
        category: "Margin Status"
      },
      {
        name: "পেজ সেটআপ মার্জিন সেন্ট্রাল রাউটার (Manage Page Setup Margins)",
        nameEn: "Unified Page Setup Margins Router",
        voiceCmd: "মার্জিন নরমাল রিসেট করো",
        voiceCmdEn: "Reset page setup margins to default normal",
        chatPrompt: "Manage page setup margins with sub_action 'reset'",
        aiAction: "manage_page_setup_margins কেন্দ্রীয় রাউটারের মাধ্যমে প্রিসেট নির্বাচন, কাস্টম মার্জিন, মিররড মার্জিন কনফিগারেশন, বর্তমান অবস্থা পরিদর্শন অথবা সরাসরি ডিফল্ট নরমালে রিসেট করা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 42",
    menuName: "6. LAYOUT MENU ➔ 6.2 Page Setup: Orientation",
    title: "লেআউট মেনু: পেজ সেটআপ - ওরিয়েন্টেশন (পোর্ট্রেট ও ল্যান্ডস্কেপ)",
    titleEn: "Layout Menu: Page Setup - Orientation (Portrait & Landscape)",
    subtitle: "ডকুমেন্টের পৃষ্ঠা ও সেকশনের প্রদর্শনের দিক (Orientation) পরিবর্তন—স্ট্যান্ডার্ড খাড়া/লম্বালম্বি পোর্ট্রেট (Portrait, wdOrientPortrait = 0) মোড, অনুভূমিক চওড়া/আড়াআড়ি ল্যান্ডস্কেপ (Landscape, wdOrientLandscape = 1) মোড, ডায়নামিক ওরিয়েন্টেশন টগল, সেকশনভিত্তিক ওরিয়েন্টেশন এবং সেন্ট্রাল পেজ সেটআপ ওরিয়েন্টেশন রাউটার।",
    badge: "Page Orientation",
    commands: [
      {
        name: "পোর্ট্রেট ওরিয়েন্টেশন (Portrait Mode)",
        nameEn: "Portrait Page Orientation (Vertical)",
        voiceCmd: "পেজ পোর্ট্রেট করো",
        voiceCmdEn: "Set page orientation to portrait",
        chatPrompt: "Set page orientation to 'portrait' for whole document",
        aiAction: "layout_set_orientation দিয়ে ডকুমেন্টের পৃষ্ঠাকে স্ট্যান্ডার্ড উল্লম্ব বা লম্বালম্বি (Portrait, wdOrientPortrait = 0, উচ্চতা > প্রস্থ) মোডে সেট করা হয়।",
        category: "Orientation"
      },
      {
        name: "ল্যান্ডস্কেপ ওরিয়েন্টেশন (Landscape Mode)",
        nameEn: "Landscape Page Orientation (Horizontal)",
        voiceCmd: "পেজ ল্যান্ডস্কেপ করো",
        voiceCmdEn: "Set page orientation to landscape",
        chatPrompt: "Set page orientation to 'landscape' for whole document",
        aiAction: "layout_set_orientation দিয়ে বড় টেবিল, চার্ট বা বিস্তৃত প্রতিবেদনের জন্য পৃষ্ঠাকে অনুভূমিক বা আড়াআড়ি (Landscape, wdOrientLandscape = 1, প্রস্থ > উচ্চতা) মোডে রূপান্তর করা হয়।",
        category: "Orientation"
      },
      {
        name: "ওরিয়েন্টেশন টগল (Toggle Orientation)",
        nameEn: "Toggle Page Orientation (Portrait ⮂ Landscape)",
        voiceCmd: "পেজ ওরিয়েন্টেশন টগল করো",
        voiceCmdEn: "Toggle page orientation",
        chatPrompt: "Toggle page orientation between portrait and landscape",
        aiAction: "layout_set_orientation দিয়ে বর্তমান ডকুমেন্টের ওরিয়েন্টেশন স্বয়ংক্রিয়ভাবে বিপরীত মোডে (পোর্ট্রেট থাকলে ল্যান্ডস্কেপ, ল্যান্ডস্কেপ থাকলে পোর্ট্রেট) পরিবর্তন করা হয়।",
        category: "Orientation"
      },
      {
        name: "সেকশন ওরিয়েন্টেশন (Section-Scoped Orientation)",
        nameEn: "Per-Section Orientation & Section Break",
        voiceCmd: "সেকশন ২ ল্যান্ডস্কেপ করো",
        voiceCmdEn: "Set section 2 orientation to landscape",
        chatPrompt: "Set page orientation to 'landscape' apply_to 'this_section' section_index 2",
        aiAction: "layout_set_orientation দিয়ে ডকুমেন্টের নির্দিষ্ট সেকশনে অথবা পরবর্তী পৃষ্ঠা থেকে (this_point_forward) সেকশন ব্রেক তৈরি করে ভিন্ন ওরিয়েন্টেশন প্রয়োগ করা হয়।",
        category: "Section Scope"
      },
      {
        name: "ওরিয়েন্টেশন কোয়েরি ও স্ট্যাটাস (Get Orientation Status)",
        nameEn: "Query Current Orientation & Page Dimensions",
        voiceCmd: "বর্তমান ওরিয়েন্টেশন কত চেক করো",
        voiceCmdEn: "Check current document orientation and page dimensions",
        chatPrompt: "Get current document page orientation, dimensions, and sections count",
        aiAction: "layout_get_orientation দিয়ে সক্রিয় ওয়ার্ড ডকুমেন্টের প্রতিটি সেকশনের বর্তমান ওরিয়েন্টেশন, পৃষ্ঠার উচ্চতা-প্রস্থ (ইঞ্চি ও সেন্টিমিটারে) এবং মোট সেকশন সংখ্যা বিস্তারিতভাবে জানা যায়।",
        category: "Orientation Status"
      },
      {
        name: "ওরিয়েন্টেশন সেন্ট্রাল রাউটার (Manage Page Setup Orientation)",
        nameEn: "Unified Page Setup Orientation Router",
        voiceCmd: "ওরিয়েন্টেশন রিসেট করো",
        voiceCmdEn: "Reset page orientation to default portrait",
        chatPrompt: "Manage page setup orientation with sub_action 'reset'",
        aiAction: "manage_page_setup_orientation কেন্দ্রীয় রাউটারের মাধ্যমে পোর্ট্রেট, ল্যান্ডস্কেপ, টগল, বর্তমান তথ্য নিরীক্ষা বা সরাসরি ডিফল্ট পোর্ট্রেটে রিসেট পরিচালনা করা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 43",
    menuName: "6. LAYOUT MENU ➔ 6.3 Page Setup: Size",
    title: "লেআউট মেনু: পেজ সেটআপ - পেপার সাইজ (A4, Letter, Legal, Executive, A3, A5 ও Custom)",
    titleEn: "Layout Menu: Page Setup - Paper Size (A4, Letter, Legal, Executive, A3, A5 & Custom)",
    subtitle: "ডকুমেন্টের কাগজের আকার (Paper Size) পরিবর্তন ও নিয়ন্ত্রণ—আন্তর্জাতিক আদর্শ A4, উত্তর আমেরিকান স্ট্যান্ডার্ড Letter ও Legal, করপোরেট Executive, বৃহৎ নকশার A3, পকেট সাইজ A5, ইঞ্চি/সেমি/মিমি/পয়েন্টে ইচ্ছামতো কাস্টম সাইজ, সেকশনভিত্তিক পেপার সাইজ এবং সেন্ট্রাল পেজ সেটআপ সাইজ রাউটার।",
    badge: "Paper Size",
    commands: [
      {
        name: "A4 পেপার সাইজ (A4 Paper Size)",
        nameEn: "A4 Standard Paper Size (21 cm x 29.7 cm)",
        voiceCmd: "কাগজের সাইজ A4 করো",
        voiceCmdEn: "Set paper size to A4",
        chatPrompt: "Set page size to A4 (21 cm x 29.7 cm)",
        aiAction: "layout_set_paper_size দিয়ে ডকুমেন্টের পৃষ্ঠাকে আন্তর্জাতিক আদর্শ A4 সাইজে (21 cm x 29.7 cm / 8.27\" x 11.69\", wdPaperA4 = 7) নির্ধারণ করা হয়।",
        category: "Standard Size"
      },
      {
        name: "লেটার পেপার সাইজ (Letter Paper Size)",
        nameEn: "Letter Paper Size (8.5\" x 11\")",
        voiceCmd: "পেজ সাইজ লেটার করো",
        voiceCmdEn: "Set paper size to Letter",
        chatPrompt: "Set page size to Letter (8.5\" x 11\")",
        aiAction: "layout_set_paper_size দিয়ে পৃষ্ঠাকে উত্তর আমেরিকান স্ট্যান্ডার্ড Letter সাইজে (8.5\" x 11\" / 21.59 cm x 27.94 cm, wdPaperLetter = 2) পরিবর্তন করা হয়।",
        category: "Standard Size"
      },
      {
        name: "লিগ্যাল পেপার সাইজ (Legal Paper Size)",
        nameEn: "Legal Paper Size (8.5\" x 14\")",
        voiceCmd: "লিগ্যাল সাইজ পেপার সেট করো",
        voiceCmdEn: "Set paper size to Legal",
        chatPrompt: "Set page size to Legal (8.5\" x 14\")",
        aiAction: "layout_set_paper_size দিয়ে চুক্তিপত্র, আইনি দলিল ও দীর্ঘ নথির জন্য পৃষ্ঠাকে Legal সাইজে (8.5\" x 14\" / 21.59 cm x 35.56 cm, wdPaperLegal = 4) পরিবর্তন করা হয়।",
        category: "Standard Size"
      },
      {
        name: "এক্সিকিউটিভ পেপার সাইজ (Executive Paper Size)",
        nameEn: "Executive Paper Size (7.25\" x 10.5\")",
        voiceCmd: "এক্সিকিউটিভ সাইজ করো",
        voiceCmdEn: "Set paper size to Executive",
        chatPrompt: "Set page size to Executive (7.25\" x 10.5\")",
        aiAction: "layout_set_paper_size দিয়ে করপোরেট প্রতিবেদন ও ব্রিফিং নথির জন্য Executive সাইজে (7.25\" x 10.5\" / 18.41 cm x 26.67 cm, wdPaperExecutive = 5) নির্ধারণ করা হয়।",
        category: "Standard Size"
      },
      {
        name: "A3 ও A5 সাইজ (A3 & A5 Paper Sizes)",
        nameEn: "A3 (Large) & A5 (Compact) Paper Sizes",
        voiceCmd: "পেজের আকার A3 করো",
        voiceCmdEn: "Set paper size to A3 or A5",
        chatPrompt: "Set page size to A3 (29.7 x 42 cm) or A5 (14.8 x 21 cm)",
        aiAction: "layout_set_paper_size দিয়ে বড় নকশা/পোস্টারের জন্য A3 (wdPaperA3 = 6) অথবা পকেট ম্যানুয়াল/বুকলেটের জন্য A5 (wdPaperA5 = 9) সাইজ প্রয়োগ করা হয়।",
        category: "ISO Paper Sizes"
      },
      {
        name: "কাস্টম পেপার সাইজ (Custom Paper Size)",
        nameEn: "Custom Width & Height with Multi-Unit Support",
        voiceCmd: "কাগজের সাইজ ৮.৫ x ১৪ ইঞ্চি করো",
        voiceCmdEn: "Set custom page width and height",
        chatPrompt: "Set custom paper size width '8.5in' height '14in' unit 'inch'",
        aiAction: "layout_set_paper_size দিয়ে ব্যবহারকারীর চাহিদা অনুযায়ী ইঞ্চি, সেমি, মিমি বা পয়েন্টে যেকোনো কাস্টম প্রস্থ ও উচ্চতার কাগজ (wdPaperCustom = 41) নির্ভুলভাবে সেট করা হয়।",
        category: "Custom Dimensions"
      },
      {
        name: "সেকশনভিত্তিক পেপার সাইজ (Section-Scoped Paper Size)",
        nameEn: "Per-Section Paper Size & Next Page Break",
        voiceCmd: "সেকশন ২ লিগ্যাল সাইজ করো",
        voiceCmdEn: "Set paper size for specific section",
        chatPrompt: "Set paper size to 'legal' apply_to 'this_section' section_index 2",
        aiAction: "layout_set_paper_size দিয়ে ডকুমেন্টের নির্দিষ্ট কোনো সেকশনে অথবা বর্তমান অবস্থান থেকে পরবর্তী অংশে (this_point_forward) সেকশন ব্রেক তৈরি করে ভিন্ন সাইজের কাগজ প্রয়োগ করা হয়।",
        category: "Section Scope"
      },
      {
        name: "পেপার সাইজ কোয়েরি ও স্ট্যাটাস (Get Paper Size Status)",
        nameEn: "Query Current Paper Size & Dimensions",
        voiceCmd: "বর্তমান কাগজের সাইজ কত চেক করো",
        voiceCmdEn: "Check current document paper size and dimensions",
        chatPrompt: "Get current paper size, width, height, and section metrics",
        aiAction: "layout_get_paper_size দিয়ে প্রতিটি সেকশনের বর্তমান কাগজের ধরন (A4/Letter/Legal/ইত্যাদি), সঠিক পরিমাপ (ইঞ্চি, সেমি ও পয়েন্টে) এবং মোট সেকশন সংখ্যা জানা যায়।",
        category: "Size Status"
      },
      {
        name: "পেপার সাইজ সেন্ট্রাল রাউটার (Manage Page Setup Size)",
        nameEn: "Unified Page Setup Size Router",
        voiceCmd: "কাগজের সাইজ রিসেট করো",
        voiceCmdEn: "Reset paper size to default A4",
        chatPrompt: "Manage page setup size with sub_action 'reset'",
        aiAction: "manage_page_setup_size কেন্দ্রীয় রাউটারের মাধ্যমে A4, Letter, Legal, Executive, A3, A5, কাস্টম মাপ, বর্তমান তথ্য নিরীক্ষা বা সরাসরি ডিফল্ট A4 আকারে রিসেট করা হয়।",
        category: "Unified Management"
      }
    ]
  },
  {
    stepNumber: "Step 44",
    menuName: "6. LAYOUT MENU ➔ 6.4 Page Setup: Columns",
    title: "লেআউট মেনু: পেজ সেটআপ - কলাম বিন্যাস (One, Two, Three, Left, Right, More Columns ও Column Break)",
    titleEn: "Layout Menu: Page Setup - Columns (One, Two, Three, Left, Right, More Columns & Column Break)",
    subtitle: "ডকুমেন্টের টেক্সটকে একাধিক কলামে সাজানো ও প্রফেশনাল লেআউট তৈরি—একটি সাধারণ কলাম (One), সমান আকারের দুই ও তিন কলাম (Two & Three), অসম প্রস্থের বাম ও ডান কলাম (Left & Right), কাস্টম কলাম সংখ্যা ও ফাঁকা দূরত্ব (Spacing), কলামের মাঝে বিভাজক উল্লম্ব রেখা (Line Between), কলাম ব্রেক (Column Break), এবং সেকশনভিত্তিক কলাম পরিচালনা।",
    badge: "Columns",
    commands: [
      {
        name: "একক কলাম বিন্যাস (One Column)",
        nameEn: "One Column Standard Full Page Width",
        voiceCmd: "ডকুমেন্টকে এক কলামে সাজাও",
        voiceCmdEn: "Set document columns to one",
        chatPrompt: "Set page layout to one single column",
        aiAction: "layout_set_columns দিয়ে ডকুমেন্টের সম্পূর্ণ টেক্সট মার্জিনের মধ্যে একক (1) কলামে বিস্তৃত করা হয়।",
        category: "Standard Column"
      },
      {
        name: "দুই কলাম বিন্যাস (Two Columns)",
        nameEn: "Two Equal Columns Layout",
        voiceCmd: "লেখাগুলোকে দুই কলামে ভাগ করো",
        voiceCmdEn: "Set page to two columns",
        chatPrompt: "Format document text into two equal columns",
        aiAction: "layout_set_columns দিয়ে পৃষ্ঠার সমস্ত লেখাকে সমান প্রস্থের ২টি কলামে (EvenlySpaced = True, 0.5 ইঞ্চি স্পেসিং) বিভক্ত করা হয়।",
        category: "Standard Column"
      },
      {
        name: "তিন কলাম বিন্যাস (Three Columns)",
        nameEn: "Three Equal Columns Layout",
        voiceCmd: "পেজকে তিন কলামে রূপান্তর করো",
        voiceCmdEn: "Set page to three columns",
        chatPrompt: "Format document text into three equal columns",
        aiAction: "layout_set_columns দিয়ে পৃষ্ঠার লেখাকে সংবাদপত্রের মতো সমান ৩টি কলামে সুন্দরভাবে বিন্যস্ত করা হয়।",
        category: "Standard Column"
      },
      {
        name: "বাম সংকীর্ণ কলাম (Left Column Preset)",
        nameEn: "Left Column Preset (Narrow Left, Wide Right)",
        voiceCmd: "বামে ছোট ও ডানে চওড়া কলাম করো",
        voiceCmdEn: "Set columns to Left preset",
        chatPrompt: "Apply Left column preset with narrow left column and wide right column",
        aiAction: "layout_set_columns দিয়ে অসম ২ কলাম লেআউট প্রয়োগ করা হয় যেখানে বাম কলাম ১/৩ অংশ ও ডান কলাম ২/৩ অংশ জুড়ে বিস্তৃত থাকে।",
        category: "Unequal Preset"
      },
      {
        name: "ডান সংকীর্ণ কলাম (Right Column Preset)",
        nameEn: "Right Column Preset (Wide Left, Narrow Right)",
        voiceCmd: "ডানে ছোট ও বামে চওড়া কলাম করো",
        voiceCmdEn: "Set columns to Right preset",
        chatPrompt: "Apply Right column preset with wide left column and narrow right column",
        aiAction: "layout_set_columns দিয়ে অসম ২ কলাম লেআউট প্রয়োগ করা হয় যেখানে বাম কলাম ২/৩ অংশ ও ডান কলাম ১/৩ অংশ জুড়ে থাকে।",
        category: "Unequal Preset"
      },
      {
        name: "কলামের মাঝে বিভাজক রেখা (Line Between Columns)",
        nameEn: "Vertical Divider Rule Between Columns",
        voiceCmd: "কলামের মাঝে লাইন দাও",
        voiceCmdEn: "Add line between columns",
        chatPrompt: "Set columns with vertical line between them",
        aiAction: "LineBetween = True সক্রিয় করে কলামগুলোর মধ্যবর্তী ফাঁকা অংশে মার্জিত উল্লম্ব সেপারেটর লাইন আঁকা হয়।",
        category: "Column Formatting"
      },
      {
        name: "কাস্টম কলাম ও দূরত্ব (More Columns / Custom Spacing)",
        nameEn: "Custom Columns Count & Spacing",
        voiceCmd: "৪টি কলাম করো এবং স্পেসিং ০.৩ ইঞ্চি দাও",
        voiceCmdEn: "Set 4 columns with 0.3 inch spacing",
        chatPrompt: "Configure 4 custom columns with 0.3 inch spacing and line between",
        aiAction: "ইচ্ছামতো ৪ বা ততোধিক কলাম সংখ্যা, ইঞ্চি/সেমি/পয়েন্টে কলামের ব্যবধান (Spacing) এবং নির্দিষ্ট প্রস্থ সুনির্দিষ্টভাবে সেট করা হয়।",
        category: "Custom Columns"
      },
      {
        name: "কলাম ব্রেক ইনসার্ট (Insert Column Break)",
        nameEn: "Insert Column Break (wdColumnBreak = 8)",
        voiceCmd: "কলাম ব্রেক দাও",
        voiceCmdEn: "Insert column break",
        chatPrompt: "Insert column break at cursor position to jump to the next column",
        aiAction: "layout_insert_column_break (wdColumnBreak = 8) এর মাধ্যমে তাত্ক্ষণিকভাবে বর্তমান কলাম সমাপ্ত করে পরবর্তী কলামের শুরুতে কার্সার স্থানান্তর করা হয়।",
        category: "Column Break"
      },
      {
        name: "সেকশনভিত্তিক কলাম (Section & Point Forward Columns)",
        nameEn: "Columns by Section or This Point Forward",
        voiceCmd: "পরবর্তী পেজ থেকে ৩ কলাম করো",
        voiceCmdEn: "Apply 3 columns from this point forward",
        chatPrompt: "Apply 3 columns from this point forward using continuous section break",
        aiAction: "Continuous সেকশন ব্রেক (wdSectionBreakContinuous = 3) ব্যবহার করে একই ডকুমেন্টের যেকোনো নির্দিষ্ট অনুচ্ছেদ বা পরবর্তী অংশকে আলাদা কলাম লেআউটে পরিবর্তন করা হয়।",
        category: "Scope & Sections"
      },
      {
        name: "কলাম স্ট্যাটাস নিরীক্ষা (Get Columns Status)",
        nameEn: "Query Current Document Columns Info",
        voiceCmd: "বর্তমান কলাম কত চেক করো",
        voiceCmdEn: "Check current columns configuration",
        chatPrompt: "Query column count, spacing, line between, and section details",
        aiAction: "layout_get_columns দিয়ে প্রতিটি সেকশনের কলাম সংখ্যা, প্রিসেটের নাম, স্পেসিং, প্রস্থ ও রেখার স্ট্যাটাস বিস্তারিত রিপোর্ট আকারে পাওয়া যায়।",
        category: "Columns Status"
      },
      {
        name: "কলাম কেন্দ্রীয় রাউটার (Manage Page Setup Columns)",
        nameEn: "Unified Page Setup Columns Router",
        voiceCmd: "কলাম রিসেট করো",
        voiceCmdEn: "Reset columns to default one column",
        chatPrompt: "Manage page setup columns with sub_action 'reset'",
        aiAction: "manage_page_setup_columns একক কমান্ডের মাধ্যমে One, Two, Three, Left, Right, কাস্টম কলাম, ব্রেক বা সম্পূর্ণ ডকুমেন্টকে পুনরায় স্বাভাবিক ১টি একক কলামে রিসেট করা হয়।",
        category: "Unified Management"
      }
    ]
  }
];
