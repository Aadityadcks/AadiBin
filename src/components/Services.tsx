import React from 'react';
import { Globe, Image, Video, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description: 'Responsive, modern websites that convert visitors into customers',
      features: ['Mobile-first design', 'SEO optimization', 'Performance focused', 'Custom animations'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Image,
      title: 'YouTube Thumbnails',
      description: 'Eye-catching thumbnails that boost your click-through rates',
      features: ['High-impact designs', 'A/B testing ready', 'Brand consistency', 'Quick turnaround'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for all your content needs',
      features: ['Color grading', 'Motion graphics', 'Audio enhancement', 'Multiple formats'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand packages that make you stand out',
      features: ['Logo design', 'Brand guidelines', 'Color palettes', 'Typography'],
      color: 'from-green-500 to-teal-500'
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand and content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-slate-700/50 transition-all duration-500 hover:transform hover:scale-105 border border-slate-700/50 hover:border-slate-600/50"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;