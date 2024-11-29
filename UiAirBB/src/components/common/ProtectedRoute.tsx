import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const userId = localStorage.getItem('user');

    if (!userId) {
        // Reindirizza alla LandingPage se non c'è un utente
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;