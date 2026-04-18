import { useLanguage } from "@/i18n/LanguageContext";

const PHONE = "919653692414";

const WhatsAppFab = () => {
  const { t, lang } = useLanguage();
  const greeting =
    lang === "hi"
      ? "नमस्ते! मुझे Poonam Ladies Tailor & Stationary के बारे में जानकारी चाहिए।"
      : lang === "mr"
        ? "नमस्कार! मला Poonam Ladies Tailor & Stationary बद्दल माहिती हवी आहे."
        : "Hello! I'd like to know more about Poonam Ladies Tailor & Stationary.";

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(greeting)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.wa.tooltip}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95 transition-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.31c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.62-1.51-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29.98 2.66 1.12 2.84c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.88 0-10.66 4.78-10.66 10.66 0 1.88.49 3.71 1.43 5.33L5.33 26.67l5.5-1.43a10.62 10.62 0 0 0 5.18 1.34h.01c5.88 0 10.66-4.78 10.66-10.66s-4.78-10.66-10.66-10.66zm0 19.55h-.01a8.86 8.86 0 0 1-4.51-1.24l-.32-.19-3.27.85.87-3.18-.21-.33a8.85 8.85 0 0 1-1.36-4.71c0-4.89 3.99-8.87 8.88-8.87s8.87 3.98 8.88 8.87c0 4.89-3.99 8.88-8.88 8.88z" />
        </svg>
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        {t.wa.tooltip}
      </span>
    </a>
  );
};

export default WhatsAppFab;
