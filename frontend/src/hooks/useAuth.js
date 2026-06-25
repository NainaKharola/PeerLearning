import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice.js';

export function useAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return {
    ...auth,
    isAuthenticated: Boolean(auth.token),
    logout: () => dispatch(logout()),
  };
}
