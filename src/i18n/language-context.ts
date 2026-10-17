import { createContext, useContext } from 'react'
import { languages, messages } from './messages'
import type { Lang, Messages } from './messages'

const STORAGE_KEY = 'nzy-lang'
const FALLBACK: Lang = 'en'

function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value)
}

function fromNavigator(): Lang | undefined {
  const preferred = navigator.languages?.length
    ? navigator.languages
    : navigator.language
      ? [navigator.language]
      : []
  for (const tag of preferred) {
    const primary = tag.toLowerCase().split('-')[0]
    if (isLang(primary)) return primary
    if (primary === 'be') return 'ru'
  }
  return undefined
}

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && isLang(saved)) return saved
  } catch {
    /* localStorage unavailable */
  }
  return fromNavigator() ?? FALLBACK
}

export function persistLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* localStorage unavailable */
  }
}

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Messages
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: FALLBACK,
  setLang: () => {},
  t: messages[FALLBACK],
})

export function useLanguage() {
  return useContext(LanguageContext)
}
