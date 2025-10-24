import { createFileRoute, Link } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useApiMutation, useCurrentUser } from '../integrations/api';
import { UserCreateIn, UserOut } from '@repo/api/users';

export const Route = createFileRoute('/home')({
    component: RouteComponent,
});

function RouteComponent() {
    const { user: auth0User, isAuthenticated, isLoading: isAuth0Loading } = useAuth0();
    const { data: dbUser, showLoading: isLoadingUser } = useCurrentUser();

    const [role, setRole] = useState<'STUDENT' | 'INSTRUCTOR' | 'ADMIN'>('STUDENT');

    const createProfile = useApiMutation<UserCreateIn, UserOut>({
        endpoint: (variables) => ({
            path: '/users/me',
            method: 'PATCH',
        }),
        invalidateKeys: [['users', 'me']],
    });

    if (isAuth0Loading || isLoadingUser) return <div>Loading...</div>;
    if (!isAuthenticated) return <div>Please log in to continue.</div>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!role) return alert('Please select a role');

        try {
            await createProfile.mutateAsync({
                name: auth0User?.name ?? '',
                email: auth0User?.email ?? '',
                role,
            });
        } catch (err) {
            console.error(err);
            alert('Failed to save profile.');
        }
    };

    if (!dbUser?.name || !dbUser?.email || !dbUser?.role) {
        return (
            <form onSubmit={handleSubmit}>
                <h2>Complete Your Profile</h2>
                <p>Name: {auth0User?.name}</p>
                <p>Email: {auth0User?.email}</p>
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value as 'STUDENT' | 'INSTRUCTOR' | 'ADMIN')} required>
                        <option value="">Select...</option>
                        <option value="STUDENT">Student</option>
                        <option value="INSTRUCTOR">Instructor</option>
                    </select>
                </label>
                <button type="submit" disabled={createProfile.isPending}>
                    {createProfile.isPending ? 'Saving...' : 'Save'}
                </button>
            </form>
        );
    }

    return (
        <div>
            <h1>Welcome back, {dbUser.name}!</h1>
            <p>Email: {dbUser.email}</p>
            <p>Role: {dbUser.role}</p>
            <Link to="/enrollments">View Courses</Link>
        </div>
    );
}
