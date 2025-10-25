import { useAuth0 } from '@auth0/auth0-react';
import { useCurrentUser } from '../integrations/api';

export function useAuth() {
    const { isAuthenticated, isLoading: isAuth0Loading, loginWithRedirect } = useAuth0();
    const { data: user, isLoading: isUserLoading } = useCurrentUser();

    return {
        user: user,
        isAuthenticated,
        isLoading: isAuth0Loading || isUserLoading,
        loginWithRedirect,
    };
}