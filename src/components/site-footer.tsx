import { useLanguage } from '@/i18n/language-context'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <strong>NZY Informatique OÜ</strong>
          <span>{t.footer.tagline}</span>
        </div>
        <div className="site-footer-contact">
          <a href="mailto:contact@nzy.info">contact@nzy.info</a>
        </div>
      </div>
      <div className="site-footer-credits">{t.footer.credits}</div>
    </footer>
  )
}
