import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref: React.RefObject<Element>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current; // Captura o valor de ref.current
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ajuste o threshold conforme necessário
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref]); // Recomendado: Observe `ref` se o ref puder mudar

  return isVisible;
};

export default useIntersectionObserver;
