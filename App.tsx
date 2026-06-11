import { useEffect, useState } from "react";
import type React from "react";

/* ============ ICONS ============ */
const IconWhatsApp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconArrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconMenu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
);

const IconClose = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

/* ============ SERVICE ICONS ============ */
const ServiceIcon = ({ type }: { type: string }) => {
  const map: Record<string, React.ReactElement> = {
    cartao: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>
      </svg>
    ),
    flyer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>
      </svg>
    ),
    banner: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    timbrado: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    cardapio: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    calendario: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    conteudo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    social: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    anuncios: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    video: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  };
  return map[type] || null;
};

/* ============ LOGO ============ */
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-orange-brand via-orange-light to-orange-dark flex items-center justify-center shadow-lg shadow-orange-brand/25">
      <svg viewBox="0 0 48 48" className="w-7 h-7 text-white" fill="currentColor">
        <path d="M24 8c-2 4-6 8-10 10 3-1 6-2 8 0-4 2-8 6-10 12 3-2 6-4 8-2-2 3-2 7 0 10 2-3 4-5 4-8 0 3 2 6 4 8 2-3 4-5 4-8 0 3 2 5 4 8 2-3 2-7 0-10 2-2 5 0 8 2-2-6-6-10-10-12 2-2 5-1 8 0-4-2-8-6-10-10-1 2-2 3-4 4-2-1-3-2-4-4z"/>
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] tracking-[0.3em] uppercase text-petroleum/60 font-semibold">Agência</span>
      <span className="text-base font-bold tracking-tight text-petroleum">Livre Imagem</span>
    </div>
  </div>
);

