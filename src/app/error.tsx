'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: 24 }}>
      <h2>Algo salió mal</h2>
      <button onClick={() => reset()}>Reintentar</button>
    </div>
  );
}