import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import AuthFormShell from '../../components/forms/AuthFormShell.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';
import Select from '../../components/ui/Select.jsx';
import { USER_ROLES } from '../../constants/roles.js';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues: { role: USER_ROLES.LEARNER } });

  const onSubmit = async () => {
    toast.success('Account request created');
    navigate('/login');
  };

  return (
    <AuthFormShell title="Create your PLMM account" subtitle="Join as a learner, mentor, or admin user.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Full name" error={errors.name?.message} {...register('name', { required: 'Name is required' })} />
        <Input label="Email" type="email" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Select
          label="Role"
          options={[
            { label: 'Learner', value: USER_ROLES.LEARNER },
            { label: 'Mentor', value: USER_ROLES.MENTOR },
            { label: 'Admin', value: USER_ROLES.ADMIN },
          ]}
          {...register('role')}
        />
        <Input label="Password" type="password" error={errors.password?.message} {...register('password', { required: 'Password is required' })} />
        <Button className="w-full" type="submit" disabled={isSubmitting}>Register</Button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        Already have an account? <Link to="/login" className="font-medium text-primary-700">Login</Link>
      </p>
    </AuthFormShell>
  );
}
