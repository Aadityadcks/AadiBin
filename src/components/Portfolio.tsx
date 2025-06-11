import React, { useState } from 'react';
import { ExternalLink, Play, Image } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const categories = [
    { id: 'web', label: 'Web Design', icon: ExternalLink },
    { id: 'thumbnails', label: 'Thumbnails', icon: Image },
    { id: 'videos', label: 'Video Editing', icon: Play },
  ];

  const projects = {
    web: [
      {
        title: 'E-commerce Platform',
        description: 'Modern online store with seamless user experience',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '#'
      },
      {
        title: 'Portfolio Website',
        description: 'Creative portfolio for digital artist',
        image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '#'
      },
    ],
    thumbnails: [
      {
        title: 'Tech Review Series',
        description: 'YouTube thumbnails for tech channel',
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        title: 'Gaming Content',
        description: 'High-energy gaming thumbnails',
        image: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        title: 'Educational Series',
        description: 'Clean educational content thumbnails',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    videos: [
      {
        title: 'Brand Commercial',
        description: '30-second promotional video',
        image: 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        title: 'Product Demo',
        description: 'Engaging product showcase',
        image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        title: 'Social Media Content',
        description: 'Short-form social media videos',
        image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: project(video editing landing page files)
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work across web design, thumbnail creation, and video editing
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <category.icon size={20} />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeCategory as keyof typeof projects].map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.link && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
