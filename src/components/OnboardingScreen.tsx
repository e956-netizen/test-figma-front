'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CarouselDots } from './CarouselDots';

type OnboardingScreenProps = {
  signUpHref?: string;
  onSignUp?: () => void;
  onSignIn?: () => void;
};

export function OnboardingScreen({ signUpHref, onSignUp, onSignIn }: OnboardingScreenProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 3;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slideTexts = [
    {
      title: '¡Paga rápido y fácil desde tu app!',
      description: 'Controla tus gastos, paga en segundos y sin sorpresas.',
    },
    {
      title: '¡Paga rápido y fácil desde tu app!',
      description: 'Controla tus gastos, paga en segundos y sin sorpresas.',
    },
    {
      title: '¡Paga rápido y fácil desde tu app!',
      description: 'Controla tus gastos, paga en segundos y sin sorpresas.',
    },
  ];

  const slide = slideTexts[currentSlide];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#093A54] flex flex-col">
      <section className="h-[50vh] w-full overflow-hidden relative">
        <img
          src="/hero.avif"
          alt="Hero onboarding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white px-3 py-2 rounded-full shadow-md"
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#093A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white px-3 py-2 rounded-full shadow-md"
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#093A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      <section className="px-6 py-5">
        <CarouselDots totalSlides={totalSlides} currentSlide={currentSlide} />

        <div className="text-center mt-5 mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">{slide.title}</h1>
          <p className="text-sm font-normal mt-2">{slide.description}</p>
        </div>

        <div className="flex flex-col gap-3 items-center">
          {signUpHref ? (
            <button
              onClick={() => router.push(signUpHref)}
              className="w-full max-w-[500px] py-3 rounded-full bg-[#1480DB] text-[#ffffff] font-semibold text-base transition-all duration-200 hover:bg-[#0f6fbe] hover:shadow-lg"
            >
              ¡Crea tu cuenta!
            </button>
          ) : (
            <button
              onClick={onSignUp}
              className="w-full max-w-[500px] py-3 rounded-full bg-[#1480DB] text-[#ffffff] font-semibold text-base transition-all duration-200 hover:bg-[#0f6fbe] hover:shadow-lg"
            >
              ¡Crea tu cuenta!
            </button>
          )}
          <button
            onClick={onSignIn}
            className="w-full max-w-[500px] py-3 rounded-full border-2 border-[#1480DB] text-[#1480DB] font-semibold text-base bg-white transition-all duration-200 hover:bg-[#eaf4ff] hover:border-[#0f6fbe] hover:text-[#0f6fbe]"
          >
            Inicia sesión
          </button>
          <button
            onClick={() => console.log('Forgot password clicked')}
            className="w-full max-w-[500px] py-2 text-[#1480DB] font-normal text-sm transition-all duration-200 hover:text-[#0f6fbe] hover:underline"
          >
            Olvidé mi contraseña
          </button>
        </div>
      </section>
    </main>
  );
}

