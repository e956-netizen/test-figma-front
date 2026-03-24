# Onboarding Screen - Guía de Personalización

## 📋 Descripción General

La pantalla de onboarding implementada es una pantalla de bienvenida móvil con:
- 📸 Imagen hero principal
- 🔄 Carrusel de slides con indicadores de progreso
- 🎯 Títulos y descripciones personalizables
- 🔘 Botones de acción (Crear Cuenta / Iniciar Sesión)
- 📱 Diseño responsive mobile-first

## 🎨 Componentes Utilizados

### 1. **OnboardingScreen** (`src/components/OnboardingScreen.tsx`)
Componente principal que contiene toda la lógica del onboarding.

**Props:**
```typescript
{
  onSignUp?: () => void;      // Callback cuando se hace click en "Crear Cuenta"
  onSignIn?: () => void;      // Callback cuando se hace click en "Iniciar Sesión"
}
```

### 2. **CarouselDots** (`src/components/CarouselDots.tsx`)
Indicador visual de progreso del carrusel.

**Props:**
```typescript
{
  totalSlides: number;        // Total de slides
  currentSlide: number;       // Slide actual (0-indexed)
}
```

## ✏️ Personalización

### Cambiar Contenido de los Slides

Edita el array `slides` en `src/components/OnboardingScreen.tsx`:

```typescript
const slides: OnboardingSlide[] = [
  {
    id: 1,
    title: 'Tu Título Aquí',
    description: 'Tu descripción aquí',
    image: 'https://tu-imagen-aqui.com/imagen.jpg',
    brandLogo: '🎯', // O cualquier emoji o react element
  },
  // Más slides...
];
```

### Cambiar Colores

**Paleta Actual:**
- Primario: Azul (`blue-600`)
- Secundario: Verde (`green-500`)
- Fondo: Blanco

**Para personalizar:**

1. **Botón Primario (Crear Cuenta)**
   - Edita las clases en el botón:
   ```jsx
   className="bg-gradient-to-r from-blue-600 to-blue-700 ..."
   ```

2. **Botón Secundario (Iniciar Sesión)**
   - Edita el border y text:
   ```jsx
   className="border-2 border-green-500 text-green-600 ..."
   ```

3. **Indicadores del Carrusel**
   - Edita en `CarouselDots.tsx`:
   ```jsx
   bg-blue-600      // Slide activo
   bg-gray-300      // Slides inactivos
   ```

### Cambiar Imágenes

**Opciones:**

1. **URLs públicas** (actual)
   ```typescript
   image: 'https://images.unsplash.com/photo-...'
   ```

2. **Imágenes locales**
   ```typescript
   image: '/images/onboarding-1.jpg'
   // Coloca en public/images/
   ```

3. **Con Next.js Image Component** (recomendado)
   ```tsx
   import Image from 'next/image';
   
   <Image
     src={slide.image}
     alt="Onboarding"
     fill
     className="object-cover"
   />
   ```

## 🔧 Integración con Rutas

### Crear páginas de Sign Up y Sign In

**pages/signup/page.tsx:**
```typescript
export default function SignUpPage() {
  return (
    <div>
      {/* Tu formulario de registro */}
    </div>
  );
}
```

**Actualizar callbacks en page.tsx:**
```typescript
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleSignIn = () => {
    router.push('/signin');
  };

  return <OnboardingScreen onSignUp={handleSignUp} onSignIn={handleSignIn} />;
}
```

## 🎬 Animaciones

Animaciones incluidas:
- Transición suave entre slides (500ms)
- Hover effects en botones
- Indicadores del carrusel animados
- Escala activa en botones (click)

**Para ajustar timing:**
En `OnboardingScreen.tsx`:
```jsx
className="transition-all duration-500"  // Cambia duration-500
```

## 📱 Responsividad

El diseño es completamente responsive:
- **Mobile (< 640px)**: Layout vertical optimizado
- **Tablet (640px - 1024px)**: Ajustes automáticos
- **Desktop (> 1024px)**: Mantiene el layout vertical

Para cambiar el comportamiento en desktop, puedes usar media queries de Tailwind:
```jsx
className="h-full md:h-screen lg:h-screen-xl"
```

## 🛠️ Ejemplos de Uso

### Ejemplo 1: Tres slides de onboarding

```typescript
const slides = [
  {
    id: 1,
    title: 'Bienvenido',
    description: 'Descubre nuevas posibilidades',
    image: '/images/slide1.jpg',
    brandLogo: '🚀',
  },
  {
    id: 2,
    title: 'Conecta',
    description: 'Con miles de usuarios',
    image: '/images/slide2.jpg',
    brandLogo: '🌟',
  },
  {
    id: 3,
    title: 'Disfruta',
    description: 'La mejor experiencia',
    image: '/images/slide3.jpg',
    brandLogo: '💡',
  },
];
```

### Ejemplo 2: Con formulario inline

Puedes agregar un modal o formulario que aparezca cuando se hace click en los botones:

```typescript
const [showModal, setShowModal] = useState(false);

const handleSignUp = () => {
  setShowModal(true);
};

return (
  <>
    <OnboardingScreen onSignUp={handleSignUp} />
    {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
  </>
);
```

## 📊 Accesibilidad

El componente incluye:
- ✅ aria-labels en botones
- ✅ Contraste de colores suficiente
- ✅ Navegación por teclado (próximas mejoras)

Para mejorar:
```jsx
<button
  onClick={handleNext}
  aria-label="Siguiente slide"
  aria-current="page"
/>
```

## 🚀 Próximos Pasos

1. **Reemplazar imágenes** con tu contenido
2. **Ajustar colores** según tu brand
3. **Modificar textos** del onboarding
4. **Conectar con APIs** de autenticación
5. **Agregar validación** en formularios

## 📝 Notas

- Si usas imágenes locales, asegúrate de que estén en `public/`
- Las imágenes externas pueden tener latencia de carga
- Considera usar `next/image` para optimización
- Los slides se resetean al recargar la página (sin persistencia)

¿Necesitas ayuda con alguna customización específica? 🎨
