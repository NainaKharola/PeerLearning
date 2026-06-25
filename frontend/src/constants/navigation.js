import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { USER_ROLES } from './roles.js';

export const publicNavItems = [
  { label: 'About', path: '/about' },
  { label: 'Features', path: '/features' },
  { label: 'Contact', path: '/contact' },
];

export const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Skill Analysis', path: '/learner/skill-analysis', icon: Gauge, roles: [USER_ROLES.LEARNER] },
  { label: 'Mentors', path: '/learner/recommended-mentors', icon: GraduationCap, roles: [USER_ROLES.LEARNER] },
  { label: 'Sessions', path: '/learner/book-sessions', icon: CalendarCheck },
  { label: 'Groups', path: '/learner/study-groups', icon: Users, roles: [USER_ROLES.LEARNER] },
  { label: 'Resources', path: '/learner/resources', icon: BookOpen },
  { label: 'Placement', path: '/learner/placement-preparation', icon: BriefcaseBusiness, roles: [USER_ROLES.LEARNER] },
  { label: 'Mentees', path: '/mentor/mentees', icon: Users, roles: [USER_ROLES.MENTOR] },
  { label: 'Reviews', path: '/mentor/reviews', icon: MessageSquareText, roles: [USER_ROLES.MENTOR] },
  { label: 'Admin', path: '/admin', icon: ShieldCheck, roles: [USER_ROLES.ADMIN] },
  { label: 'Analytics', path: '/admin/platform-analytics', icon: BarChart3, roles: [USER_ROLES.ADMIN] },
];
