import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { PhotoBanner } from '@/components/photo-banner'
import { useLanguage } from '@/i18n/language-context'
import logoConsulting from '../../assets/images/logo-it-consulting.png'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="page-home">
      <section className="hero">
        <PhotoBanner />
        <div className="hero-content">
          <div className="hero-cartouche">
            <h1 className="hero-title">NZY</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <Link to="/expertise">
              <Button label={t.hero.cta} icon="pi pi-arrow-right" iconPos="right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <h2>{t.home.introTitle}</h2>
        <p>{t.home.introP1}</p>
        <p>
          {t.home.introP2a}
          <strong>{t.home.introP2Strong}</strong>
          {t.home.introP2b}
        </p>
      </section>

      <section className="section section-services">
        <div className="services-grid">
          <Card className="service-card">
            <img src={logoConsulting} alt="NZY IT Consulting" className="service-logo" />
            <h3>{t.home.consultingTitle}</h3>
            <p>{t.home.consultingText}</p>
          </Card>
          <Card className="service-card">
            <i className="pi pi-code service-icon" />
            <h3>{t.home.devTitle}</h3>
            <p>{t.home.devText}</p>
          </Card>
          <Card className="service-card">
            <i className="pi pi-cloud service-icon" />
            <h3>{t.home.cloudTitle}</h3>
            <p>{t.home.cloudText}</p>
          </Card>
        </div>
      </section>

      <section className="section section-contact">
        <h2>{t.home.contactTitle}</h2>
        <p>{t.home.contactText}</p>
        <a href="mailto:contact@nzy.info" className="contact-mail">
          <i className="pi pi-envelope" /> contact@nzy.info
        </a>
      </section>
    </div>
  )
}
