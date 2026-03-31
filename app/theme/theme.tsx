"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

/* -------------------------------------------------- */
/* 1️⃣ Tema isimleri                                  */
/* -------------------------------------------------- */
export type ThemeType = "pink" | "dark" | "gold" | "darkGold" | "purple"

/* -------------------------------------------------- */
/* 2️⃣ Tema şeması                                    */
/* -------------------------------------------------- */
type ThemeSchema = {
  bg: string
  card: string
  input: string
  soft: string
  accentText: string
  button: string
  danger: string
  heroText: string
  heroCard: string
  title: string
  subtitle: string
  headerBg: string
  headerText: string
  heroOverlay: string
  sectionAlt: string
  sectionSoft: string
  ctaBg: string
  ctaText: string
  footerBg: string
  footerText: string
  link: string
  accentLine: string
}

/* -------------------------------------------------- */
/* 3️⃣ Tema renkleri                                  */
/* -------------------------------------------------- */
const themes: Record<ThemeType, ThemeSchema> = {

  pink: {
    bg: "min-h-screen bg-[#f7edf2] text-gray-900",
    card: "bg-white border border-[#ead6dd] shadow-2xl",
    input: "bg-white border border-[#e8cfd8] text-gray-900 placeholder-gray-400 focus:border-[#c2185b]",
    soft: "bg-[#f2dfe7] hover:bg-[#e9cdd9] text-gray-800",
    button: "bg-[#c2185b] hover:bg-[#a3154c] text-white",
    danger: "bg-red-500/70 text-white cursor-not-allowed",
    heroText: "text-white",
    accentText: "bg-gradient-to-r from-[#c2185b] to-[#ff6b9a]",
    heroCard: "bg-white border border-[#ead6dd] shadow-xl",
    title: "text-gray-900",
    subtitle: "text-gray-500",
    headerBg: "bg-white",
    headerText: "text-black",
    heroOverlay: "bg-black/60",
    sectionAlt: "bg-gray-50",
    sectionSoft: "bg-gray-100",
    ctaBg: "bg-[#c2185b]",
    ctaText: "text-white",
    footerBg: "bg-black",
    footerText: "text-white",
    link: "text-[#c2185b] hover:text-[#a3154c]",
    accentLine: "bg-[#c2185b]"
  },

  dark: {
    bg: "min-h-screen bg-black text-white",
    card: "bg-zinc-900 border border-zinc-800 shadow-2xl",
    input: "bg-zinc-800 border border-zinc-700 text-white placeholder-white/40 focus:border-yellow-500",
    soft: "bg-zinc-800 hover:bg-zinc-700 text-white",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black",
    danger: "bg-red-600/60 text-white cursor-not-allowed",
    heroText: "text-white",
    heroCard: "bg-zinc-900 border border-zinc-800 shadow-xl",
    title: "text-white",
    accentText: "bg-gradient-to-r from-yellow-400 to-yellow-200",
    subtitle: "text-white/50",
    headerBg: "bg-black",
    headerText: "text-white",
    heroOverlay: "bg-black/70",
    sectionAlt: "bg-zinc-900",
    sectionSoft: "bg-zinc-800",
    ctaBg: "bg-yellow-500",
    ctaText: "text-black",
    footerBg: "bg-black",
    footerText: "text-white",
    link: "text-yellow-400 hover:text-yellow-300",
    accentLine: "bg-yellow-500"
  },

  gold: {
  bg: "min-h-screen bg-[#0b0b0b] text-white",
accentText: "bg-gradient-to-r from-yellow-400 to-yellow-200",
  card: "bg-[#111111] border border-white/10 backdrop-blur-md",
  input: "bg-[#111111] border border-white/10 text-white placeholder-white/40 focus:border-yellow-400",

  soft: "bg-white/5 hover:bg-white/10 text-white",
  button: "bg-yellow-400 text-black hover:bg-yellow-300",

  danger: "bg-red-600/60 text-white",

  heroText: "text-white",
  heroCard: "bg-[#111111] border border-white/10",

  title: "text-white",
  subtitle: "text-white/50",

  headerBg: "bg-black/70 backdrop-blur-md",
  headerText: "text-white",

  heroOverlay: "bg-black/60",

  sectionAlt: "bg-[#0f0f0f]",
  sectionSoft: "bg-[#121212]",

  ctaBg: "bg-yellow-400",
  ctaText: "text-black",

  footerBg: "bg-black",
  footerText: "text-white/60",

  link: "text-yellow-400 hover:text-yellow-300",

  accentLine: "bg-yellow-400"
},
  darkGold: {
    bg: "min-h-screen text-white bg-black bg-[linear-gradient(45deg,#111111_25%,transparent_25%),linear-gradient(-45deg,#111111_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#111111_75%),linear-gradient(-45deg,transparent_75%,#111111_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]",
    card: "bg-zinc-900 border border-yellow-500/20 shadow-2xl",
    input: "bg-zinc-800 border border-zinc-700 text-white placeholder-white/40 focus:border-yellow-500",
    soft: "bg-zinc-800 hover:bg-zinc-700 text-white",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black",
    danger: "bg-red-600/60 text-white cursor-not-allowed",
    heroText: "text-white",
    accentText: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    heroCard: "bg-zinc-900 border border-yellow-500/20 shadow-xl",
    title: "text-yellow-400",
    subtitle: "text-white/60",
    headerBg: "bg-black",
    headerText: "text-white",
    heroOverlay: "bg-black/70",
    sectionAlt: "bg-zinc-900",
    sectionSoft: "bg-zinc-800",
    ctaBg: "bg-yellow-500",
    ctaText: "text-black",
    footerBg: "bg-black",
    footerText: "text-white",
    link: "text-yellow-400 hover:text-yellow-300",
    accentLine: "bg-yellow-500"
  },

  /* 🔥 MOR TEMA */
  purple: {
    bg: "min-h-screen text-white bg-gradient-to-br from-[#1e1633] via-[#2a1f4d] to-[#1e1633] bg-[length:200%_200%] animate-[purpleWave_12s_ease_infinite]",
    accentText: "bg-gradient-to-r from-purple-400 to-pink-400",
    card: "bg-[#1a132b] border border-purple-500/20 shadow-2xl",
    input: "bg-[#1a132b] border border-purple-500/30 text-white placeholder-white/40 focus:border-purple-400",

    soft: "bg-purple-900/40 hover:bg-purple-800/40 text-white",
    button: "bg-purple-500 hover:bg-purple-600 text-white",

    danger: "bg-red-600/60 text-white cursor-not-allowed",

    heroText: "text-white",
    heroCard: "bg-[#1a132b] border border-purple-500/20 shadow-xl",

    title: "text-purple-400",
    subtitle: "text-white/60",

    headerBg: "bg-[#0f0a1a]",
    headerText: "text-white",

    heroOverlay: "bg-black/70",

    sectionAlt: "bg-[#140f24]",
    sectionSoft: "bg-[#1a132b]",

    ctaBg: "bg-purple-500",
    ctaText: "text-white",

    footerBg: "bg-black",
    footerText: "text-white",

    link: "text-purple-400 hover:text-purple-300",

    accentLine: "bg-purple-500"
  }
}

/* -------------------------------------------------- */
/* Context + Provider + Hook                          */
/* -------------------------------------------------- */

type ThemeContextType = {
  theme: ThemeSchema
  activeTheme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeType>("pink")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeType | null
    if (stored && themes[stored]) {
      setActiveTheme(stored)
    }
  }, [])

  const setTheme = (theme: ThemeType) => {
    localStorage.setItem("theme", theme)
    setActiveTheme(theme)
  }

  const value = useMemo(
    () => ({
      theme: themes[activeTheme],
      activeTheme,
      setTheme,
    }),
    [activeTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme, ThemeProvider içinde kullanılmalı")
  }

  return context
}