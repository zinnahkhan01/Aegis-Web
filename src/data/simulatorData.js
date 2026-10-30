export const SIMULATOR_COMMANDS = [
  {
    id: "notepad-notes",
    chip: "Open Notepad and type project notes",
    description: "Launch native desktop editor, focus window, and simulate natural typing with project agenda.",
    category: "Desktop Automation",
    targetAgent: "CEO Agent -> DesktopAgent",
    statusBadge: "NATIVE_EXEC",
    accent: "cyan",
    duration: "1.4s",
    voiceResponse: "Notepad opened. I have transcribed your project notes and prepared the buffer for auto-saving.",
    steps: [
      { step: 1, title: "Voice & Intent Analysis", detail: "VAD captured voice command. CEO Agent recognized intent: OS_APP_LAUNCH & TEXT_INPUT.", status: "done" },
      { step: 2, title: "CEO Agent Delegation", detail: "Routing execution payload to DesktopAgent (native process manager).", status: "done" },
      { step: 3, title: "Process Spawn & Hook", detail: "Spawned process 'notepad.exe' (PID: 14280) with window title 'Untitled - Notepad'.", status: "done" },
      { step: 4, title: "Keystroke Injection", detail: "Injected text: '# Project Supervex Architecture Notes\\n- CEO Agent v1.0.4 Beta\\n- Playwright Stealth Active'.", status: "done" },
      { step: 5, title: "Completion Telemetry", detail: "Window state: FOCUSED. Memory overhead: 14.2 MB. Dispatched spoken confirmation.", status: "done" }
    ],
    logs: [
      "[00:00.12] [AUDIO_IN] Stream captured: 'Open Notepad and type project notes'",
      "[00:00.34] [CEO_BRAIN] Intent confidence: 0.998. Target: DesktopAgent",
      "[00:00.62] [DESKTOP_AGENT] Invoking desktop_open_app(name='notepad.exe')",
      "[00:00.89] [WIN32_API] ShellExecuteExW(notepad.exe) -> Process ID 14280",
      "[00:01.15] [DESKTOP_AGENT] Window focused. Sending WM_SETTEXT buffer",
      "[00:01.38] [VOICE_OUT] Gemini Live duplex audio response synthesised in 94ms",
      "[00:01.40] [STATUS] SUCCESS: Task complete with 0 errors"
    ],
    toolCall: {
      agent: "DesktopAgent",
      method: "desktop_open_and_type",
      params: {
        application: "notepad.exe",
        content: "# Supervex AI Launch Notes\n- Realtime Voice Engine: Active\n- ADB Mobile Bridge: Connected",
        focus: true
      }
    }
  },
  {
    id: "youtube-music",
    chip: "Play ad-free coding music on YouTube",
    description: "Launch hardened Playwright stealth browser, navigate to YouTube, engage ad-blocking, and start playback.",
    category: "Browser Automation",
    targetAgent: "CEO Agent -> BrowserAgent (Playwright)",
    statusBadge: "STEALTH_PLAYWRIGHT",
    accent: "violet",
    duration: "2.1s",
    voiceResponse: "Playing ad-free synthwave coding radio on YouTube with Playwright stealth shields active.",
    steps: [
      { step: 1, title: "Voice & Intent Analysis", detail: "CEO Agent identified category: WEB_MEDIA_PLAYBACK with keyword 'ad-free'.", status: "done" },
      { step: 2, title: "Browser Stealth Launch", detail: "Playwright chromium headless/headed instance initialized with fingerprint randomization.", status: "done" },
      { step: 3, title: "Ad-Blocker Filter Engine", detail: "Injected network interceptors: blocked 14 telemetry & video pre-roll ad beacons.", status: "done" },
      { step: 4, title: "Media Navigation & Play", detail: "Navigated to YouTube music mix, located primary player, and invoked video.play().", status: "done" },
      { step: 5, title: "Playback Confirmed", detail: "State: PLAYING (1080p, 60fps). Audio pipeline routed to default desktop speaker.", status: "done" }
    ],
    logs: [
      "[00:00.08] [AUDIO_IN] Stream captured: 'Play ad-free coding music on YouTube'",
      "[00:00.29] [CEO_BRAIN] Decomposed to Playwright stealth browser sub-agent",
      "[00:00.75] [PLAYWRIGHT] Browser launched: Chromium (124.0.6367.29) [Stealth Mode]",
      "[00:01.12] [AD_SHIELD] Intercepted and blocked 14 ad domain scripts (*.doubleclick.net, *.googleads.g.doubleclick.net)",
      "[00:01.64] [DOM_QUERY] Found video element selector 'video.html5-main-video'",
      "[00:01.95] [MEDIA_CTRL] Dispatched HTMLMediaElement.play() -> State: ACTIVE",
      "[00:02.10] [STATUS] SUCCESS: Ad-free stream initialized"
    ],
    toolCall: {
      agent: "BrowserAgent",
      method: "playwright_stream_media",
      params: {
        query: "synthwave coding lofi radio",
        service: "youtube",
        stealthMode: true,
        blockAds: true,
        autoplay: true
      }
    }
  },
  {
    id: "undo-file",
    chip: "Undo last deleted file",
    description: "Query local transactional file journal, locate last soft-deleted item, and restore from Recycle Bin to original path.",
    category: "File Management",
    targetAgent: "CEO Agent -> FileAgent",
    statusBadge: "TRANSACTIONAL_UNDO",
    accent: "cyan",
    duration: "0.8s",
    voiceResponse: "Restored 'Q3_Financial_Summary.xlsx' to your Documents folder from the Recycle Bin.",
    steps: [
      { step: 1, title: "Transactional Log Lookup", detail: "FileAgent inspected sqlite journal in %APPDATA%/SupervexAI/file_transactions.db.", status: "done" },
      { step: 2, title: "Operation Match", detail: "Found Op #8842: Soft-delete on 'Documents\\Q3_Financial_Summary.xlsx' 4 minutes ago.", status: "done" },
      { step: 3, title: "Safe Restoration", detail: "Invoked Win32 IFileOperation / Recycle Bin Shell API to reverse deletion.", status: "done" },
      { step: 4, title: "Integrity Verification", detail: "Checked file hash (SHA-256 match). Permissions and metadata restored 100%.", status: "done" },
      { step: 5, title: "Context Updated", detail: "Active directory context updated to 'C:\\Users\\ILLEGEAR\\Documents'.", status: "done" }
    ],
    logs: [
      "[00:00.05] [AUDIO_IN] Stream captured: 'Undo last deleted file'",
      "[00:00.18] [CEO_BRAIN] Intent: FILE_SYS_TRANSACTION_REVERSAL",
      "[00:00.32] [FILE_AGENT] Querying file_transactions.db for latest OP_DELETE",
      "[00:00.49] [JOURNAL] Found record id: op_8842 | path: 'Documents\\Q3_Financial_Summary.xlsx'",
      "[00:00.68] [WIN32_SHELL] SHFileOperationW(FO_MOVE, RecycleBin -> OriginalPath)",
      "[00:00.78] [VERIFY] File confirmed present on disk (Size: 4.8 MB, SHA256 verified)",
      "[00:00.82] [STATUS] SUCCESS: File restored safely"
    ],
    toolCall: {
      agent: "FileAgent",
      method: "undo_last_operation",
      params: {
        operationType: "DELETE_TO_RECYCLE_BIN",
        verifyChecksum: true,
        autoRestoreLocation: true
      }
    }
  },
  {
    id: "phone-whatsapp",
    chip: "Unlock phone and send WhatsApp to Rahul",
    description: "Wake Android screen via Wireless ADB, submit secure PIN, launch WhatsApp, resolve contact 'Rahul', and dispatch message.",
    category: "Mobile & ADB Bridge",
    targetAgent: "CEO Agent -> SupervexCompanion (ADB)",
    statusBadge: "CROSS_DEVICE_ADB",
    accent: "emerald",
    duration: "2.8s",
    voiceResponse: "Unlocked your Android phone, opened WhatsApp, and sent your message to Rahul.",
    steps: [
      { step: 1, title: "Wireless ADB Handshake", detail: "Verified TCP socket connection to Android device on 192.168.1.104:5555.", status: "done" },
      { step: 2, title: "Screen Wake & Keyguard", detail: "Sent KEYCODE_WAKEUP and simulated vertical swipe up across keyguard.", status: "done" },
      { step: 3, title: "Automated PIN Entry", detail: "Dispatched secure encrypted PIN unlock sequence to Android input manager.", status: "done" },
      { step: 4, title: "App Launch & Intent", detail: "Executed `am start -a android.intent.action.VIEW` targeting WhatsApp contact 'Rahul'.", status: "done" },
      { step: 5, title: "Message Dispatch", detail: "Injected message body via accessibility service and simulated send tap.", status: "done" }
    ],
    logs: [
      "[00:00.10] [AUDIO_IN] Stream captured: 'Unlock phone and send WhatsApp to Rahul'",
      "[00:00.38] [CEO_BRAIN] Cross-device route: ADB Wireless -> Supervex Companion",
      "[00:00.82] [ADB_DAEMON] TCP handshake 192.168.1.104:5555 [State: DEVICE_ONLINE]",
      "[00:01.19] [KEYGUARD] adb shell input keyevent 224 && input swipe 540 1600 540 400",
      "[00:01.71] [PIN_AUTH] Dispatched secure credentials -> Screen unlocked",
      "[00:02.15] [WHATSAPP] Resolved contact 'Rahul' (Phone: +1 555-019-8234)",
      "[00:02.65] [ACCESSIBILITY] Message injected & SEND button clicked",
      "[00:02.80] [STATUS] SUCCESS: Message delivered via mobile carrier/Wi-Fi"
    ],
    toolCall: {
      agent: "SupervexCompanion",
      method: "adb_whatsapp_dispatch",
      params: {
        deviceIp: "192.168.1.104:5555",
        unlockRequired: true,
        contactName: "Rahul",
        message: "Hey Rahul, sending this hands-free from Supervex AI!"
      }
    }
  }
];
