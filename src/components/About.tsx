import React from 'react';
import { Target, Eye, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias em soluções tecnológicas inovadoras que impulsionam o crescimento dos nossos clientes.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em automação inteligente e desenvolvimento de software personalizado no mercado digital.'
    },
    {
      icon: Rocket,
      title: 'Escalabilidade',
      description: 'Criamos soluções que crescem com seu negócio, utilizando tecnologias de ponta e arquiteturas robustas.'
    },
    {
      icon: Sparkles,
      title: 'IA Personalizada',
      description: 'Desenvolvemos agentes inteligentes únicos para cada cliente, otimizando processos e aumentando a produtividade.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sobre a Arrais Digital
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos uma agência especializada em criar o futuro através da tecnologia. 
            Nossa expertise em <span className="text-cyan-400 font-semibold">inteligência artificial</span> e 
            <span className="text-purple-400 font-semibold"> automação</span> permite que empresas 
            alcancem novos patamares de eficiência e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="relative inline-block">
                    <feature.icon className="w-12 h-12 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-cyan-400/20 group-hover:bg-purple-400/20 blur-lg rounded-full transition-colors duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Com anos de experiência no mercado digital, a Arrais Digital combina 
                <span className="text-green-400 font-semibold"> criatividade</span>, 
                <span className="text-cyan-400 font-semibold"> tecnologia de ponta</span> e 
                <span className="text-purple-400 font-semibold"> estratégia</span> para entregar 
                resultados excepcionais que transformam negócios e criam vantagens competitivas duradouras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;