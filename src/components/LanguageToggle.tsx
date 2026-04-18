import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Languages } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "mr", label: "मराठी", short: "मरा" },
];

interface Props {
  variant?: "light" | "dark";
}

const LanguageToggle = ({ variant = "light" }: Props) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;
  const isLight = variant === "light";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] border px-2.5 py-1.5 md:px-3 md:py-2 transition-colors ${
          isLight
            ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            : "border-border text-foreground hover:bg-foreground/5"
        }`}
      >
        <Languages className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span>{current.short}</span>
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 min-w-[140px] bg-background border border-border shadow-[var(--shadow-elegant)] z-50"
          role="menu"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[hsl(var(--cream))] transition-colors ${
                lang === l.code ? "text-burgundy font-medium" : "text-foreground"
              }`}
              role="menuitem"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
