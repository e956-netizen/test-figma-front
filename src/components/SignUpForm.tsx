'use client';

import { useState } from 'react';

type SignUpFormProps = {
  onBack: () => void;
};

export function SignUpForm({ onBack }: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateName = (value: string) => {
    if (!value.trim()) return 'El nombre es obligatorio.';
    if (/\d/.test(value)) return 'El nombre no puede contener números.';
    return '';
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return 'El correo es obligatorio.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Ingresa un correo electrónico válido.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', { name, email });
    alert('Cuenta creada exitosamente!');
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#093A54] flex flex-col">
      <section className="px-6 py-5 flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Acá comienza tu registro</h1>
          <p className="text-sm font-normal mt-2">
            Ingresa tu nombre y correo electrónico para crear tu cuenta y empezar a disfrutar de nuestros servicios de pago rápido y fácil.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-[500px] mx-auto py-3 px-4 rounded-full border-2 border-[#1480DB] bg-white text-[#093A54] font-normal text-base focus:outline-none focus:border-[#0f6fbe] focus:ring-0"
              placeholder="Ingresa tu nombre"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-[500px] mx-auto py-3 px-4 rounded-full border-2 border-[#1480DB] bg-white text-[#093A54] font-normal text-base focus:outline-none focus:border-[#0f6fbe] focus:ring-0"
              placeholder="Ingresa tu correo"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full max-w-[500px] mx-auto py-3 rounded-full bg-[#1480DB] text-[#ffffff] font-semibold text-base transition-all duration-200 hover:bg-[#0f6fbe] hover:shadow-lg mt-4"
          >
            Crear cuenta
          </button>
        </form>

        <button
          onClick={onBack}
          className="w-full max-w-[500px] mx-auto py-2 text-[#1480DB] font-normal text-sm transition-all duration-200 hover:text-[#0f6fbe] hover:underline mt-4"
        >
          Volver
        </button>
      </section>
    </main>
  );
}