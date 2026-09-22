import { useEffect, useState } from "react";

export function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const sections = [
      ...document.querySelectorAll<HTMLElement>("main > section[id]"),
    ];
    let frame = 0;
    const update = () => {
      const visible = sections.filter(
        (section) => section.getBoundingClientRect().top <= 160,
      );
      setActive(visible[visible.length - 1]?.id ?? "hero");
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return active;
}
