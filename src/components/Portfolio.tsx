import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'AutoFlow Pro',
      category: 'Automação Empresarial',
      description: 'Sistema de automação completo para gestão de processos internos com IA integrada.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SmartBot Assistant',
      category: 'Inteligência Artificial',
      description: 'Chatbot inteligente com processamento de linguagem natural para atendimento ao cliente.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'DataSync Engine',
      category: 'Integração de Sistemas',
      description: 'Plataforma de sincronização em tempo real entre múltiplos sistemas empresariais.',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Microservices', 'Kafka', 'Docker', 'Redis'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'VisionAI Analytics',
      category: 'Visão Computacional',
      description: 'Sistema de análise visual automatizada para controle de qualidade industrial.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['OpenCV', 'PyTorch', 'FastAPI', 'MongoDB'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'CloudScale Platform',
      category: 'Desenvolvimento Web',
      description: 'Plataforma SaaS escalável para gestão de projetos com recursos de IA.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Supabase', 'Vercel', 'Stripe'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Mobile AI Suite',
      category: 'Aplicativo Mobile',
      description: 'Aplicativo mobile com recursos de IA para reconhecimento de padrões e automação.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Expo', 'Firebase', 'ML Kit'],
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Nossos Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos inovadores que desenvolvemos, 
            sempre focando em soluções que geram impacto real nos negócios dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                    <Github className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white rounded-full`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <button className="flex items-center text-cyan-400 hover:text-white transition-colors duration-300 group/btn">
                  <span className="mr-2">Ver mais detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${project.gradient} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
            <span className="flex items-center">
              Ver todos os projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;