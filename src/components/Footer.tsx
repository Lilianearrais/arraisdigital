import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Desenvolvimento de Software',
    'Automação com IA',
    'Agentes Inteligentes',
    'Integrações & APIs',
    'Consultoria Digital',
    'Soluções Rápidas'
  ];

  const company = [
    'Sobre nós',
    'Nossa equipe',
    'Carreiras',
    'Blog',
    'Parceiros',
    'Certificações'
  ];

  const social = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="relative">
                  <Zap className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-cyan-400/20 group-hover:bg-purple-400/20 blur-lg transition-colors duration-300 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Arrais Digital
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformamos ideias em soluções tecnológicas inovadoras, 
                especializados em IA e automação para impulsionar o crescimento dos nossos clientes.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">contato@arraisdigital.com.br</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Nossos Serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm block relative group"
                    >
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Empresa
              </h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm block relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Receba as últimas novidades sobre IA, automação e tecnologia.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-l-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-4 py-2 rounded-r-lg transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-cyan-400 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400"
                  />
                  <label htmlFor="privacy" className="ml-2 text-xs text-gray-400">
                    Aceito receber comunicações da Arrais Digital
                  </label>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Siga-nos</h4>
                <div className="flex space-x-3">
                  {social.map((Social, index) => (
                    <a
                      key={index}
                      href={Social.href}
                      className={`w-10 h-10 bg-gray-800/50 border border-gray-600/50 rounded-lg flex items-center justify-center text-gray-400 ${Social.color} transition-all duration-300 hover:border-current hover:scale-110`}
                    >
                      <Social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Arrais Digital. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Cookies
                </a>
                
                {/* Back to Top */}
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;