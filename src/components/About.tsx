import React from 'react';
import { Figma, Camera, Video, Palette, Code, Zap } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Figma', icon: Figma, color: 'text-purple-400' },
    { name: 'Photoshop', icon: Camera, color: 'text-blue-400' },
    { name: 'Premiere Pro', icon: Video, color: 'text-purple-400' },
    { name: 'After Effects', icon: Zap, color: 'text-blue-400' },
    { name: 'Illustrator', icon: Palette, color: 'text-orange-400' },
    { name: 'VS Code', icon: Code, color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="w-72 h-72 bg-slate-700 rounded-2xl flex items-center justify-center">
                <Camera size={80} className="text-gray-400" />
              </div>
            </div>
            <div className="absolute -z-10 top-4 left-4 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl"></div>
          </div>

          {/* Bio content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate digital creator with over 5 years of experience in web design, 
                YouTube thumbnail creation, and video editing. I help brands and content creators 
                stand out in the digital landscape with compelling visual content.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines creative vision with strategic thinking to deliver designs 
                that not only look amazing but also drive engagement and conversions. Every project 
                is an opportunity to push creative boundaries while achieving your goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Creative Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-slate-800/50 p-4 rounded-xl hover:bg-slate-700/50 transition-colors duration-300 group"
                  >
                    <tool.icon className={`${tool.color} mb-2 group-hover:scale-110 transition-transform duration-300`} size={24} />
                    <p className="text-gray-300 font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;