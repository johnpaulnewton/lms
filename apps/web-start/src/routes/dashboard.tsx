import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';    

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}
