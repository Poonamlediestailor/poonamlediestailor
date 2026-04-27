import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;       // numeric portion as string (e.g. "5000", "15", "100")
  suffix?: string;     // e.g. "+", "%"
  label: string;
  duration?: number;   // ms
}

const formatNumber = (n: number) => n.toLocaleString("en-IN");

const AnimatedStat = ({ value, suffix = "", label, duration = 1600 }: AnimatedStatProps) => {
  const target = parseInt(value, 10) || 0;
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(Math.round(eased * target));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref}>
      <dt className="font-display text-3xl md:text-4xl text-burgundy tabular-nums">
        {formatNumber(display)}
        <span className="text-[hsl(var(--gold))]">{suffix}</span>
      </dt>
      <dd className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{label}</dd>
    </div>
  );
};

export default AnimatedStat;
