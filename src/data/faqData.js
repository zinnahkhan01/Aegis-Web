export const FAQ_DATA = [
  {
    id: "adb-pairing",
    question: "How does Supervex AI connect to and control my Android phone?",
    answer: "Supervex AI communicates with your Android phone using standard Android Debug Bridge (ADB) over your local Wi-Fi network or a direct USB cable. By installing the lightweight Supervex Companion APK and enabling Wireless Debugging in Android Developer Options, the PC CEO Agent can securely wake the screen, submit your unlock PIN, launch apps, simulate taps/swipes, and send SMS messages without rooting your phone."
  },
  {
    id: "api-key",
    question: "Do I need my own Google Gemini API key to run Supervex?",
    answer: "No! During the v1.0.4 Free Public Beta, Supervex covers the Gemini Live API usage for testers (under our managed beta quota). You can simply sign in with your email without needing a credit card or your own API key. For power users who prefer using their own dedicated Google Gemini API key (BYOK), you can still enter your personal key inside Settings at any time with local encrypted storage."
  },
  {
    id: "safe-files",
    question: "Can Supervex accidentally delete important system files?",
    answer: "No. Supervex AI incorporates a multi-layer Safe Execution Guardrail. All critical operating system directories (e.g., C:\\Windows, Program Files, System32, and project root files) are marked as IMMUTABLE. Furthermore, all non-system deletions are soft-deletions routed to the Windows Recycle Bin with a transactional sqlite undo journal, allowing you to simply say 'Undo last delete' to instantly restore your files."
  },
  {
    id: "adblocker",
    question: "How does the YouTube ad-blocker work without browser extensions?",
    answer: "The Browser Agent uses Playwright in stealth automation mode with native network route interception. Before requests hit Google ad domains, doubleclick, or overlay trackers, the network layer drops them directly at the socket level. Video content streams uninterrupted, without consuming CPU on heavy ad-blocking browser extensions or triggering anti-adblocker detection walls."
  },
  {
    id: "ceo-agent",
    question: "What makes Supervex different from standard LLM desktop assistants?",
    answer: "Most assistants are passive text chatbots that execute single-turn queries. Supervex AI is an autonomous multi-agent operating system orchestrated by a centralized 'CEO Agent'. It decomposes your goal into discrete sub-tasks, assigns them to specialized agents (File Agent, Browser Agent, Mobile Daemon, Vision AI, Desktop Agent), monitors execution, and confirms completion through natural full-duplex spoken audio."
  },
  {
    id: "vision-privacy",
    question: "Is my screen or webcam feed recorded or uploaded?",
    answer: "Never. The Vision Agent only captures a single ephemeral frame when you explicitly call `see_screen` or `see_camera`. That single frame is converted to base64, processed in system RAM to fulfill your immediate question, and garbage-collected immediately. No images or videos are ever written to disk or stored on external servers."
  }
];
