import { Dropdown } from 'primereact/dropdown'
import { languages, langNames } from '@/i18n/messages'
import type { Lang } from '@/i18n/messages'
import { useLanguage } from '@/i18n/language-context'
import flagFr from '../../assets/images/flags/fr.svg'
import flagUs from '../../assets/images/flags/us.svg'
import flagEe from '../../assets/images/flags/ee.svg'
import flagEs from '../../assets/images/flags/es.svg'
import flagBr from '../../assets/images/flags/br.svg'
import flagUa from '../../assets/images/flags/ua.svg'
import flagRu from '../../assets/images/flags/ru.svg'

const langFlags: Record<Lang, string> = {
  fr: flagFr,
  en: flagUs,
  et: flagEe,
  es: flagEs,
  pt: flagBr,
  uk: flagUa,
  ru: flagRu,
}

interface LangOption {
  value: Lang
  label: string
  flag: string
}

const options: LangOption[] = languages.map((l) => ({
  value: l,
  label: langNames[l],
  flag: langFlags[l],
}))

function Flag({ option }: { option: LangOption }) {
  return <img src={option.flag} alt={option.label} className="lang-flag" />
}

export function LanguageSelector() {
  const { lang, setLang, t } = useLanguage()

  return (
    <Dropdown
      value={lang}
      options={options}
      optionLabel="label"
      optionValue="value"
      onChange={(e) => setLang(e.value as Lang)}
      valueTemplate={(option) =>
        option ? <Flag option={option as LangOption} /> : null
      }
      itemTemplate={(option) => (
        <span className="lang-option">
          <Flag option={option as LangOption} />
          <span>{(option as LangOption).label}</span>
        </span>
      )}
      className="lang-selector"
      aria-label={t.selectLanguage}
    />
  )
}
