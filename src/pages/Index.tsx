import { useState } from "react";
import heroImg from "@/assets/hero-tailor.jpg";
import trendBlouse1 from "@/assets/trend-blouse-1.jpg";
import trendBlouse2 from "@/assets/trend-blouse-2.jpg";
import trendBlouse3 from "@/assets/trend-blouse-3.jpg";
import trendBlouse4 from "@/assets/trend-blouse-4.jpg";
import trendKurti1 from "@/assets/trend-kurti-1.jpg";
import trendKurti2 from "@/assets/trend-kurti-2.jpg";
import trendKurti3 from "@/assets/trend-kurti-3.jpg";
import stationeryNotebooks from "@/assets/stationery-notebooks.jpg";
import stationeryPens from "@/assets/stationery-pens.jpg";
import stationeryPencils from "@/assets/stationery-pencils.jpg";
import stationeryToysKids from "@/assets/stationery-toys-kids.jpg";
import cosmeticsLipsticks from "@/assets/cosmetics-lipsticks.jpg";
import cosmeticsSkincare from "@/assets/cosmetics-skincare.jpg";
import cosmeticsMakeup from "@/assets/cosmetics-makeup.jpg";
import cosmeticsBridal from "@/assets/cosmetics-bridal.jpg";
import shopOwners from "@/assets/shop-owners.jpg";
import { Scissors, Ruler, Sparkles, Phone, MapPin, Clock, Instagram, Mail, Wand2, BookOpen, Pencil, Palette, ToyBrick, Heart, Droplets, Brush, Gem } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import WhatsAppFab from "@/components/WhatsAppFab";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";

const galleryImages = [
  { src: trendBlouse1, alt: "AI-designed magenta pink silk blouse with golden zari and gota patti embroidery" },
  { src: trendBlouse2, alt: "AI-designed maroon velvet bridal blouse with pearl and zardozi work" },
  { src: trendBlouse3, alt: "AI-designed emerald green blouse with golden floral sequin embroidery" },
  { src: trendBlouse4, alt: "AI-designed peach blouse with dabka and stone embroidery on princess cut" },
];

const trendingKurtiImages = [trendKurti1, trendKurti2, trendKurti3];

const serviceIcons = [Sparkles, Scissors, Ruler, Sparkles];

