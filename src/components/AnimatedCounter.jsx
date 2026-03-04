import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * AnimatedCounter — Counts up from 0 to a target number on scroll-reveal.
 * Used for stats sections.
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
