import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const Lightbox = ({ images, index, onClose, onIndexChange }: LightboxProps) => {
  const open = index >= 0 && index < images.length;

  const next = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const prev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, next, prev]);

  if (!open) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-burgundy-deep/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in-0 duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
    >
      {/* Close */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 flex items-center justify-center text-primary-foreground hover:text-[hsl(var(--gold-soft))] border border-primary-foreground/30 hover:border-[hsl(var(--gold))] transition-colors"
      >
        <X className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-primary-foreground hover:text-[hsl(var(--gold-soft))] border border-primary-foreground/30 hover:border-[hsl(var(--gold))] transition-colors bg-burgundy-deep/40"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
        </button>
      )}

      {/* Image */}
      <figure
        className="relative max-w-[92vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-[92vw] max-h-[78vh] object-contain shadow-[var(--shadow-elegant)]"
        />
        <figcaption className="mt-4 text-center text-xs md:text-sm text-primary-foreground/80 max-w-2xl px-4">
          {img.alt}
          {images.length > 1 && (
            <span className="block mt-1 uppercase tracking-[0.2em] text-[hsl(var(--gold-soft))] text-[10px]">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-primary-foreground hover:text-[hsl(var(--gold-soft))] border border-primary-foreground/30 hover:border-[hsl(var(--gold))] transition-colors bg-burgundy-deep/40"
        >
          <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};

export default Lightbox;
