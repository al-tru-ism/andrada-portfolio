import { useEffect, useState } from "react";

/**
 * AnimatedText — Reveals text character by character with a blinking cursor,
 * inspired by terminal/CLI aesthetics. Perfect for the networking theme.
 */
export default function AnimatedText({
  text,
  className = "",
  speed = 40,
  delay = 0,
  tag: Tag = "span",
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <Tag className={className}>
      {displayed}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-[#00e5ff] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
      )}
    </Tag>
  );
}
