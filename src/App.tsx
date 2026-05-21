import { motion } from 'motion/react';
import { 
  Zap, Wrench, CarFront, PhoneCall, Cctv, 
  Lightbulb, Box, PlugZap, Cpu, AlertTriangle,
  Clock, ThumbsUp, ShieldCheck, CheckCircle2, ChevronDown,
  Star, Menu, X, ArrowRight
} from 'lucide-react';
import { useState } from 'react';

import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { COMPANY_NAME, WHATSAPP_DISPLAY, WHATSAPP_URL } from './config';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-black/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
            <Zap className="text-brand-yellow" size={28} />
            <span className="hidden sm:inline">PR ELETRICIDADE</span>
            <span className="sm:hidden">PR ELÉT.</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#servicos" className="hover:text-brand-yellow transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-brand-yellow transition-colors">Diferenciais</a>
            <a href="#galeria" className="hover:text-brand-yellow transition-colors">Galeria</a>
            <a href="#avaliacoes" className="hover:text-brand-yellow transition-colors">Avaliações</a>
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" className="gap-2">
              <PhoneCall size={18} />
              {WHATSAPP_DISPLAY}
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-dark px-4 py-6 border-b border-white/10 flex flex-col gap-4"
          >
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white hover:text-brand-yellow">Serviços</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white hover:text-brand-yellow">Diferenciais</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white hover:text-brand-yellow">Galeria</a>
            <a href="#avaliacoes" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white hover:text-brand-yellow">Avaliações</a>
            <Button variant="primary" className="mt-4 w-full justify-center">Falar no WhatsApp</Button>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 min-h-screen flex items-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Eletricista Profissional" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-brand-yellow/20 text-brand-yellow text-sm font-semibold border border-brand-yellow/30">
              <Zap size={16} /> Residencial • Comercial • Industrial
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight mb-6">
              Eletricista Profissional com <span className="text-brand-yellow">Atendimento Rápido</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
              Instalações, manutenção elétrica, portões automáticos, câmeras, iluminação e soluções elétricas para residências e empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2 text-lg">
                SOLICITAR ORÇAMENTO
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-brand-black">
                CHAMAR NO WHATSAPP
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section id="servicos" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Nossas Soluções</h2>
            <h3 className="text-4xl font-bold font-display text-brand-black">Serviços Especializados</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Instalações Elétricas" Icon={Zap} delay={0.1} />
            <ServiceCard title="Manutenção Elétrica" Icon={Wrench} delay={0.2} />
            <ServiceCard title="Portões Automáticos" Icon={CarFront} delay={0.3} />
            <ServiceCard title="Interfones" Icon={PhoneCall} delay={0.4} />
            <ServiceCard title="Câmeras de Segurança" Icon={Cctv} delay={0.5} />
            <ServiceCard title="Iluminação Residencial" Icon={Lightbulb} delay={0.6} />
            <ServiceCard title="Quadros Elétricos" Icon={Box} delay={0.7} />
            <ServiceCard title="Padrão de Energia" Icon={PlugZap} delay={0.8} />
            <ServiceCard title="Automação Residencial" Icon={Cpu} delay={0.9} />
          </div>

          <motion.div 
            className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-brand-red p-4 rounded-full text-white animate-pulse">
                <AlertTriangle size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-black">Atendimento Emergencial</h4>
                <p className="text-gray-600">Precisando de ajuda agora? Nós resolvemos com agilidade e segurança.</p>
              </div>
            </div>
            <Button variant="primary">SOLICITAR EMERGÊNCIA</Button>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS SECTION */}
      <section id="diferenciais" className="py-24 bg-brand-black text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path stroke="#FFD166" strokeWidth="2" fill="none" d="M0,100 C20,0 50,100 100,0" />
            <path stroke="#E63946" strokeWidth="2" fill="none" d="M0,0 C30,100 70,0 100,100" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-2">Por que nos escolher?</h2>
            <h3 className="text-4xl font-bold font-display">Diferenciais PR Eletricidade</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Atendimento rápido", icon: Clock },
              { title: "Orçamento sem compromisso", icon: ThumbsUp },
              { title: "Profissionais qualificados", icon: ShieldCheck },
              { title: "Materiais de qualidade", icon: CheckCircle2 },
              { title: "Garantia dos serviços", icon: Star },
              { title: "Atendimento residencial e empresarial", icon: Zap },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-4 p-6 bg-brand-dark rounded-xl border border-white/5 hover:border-brand-red/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-brand-red mt-1">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Processo Simples</h2>
            <h3 className="text-4xl font-bold font-display text-brand-black">Como Funciona</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "1", title: "Entre em contato", desc: "Chame no nosso WhatsApp Oficial." },
              { step: "2", title: "Envie fotos/descrição", desc: "Explique brevemente o problema." },
              { step: "3", title: "Receba orçamento", desc: "Rápido e transparente, sem compromisso." },
              { step: "4", title: "Agende o serviço", desc: "Execução com data e hora marcadas." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex-1 relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-xl shadow-brand-red/20 font-display">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Nosso Trabalho</h2>
            <h3 className="text-4xl font-bold font-display text-brand-black">Galeria de Projetos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://www.osetoreletrico.com.br/wp-content/uploads/2022/05/Design-sem-nome-2022-05-12T154759.685.png", label: "Quadros Elétricos" },
              { src: "https://dutotec.com.br/blog/wp-content/uploads/2020/12/cuidados-instalacoes-eletricas.jpg", label: "Instalações Elétricas" },
              { src: "https://www.urutuvigilancia.com.br/seguranca-e-vigilancia/imagens/instalacao-de-sistemas-de-alarme-com-camera.jpg", label: "Câmeras de Segurança" },
              { src: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2025/09/tipos-de-iluminacao-capa.jpg", label: "Iluminação" },
              { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop", label: "Padrão e Projetos" },
              { src: "https://blog.lojastander.com.br/wp-content/uploads/2019/10/ServicesMob3.jpg", label: "Manutenção Profissional" },
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Depoimentos</h2>
            <h3 className="text-4xl font-bold font-display text-brand-black">O que dizem nossos clientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Atendimento rápido e muito profissional.", n: "Cliente Residencial" },
              { t: "Resolveram meu problema elétrico no mesmo dia.", n: "Cliente Comercial" },
              { t: "Preço justo e serviço impecável.", n: "Síndico Predial" },
            ].map((rev, idx) => (
              <motion.div 
                key={idx}
                className="bg-brand-light p-8 rounded-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-lg text-brand-black font-medium mb-6 italic">"{rev.t}"</p>
                <p className="text-gray-500 text-sm font-semibold">{rev.n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Dúvidas Comuns</h2>
            <h3 className="text-4xl font-bold font-display text-brand-black">Perguntas Frequentes</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "Atendem emergências?", a: "Sim, disponibilizamos atendimento ágil para resolver emergências elétricas o mais rápido possível e garantir a sua segurança." },
              { q: "Atendem empresas?", a: "Sim, atendemos clientes residenciais, comerciais e industriais com a mesma excelência." },
              { q: "Fazem orçamento?", a: "Sim. Realizamos orçamentos sem compromisso. Entre em contato e descreva sua necessidade." },
              { q: "Instalam portões automáticos?", a: "Sim, somos especialistas também em instalação, manutenção e configuração de motores para portões eletrônicos." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-brand-black font-bold text-lg">
                  {faq.q}
                  <span className="shrink-0 rounded-full bg-brand-light p-1.5 text-brand-red sm:p-3 group-open:-rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Precisa de um eletricista confiável?</h2>
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto">
              Solicite seu orçamento agora mesmo e conte com profissionais qualificados.
            </p>
            <Button variant="whatsapp" size="lg" className="text-xl px-10 py-5 group shadow-2xl">
              FALAR NO WHATSAPP
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-2xl text-white tracking-tight mb-4">
              <Zap className="text-brand-yellow" size={28} />
              PR ELETRICIDADE
            </div>
            <p className="text-sm">
              {COMPANY_NAME}<br />
              Atendimento residencial, comercial e industrial.
            </p>
          </div>
          <div className="md:text-right flex flex-col items-start md:items-end">
            <p className="font-bold text-white mb-2">Contato Rápido</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-yellow hover:text-white transition-colors text-xl font-bold">
              <PhoneCall size={20} />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating Button Component */}
      <FloatingWhatsApp />
    </div>
  );
}

