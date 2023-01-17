import { redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user?.uid) {
        return redirect('/login');
    }
    return children;
};

export default PrivateRoute;