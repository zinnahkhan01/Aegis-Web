export const DOWNLOADS_DATA = {
  windows: {
    title: "Windows Desktop Application",
    version: "v1.0.0 Beta",
    architecture: "x64 (64-bit Native)",
    size: "383.9 MB",
    osSupport: "Windows 10 / Windows 11 (Build 19041+)",
    sha256: "b968f1417ea1053c42dfe2c5c8d561e4099c23a432aecfb5dd5749c7d7ac3cce",
    installerUrl: "/downloads/Aegis-AI-Setup-v1.0.0-Beta-x64.exe",
    portableUrl: "/downloads/Aegis-AI-Portable-v1.0.0-Beta-x64.zip",
    releaseDate: "October 2026",
    features: [
      "Full CEO Agent orchestration engine",
      "Native Gemini Live duplex voice with VAD",
      "Playwright stealth automation & ad-blocker",
      "Transactional file undo & Recycle Bin protection",
      "Wireless ADB bridge for Android companion"
    ]
  },
  android: {
    title: "Android Mobile Companion",
    version: "v1.0.0 Beta (Planned)",
    packageName: "ai.aegis.companion",
    size: "28.4 MB",
    osSupport: "Android 10.0+ (API Level 29+)",
    apkUrl: "#download-android-apk",
    releaseDate: "In Development",
    features: [
      "Zero-configuration Wireless ADB daemon",
      "Accessibility Service for UI tap & swipe gestures",
      "Secure keyguard PIN unlock receiver",
      "WhatsApp & SMS background bridge",
      "Low battery drain background listener"
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
      version: "v1.0.0 Beta",
      date: "October 2026",
      tag: "Public Beta Release",
      items: [
        "Gemini Live Native Duplex Audio: Zero-lag voice streaming with automatic speech interruption handling.",
        "Stealth Playwright Engine: Complete YouTube video ad-blocking and native playback controls without third-party extensions.",
        "Wireless ADB Pairing: One-click local Wi-Fi pairing for Android Companion with remote PIN unlock.",
        "Transactional File Undo Buffer: Added persistent SQLite journal for all file deletions, moves, and renames with instant single-click undo.",
        "Command Center Redesign: Modern glassmorphism UI with real-time AI core telemetry, CPU/Memory gauges, and live agent status badges.",
        "System Path Hardening: Enhanced Safe Execution preventing modification of protected Windows directories."
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