const Index = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number }>({ images: [], index: -1 });

  const openLightbox = (images: LightboxImage[], index: number) =>
    setLightbox({ images, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, index: -1 }));
  const setLightboxIndex = (index: number) => setLightbox((s) => ({ ...s, index }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error(t.contact.toastError);
      return;
    }
    toast.success(t.contact.toastOk);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="container flex items-center justify-between py-6">
          <a href="#home" className="flex items-center gap-2 text-primary-foreground">
            <span className="font-display text-xl md:text-2xl tracking-wide">Poonam</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70">
              {t.nav.brand}
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/85">
            <a href="#services" className="hover:text-primary-foreground transition-colors">{t.nav.services}</a>
            <a href="#stationery" className="hover:text-primary-foreground transition-colors">{t.nav.stationery}</a>
            <a href="#cosmetics" className="hover:text-primary-foreground transition-colors">{t.nav.cosmetics}</a>
            <a href="#trending" className="hover:text-primary-foreground transition-colors">{t.nav.trending}</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle variant="light" />
            <a
              href="#contact"
              className="text-xs md:text-sm uppercase tracking-[0.2em] border border-primary-foreground/40 text-primary-foreground px-3 py-2 md:px-4 md:py-2.5 hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {t.nav.bookFitting}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Elegant lady wearing a custom-tailored burgundy and gold lehenga at Poonam Ladies Tailor & Stationary"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          width={1600}
          height={1800}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-transparent to-burgundy-deep/70" />

        <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mb-5">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] text-balance">
              {t.hero.title1}<br />
              <span className="italic text-[hsl(var(--gold-soft))]">{t.hero.title2}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-primary-foreground/85 not-italic tracking-wide">{t.hero.title3}</span>
            </h1>
            <div className="gold-rule my-6 max-w-xs" />
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-[hsl(var(--gold))] text-[hsl(var(--burgundy-deep))] text-sm uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-[hsl(var(--gold-soft))] transition-colors"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#services"
                className="border border-primary-foreground/50 text-primary-foreground text-sm uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-primary-foreground/10 transition-colors"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section id="about" className="py-16 md:py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="container grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img
              src={trendBlouse1}
              alt="Designer magenta pink blouse with golden zari work — Poonam Ladies Tailor & Stationary"
              className="w-full h-auto shadow-[var(--shadow-elegant)] object-cover aspect-[4/5]"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
          <div className="md:col-span-7 md:pl-8 order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">{t.about.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.about.title1}<em className="italic">{t.about.titleEm}</em>{t.about.title2}
            </h2>
            <div className="gold-rule my-6 max-w-[100px]" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg max-w-xl">
              {t.about.desc}
            </p>
            <dl className="grid grid-cols-3 gap-6 mt-10 max-w-md">
              {t.about.stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl text-burgundy">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Owners */}
      <section id="owners" className="py-16 md:py-20 bg-background">
        <div className="container grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={shopOwners}
                alt="Poonam ji and her husband — owners of Poonam Ladies Tailor & Stationary"
                className="w-full h-auto shadow-[var(--shadow-elegant)] object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--gold))] text-[hsl(var(--burgundy-deep))] px-4 py-2.5 text-[10px] uppercase tracking-[0.25em] hidden sm:block">
                {t.owners.badge}
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-4">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t.owners.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.owners.title1}<em className="italic">{t.owners.titleEm}</em>{t.owners.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-foreground/75 leading-relaxed text-base max-w-xl">
              {t.owners.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t.services.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.services.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {t.services.items.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <article
                  key={s.title}
                  className="group bg-background p-6 md:p-7 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
                >
                  <Icon className="w-6 h-6 text-gold mb-5" strokeWidth={1.25} />
                  <h3 className="font-display text-xl md:text-2xl text-burgundy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 h-px w-8 bg-[hsl(var(--gold))] group-hover:w-16 transition-all duration-500" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blouse Designs — AI generated lookbook */}
      <section id="work" className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4 flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t.work.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.work.title1}<em className="italic">{t.work.titleEm}</em>{t.work.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-foreground/70 leading-relaxed max-w-xl text-sm md:text-base">
              {t.work.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <button
                type="button"
                key={i}
                onClick={() => openLightbox(galleryImages, i)}
                aria-label={`View ${img.alt}`}
                className="group relative overflow-hidden bg-muted aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stationery & Toys (combined) */}
      <section id="stationery" className="py-16 md:py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t.stationery.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.stationery.title1}<em className="italic">{t.stationery.titleEm}</em>{t.stationery.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base max-w-xl">
              {t.stationery.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {(() => {
              const products = [
                { src: stationeryNotebooks, icon: BookOpen },
                { src: stationeryPens, icon: Pencil },
                { src: stationeryPencils, icon: Palette },
                { src: stationeryToysKids, icon: ToyBrick },
              ];
              const stationeryLightbox: LightboxImage[] = products.map((p, i) => ({
                src: p.src,
                alt: `${t.stationery.items[i].title} — ${t.stationery.items[i].desc}`,
              }));
              return products.map((p, i) => {
                const item = t.stationery.items[i];
                return (
                  <article key={item.title} className="group">
                    <button
                      type="button"
                      onClick={() => openLightbox(stationeryLightbox, i)}
                      aria-label={`View ${item.title}`}
                      className="relative overflow-hidden bg-[hsl(var(--cream))] aspect-square w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]"
                    >
                      <img
                        src={p.src}
                        alt={`${item.title} — ${item.desc}`}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </button>
                    <div className="pt-4">
                      <p.icon className="w-5 h-5 text-gold mb-1.5" strokeWidth={1.25} />
                      <h3 className="font-display text-lg md:text-xl text-burgundy leading-tight">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </article>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Cosmetics & Beauty */}
      <section id="cosmetics" className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t.cosmetics.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.cosmetics.title1}<em className="italic">{t.cosmetics.titleEm}</em>{t.cosmetics.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base max-w-xl">
              {t.cosmetics.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {(() => {
              const products = [
                { src: cosmeticsLipsticks, icon: Heart },
                { src: cosmeticsSkincare, icon: Droplets },
                { src: cosmeticsMakeup, icon: Brush },
                { src: cosmeticsBridal, icon: Gem },
              ];
              const cosmeticsLightbox: LightboxImage[] = products.map((p, i) => ({
                src: p.src,
                alt: `${t.cosmetics.items[i].title} — ${t.cosmetics.items[i].desc}`,
              }));
              return products.map((p, i) => {
                const item = t.cosmetics.items[i];
                return (
                  <article key={item.title} className="group">
                    <button
                      type="button"
                      onClick={() => openLightbox(cosmeticsLightbox, i)}
                      aria-label={`View ${item.title}`}
                      className="relative overflow-hidden bg-[hsl(var(--cream))] aspect-square w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]"
                    >
                      <img
                        src={p.src}
                        alt={`${item.title} — ${item.desc}`}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </button>
                    <div className="pt-4">
                      <p.icon className="w-5 h-5 text-gold mb-1.5" strokeWidth={1.25} />
                      <h3 className="font-display text-lg md:text-xl text-burgundy leading-tight">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </article>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Trending Designs — AI generated lookbook */}
      <section id="trending" className="py-16 md:py-20 bg-burgundy-deep text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, hsl(var(--gold) / 0.25), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--burgundy) / 0.5), transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mb-4 flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t.trending.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              {t.trending.title1}<em className="italic text-[hsl(var(--gold-soft))]">{t.trending.titleEm}</em>{t.trending.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-primary-foreground/75 max-w-xl leading-relaxed text-sm md:text-base">
              {t.trending.desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {(() => {
              const kurtiLightbox: LightboxImage[] = t.trending.items.map((d, i) => ({
                src: trendingKurtiImages[i],
                alt: `${d.title}: ${d.tag}`,
              }));
              return t.trending.items.map((d, i) => (
                <article key={d.title} className="group">
                  <button
                    type="button"
                    onClick={() => openLightbox(kurtiLightbox, i)}
                    aria-label={`View ${d.title}`}
                    className="relative overflow-hidden bg-[hsl(var(--cream))] aspect-[4/5] w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]"
                  >
                    <img
                      src={trendingKurtiImages[i]}
                      alt={`${d.title}: ${d.tag}`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 bg-[hsl(var(--burgundy-deep))]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--gold-soft))] px-2.5 py-1">
                      {t.trending.aiBadge}
                    </div>
                  </button>
                  <div className="pt-5">
                    <h3 className="font-display text-2xl text-primary-foreground">{d.title}</h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mt-1.5">{d.tag}</p>
                    <a
                      href="#contact"
                      className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[hsl(var(--gold-soft))] border-b border-[hsl(var(--gold))] pb-0.5 hover:text-primary-foreground transition-colors"
                    >
                      {t.trending.stitch}
                    </a>
                  </div>
                </article>
              ));
            })()}
          </div>

          <p className="text-xs text-primary-foreground/45 mt-10 max-w-xl">
            {t.trending.footnote}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-cream">
        <div className="container grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t.contact.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy leading-[1.05] text-balance">
              {t.contact.title1}<em className="italic">{t.contact.titleEm}</em>{t.contact.title2}
            </h2>
            <div className="gold-rule my-5 max-w-[100px]" />
            <p className="text-foreground/75 leading-relaxed max-w-md mb-8 text-sm md:text-base">
              {t.contact.desc}
            </p>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">{t.contact.visit}</p>
                  <p className="text-muted-foreground whitespace-pre-line">{t.contact.address}</p>
                  <a
                    href="https://maps.app.goo.gl/bwYrVjujFsYWxrus6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs uppercase tracking-[0.2em] text-burgundy border-b border-[hsl(var(--gold))] pb-0.5 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {t.contact.directions}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">{t.contact.callWa}</p>
                  <a href="tel:+919653692414" className="text-muted-foreground hover:text-burgundy transition-colors block">
                    +91 96536 92414
                  </a>
                  <a
                    href="https://wa.me/919653692414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs uppercase tracking-[0.2em] text-burgundy border-b border-[hsl(var(--gold))] pb-0.5 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {t.contact.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">{t.contact.hours}</p>
                  <p className="text-muted-foreground">{t.contact.hoursVal}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Poonam Ladies Tailor & Stationary location on Google Maps"
                src="https://www.google.com/maps?q=Poonam+ladies+tailor+%26+stationary,+Omkar+Nagar,+Santosh+Nagar,+Diva,+Thane,+Maharashtra+400612&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 shadow-[var(--shadow-soft)] h-fit">
            <h3 className="font-display text-2xl text-burgundy mb-6">{t.contact.formTitle}</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="name">{t.contact.name}</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[hsl(var(--gold))] outline-none py-2 text-foreground"
                  placeholder={t.contact.namePh}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="phone">{t.contact.phone}</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[hsl(var(--gold))] outline-none py-2 text-foreground"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">{t.contact.message}</label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[hsl(var(--gold))] outline-none py-2 text-foreground resize-none"
                  placeholder={t.contact.messagePh}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-burgundy text-primary-foreground text-sm uppercase tracking-[0.2em] py-3.5 hover:bg-[hsl(var(--burgundy-deep))] transition-colors"
              >
                {t.contact.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy-deep text-primary-foreground/80 py-12">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-primary-foreground">Poonam {t.nav.brand}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mt-1">{t.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" aria-label="Instagram" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Instagram className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="mailto:hello@poonamtailor.com" aria-label="Email" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Mail className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="tel:+919653692414" aria-label="Phone" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Phone className="w-5 h-5" strokeWidth={1.5} /></a>
          </div>
          <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
};

export default Index;
