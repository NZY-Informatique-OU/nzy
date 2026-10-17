import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import { Fieldset } from 'primereact/fieldset'
import { useLanguage } from '@/i18n/language-context'
import logoConsulting from '../../assets/images/logo-it-consulting.png'

export const Route = createFileRoute('/a-propos')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="page-about">
      <section className="section page-title">
        <h1>{t.about.title}</h1>
        <p className="page-lead">{t.about.lead}</p>
      </section>

      <section className="section about-grid">
        <Card className="about-card">
          <h2>{t.about.whoTitle}</h2>
          <p>
            <strong>NZY Informatique OÜ</strong>
            {t.about.whoP1}
          </p>
          <p>{t.about.whoP2}</p>
        </Card>

        <Fieldset legend={t.about.legalTitle} className="about-legal">
          <dl className="legal-list">
            <dt>{t.about.legalName}</dt>
            <dd>NZY Informatique OÜ</dd>
            <Divider />
            <dt>{t.about.legalForm}</dt>
            <dd>{t.about.legalFormValue}</dd>
            <Divider />
            <dt>{t.about.legalReg}</dt>
            <dd>17613250</dd>
            <Divider />
            <dt>{t.about.legalAddress}</dt>
            <dd>
              Kaupmehe tn 7-46, Kesklinna linnaosa,
              <br />
              {t.about.legalAddressCity}
            </dd>
            <Divider />
            <dt>{t.about.legalArea}</dt>
            <dd>{t.about.legalAreaValue}</dd>
            <Divider />
            <dt>{t.about.legalContact}</dt>
            <dd><a href="mailto:contact@nzy.info">contact@nzy.info</a></dd>
          </dl>
        </Fieldset>
      </section>

      <section className="section">
        <Card className="consulting-card">
          <div className="consulting-layout">
            <img
              src={logoConsulting}
              alt="NZY IT Consulting"
              className="consulting-logo"
            />
            <div>
              <h2>{t.about.consultingTitle}</h2>
              <p>
                {t.about.consultingA}
                <strong>NZY IT Consulting</strong>
                {t.about.consultingB}
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
