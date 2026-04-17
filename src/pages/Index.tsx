import { useState } from "react";
import heroImg from "@/assets/hero-tailor.jpg";
import craftImg from "@/assets/craft-detail.jpg";
import flatlayImg from "@/assets/services-flatlay.jpg";
import trendBlouse1 from "@/assets/trend-blouse-1.jpg";
import trendBlouse2 from "@/assets/trend-blouse-2.jpg";
import trendBlouse3 from "@/assets/trend-blouse-3.jpg";
import trendBlouse4 from "@/assets/trend-blouse-4.jpg";
import trendKurti1 from "@/assets/trend-kurti-1.jpg";
import trendKurti2 from "@/assets/trend-kurti-2.jpg";
import trendKurti3 from "@/assets/trend-kurti-3.jpg";
import stationeryToys from "@/assets/stationery-toys.jpg";
import stationeryNotebooks from "@/assets/stationery-notebooks.jpg";
import stationeryPens from "@/assets/stationery-pens.jpg";
import stationeryPencils from "@/assets/stationery-pencils.jpg";
import stationeryToysKids from "@/assets/stationery-toys-kids.jpg";
import shopOwners from "@/assets/shop-owners.jpg";
import { Scissors, Ruler, Sparkles, Phone, MapPin, Clock, Instagram, Mail, Wand2, BookOpen, Pencil, Palette, ToyBrick } from "lucide-react";
import { toast } from "sonner";

const galleryImages = [
  { src: trendBlouse1, alt: "AI-designed magenta pink silk blouse with golden zari and gota patti embroidery" },
  { src: trendBlouse2, alt: "AI-designed maroon velvet bridal blouse with pearl and zardozi work" },
  { src: trendBlouse3, alt: "AI-designed emerald green blouse with golden floral sequin embroidery" },
  { src: trendBlouse4, alt: "AI-designed peach blouse with dabka and stone embroidery on princess cut" },
];

const trendingKurtis = [
  { src: trendKurti1, title: "Royal Blue Anarkali", tag: "Gota patti yoke · Flared" },
  { src: trendKurti2, title: "Mustard Block Print", tag: "Tassel neck · Palazzo set" },
  { src: trendKurti3, title: "Dusty Pink A-line", tag: "Mandarin collar · Pearl work" },
];

