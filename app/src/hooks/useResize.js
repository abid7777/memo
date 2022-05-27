import { useState, useEffect } from 'react';

export default function useResize() {
  const [dim, setDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobileDevice: window.innerWidth <= 768,
  });
  const resizeHandler = () => setDim({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobileDevice: window.innerWidth <= 768,
  });

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return dim;
}
