import { Link, NavLink } from 'react-router-dom';
import { Bell, LogOut, Menu } from 'lucide-react';
import { publicNavItems } from '../../constants/navigation.js';
import { useAuth } from '../../hooks/useAuth.js';
import Button from '../ui/Button.jsx';

export default function Navbar({ onMenuClick }) {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {onMenuClick && (
            <Button variant="ghost" className="h-9 w-9 p-0 lg:hidden" onClick={onMenuClick} aria-label="Open sidebar">
              <Menu size={20} />
            </Button>
          )}
          <Link to="/" className="text-lg font-bold text-primary-700">
            PLMM
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {publicNavItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? 'text-primary-700' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" className="h-9 w-9 p-0" aria-label="Notifications">
                <Bell size={18} />
              </Button>
              <span className="hidden text-sm font-medium text-slate-700 sm:inline">{user?.name}</span>
              <Button variant="secondary" onClick={logout}>
                <LogOut size={16} /> Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
