import { useState, useEffect, useCallback } from 'react';

export const useWidnow = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowWidth;
};
