import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from '../../components/Sidebar';

export const Route = createFileRoute('/_app')({
    component: RouteComponent,
})

function RouteComponent() {
    const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Redirecting to login...</div>;
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar role={user.role} />
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                <Outlet />
            </main>
        </div>
    );
}
