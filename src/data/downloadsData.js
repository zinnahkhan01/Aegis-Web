export const DOWNLOADS_DATA = {
  windows: {
    title: "Windows Desktop Application",
    version: "v1.0.4",
    architecture: "x64 (64-bit Native)",
    size: "380.6 MB",
    osSupport: "Windows 10 / Windows 11 (Build 19041+)",
    sha256: "9bd7b04cdf9c1208eebab4cba4d6fc703b2efd5d00257f0a508731d6ab243655",
    installerUrl: "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.4/Supervex-AI-Setup-v1.0.4-x64.exe",
    portableUrl: "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.4/Supervex-AI-Portable-v1.0.4-x64.zip",
    releaseDate: "October 2026",
    features: [
      "1-Click Gmail & Firebase Cloud OAuth Login/Signup + Executive Profile",
      "Personalized '<Name> Sir' Gemini Live duplex voice & chat addressing",
      "MS Word Complete Ribbon Automation (Home, Insert, Design, Layout, View & Tables)",
      "Playwright stealth browser automation & native YouTube ad-blocker",
      "Wireless ADB & WebSocket bridge for Android Companion + Live Download Telemetry"
    ]
  },
  android: {
    title: "Android Mobile Companion",
    version: "v1.0.4",
    packageName: "com.zinnah.aegis_client",
    size: "12.7 MB",
    sha256: "0f1ca21f3052c3c703728a74bdb7da4c4d8dfd7bed833291a6860bd2da9f7af3",
    osSupport: "Android 10.0+ (API Level 29+)",
    apkUrl: "/downloads/Supervex-Companion-v1.0.4.apk",
    githubApkUrl: "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.4/Supervex-Companion-v1.0.4.apk",
    releaseDate: "October 2026",
    features: [
      "Direct WebSocket & Cloudflare Tunnel remote control",
      "Accessibility Service for UI tap, swipe & scroll gestures",
      "Secure keyguard PIN unlock receiver",
      "WhatsApp, SMS & app launcher background bridge",
      "Low battery drain background service"
    ]
  },
  ios: {
    title: "iOS Ecosystem Bridge",
    version: "v1.0-beta (TestFlight)",
    status: "Private Beta / Waitlist",
    osSupport: "iOS 16.4+ / iPadOS 16.4+",
    features: [
      "Web Companion Dashboard (PWA)",
      "Siri Shortcuts voice integration bridge",
      "Encrypted WebRTC telemetry stream",
      "Cross-device clipboard & task sync"
    ]
  },
  requirements: {
    minimum: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5 (8th Gen) or AMD Ryzen 5 2600",
      ram: "8 GB DDR4",
      storage: "5 GB Free SSD Space",
      network: "Broadband connection for Gemini Live audio stream",
      gpu: "Integrated Graphics (DirectX 11 compatible)"
    },
    recommended: {
      os: "Windows 11 64-bit (Latest build)",
      cpu: "Intel Core i7/i9 (12th Gen+) or AMD Ryzen 7 5800X+",
      ram: "16 GB - 32 GB DDR4/DDR5",
      storage: "10 GB NVMe M.2 SSD",
      network: "Low-latency Wi-Fi 6 or Gigabit Ethernet",
      gpu: "NVIDIA RTX 3060+ / AMD RX 6700+ (CUDA/Vulkan hardware acceleration)"
    }
  },
  releaseNotes: [
    {
      version: "v1.0.4",
      date: "October 30, 2026",
      tag: "Latest Stable Release",
      items: [
        "1-Click Gmail & Firebase Real OAuth Login/Signup: Authenticate with real Google OAuth accounts or instant 1-Click Gmail sign-in inside Settings → Account & Profile, complete with verified Google badges.",
        "Editable Executive Profile & Photo Upload: Upload custom profile photos (PNG/JPG/WebP), choose executive presets, edit full professional/academic details (Organization, Skills, Bio, Social Links), and auto-fill Word CVs & letters.",
        "Personalized '<Name> Sir' AI Voice & Chat Addressing: Dynamic '<Name> Sir' addressing (e.g., 'Zinnah Sir') across Gemini Live duplex voice, startup greeting, and all desktop/document agents in Bengali & English.",
        "MS Word Full Ribbon Automation (Insert, Design, Layout & View Tabs): Automate Cover Pages, Shapes (Rectangle, Circle, Arrow, Star, Banner), Text Boxes, Hyperlinks, Page Numbers, Drop Caps, 7 Document Themes, Page Background Colors, 4-Sided Page Borders, Multi-Column Layouts (1/2/3 cols), Line Numbers, and Zoom/View Modes.",
        "Advanced MS Word Table Cell & Row/Column Engine: Target 1st row, 1st column, last row, specific cells, or every cell across all tables with Bengali/English voice commands plus deep Find & Replace inside tables.",
        "Live Download & User Telemetry Dashboard: Real-time GitHub Releases download counter across all versions + verified Firebase/Gmail user account telemetry directly inside the app.",
        "Android Mobile Companion APK (v1.0.4) & Official Support: Direct 1-click APK & QR code download on the website and official support at supervexai@gmail.com."
      ]
    },
    {
      version: "v1.0.3",
      date: "October 29, 2026",
      tag: "Voice & Office Engine Update",
      items: [
        "Upgraded Edge-TTS to v7.3.1 (Sec-MS-GECDRM Chromium 143.0.3650.96) resolving HTTP 403 neural speech synthesis errors for Bengali & English voices.",
        "Enhanced UniversalFocusManager with full Bengali application name resolution ('মাইক্রোসফট ওয়ার্ড' → winword.exe, 'নোটপ্যাড' → notepad.exe, 'ক্রোম' → chrome.exe).",
        "Added STA COM Worker Thread architecture for thread-safe live Microsoft Word automation."
      ]
    },
    {
      version: "v1.0.1 Beta",
      date: "October 2026",
      tag: "Multi-Platform Release",
      items: [
        "Android Mobile Companion APK: Direct WebSocket & Cloudflare Tunnel mobile remote control with Accessibility gesture service.",
        "Gemini Live Native Duplex Audio: Zero-lag voice streaming with automatic speech interruption handling.",
        "Stealth Playwright Engine: Complete YouTube video ad-blocking and native playback controls without third-party extensions.",
        "Transactional File Undo Buffer: Persistent SQLite journal for all file deletions, moves, and renames with instant single-click undo."
      ]
    },
    {
      version: "v0.9.0 Alpha",
      date: "September 2026",
      tag: "Internal Preview",
      items: [
        "Reduced standby idle memory consumption using lazy sub-agent loading.",
        "Added WhatsApp contact name fuzzy resolution algorithm.",
        "Fixed multi-monitor screen capture coordinate calculation in see_screen."
      ]
    }
  ]
};
