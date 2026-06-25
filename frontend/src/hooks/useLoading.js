import { useCallback, useState } from 'react';

export function useLoading(initial = false) {
  const [isLoading, setIsLoading] = useState(initial);

  const withLoading = useCallback(async (callback) => {
    setIsLoading(true);
    try {
      return await callback();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, setIsLoading, withLoading };
}
