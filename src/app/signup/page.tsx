'use client';

import { useRouter } from 'next/navigation';
import { SignUpForm } from '@/components/SignUpForm';

export default function SignupPage() {
  const router = useRouter();

  return (
    <SignUpForm onBack={() => router.push('/')} />
  );
}
