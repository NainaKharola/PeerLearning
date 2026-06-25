import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout.jsx';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import { USER_ROLES } from '../constants/roles.js';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage.jsx';
import MentorVerificationPage from '../pages/admin/MentorVerificationPage.jsx';
import PlatformAnalyticsPage from '../pages/admin/PlatformAnalyticsPage.jsx';
import ReportsPage from '../pages/admin/ReportsPage.jsx';
import UserManagementPage from '../pages/admin/UserManagementPage.jsx';
import AssessmentsPage from '../pages/assessments/AssessmentsPage.jsx';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage.jsx';
import LoginPage from '../pages/auth/LoginPage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';
import DashboardPage from '../pages/dashboard/DashboardPage.jsx';
import NotFoundPage from '../pages/errors/NotFoundPage.jsx';
import UnauthorizedPage from '../pages/errors/UnauthorizedPage.jsx';
import AboutPage from '../pages/landing/AboutPage.jsx';
import ContactPage from '../pages/landing/ContactPage.jsx';
import FeaturesPage from '../pages/landing/FeaturesPage.jsx';
import LandingPage from '../pages/landing/LandingPage.jsx';
import BookSessionsPage from '../pages/learner/BookSessionsPage.jsx';
import LearnerDashboardPage from '../pages/learner/LearnerDashboardPage.jsx';
import MockInterviewsPage from '../pages/learner/MockInterviewsPage.jsx';
import MockTestsPage from '../pages/learner/MockTestsPage.jsx';
import ProfilePage from '../pages/learner/ProfilePage.jsx';
import ProgressTrackerPage from '../pages/learner/ProgressTrackerPage.jsx';
import RecommendedMentorsPage from '../pages/learner/RecommendedMentorsPage.jsx';
import SkillAnalysisPage from '../pages/learner/SkillAnalysisPage.jsx';
import MenteeManagementPage from '../pages/mentor/MenteeManagementPage.jsx';
import MentorDashboardPage from '../pages/mentor/MentorDashboardPage.jsx';
import MentorProfilePage from '../pages/mentor/MentorProfilePage.jsx';
import ReviewsPage from '../pages/mentor/ReviewsPage.jsx';
import SessionManagementPage from '../pages/mentor/SessionManagementPage.jsx';
import NotificationsPage from '../pages/notifications/NotificationsPage.jsx';
import CompanyPreparationPage from '../pages/placement/CompanyPreparationPage.jsx';
import PlacementPreparationPage from '../pages/placement/PlacementPreparationPage.jsx';
import ResourcesPage from '../pages/resources/ResourcesPage.jsx';
import StudyGroupsPage from '../pages/study-groups/StudyGroupsPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import RoleBasedRoute from './RoleBasedRoute.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assessments" element={<AssessmentsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          <Route element={<RoleBasedRoute allowedRoles={[USER_ROLES.LEARNER]} />}>
            <Route path="/learner" element={<LearnerDashboardPage />} />
            <Route path="/learner/profile" element={<ProfilePage />} />
            <Route path="/learner/skill-analysis" element={<SkillAnalysisPage />} />
            <Route path="/learner/recommended-mentors" element={<RecommendedMentorsPage />} />
            <Route path="/learner/book-sessions" element={<BookSessionsPage />} />
            <Route path="/learner/study-groups" element={<StudyGroupsPage />} />
            <Route path="/learner/resources" element={<ResourcesPage />} />
            <Route path="/learner/mock-tests" element={<MockTestsPage />} />
            <Route path="/learner/mock-interviews" element={<MockInterviewsPage />} />
            <Route path="/learner/placement-preparation" element={<PlacementPreparationPage />} />
            <Route path="/learner/company-preparation" element={<CompanyPreparationPage />} />
            <Route path="/learner/progress-tracker" element={<ProgressTrackerPage />} />
          </Route>

          <Route element={<RoleBasedRoute allowedRoles={[USER_ROLES.MENTOR]} />}>
            <Route path="/mentor" element={<MentorDashboardPage />} />
            <Route path="/mentor/profile" element={<MentorProfilePage />} />
            <Route path="/mentor/mentees" element={<MenteeManagementPage />} />
            <Route path="/mentor/sessions" element={<SessionManagementPage />} />
            <Route path="/mentor/reviews" element={<ReviewsPage />} />
          </Route>

          <Route element={<RoleBasedRoute allowedRoles={[USER_ROLES.ADMIN]} />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/users" element={<UserManagementPage />} />
            <Route path="/admin/mentor-verification" element={<MentorVerificationPage />} />
            <Route path="/admin/reports" element={<ReportsPage />} />
            <Route path="/admin/platform-analytics" element={<PlatformAnalyticsPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="/learner/*" element={<Navigate to="/learner" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
