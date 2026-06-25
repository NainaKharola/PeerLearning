import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AuthFormShell from '../../components/forms/AuthFormShell.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async () => {
    toast.success('Password reset link sent');
  };

  return (
    <AuthFormShell title="Reset password" subtitle="Enter your registered email to receive reset instructions.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" type="email" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Button className="w-full" type="submit" disabled={isSubmitting}>Send reset link</Button>
      </form>
    </AuthFormShell>
  );
}
