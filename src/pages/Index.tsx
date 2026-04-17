import { useState } from "react";
import heroImg from "@/assets/hero-tailor.jpg";
import craftImg from "@/assets/craft-detail.jpg";
import flatlayImg from "@/assets/services-flatlay.jpg";
import shopSign from "@/assets/shop-sign.png";
import shopFront from "@/assets/shop-front.png";
import workNeckline from "@/assets/work-neckline.png";
import workBlouse from "@/assets/work-blouse.png";
import { Scissors, Ruler, Sparkles, Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

const galleryImages = [
  { src: workBlouse, alt: "Hand-crafted pink blouse with intricate gold patti work neckline" },
  { src: workNeckline, alt: "Designer blouse neckline with golden lace stitched on the machine" },
  { src: shopFront, alt: "Poonam Ladies Tailor shop front with stationery and bangles display" },
  { src: shopSign, alt: "Poonam Tailor & Stationery — Ladies Specialist signboard" },
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
              Ladies Tailor
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/85">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#work" className="hover:text-primary-foreground transition-colors">Our Work</a>
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
          alt="Elegant lady wearing a custom-tailored burgundy and gold lehenga at Poonam Ladies Tailor atelier"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          width={1600}
          height={1800}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-transparent to-burgundy-deep/70" />

        <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mb-5">
              Est. Boutique Tailoring
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] text-balance">
              Poonam<br />
              <span className="italic text-[hsl(var(--gold-soft))]">Ladies Tailor</span>
            </h1>
            <div className="gold-rule my-6 max-w-xs" />
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              Bespoke stitching for the modern woman — bridal lehengas, designer blouses, salwar suits and kurtis,
              tailored with timeless craft and a perfect fit.
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
              src={shopFront}
              alt="Inside Poonam Ladies Tailor & Stationery shop with the owner at work"
              className="w-full h-auto shadow-[var(--shadow-elegant)] object-cover aspect-[4/5]"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
          <div className="md:col-span-7 md:pl-8 order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Our Atelier</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Where every stitch <em className="italic">tells</em> a story.
            </h2>
            <div className="gold-rule my-7 max-w-[120px]" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg max-w-xl">
              For years, Poonam Ladies Tailor has been the trusted name for women who value craftsmanship
              and a flawless fit. From everyday kurtis to once-in-a-lifetime bridal couture, every garment
              is measured, cut, and finished with an artisan's care.
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
              src={workNeckline}
              alt="Designer blouse neckline being stitched on the sewing machine with golden lace at Poonam Ladies Tailor"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* Our Work — real photos */}
      <section id="work" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy leading-[1.05] text-balance">
              Real pieces from our <em className="italic">atelier</em>.
            </h2>
            <div className="gold-rule my-6 max-w-[120px]" />
            <p className="text-foreground/70 leading-relaxed max-w-xl">
              A glimpse of recent work and our shop — designer blouses, neckline patti, and the place where it all
              comes together.
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
                <MapPin className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Visit the shop</p>
                  <p className="text-muted-foreground">Main Market Road, Your City</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Call or WhatsApp</p>
                  <p className="text-muted-foreground">+91 00000 00000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground">Open hours</p>
                  <p className="text-muted-foreground">Mon – Sat · 10:00 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>
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
            <p className="font-display text-2xl text-primary-foreground">Poonam Ladies Tailor</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mt-1">Bespoke since day one</p>
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
