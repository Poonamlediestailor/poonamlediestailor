import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Autoplay
  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 5000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section
      id="reviews"
      className="py-16 md:py-20"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="container">
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">
            {t.reviews.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
            {t.reviews.title1}
            <em className="italic">{t.reviews.titleEm}</em>
            {t.reviews.title2}
          </h2>
          <div className="gold-rule my-5 max-w-[100px]" />
          <p className="text-foreground/75 leading-relaxed text-sm md:text-base max-w-xl">
            {t.reviews.desc}
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {t.reviews.items.map((r, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="h-full bg-background border border-border/60 p-6 md:p-7 shadow-[var(--shadow-soft)] flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <Quote
                      className="w-6 h-6 text-[hsl(var(--gold))] opacity-40"
                      strokeWidth={1.25}
                    />
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-sm md:text-[15px] italic flex-1">
                    “{r.quote}”
                  </p>
                  <div className="pt-3 border-t border-border/60">
                    <p className="font-display text-lg text-burgundy leading-tight">
                      {r.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                      {r.role}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 lg:-left-12 border-[hsl(var(--gold))]/40 text-burgundy hover:bg-[hsl(var(--gold))]/10" />
            <CarouselNext className="-right-4 lg:-right-12 border-[hsl(var(--gold))]/40 text-burgundy hover:bg-[hsl(var(--gold))]/10" />
          </div>
        </Carousel>

        {/* Dots */}
        {count > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[hsl(var(--burgundy))]"
                    : "w-1.5 bg-[hsl(var(--burgundy))]/25 hover:bg-[hsl(var(--burgundy))]/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
