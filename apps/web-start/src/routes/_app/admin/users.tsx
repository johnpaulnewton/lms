import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/admin/users')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div style={{ marginLeft: '250px', padding: '2rem' }}>
        Hello "/_app/admin/users"!
    </div>
}
