import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/assignments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Hello "/assignments"!
  </div>
}
