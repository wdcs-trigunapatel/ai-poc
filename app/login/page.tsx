import { AuthLayout } from '@/components/layouts/auth-layout';
import { SignInForm } from '@/components/auth/sign-in-form';

export default function LoginPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}