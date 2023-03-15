import { useContext } from 'react';
import { AuthContext } from '../contaxt/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;