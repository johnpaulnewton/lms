import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../../hooks/useAuth';

export const Route = createFileRoute('/_app/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Loading...
  </div>;

  if (!user) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    User not found
  </div>;

  return (
    <div style={{ marginLeft: '250px', padding: '2rem' }}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
