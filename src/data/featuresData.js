export const FEATURES_DATA = [
  {
    id: "core-voice",
    number: "01",
    agentCode: "CORE::VOICE_LIVE",
    title: "Core AI & Voice Engine (Gemini Live)",
    category: "core",
    badge: "Real-Time Duplex Audio",
    accent: "cyan",
    shortDesc: "Natural, human-like voice conversation powered by Gemini Live with continuous Voice Activity Detection (VAD).",
    description: "Experience lightning-fast full-duplex spoken conversations with conversational interruptions, zero wake-word fatigue, and seamless CEO Agent delegation for multi-step reasoning, planning, and live coding.",
    highlights: [
      "Sub-120ms Voice Activity Detection (VAD) audio stream",
      "Seamless natural interruption handling (no robotic waiting)",
      "Cognitive CEO Agent orchestration across all sub-agents",
      "Dynamic prompt synthesis and real-time context streaming"
    ],
    sampleCommand: "Aegis, let's design an automated backup plan for my project folder.",
    toolSnippet: `// Gemini Live Duplex Stream
const session = await geminiLive.connect({
  model: "gemini-2.5-flash-native-audio",
  duplex: true,
  vad: { sensitivity: 0.85, speechCutoffMs: 250 }
});
session.on("interruption", () => agent.haltPlayback());`
  },
  {
    id: "file-management",
    number: "02",
    agentCode: "SYS::FILE_SYSTEM",
    title: "Advanced File Management",
    category: "desktop",
    badge: "Safe Execution & Undo",
    accent: "violet",
    shortDesc: "Context-aware folder navigation, batch move/rename, one-click Recycle Bin purge, and instant undo.",
    description: "A robust file operations agent that retains spatial context. Say 'back' to return to your previous directory, batch-process hundreds of files with regular expressions, and rest easy with irreversible action protection and instant undo restore.",
    highlights: [
      "Context-aware spatial memory (navigate with 'open', 'back', 'cd')",
      "Batch operations by extension or pattern (move all .mp4 to Videos)",
      "Safe Execution Engine: Protected roots (C:\\Windows, System32)",
      "1-Click Recycle Bin purge and full Undo history recovery"
    ],
    sampleCommand: "Move all screenshot PNGs to Desktop\\Screenshots and undo if I made a mistake.",
    toolSnippet: `// File Agent with Undo Buffer
const fileOp = await fileAgent.batchMove({
  source: "~/Downloads/*.png",
  destination: "~/Desktop/Screenshots",
  safeMode: true,
  enableUndo: true
});
console.log("Undo token registered:", fileOp.undoId);`
  },
  {
    id: "browser-automation",
    number: "03",
    agentCode: "WEB::PLAYWRIGHT_STEALTH",
    title: "Browser Automation (Browser Agent)",
    category: "web_mobile",
    badge: "Stealth & Ad-Blocker",
    accent: "cyan",
    shortDesc: "Autonomous Playwright stealth browsing, native YouTube ad-blocking, player controls, and deep web research.",
    description: "Launch hardened headless or headed Playwright browsers equipped with intelligent anti-bot bypass. Enjoy ad-free YouTube streaming, automated video playback control, and synthesize complex research across dozens of web pages.",
    highlights: [
      "Playwright stealth mode bypassing common anti-bot traps",
      "Built-in YouTube ad-blocker without requiring browser extensions",
      "Voice-guided media control (play, pause, seek, volume, speed)",
      "Multi-tab research extraction with structured summarization"
    ],
    sampleCommand: "Play lofi chill beats on YouTube without ads and pause after 45 minutes.",
    toolSnippet: `// Playwright Stealth & Ad-Blocker
const browser = await playwrightAgent.launch({
  stealth: true,
  adBlocker: { youtube: true, genericOverlays: true }
});
await browser.navigate("https://youtube.com/watch?v=...");
await browser.player.setVolume(70);`
  },
  {
    id: "mobile-adb",
    number: "04",
    agentCode: "MOBILE::ADB_BRIDGE",
    title: "Mobile Control & ADB (Aegis Companion)",
    category: "web_mobile",
    badge: "PC-to-Android Bridge",
    accent: "emerald",
    shortDesc: "Seamless PC-to-Android control: wireless PIN unlock, app launcher, touch & swipe gestures, screenshots, and SMS.",
    description: "Turn your PC into a command hub for your Android phone. Pair via high-speed Wireless ADB or USB to unlock screens via secure PIN, launch apps, send SMS messages, simulate natural touch gestures, and stream screen frames.",
    highlights: [
      "Zero-cable Wireless ADB connection over local Wi-Fi",
      "Automated secure PIN unlock and display wake",
      "Natural touch, tap, and swipe coordinate simulation",
      "Direct SMS sending, notification reading, and screenshot grab"
    ],
    sampleCommand: "Unlock my phone, open Spotify, and like the currently playing track.",
    toolSnippet: `// Wireless ADB Companion Bridge
const phone = await adbBridge.connectWireless("192.168.1.104:5555");
await phone.wakeAndUnlock({ pin: "2849" });
await phone.launchApp("com.spotify.music");
await phone.simulateTap({ x: 540, y: 1920 });`
  },
  {
    id: "whatsapp-web",
    number: "05",
    agentCode: "COMM::WHATSAPP_ROUTER",
    title: "WhatsApp Web Automation",
    category: "web_mobile",
    badge: "Hands-Free Messaging",
    accent: "emerald",
    shortDesc: "Intelligent contact resolution and automated hands-free messaging straight through WhatsApp Web.",
    description: "Never leave your keyboard or flow state. Simply dictate your message and recipient name; Aegis resolves the closest contact match, opens the chat session, formats text, and dispatches it in seconds.",
    highlights: [
      "Fuzzy contact matching from local or synced address books",
      "Hands-free message dictation and confirmation preview",
      "Automated chat navigation and scheduled delivery",
      "Zero API fees ? runs locally through secure web session"
    ],
    sampleCommand: "Send WhatsApp to Sarah saying I will be 10 minutes late to the sync.",
    toolSnippet: `// WhatsApp Automation Plugin
const contact = await whatsapp.resolveContact("Sarah");
await whatsapp.sendMessage({
  recipient: contact.phone,
  message: "I will be 10 minutes late to the sync.",
  requireConfirmation: false
});`
  },
  {
    id: "desktop-control",
    number: "06",
    agentCode: "OS::DESKTOP_AGENT",
    title: "Desktop Control & CLI Execution",
    category: "desktop",
    badge: "Native App Dispatcher",
    accent: "violet",
    shortDesc: "Instant native app launching (VS Code, Notepad, VLC) and secure CLI script execution.",
    description: "Full control over your operating system environment. Aegis launches native applications, handles window states, runs automated PowerShell/Bash developer workflows, and manages background processes safely.",
    highlights: [
      "Universal launcher for native desktop programs and utilities",
      "Script runner with output capturing and error recovery",
      "System audio, volume, brightness, and display settings control",
      "Granular permission gates for elevated shell scripts"
    ],
    sampleCommand: "Open VS Code in my project directory and run the dev server in PowerShell.",
    toolSnippet: `// Native OS Application Dispatcher
await desktopAgent.launchApplication("code", {
  args: ["C:\\Projects\\Aegis-Web"],
  workspace: true
});
await desktopAgent.runScript("npm run dev", { background: true });`
  },
  {
    id: "vision-screen",
    number: "07",
    agentCode: "VISION::MULTI_MODAL",
    title: "Vision & Screen Analysis",
    category: "vision_tasks",
    badge: "see_screen & see_camera",
    accent: "cyan",
    shortDesc: "Real-time display screen capture analysis (see_screen) and webcam environmental perception (see_camera).",
    description: "Give your AI real eyes. Aegis inspects whatever is on your desktop monitor to diagnose coding bugs, summarize charts, inspect UI layouts, or switch to your webcam to see physical documents and objects in your room.",
    highlights: [
      "High-speed display frame capture with privacy redaction",
      "Multi-modal OCR, UI widget recognition, and error log debugging",
      "Real-time webcam environmental perception (see_camera)",
      "Strict in-memory processing: zero image logs saved to disk"
    ],
    sampleCommand: "Take a look at this error on my screen and tell me what went wrong.",
    toolSnippet: `// Vision Multi-Modal Engine
const screenFrame = await visionAgent.captureDisplay({ monitor: 1 });
const analysis = await geminiVision.analyze({
  image: screenFrame,
  prompt: "Diagnose error message in red terminal box"
});
return analysis.summary;`
  },
  {
    id: "command-center-ui",
    number: "08",
    agentCode: "TELEMETRY::DASHBOARD",
    title: "Command Center UI",
    category: "desktop",
    badge: "Glassy React & Tailwind",
    accent: "cyan",
    shortDesc: "A futuristic glassmorphism dashboard monitoring AI core telemetry, system resources, and active agents.",
    description: "An ultra-modern, cyberpunk desktop cockpit. Built with React and Tailwind CSS, the Command Center streams live hardware health, token metrics, active agent sub-processes, and instant toggleable controls.",
    highlights: [
      "Live telemetry for CPU, RAM, and GPU load",
      "Real-time AI core status (Gemini Live latency, token usage)",
      "Interactive module health badges with hot-reload diagnostics",
      "Glassmorphic design with customizable dark cyberpunk skins"
    ],
    sampleCommand: "Show system health and current AI core latency on the Command Center.",
    toolSnippet: `// Telemetry WebSocket Stream
const dashboard = new AegisTelemetryStream();
dashboard.subscribe(["cpu", "memory", "agent_status", "llm_latency"]);
dashboard.on("metric_update", (telemetry) => {
  renderGlassHud(telemetry);
});`
  },
  {
    id: "task-management",
    number: "09",
    agentCode: "CRON::TASK_DAEMON",
    title: "Task Management & Proactive Reminders",
    category: "vision_tasks",
    badge: "manage_tasks & Cron",
    accent: "violet",
    shortDesc: "Proactive reminders, recurring todo scheduling, deadline tracking, and autonomous task execution.",
    description: "A proactive task daemon that never forgets. Schedule reminders, organize nested todo lists, trigger automated routines at specific times, and receive audible spoken heads-ups when important deadlines approach.",
    highlights: [
      "Natural language reminder syntax ('remind me in 30 minutes to commit code')",
      "Autonomous background cron jobs and recurring routines",
      "Priority-tiered todo queues with persistent local storage",
      "Spoken voice notifications synced with Windows Action Center"
    ],
    sampleCommand: "Remind me in 45 minutes to review the security audit PR and mark task #12 as completed.",
    toolSnippet: `// Autonomous Task & Reminder Daemon
await taskManager.createTask({
  title: "Review security audit PR",
  dueAt: Date.now() + 45 * 60 * 1000,
  priority: "HIGH",
  voiceNotification: true,
  actionHooks: ["notify_desktop", "speak_gemini_live"]
});`
  }
];