const services = [
  {
    icon: Sparkles,
    title: "Bridal & Festive",
    desc: "Lehengas, bridal blouses and reception wear crafted with hand embroidery and fine finishing.",
  },
  {
    icon: Scissors,
    title: "Blouse Designing",
    desc: "Designer blouses, princess cut, boat neck, backless and all latest patterns — perfect fit guaranteed.",
  },
  {
    icon: Ruler,
    title: "Salwar & Kurti",
    desc: "Anarkali, straight cut, palazzo sets and everyday kurtis stitched to your exact measurements.",
  },
  {
    icon: Sparkles,
    title: "Alterations",
    desc: "Precise alterations, resizing and fall-pico for sarees, dresses and ready-made garments.",
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll call you back shortly.");
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
              Ladies Tailor & Stationary
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/85">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#stationery" className="hover:text-primary-foreground transition-colors">Stationery</a>
            <a href="#trending" className="hover:text-primary-foreground transition-colors">Trending</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-xs md:text-sm uppercase tracking-[0.2em] border border-primary-foreground/40 text-primary-foreground px-3 py-2 md:px-4 md:py-2.5 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Book Fitting
          </a>
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
              Tailoring · Stationery · Toys
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] text-balance">
              Poonam<br />
              <span className="italic text-[hsl(var(--gold-soft))]">Ladies Tailor</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-primary-foreground/85 not-italic tracking-wide">& Stationary</span>
            </h1>
            <div className="gold-rule my-6 max-w-xs" />
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              Bespoke ladies stitching — bridal lehengas, designer blouses, salwar suits and kurtis. Plus a full
              stationery shop with notebooks, pens, pencils and toys for the little ones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-[hsl(var(--gold))] text-[hsl(var(--burgundy-deep))] text-sm uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-[hsl(var(--gold-soft))] transition-colors"
              >
                Book a Fitting
              </a>
              <a
                href="#services"
                className="border border-primary-foreground/50 text-primary-foreground text-sm uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-primary-foreground/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section id="about" className="py-24 md:py-32" style={{ background: "var(--gradient-warm)" }}>
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
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Our Atelier</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Where every stitch <em className="italic">tells</em> a story.
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg max-w-xl">
              For years, Poonam Ladies Tailor & Stationary has been the trusted neighbourhood shop — expert
              ladies stitching for women who value craftsmanship and a flawless fit, alongside a friendly
              stationery counter stocked with everything students and little kids need.
            </p>
            <dl className="grid grid-cols-3 gap-6 mt-10 max-w-md">
              {[
                { k: "15+", v: "Years of Craft" },
                { k: "5,000+", v: "Happy Clients" },
                { k: "100%", v: "Custom Fit" },
              ].map((s) => (
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
      <section id="owners" className="py-24 md:py-32 bg-background">
        <div className="container grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative">
              <img
                src={shopOwners}
                alt="Poonam ji and her husband — owners of Poonam Ladies Tailor & Stationary"
                className="w-full h-auto shadow-[var(--shadow-elegant)] object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--gold))] text-[hsl(var(--burgundy-deep))] px-5 py-3 text-xs uppercase tracking-[0.25em] hidden sm:block">
                The family behind it
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Meet the Owners</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Run with <em className="italic">love</em>, by our family.
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg max-w-xl">
              Poonam ji leads every stitch at the tailoring counter, while her husband looks after
              the stationery and toys side of the shop. Together, they've built a small neighbourhood
              shop that feels just like home — where customers are treated like family and every order,
              big or small, gets the same warm attention.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Services</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Tailoring, refined to your every measure.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-background p-8 md:p-10 hover:bg-[hsl(var(--cream))] transition-colors duration-500"
              >
                <s.icon className="w-7 h-7 text-gold mb-8" strokeWidth={1.25} />
                <h3 className="font-display text-2xl md:text-3xl text-burgundy mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-px w-8 bg-[hsl(var(--gold))] group-hover:w-16 transition-all duration-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / craft strip */}
      <section id="gallery" className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60vh] bg-burgundy-deep p-10 md:p-16 lg:p-20 flex flex-col justify-center text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mb-5">The Craft</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Hand-finished. <span className="italic text-[hsl(var(--gold-soft))]">Heart-given.</span>
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              From traditional zari work to contemporary cuts, we blend heritage techniques with modern silhouettes
              — so every piece feels uniquely yours.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-primary-foreground/85">
              {["Personal measurement & consultation", "Premium fabric guidance", "Hand-finished embroidery", "On-time delivery, always"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 bg-[hsl(var(--gold))]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[60vh] overflow-hidden">
            <img
              src={trendBlouse2}
              alt="Bridal maroon velvet designer blouse with pearl and zardozi work at Poonam Ladies Tailor & Stationary"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* Blouse Designs — AI generated lookbook */}
      <section id="work" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5 flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              Blouse Designs · AI Lookbook
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Designer <em className="italic">blouses</em>, stitched to your fit.
            </h2>
            <div className="gold-rule my-6 max-w-[120px]" />
            <p className="text-foreground/70 leading-relaxed max-w-xl">
              Pick a design you love — bridal, party-wear or everyday — and we'll tailor it for you in your
              chosen fabric and a flawless fit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {galleryImages.map((img, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden bg-muted ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Stationery & Toys */}
      <section id="stationery" className="py-24 md:py-32" style={{ background: "var(--gradient-warm)" }}>
        <div className="container grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Beyond Tailoring</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Stationery & toys, <em className="italic">all under one roof</em>.
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg max-w-xl">
              From school essentials to playful little gifts — we stock everything students and young children
              need, right next to the tailoring counter. One quick stop for the whole family.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
              {[
                { icon: BookOpen, title: "Notebooks & Files", desc: "Long, short, register, drawing books" },
                { icon: Pencil, title: "Pens & Pencils", desc: "Ball pens, gel pens, pencils, sharpeners" },
                { icon: Palette, title: "Art & Craft", desc: "Crayons, sketch pens, water colours" },
                { icon: ToyBrick, title: "Kids' Toys", desc: "Soft toys, blocks, cars & small games" },
              ].map((item) => (
                <div key={item.title} className="bg-background/70 backdrop-blur-sm border border-border p-5">
                  <item.icon className="w-6 h-6 text-gold mb-3" strokeWidth={1.25} />
                  <h3 className="font-display text-lg text-burgundy leading-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-8">
              Saree fall · Bidding · Astar · Dhaaga · Sui · Sewing material — all available
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="relative">
              <img
                src={stationeryToys}
                alt="Notebooks, pens, pencils, crayons and small toys for children at Poonam Ladies Tailor & Stationary"
                className="w-full h-auto shadow-[var(--shadow-elegant)] aspect-square object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute -bottom-4 -left-4 bg-burgundy text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.25em] hidden sm:block">
                For school & home
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stationery Products grid */}
      <section id="stationery-products" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Stationery Products</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Everything for <em className="italic">school</em> & little hands.
            </h2>
            <div className="gold-rule my-6 max-w-[120px]" />
            <p className="text-foreground/70 leading-relaxed max-w-xl">
              Notebooks, pens, pencils and toys — quality essentials, fair prices, available right at the counter.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: stationeryNotebooks, title: "Notebooks", desc: "Long, short, register & drawing books", icon: BookOpen },
              { src: stationeryPens, title: "Pens", desc: "Ball pens, gel pens & ink pens", icon: Pencil },
              { src: stationeryPencils, title: "Pencils", desc: "Pencils, erasers & sharpeners", icon: Palette },
              { src: stationeryToysKids, title: "Kids' Toys", desc: "Soft toys, blocks & little cars", icon: ToyBrick },
            ].map((p) => (
              <article key={p.title} className="group">
                <div className="relative overflow-hidden bg-[hsl(var(--cream))] aspect-square">
                  <img
                    src={p.src}
                    alt={`${p.title} for school and home — ${p.desc}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="pt-5">
                  <p.icon className="w-5 h-5 text-gold mb-2" strokeWidth={1.25} />
                  <h3 className="font-display text-xl md:text-2xl text-burgundy leading-tight">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Designs — AI generated lookbook */}
      <section id="trending" className="py-24 md:py-32 bg-burgundy-deep text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, hsl(var(--gold) / 0.25), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--burgundy) / 0.5), transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mb-5 flex items-center gap-2">
                <Wand2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                Trending Now · AI Lookbook
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                This season's <em className="italic text-[hsl(var(--gold-soft))]">favourites</em>.
              </h2>
              <div className="gold-rule my-6 max-w-[120px]" />
              <p className="text-primary-foreground/75 max-w-xl leading-relaxed">
                Browse the latest kurti silhouettes — pick a design you love and we'll stitch
                it for you in the fabric and fit of your choice.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {trendingKurtis.map((d) => (
              <article key={d.title} className="group">
                <div className="relative overflow-hidden bg-[hsl(var(--cream))] aspect-[4/5]">
                  <img
                    src={d.src}
                    alt={`Trending kurti design — ${d.title}: ${d.tag}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 bg-[hsl(var(--burgundy-deep))]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--gold-soft))] px-2.5 py-1">
                    AI Design
                  </div>
                </div>
                <div className="pt-5">
                  <h3 className="font-display text-2xl text-primary-foreground">{d.title}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mt-1.5">{d.tag}</p>
                  <a
                    href="#contact"
                    className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[hsl(var(--gold-soft))] border-b border-[hsl(var(--gold))] pb-0.5 hover:text-primary-foreground transition-colors"
                  >
                    Stitch this design →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-primary-foreground/45 mt-10 max-w-xl">
            * Designs shown are AI-generated style references. Final stitching, fabric and finishing are crafted in our atelier.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-cream">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Visit Us</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Book your <em className="italic">fitting</em>.
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-foreground/75 leading-relaxed max-w-md mb-10">
              Drop in for a measurement consultation or send us a note — we typically respond within a few hours.
            </p>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Visit the shop</p>
                  <p className="text-muted-foreground">
                    Omkar Nagar, Santosh Nagar,<br />
                    Diva, Thane, Maharashtra 400612
                  </p>
                  <a
                    href="https://maps.app.goo.gl/bwYrVjujFsYWxrus6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs uppercase tracking-[0.2em] text-burgundy border-b border-[hsl(var(--gold))] pb-0.5 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Call or WhatsApp</p>
                  <p className="text-muted-foreground">+91 00000 00000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Open hours</p>
                  <p className="text-muted-foreground">Mon – Sat · 10:00 AM – 8:00 PM</p>
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

          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl text-burgundy mb-6">Request a callback</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="name">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[hsl(var(--gold))] outline-none py-2 text-foreground"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="phone">Phone</label>
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
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">What you need</label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[hsl(var(--gold))] outline-none py-2 text-foreground resize-none"
                  placeholder="Bridal blouse, alteration, etc."
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-burgundy text-primary-foreground text-sm uppercase tracking-[0.2em] py-3.5 hover:bg-[hsl(var(--burgundy-deep))] transition-colors"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy-deep text-primary-foreground/80 py-12">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-primary-foreground">Poonam Ladies Tailor & Stationary</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mt-1">Tailoring · Stationery · Toys</p>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" aria-label="Instagram" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Instagram className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="mailto:hello@poonamtailor.com" aria-label="Email" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Mail className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="tel:+910000000000" aria-label="Phone" className="hover:text-[hsl(var(--gold-soft))] transition-colors"><Phone className="w-5 h-5" strokeWidth={1.5} /></a>
          </div>
          <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} Poonam Ladies Tailor</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
