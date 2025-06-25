import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@arraisdigital.com.br',
      subtitle: 'Resposta em até 2 horas',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      subtitle: 'Seg a Sex, 9h às 18h',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP',
      subtitle: 'Atendimento presencial ou remoto',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pronto para transformar
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              seu negócio com IA?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Vamos conversar sobre como nossas soluções inteligentes podem 
            revolucionar seus processos e impulsionar o crescimento da sua empresa.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="flex items-center">
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Solicitar uma proposta
              </span>
            </button>
            
            <button className="group border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
              <span className="flex items-center">
                <Calendar className="mr-2 w-5 h-5" />
                Agendar uma reunião
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="mr-3 w-6 h-6 text-cyan-400" />
              Fale conosco
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Serviço de interesse
                </label>
                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300">
                  <option>Desenvolvimento de Software</option>
                  <option>Automação com IA</option>
                  <option>Agentes Inteligentes</option>
                  <option>Integrações & APIs</option>
                  <option>Consultoria Digital</option>
                  <option>Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Entre em contato
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Estamos sempre prontos para discutir seu próximo projeto. 
                Entre em contato conosco através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="relative">
                      <info.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full`}></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {info.content}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Resposta Rápida Garantida</h4>
              <p className="text-gray-300 text-sm">
                Comprometemo-nos a responder todas as solicitações em até 2 horas úteis. 
                Para projetos urgentes, oferecemos atendimento prioritário 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;