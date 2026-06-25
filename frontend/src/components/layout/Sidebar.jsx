import { NavLink } from 'react-router-dom';
import { sidebarItems } from '../../constants/navigation.js';
import { useAuth } from '../../hooks/useAuth.js';

export default function Sidebar() {
  const { user } = useAuth();

  const visibleItems = sidebarItems.filter((item) => !item.roles || item.roles.includes(user?.role));

  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:block">
      <div className="sticky top-16 space-y-1 p-4">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
