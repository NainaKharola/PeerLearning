import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthFormShell from '../../components/forms/AuthFormShell.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';
import { USER_ROLES } from '../../constants/roles.js';
import { setCredentials } from '../../store/slices/authSlice.js';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    dispatch(setCredentials({
      token: 'demo-token',
      user: { id: 'demo-user', name: values.email.split('@')[0], email: values.email, role: USER_ROLES.LEARNER },
    }));
    toast.success('Logged in successfully');
    navigate('/dashboard');
  };

  return (
    <AuthFormShell title="Welcome back" subtitle="Sign in to continue learning, mentoring, and tracking progress.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" type="email" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Input label="Password" type="password" error={errors.password?.message} {...register('password', { required: 'Password is required' })} />
        <Button className="w-full" type="submit" disabled={isSubmitting}>Login</Button>
      </form>
      <div className="mt-4 flex justify-between text-sm text-slate-600">
        <Link to="/forgot-password" className="font-medium text-primary-700">Forgot password?</Link>
        <Link to="/register" className="font-medium text-primary-700">Create account</Link>
      </div>
    </AuthFormShell>
  );
}
