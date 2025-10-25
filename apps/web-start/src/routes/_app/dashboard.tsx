import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Hello "/dashboard"!
  </div>
}
