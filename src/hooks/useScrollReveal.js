import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Automatically attaches an IntersectionObserver to observe all elements
 * with the 'reveal' class and toggles 'revealed' when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const updateObserved = () => {
      const revealElements = document.querySelectorAll('.reveal:not(.revealed)');
      revealElements.forEach((el) => observer.observe(el));
    };

    updateObserved();

    const mutationObserver = new MutationObserver(updateObserved);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

export default useScrollReveal;
