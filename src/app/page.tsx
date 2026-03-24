'use client';

import { OnboardingScreen } from '@/components/OnboardingScreen';
import { useState } from 'react';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(true);
    console.log('Sign in clicked');
    // Aquí puedes agregar la lógica para ir a la página de login
  };

  return (
    <OnboardingScreen signUpHref="/signup" onSignIn={handleSignIn} />
  );
}
