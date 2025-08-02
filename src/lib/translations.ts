import { useLanguage } from "@/providers/language-provider"

// Import all feature translations
import loginEn from "@/app/auth/login/locales/en/login.json"
import loginEs from "@/app/auth/login/locales/es/login.json"
import loginHi from "@/app/auth/login/locales/hi/login.json"

// Feature-specific translations
const featureTranslations = {
  login: {
    en: loginEn,
    es: loginEs,
    hi: loginHi,
  },
}

export function useTranslations(feature: string) {
  const { language } = useLanguage()
  
  const translations = featureTranslations[feature as keyof typeof featureTranslations]
  if (!translations) {
    console.warn(`No translations found for feature: ${feature}`)
    return { t: (key: string) => key }
  }

  const currentTranslations = translations[language as keyof typeof translations]
  if (!currentTranslations) {
    console.warn(`No translations found for language: ${language} in feature: ${feature}`)
    return { t: (key: string) => key }
  }

  const t = (key: string): string => {
    return (currentTranslations as any)[key] || key
  }

  return { t }
} 