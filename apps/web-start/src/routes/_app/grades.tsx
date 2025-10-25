import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Hello "/grades"!
  </div>
}