/* ============ WHATSAPP LINK BUILDER ============ */
const WA_NUMBER = "5527995063031";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ============ SCROLL REVEAL HOOK ============ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============ SECTIONS ============ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#metodo", label: "Método" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#resultados", label: "Resultados" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold text-petroleum/80 hover:text-orange-brand transition-colors uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={waLink("Olá! Vim pelo site e gostaria de agendar uma reunião de triagem.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-petroleum text-white text-xs font-black uppercase tracking-widest hover:bg-orange-brand transition-all duration-300 shadow-xl shadow-petroleum/20"
          >
            Fale Conosco
          </a>

          <button
            className="md:hidden p-2 rounded-xl text-petroleum"
            onClick={() => setOpen(!open)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-white shadow-2xl border-t border-peach/20 p-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-lg font-bold text-petroleum">
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Olá!")}
            className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl bg-orange-brand text-white font-bold"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden noise">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-peach rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-brand rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-20 w-96 h-96 bg-petroleum rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 reveal text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-2xl shadow-orange-brand/10 border border-orange-brand/10">
              <span className="flex h-2 w-2 rounded-full bg-orange-brand animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.2em] text-petroleum uppercase">
                Agência Premium Digital
              </span>
            </div>

            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-black leading-[0.95] tracking-tighter text-petroleum">
              Design que <br />
              <span className="gradient-text italic">conecta</span> e <br />
              <span className="relative">
                vende.
                <svg className="absolute -bottom-2 left-0 w-full opacity-60" height="15" viewBox="0 0 300 15" fill="none">
                  <path d="M5 10C80 3 220 3 295 12" stroke="#F97316" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-petroleum/60 max-w-xl leading-relaxed font-medium">
              Elevamos marcas através de materiais gráficos excepcionais e estratégias digitais de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <a
                href={waLink("Olá! Quero elevar o nível do meu negócio com a Agência Livre Imagem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-orange-brand to-orange-dark text-white font-black text-lg shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <IconWhatsApp className="w-6 h-6" />
                Agendar Reunião
                <IconArrow className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block reveal" style={{transitionDelay: "300ms"}}>
            <div className="relative perspective-1000">
              <div className="parallax-card relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(19,78,94,0.15)] border border-white bg-white/40 backdrop-blur-md p-2">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-brand via-peach to-petroleum opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Logo className="scale-[2.5] opacity-20 grayscale" />
                  </div>
                  
                  <div className="absolute inset-x-6 bottom-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-brand flex items-center justify-center text-white shadow-lg shadow-orange-brand/20">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-petroleum leading-tight">Resultados Reais</h4>
                        <p className="text-sm text-petroleum/60">Estratégia comprovada</p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-peach/30 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-orange-brand rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-12 -right-8 w-48 h-48 bg-white rounded-3xl shadow-2xl p-6 border border-orange-brand/10 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-peach/30 flex items-center justify-center text-orange-brand mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <p className="text-3xl font-black text-petroleum leading-none mb-1">+200%</p>
                <p className="text-[10px] uppercase font-bold text-petroleum/40 tracking-widest">Crescimento</p>
              </div>

              <div className="absolute -bottom-10 -left-10 w-56 p-6 bg-petroleum rounded-3xl shadow-2xl animate-float z-20" style={{animationDelay: "1s"}}>
                <div className="flex -space-x-3 mb-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-petroleum bg-white/20"></div>
                  ))}
                </div>
                <p className="text-sm font-bold text-white leading-tight">Clientes satisfeitos com o padrão premium.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, subtitle, light }: { kicker: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 reveal">
      <span className={`inline-block text-xs font-black tracking-[0.3em] uppercase mb-4 px-4 py-1 rounded-full border ${light ? 'text-orange-light border-orange-light/30' : 'text-orange-brand border-orange-brand/20'}`}>
        {kicker}
      </span>
      <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 ${light ? 'text-white' : 'text-petroleum'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg sm:text-xl leading-relaxed font-medium ${light ? 'text-white/60' : 'text-petroleum/50'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Servicos() {
  const items = [
    { icon: "cartao", title: "Cartão de Visita", desc: "Design de elite para sua apresentação pessoal." },
    { icon: "flyer", title: "Flyers / Panfletos", desc: "Impacto visual em cada detalhe impresso." },
    { icon: "banner", title: "Banner", desc: "Comunicação em grande escala e alta definição." },
    { icon: "conteudo", title: "Criação de Conteúdos", desc: "Estratégia visual para suas redes sociais." },
    { icon: "social", title: "Gestão de Mídias", desc: "Posicionamento digital de autoridade." },
    { icon: "anuncios", title: "Anúncios (ADS)", desc: "Performance e tráfego pago de alto retorno." },
  ];

  return (
    <section id="servicos" className="py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Soluções de Agência"
          title={<>Eleve o nível da <br/><span className="gradient-text italic underline decoration-orange-brand/20 underline-offset-8">sua marca</span></>}
          subtitle="Oferecemos o que há de mais moderno em design e marketing para empresas que buscam se destacar no mercado."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="reveal group p-1 rounded-[2.5rem] bg-gradient-to-br from-peach/20 to-transparent hover:from-orange-brand/20 transition-all duration-500" style={{transitionDelay: `${i*100}ms`}}>
              <div className="bg-white rounded-[2.4rem] p-10 h-full border border-peach/10 shadow-sm group-hover:shadow-2xl group-hover:shadow-orange-brand/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-orange-brand/5 flex items-center justify-center text-orange-brand mb-8 group-hover:scale-110 group-hover:bg-orange-brand group-hover:text-white transition-all duration-500">
                  <ServiceIcon type={item.icon} />
                </div>
                <h3 className="text-2xl font-black text-petroleum mb-4 leading-tight">{item.title}</h3>
                <p className="text-petroleum/50 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metodo() {
  const steps = [
    { n: "01", title: "Imersão", desc: "Entendemos seu DNA para criar soluções autênticas." },
    { n: "02", title: "Estratégia", desc: "Planejamento focado em objetivos e conversão." },
    { n: "03", title: "Criação", desc: "Onde o design premium ganha vida e forma." },
    { n: "04", title: "Entrega", desc: "Suporte e monitoramento dos resultados obtidos." },
  ];

  return (
    <section id="metodo" className="py-32 bg-cream/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Metodologia"
          title={<>Processo focado <br/><span className="gradient-text italic">em resultados</span></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="reveal text-center" style={{transitionDelay: `${i*150}ms`}}>
              <div className="relative inline-block mb-8">
                <span className="text-8xl font-black text-orange-brand/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter">{step.n}</span>
                <div className="w-20 h-20 rounded-full border-2 border-orange-brand/20 flex items-center justify-center relative z-10 bg-white text-orange-brand font-black">
                  {step.n}
                </div>
              </div>
              <h3 className="text-xl font-black text-petroleum mb-3 uppercase tracking-wider">{step.title}</h3>
              <p className="text-petroleum/40 font-medium px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Portfólio"
          title={<>Trabalhos de <br/><span className="gradient-text italic underline decoration-orange-brand/20 underline-offset-8">alto impacto</span></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1,2,3,4].map(i => (
            <div key={i} className="reveal group relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl" style={{transitionDelay: `${i*100}ms`}}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-brand/80 to-petroleum/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center p-12 text-center">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Projeto Premium {i}</h4>
                  <p className="text-white/80 font-bold text-sm uppercase tracking-[0.3em]">Design • Estratégia • Social</p>
                </div>
              </div>
              <div className="w-full h-full bg-peach/20 flex items-center justify-center">
                <Logo className="scale-[3] opacity-10 grayscale" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resultados() {
  return (
    <section id="resultados" className="py-32 relative overflow-hidden bg-petroleum">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          light
          kicker="Fatos & Números"
          title={<>Presença que <span className="gradient-text">domina o mercado</span></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "+200", t: "Materiais" },
            { n: "+50", t: "Clientes" },
            { n: "100%", t: "Premium" },
            { n: "Rápido", t: "Entrega" }
          ].map((r, i) => (
            <div key={i} className="reveal p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] text-center hover:border-orange-brand/50 transition-colors" style={{transitionDelay: `${i*100}ms`}}>
              <p className="text-5xl font-black text-white mb-2 leading-none">{r.n}</p>
              <p className="text-orange-brand font-black uppercase tracking-widest text-xs">{r.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="reveal">
          <h2 className="font-serif text-5xl sm:text-7xl font-black text-petroleum leading-[1] mb-10 tracking-tighter">
            Pronto para ser <br />
            <span className="gradient-text italic">referência?</span>
          </h2>
          <p className="text-2xl text-petroleum/50 font-medium mb-12">
            Não aceite o básico. Sua empresa merece um visual de agência premium.
          </p>
          <a
            href={waLink("Olá! Quero transformar minha marca hoje.")}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn group inline-flex items-center gap-4 px-12 py-6 rounded-full bg-orange-brand text-white font-black text-xl shadow-[0_30px_60px_rgba(249,115,22,0.4)] hover:shadow-orange-brand/60 transition-all duration-300"
          >
            <IconWhatsApp className="w-7 h-7" />
            Começar Transformação
            <IconArrow className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-peach/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          <p className="text-petroleum/40 text-sm font-bold uppercase tracking-widest">© {new Date().getFullYear()} Agência Livre Imagem</p>
          <div className="flex gap-6">
            <a href="#" className="text-petroleum/30 hover:text-orange-brand transition-colors"><IconWhatsApp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Olá!")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring"></span>
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-orange-brand text-white shadow-2xl shadow-orange-brand/40 group-hover:scale-110 transition-transform">
        <IconWhatsApp className="w-8 h-8" />
      </span>
    </a>
  );
}

export default function App() {
  useReveal();
  return (
    <div className="bg-white font-sans antialiased text-petroleum selection:bg-orange-brand selection:text-white">
      <Nav />
      <Hero />
      <Servicos />
      <Metodo />
      <Portfolio />
      <Resultados />
      <CtaFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
