import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'primereact/card'
import { Message } from 'primereact/message'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="under-construction">
      <Card className="under-construction-card">
        <div className="under-construction-content">
          <i className="pi pi-wrench under-construction-icon" />
          <h1>Under construction</h1>
          <Message
            severity="info"
            text="This website is being built. Come back soon!"
          />
        </div>
      </Card>
    </div>
  )
}
