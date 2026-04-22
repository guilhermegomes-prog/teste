import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Gamepad2, Zap, Wind, MonitorSmartphone, Shield, CheckCircle2, ChevronRight, ChevronDown, Play, Menu, Instagram, Twitter, Facebook, Target, Heart } from 'lucide-react';

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) => {
  const y = direction === 'up' ? 40 : 0;
  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Force autoplay in environments that block it by default
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      threshold: 0.5
    });

    const sectionIds = ['hero', 'features', 'symbiote', 'checkout', 'footer'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#7D070A] selection:text-white overflow-x-hidden">
      
      {/* Decorative elements (Dots on the Right) - FIXED */}
      <div className="fixed right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {['hero', 'features', 'symbiote', 'checkout', 'footer'].map((id) => (
          <div 
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-[6px] h-[6px] rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === id 
                ? 'bg-white ring-4 ring-white/30 scale-125' 
                : 'border-2 border-white/50 hover:border-white hover:bg-white/50'
            }`}
          ></div>
        ))}
      </div>

      {/* HEADER / HERO SECTION - WAKANDA STYLE */}
      <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0d0d12]">
        
        {/* Darkening Gradient directly in front of the characters to boost text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#000000]/30 to-transparent z-15 pointer-events-none mt-[30vh]"></div>
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img 
            src="/spider-men-city 1.png" 
            alt="Spider-Men City Dusk"
            className="w-full h-full object-cover object-center opacity-70 md:opacity-100"
          />
          {/* Gradients masking the edges for text contrast, and maybe a gentle center gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-[#0d0d12]/30 z-10 hidden md:block"></div>
        </div>

        {/* Spidermen Forefront (Perfectly matched over background) */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full h-full absolute inset-0"
          >
            <img 
              src="/spider-men-cutouts 1.png"
              alt="Spider-Men Cutout"
              className="w-full h-full object-cover object-center drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] mix-blend-normal"
            />
          </motion.div>
        </div>


        {/* Central Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pointer-events-none pb-12 md:pb-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="w-full flex flex-col items-center text-center max-w-[800px]"
          >
            <img 
              src="/logo.png" 
              alt="Marvel's Spider-Man 2" 
              className="w-40 sm:w-48 md:w-64 object-contain drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] mb-6"
            />
            <h1 className="hero-text text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] pb-2 uppercase text-center w-full font-black leading-[0.9] tracking-tighter">
              SEJA MAIOR.<br />JUNTOS.
            </h1>
            
            <p className="text-[10px] md:text-[11px] text-gray-200 font-medium max-w-[450px] mt-6 mb-8 leading-[1.8] tracking-[0.2em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              A caçada final começou. Entre na pele de Peter Parker e Miles Morales no exclusivo mais explosivo e aguardado do PlayStation 5.
            </p>
            
            <div className="pointer-events-auto">
               <button onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })} className="text-white border border-white hover:bg-white hover:text-black transition-all px-10 py-3 cursor-pointer font-bold tracking-[0.2em] text-[10px] uppercase">
                 [ Comprar Agora Para PS5 ]
               </button>
            </div>
          </motion.div>
        </div>

      </section>

      {/* SEÇÃO 2: O SALTO DA GERAÇÃO */}
      <section id="features" className="relative min-h-[100svh] flex flex-col bg-black overflow-hidden font-sans border-y border-white/10">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img 
            src="/bg-venom.jpg" 
            className="w-full h-full object-cover object-top"
            alt="Venom vs Spider-Men"
          />
        </div>
        {/* Gradiente escurecendo a base para leitura perfeita dos destaques na horizontal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10 pointer-events-none"></div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 xl:px-24 w-full flex flex-col justify-between flex-grow pt-32 pb-16">
          
          {/* Top Content: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl text-white mb-24"
          >
            {/* Title / Logo styling */}
            <div className="mb-8">
              <h3 className="text-white/80 font-bold tracking-[0.2em] text-[10px] uppercase mb-2">O Salto da Geração (PS4 vs. PS5)</h3>
              <h2 className="text-[40px] sm:text-[50px] lg:text-[70px] uppercase text-white leading-[1] tracking-tight font-black">
                ESQUEÇA OS LIMITES<br />
                <span className="opacity-90 block mt-2 text-white drop-shadow-md">DO PASSADO.</span>
              </h2>
            </div>
            
            <p className="text-[12px] md:text-[14px] text-gray-200 font-medium max-w-[420px] mb-10 leading-[1.8] tracking-wide inline-block drop-shadow-md">
              A experiência que você amou no PS4, agora evoluída ao máximo. Graças ao <strong className="text-white font-black">SSD de altíssima velocidade</strong> do PS5, o tempo de carregamento desapareceu.
            </p>
            
            <div className="pointer-events-auto">
               <button onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })} className="text-white border border-white hover:bg-white hover:text-black transition-all px-10 py-3 cursor-pointer font-bold tracking-[0.2em] text-[10px] uppercase">
                 [ Comprar Agora Para PS5 ]
               </button>
            </div>
          </motion.div>

          {/* Bottom Content: Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mt-auto"
          >
             {/* Destaques */}
             <div>
               <h4 className="text-white font-bold tracking-[0.15em] text-[13px] uppercase mb-8 border-b border-white/20 pb-2 w-fit">
                 DESTAQUES
               </h4>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                 {[
                   { title: 'Asas de Teia (Web Wings)', desc: 'Uma mecânica inédita para planar a velocidades absurdas pelo Brooklyn e Queens.', image: '/card-webwings.webp' },
                   { title: 'Imersão Total', desc: 'Sinta o impacto de cada golpe com o feedback tátil e os gatilhos adaptáveis do DualSense.', image: '/card-imersao.webp' },
                   { title: 'Visual de Cair o Queixo', desc: 'Ray tracing deslumbrante e reflexos na água tornam esta a versão mais realista já criada.', image: '/card-visual.webp' }
                 ].map((item, idx) => (
                   <div key={idx} className="group relative overflow-hidden rounded-xl h-72 md:h-80 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer shadow-xl bg-black">
                     {/* Imagem de Fundo (Scale on Hover) */}
                     <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     
                     {/* Gradiente Preto Escuro para Texto -> Transparente (Fades out on Hover) */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                     {/* Conteúdo Textual (Fades out on Hover, slides out slightly) */}
                     <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                       <div>
                         <h5 className="text-white text-[13px] md:text-[15px] font-black tracking-widest uppercase mb-3 drop-shadow-md py-1">
                           {item.title}
                         </h5>
                         <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed drop-shadow-md lg:pr-4">
                           {item.desc}
                         </p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO 3: A FÚRIA DO SIMBIONTE (O HOSPEDEIRO PERFEITO) */}
      <section id="symbiote" className="relative min-h-[100svh] flex flex-col justify-center bg-gradient-to-br from-[#d1000f] via-[#b3000b] to-[#7a0005] overflow-hidden py-32">
        {/* Subtle texture overlay for the red background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Kraven Full Body */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative z-10">
              <FadeIn direction="right">
                <img 
                  src="/kraven.webp" 
                  alt="Kraven o Caçador" 
                  className="w-full max-w-md lg:max-w-none lg:scale-125 xl:scale-150 lg:origin-bottom-right object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </FadeIn>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-7/12 flex flex-col text-left">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-bold uppercase text-white mb-8 tracking-wide leading-[1.1]">
                  A FÚRIA DO <br />SIMBIONTE E OS CAÇADORES
                </h2>
                
                <p className="text-gray-100 text-sm md:text-[15px] font-light leading-relaxed mb-6">
                  Enfrente a maior e mais brutal ameaça que Nova York já viu. O implacável Kraven, o Caçador, e o monstruoso Venom vão testar os limites físicos e psicológicos dos nossos heróis de formas inéditas, forçando você a mudar de tática.
                </p>
                
                <p className="text-gray-100 text-sm md:text-[15px] font-light leading-relaxed mb-10">
                  A caçada final começou. Você tem força para resistir à escuridão e proteger Nova York desta ameaça implacável? Domine os novos e devastadores poderes do traje negro com Peter e sinta como a fúria altera o ritmo do combate brutal.
                </p>

                {/* Sub-images Grid (Lizard & Venom) */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
                  <div className="border border-white/20 overflow-hidden bg-black aspect-video flex-shrink-0 relative">
                    <img src="/lizard.webp" alt="Lizard" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="border border-white/20 overflow-hidden bg-black aspect-video flex-shrink-0 relative">
                    <img src="/venom-solo.webp" alt="Venom Solo" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                {/* Quote / Button */}
                <div className="flex flex-col items-start gap-8">
                  <p className="text-gray-200 text-sm italic font-light leading-relaxed border-l-2 border-white/30 pl-4 py-1">
                    "As lutas de chefes evoluem a cada fase, passando suavemente para a superfície ou a parte externa. É outro nível de espetáculo que eleva os limites psicológicos e emocionais de nossos heróis."
                  </p>

                  <div className="pointer-events-auto">
                    <button onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#b3000b] bg-white border border-white hover:bg-transparent hover:text-white transition-all px-10 py-3 cursor-pointer font-bold tracking-[0.2em] text-[10px] uppercase">
                      [ Comprar Agora Para PS5 ]
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: EDIÇÕES E CHECKOUT */}
      <section id="checkout" className="py-24 bg-[#141414] relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            
            {/* Edição Padrão */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-[#222222] flex flex-col h-full border border-white/5 font-sans">
                <div className="aspect-video relative bg-black">
                  <img src="/capa-padrao.jpg" alt="Edição Padrão Cover" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-normal text-[22px] text-white text-center mb-8 tracking-wide">Edição Padrão</h3>
                  
                  <ul className="mb-8 text-[14px] leading-relaxed font-normal text-gray-200 list-disc ml-4 space-y-1">
                    <li>Marvel's Spider-Man 2</li>
                  </ul>
                  
                  <div className="mt-auto">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[26px] text-white font-light tracking-wide">R$146,95</span>
                        <span className="line-through text-gray-500 text-[18px]">R$349,90</span>
                      </div>
                      <p className="text-[11px] text-white font-bold leading-tight">Economize 58% <span className="text-gray-400 font-normal">A oferta termina em 23/4/2026 03:59 BRT</span></p>
                      <p className="text-[11px] text-gray-400 mt-1">Menor preço nos últimos 30 dias: R$349,90</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button className="flex-grow bg-[#df4a0b] hover:bg-[#e85a1a] text-white font-semibold py-3.5 px-6 rounded-full transition-colors tracking-wide text-[15px]">
                        Adicionar ao carrinho
                      </button>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-200 text-white transition-colors flex-shrink-0">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Edição Deluxe */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-[#222222] flex flex-col h-full border border-white/5 font-sans">
                <div className="aspect-video relative bg-black">
                  <img src="/capa-deluxe.jpg" alt="Edição Digital Deluxe Cover" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-normal text-[22px] text-white text-center mb-8 tracking-wide">Edição Digital Deluxe</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 mb-8 text-[14px] leading-relaxed font-normal text-gray-200 ml-4">
                    <ul className="list-disc space-y-1">
                      <li>Marvel's Spider-Man 2</li>
                      <li>Cinco trajes exclusivos para o Peter.</li>
                      <li>Cinco trajes exclusivos para o Miles.</li>
                    </ul>
                    <ul className="list-disc space-y-1">
                      <li>Itens adicionais no Modo Foto.</li>
                      <li>5 Pontos de Técnica.</li>
                      <li>Desbloqueio de trajes e dispositivos</li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[26px] text-white font-light tracking-wide">R$399,50</span>
                      </div>
                      {/* Placeholder for alignment */}
                      <p className="text-[11px] invisible leading-tight">Placeholder</p>
                      <p className="text-[11px] invisible mt-1">Placeholder</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button className="flex-grow bg-[#df4a0b] hover:bg-[#e85a1a] text-white font-semibold py-3.5 px-6 rounded-full transition-colors tracking-wide text-[15px]">
                        Adicionar ao carrinho
                      </button>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-200 text-white transition-colors flex-shrink-0">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="p-12 relative z-20 flex flex-col justify-between items-center bg-gradient-to-t from-black to-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-white/10 pb-12">
            <div className="flex flex-col gap-3 md:items-start items-center text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[2px] bg-[#e60012]"></div>
                <span className="text-[11px] text-gray-300 font-bold uppercase tracking-widest">Available Now</span>
              </div>
              <img src="/logo.png" alt="Marvel's Spider-Man 2" className="mt-1 h-8 md:h-12 object-contain" />
            </div>
            
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-spidey-red transition-colors text-white">Suporte</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-70 text-gray-300">
              <img src="/logo_ps5.webp" alt="PS5" className="h-[25px]" />
              <span className="text-sm border-l border-gray-600 h-4"></span>
              <span className="font-bold text-[12px] uppercase tracking-[0.15em]">Insomniac Games</span>
              <span className="text-sm border-l border-gray-600 h-4"></span>
              <span className="font-bold text-[12px] uppercase tracking-[0.15em]">Marvel</span>
            </div>
            
            <p className="text-gray-500 text-xs text-center md:text-right max-w-md leading-relaxed">
              © 2026 MARVEL. © 2026 Sony Interactive Entertainment LLC. Desenvolvido por Insomniac Games. "PlayStation Family Mark", "PlayStation", "PS5 logo" e "PS5" são marcas registradas ou marcas comerciais da Sony Interactive Entertainment Inc.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

