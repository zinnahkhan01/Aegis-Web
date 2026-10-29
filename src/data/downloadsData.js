export const DOWNLOADS_DATA = {
  windows: {
    title: "Windows Desktop Application",
    version: "v1.0.1 Beta",
    architecture: "x64 (64-bit Native)",
    size: "380.5 MB",
    osSupport: "Windows 10 / Windows 11 (Build 19041+)",
    sha256: "9bd7b04cdf9c1208eebab4cba4d6fc703b2efd5d00257f0a508731d6ab243655",
    installerUrl: "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.1/Supervex-AI-Setup-v1.0.1-Beta-x64.exe",
    portableUrl: "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.1/Supervex-AI-Portable-v1.0.1-Beta-x64.zip",
    releaseDate: "October 2026",
    features: [
      "Full CEO Agent orchestration engine",
      "Native Gemini Live duplex voice with VAD",
      "Playwright stealth automation & ad-blocker",
      "Transactional file undo & Recycle Bin protection",
      "Wireless ADB & WebSocket bridge for Android companion"
    ]
  },
  android: {
    title: "Android Mobile Companion",
    version: "v1.0.1 Beta",
    packageName: "com.zinnah.aegis_client",
    size: "12.7 MB",
    sha256: "0f1ca21f3052c3c703728a74bdb7da4c4d8dfd7bed833291a6860bd2da9f7af3",
    osSupport: "Android 10.0+ (API Level 29+)",
    apkUrl: "/downloads/Supervex-Companion-v1.0.1-Beta.apk",
    githubApkUrl: "https://github.com/zinnahkhan01/Aegis-Web/raw/main/public/downloads/Supervex-Companion-v1.0.1-Beta.apk",
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
      version: "v1.0.1 Beta",
      date: "October 2026",
      tag: "Official Multi-Platform Release",
      items: [
        "Android Mobile Companion APK (v1.0.1 Beta): Direct WebSocket & Cloudflare Tunnel mobile remote control with Accessibility gesture service.",
        "Gemini Live Native Duplex Audio: Zero-lag voice streaming with automatic speech interruption handling and personalized '<Name> Sir' addressing.",
        "Microsoft Word Full Ribbon Automation: Complete Home, Insert, Design, Layout, References, Review, and View tab control in Bengali & English.",
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
