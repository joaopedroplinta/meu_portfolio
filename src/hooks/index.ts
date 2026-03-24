import { useState, useEffect, useRef, useCallback } from "react";

export function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const state = useRef({ wordIndex: 0, isDeleting: false, displayed: "" });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { wordIndex, isDeleting } = state.current;
      const current = words[wordIndex % words.length];

      if (!isDeleting) {
        const next = current.slice(0, state.current.displayed.length + 1);
        state.current.displayed = next;
        setDisplayed(next);

        if (next.length === current.length) {
          timeout = setTimeout(() => {
            state.current.isDeleting = true;
            tick();
          }, pauseMs);
          return;
        }
      } else {
        const next = current.slice(0, state.current.displayed.length - 1);
        state.current.displayed = next;
        setDisplayed(next);

        if (next.length === 0) {
          state.current.isDeleting = false;
          state.current.wordIndex += 1;
        }
      }

      timeout = setTimeout(tick, state.current.isDeleting ? deletingSpeed : typingSpeed);
    };

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayed;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return progress;
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);
  return scrolled;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}