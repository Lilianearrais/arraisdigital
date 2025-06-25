import React from 'react';
import { Code2, Bot, Cpu, Plug, TrendingUp, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento de Software',
      description: 'Criamos aplicações web e mobile sob medida, utilizando as mais modernas tecnologias e metodologias ágeis.',
      features: ['React & Next.js', 'Node.js & Python', 'Cloud Computing', 'Arquitetura Escalável'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      title: 'Automação com IA',
      description: 'Implementamos soluções de automação inteligente que otimizam processos e reduzem custos operacionais.',
      features: ['Machine Learning', 'Processamento de Linguagem Natural', 'Visão Computacional', 'Automação de Fluxos'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Agentes Inteligentes',
      description: 'Desenvolvemos bots e assistentes virtuais personalizados para atendimento ao cliente e suporte interno.',
      features: ['Chatbots Avançados', 'Assistentes Virtuais', 'Análise de Sentimentos', 'Integração Omnichannel'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Plug,
      title: 'Integrações & APIs',
      description: 'Conectamos sistemas legados com novas tecnologias através de APIs robustas e integrações personalizadas.',
      features: ['APIs RESTful', 'Webhooks', 'Sincronização de Dados', 'Sistemas Legados'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Digital',
      description: 'Oferecemos consultoria especializada em transformação digital e estratégia tecnológica.',
      features: ['Análise de Processos', 'Roadmap Tecnológico', 'Otimização de Performance', 'Estratégia Digital'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Soluções Rápidas',
      description: 'Desenvolvimento ágil de MVPs e protótipos para validação rápida de ideias e conceitos.',
      features: ['Prototipação Rápida', 'MVP Development', 'Testes A/B', 'Feedback Loops'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde o desenvolvimento de software 
            até a implementação de inteligência artificial avançada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <service.icon className="w-14 h-14 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-lg rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-gray-300 mb-6">
                Criamos soluções personalizadas para cada necessidade. Vamos conversar sobre o seu projeto!
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;