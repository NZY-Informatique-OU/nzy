import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { detectLang, persistLang, LanguageContext } from './language-context'
import { isRtl, messages } from './messages'
import type { Lang } from './messages'

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode
  initialLang?: Lang
}) {
  const [lang, setLangState] = useState<Lang>(() => initialLang ?? detectLang())

  const setLang = (next: Lang) => {
    persistLang(next)
    setLangState(next)
  }

  const t = messages[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr'
    document.title = t.metaTitle
  }, [lang, t.metaTitle])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
