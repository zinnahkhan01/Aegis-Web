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
    featuresCount: "55+ Voice & Chat Actions",
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
    stepId: "step-2",
    stepNumber: "Step 04",
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
    stepNumber: "Step 05",
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
    stepNumber: "Step 06",
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
    stepNumber: "Step 07",
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
  }
];
