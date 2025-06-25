import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'A Arrais Digital transformou completamente nossos processos internos. A automação implementada aumentou nossa produtividade em 300% e reduziu erros operacionais significativamente.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Marina Costa',
      position: 'Diretora de Operações',
      company: 'InnovateBR',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'O chatbot desenvolvido pela equipe revolucionou nosso atendimento ao cliente. Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos clientes drasticamente.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Ricardo Mendes',
      position: 'CTO',
      company: 'DataCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Precisávamos integrar sistemas legados com novas tecnologias. A Arrais Digital entregou uma solução robusta e escalável que superou todas as nossas expectativas.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Ana Rodrigues',
      position: 'Gerente de TI',
      company: 'SmartLogistics',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'A consultoria em transformação digital nos ajudou a definir um roadmap claro. Hoje somos referência em inovação no nosso setor graças às soluções implementadas.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              O que nossos clientes dizem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nosso maior indicador de sucesso. 
            Veja como nossas soluções transformaram seus negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-cyan-400" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${testimonial.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projetos Entregues' },
            { number: '98%', label: 'Satisfação do Cliente' },
            { number: '300%', label: 'Aumento Médio de Produtividade' },
            { number: '24/7', label: 'Suporte Técnico' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;