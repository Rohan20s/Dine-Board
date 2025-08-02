"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Language = "en" | "es" | "hi" ;

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const languages = ["en", "hi", "es"] as const
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case "en": return "EN"
      case "hi": return "हिं"
      case "es": return "ES"
      default: return lang.toUpperCase()
    }
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleLanguage}
    >
      {getLanguageLabel(language)}
    </Button>
  )
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("app-language", newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      <div className="fixed top-4 right-4 z-50" style={{ transform: 'translateX(-40px)' }}>
        <LanguageToggle />
      </div>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
