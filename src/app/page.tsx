'use client';

import { OnboardingScreen } from '@/components/OnboardingScreen';
import { useState } from 'react';

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUp = () => {
    setShowSignUp(true);
    console.log('Sign up clicked');
    // Aquí puedes agregar la lógica para ir a la página de registro
  };

  const handleSignIn = () => {
    setShowSignIn(true);
    console.log('Sign in clicked');
    // Aquí puedes agregar la lógica para ir a la página de login
  };

  return (
    <OnboardingScreen onSignUp={handleSignUp} onSignIn={handleSignIn} />
  );
}
