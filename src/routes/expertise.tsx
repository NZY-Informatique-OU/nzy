import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import { Divider } from 'primereact/divider'
import { Panel } from 'primereact/panel'
import { useLanguage } from '@/i18n/language-context'

export const Route = createFileRoute('/expertise')({
  component: ExpertisePage,
})

function ExpertisePage() {
  const { t } = useLanguage()

  return (
    <div className="page-expertise">
      <section className="section page-title">
        <h1>{t.expertise.title}</h1>
        <p className="page-lead">{t.expertise.lead}</p>
      </section>

      <section className="section">
        <Panel header={t.expertise.aiPanelTitle} toggleable>
          <p>{t.expertise.aiPanelText}</p>
          <ol className="cycle-steps">
            {t.expertise.steps.map((step, i) => (
              <li key={step.title} className="cycle-step">
                <span className="cycle-step-marker">{i + 1}</span>
                <div className="cycle-step-body">
                  <strong>{step.title}</strong>
                  <small>{step.text}</small>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      </section>

      <section className="section">
        <Card>
          <h2>
            <i className="pi pi-microchip-ai section-icon" /> {t.expertise.solutionsTitle}
          </h2>
          <p>{t.expertise.solutionsText}</p>
          <div className="chip-row">
            {t.expertise.aiChips.map((f) => <Chip key={f} label={f} />)}
          </div>
        </Card>
      </section>

      <section className="section">
        <Card>
          <h2>
            <i className="pi pi-cloud section-icon" /> {t.expertise.cloudTitle}
          </h2>
          <p>
            {t.expertise.cloudA}
            <strong>AWS CDK</strong>
            {t.expertise.cloudB}
            <strong>Microsoft Azure</strong>
            {t.expertise.cloudC}
            <strong>Google Cloud</strong>
            {t.expertise.cloudD}
          </p>
          <Divider />
          <div className="chip-row">
            {t.expertise.cloudChips.map((p) => <Chip key={p} label={p} />)}
          </div>
        </Card>
      </section>
    </div>
  )
}
