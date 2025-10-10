import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/grades"!</div>
}
