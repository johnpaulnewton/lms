import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { useApiMutation } from '../integrations/api';
import { UserCreateIn, UserOut } from '@repo/api/users';
import { useAuth } from '../hooks/useAuth';
import styles from './Home.module.css';


export const Route = createFileRoute('/home')({
    component: RouteComponent,
});

function RouteComponent() {
    const { user: auth0User } = useAuth0();
    const { user: dbUser, isLoading } = useAuth();
    const navigate = useNavigate();

    const [role, setRole] = useState<'STUDENT' | 'INSTRUCTOR' | 'ADMIN'>('STUDENT');

    const createProfile = useApiMutation<UserCreateIn, UserOut>({
        endpoint: (variables) => ({
            path: '/users/me',
            method: 'PATCH',
        }),
        invalidateKeys: [['users', 'me']],
    });

    // Redirect based on role
    useEffect(() => {
        if (dbUser?.role === 'ADMIN') {
            navigate({ to: '/admin/courses' });
        } else if (dbUser?.role && dbUser.name && dbUser.email) {
            navigate({ to: '/dashboard' });
        }
    }, [dbUser, navigate]);

    if (isLoading) {
        return <div style={{ padding: '2rem' }}>
            Loading...
        </div>;
    }

    if (!dbUser) {
        return <div style={{ padding: '2rem' }}>
            Please log in to continue.
        </div>;
    }

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
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.formCard}>
                    <h2 className={styles.formTitle}>Complete Your Profile</h2>
                    
                    <p className={styles.text}>Name: {auth0User?.name}</p>
                    <p className={styles.text}>Email: {auth0User?.email}</p>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Role
                        </label>
                        <select 
                            className={styles.select}
                            value={role} 
                            onChange={(e) => setRole(e.target.value as 'STUDENT' | 'INSTRUCTOR' | 'ADMIN')} 
                            required
                        >
                            <option value="">Select...</option>
                            <option value="STUDENT">Student</option>
                            <option value="INSTRUCTOR">Instructor</option>
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={createProfile.isPending}
                    >
                        {createProfile.isPending ? 'Saving...' : 'Save'}
                    </button>
                </form>
            </div>
        );
    }
}
