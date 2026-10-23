import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Master list of 23 Supported Languages
export const SUPPORTED_LANGUAGES = [
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali', flag: '🇧🇩', dir: 'ltr' },
  { code: 'en', name: 'English', englishName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', englishName: 'Hindi', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ms', name: 'Bahasa Melayu', englishName: 'Malay', flag: '🇲🇾', dir: 'ltr' },
  { code: 'ru', name: 'Русский', englishName: 'Russian', flag: '🇷🇺', dir: 'ltr' },
  { code: 'ne', name: 'नेपाली', englishName: 'Nepali', flag: '🇳🇵', dir: 'ltr' },
  { code: 'ko', name: '한국어', englishName: 'Korean', flag: '🇰🇷', dir: 'ltr' },
  { code: 'my', name: 'မြန်မာစာ', englishName: 'Burmese', flag: '🇲🇲', dir: 'ltr' },
  { code: 'ar', name: 'العربية', englishName: 'Arabic', flag: '🇸🇦', dir: 'rtl' },
  { code: 'es', name: 'Español', englishName: 'Spanish', flag: '🇪🇸', dir: 'ltr' },
  { code: 'pt', name: 'Português', englishName: 'Portuguese', flag: '🇧🇷', dir: 'ltr' },
  { code: 'fr', name: 'Français', englishName: 'French', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', englishName: 'German', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ja', name: '日本語', englishName: 'Japanese', flag: '🇯🇵', dir: 'ltr' },
  { code: 'zh', name: '简体中文', englishName: 'Chinese (Simplified)', flag: '🇨🇳', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', englishName: 'Turkish', flag: '🇹🇷', dir: 'ltr' },
  { code: 'id', name: 'Bahasa Indonesia', englishName: 'Indonesian', flag: '🇮🇩', dir: 'ltr' },
  { code: 'vi', name: 'Tiếng Việt', englishName: 'Vietnamese', flag: '🇻🇳', dir: 'ltr' },
  { code: 'th', name: 'ไทย', englishName: 'Thai', flag: '🇹🇭', dir: 'ltr' },
  { code: 'it', name: 'Italiano', englishName: 'Italian', flag: '🇮🇹', dir: 'ltr' },
  { code: 'ur', name: 'اردو', englishName: 'Urdu', flag: '🇵🇰', dir: 'rtl' },
  { code: 'fil', name: 'Filipino', englishName: 'Filipino', flag: '🇵🇭', dir: 'ltr' },
  { code: 'pl', name: 'Polski', englishName: 'Polish', flag: '🇵🇱', dir: 'ltr' }
];

export const COUNTRY_TO_LANG_MAP = {
  BD: 'bn',
  IN: 'hi',
  MY: 'ms', BN: 'ms',
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru',
  NP: 'ne',
  KR: 'ko',
  MM: 'my',
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', KW: 'ar', OM: 'ar', BH: 'ar', JO: 'ar', IQ: 'ar', DZ: 'ar', MA: 'ar',
  ES: 'es', MX: 'es', CO: 'es', AR: 'es', PE: 'es', CL: 'es', VE: 'es', GT: 'es', EC: 'es',
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  FR: 'fr', BE: 'fr', CH: 'fr', SN: 'fr', CI: 'fr', CM: 'fr',
  DE: 'de', AT: 'de',
  JP: 'ja',
  CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh',
  TR: 'tr', AZ: 'tr',
  ID: 'id',
  VN: 'vi',
  TH: 'th',
  IT: 'it',
  PK: 'ur',
  PH: 'fil',
  PL: 'pl',
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en'
};

const localeModules = import.meta.glob('../locales/*.json');

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const saved = localStorage.getItem('supervex_lang');
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
    } catch (_) {}
    return 'en';
  });

  const [translations, setTranslations] = useState({});
  const [fallbackTranslations, setFallbackTranslations] = useState({});
  const [detectedInfo, setDetectedInfo] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const loadEn = async () => {
      try {
        const mod = await localeModules['../locales/en.json']();
        setFallbackTranslations(mod.default || mod);
      } catch (err) {
        console.error('Failed to load fallback en.json', err);
      }
    };
    loadEn();
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const loadActive = async () => {
      const path = '../locales/' + currentLang + '.json';
      if (localeModules[path]) {
        try {
          const mod = await localeModules[path]();
          if (!isCancelled) {
            setTranslations(mod.default || mod);
          }
        } catch (err) {
          console.error('Failed to load locale:', currentLang, err);
        }
      }
    };
    loadActive();

    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
    const isRtl = langObj?.dir === 'rtl';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    return () => { isCancelled = true; };
  }, [currentLang]);

  useEffect(() => {
    const saved = localStorage.getItem('supervex_lang');
    if (saved) return;

    let isMounted = true;
    const detectLocation = async () => {
      let country = null;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1200);
        const res = await fetch('/api/geo', { signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          country = data.country;
        }
      } catch (_) {}

      if (!country) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1200);
          const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            country = data.country_code;
          }
        } catch (_) {}
      }

      let targetLang = null;
      if (country && COUNTRY_TO_LANG_MAP[country]) {
        targetLang = COUNTRY_TO_LANG_MAP[country];
      } else {
        const browserLocale = (navigator.language || '').toLowerCase().split('-')[0];
        if (SUPPORTED_LANGUAGES.some(l => l.code === browserLocale)) {
          targetLang = browserLocale;
        }
      }

      if (isMounted && targetLang && targetLang !== 'en') {
        const langObj = SUPPORTED_LANGUAGES.find(l => l.code === targetLang);
        setCurrentLang(targetLang);
        setDetectedInfo({ country: country || 'Your Location', lang: targetLang, langObj });
        setShowToast(true);
      }
    };

    detectLocation();
    return () => { isMounted = false; };
  }, []);

  const setLanguage = useCallback((code) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === code)) {
      setCurrentLang(code);
      try {
        localStorage.setItem('supervex_lang', code);
      } catch (_) {}
      setShowToast(false);
    }
  }, []);

  const dismissToast = useCallback((keep = true) => {
    setShowToast(false);
    if (keep) {
      try {
        localStorage.setItem('supervex_lang', currentLang);
      } catch (_) {}
    }
  }, [currentLang]);

  const t = useCallback((key, fallback = '') => {
    const getNested = (obj, path) => {
      if (!obj) return undefined;
      return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
    };

    const val = getNested(translations, key);
    if (val !== undefined && val !== null && val !== '') return val;

    const fallbackVal = getNested(fallbackTranslations, key);
    if (fallbackVal !== undefined && fallbackVal !== null && fallbackVal !== '') return fallbackVal;

    return fallback || key;
  }, [translations, fallbackTranslations]);

  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[1];
  const isRTL = activeLangObj.dir === 'rtl';

  return (
    <LanguageContext.Provider value={{
      currentLang,
      setLanguage,
      activeLangObj,
      isRTL,
      t,
      detectedInfo,
      showToast,
      dismissToast
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
