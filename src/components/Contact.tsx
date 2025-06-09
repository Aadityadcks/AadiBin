import React from 'react';
import { Mail, Instagram, Youtube, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-center">
                I'm always excited to work on new projects and help bring creative visions to life. 
                Whether you need a complete website redesign, eye-catching thumbnails, or professional 
                video editing, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 justify-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>OffAaditya21907@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 justify-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>Not Available</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 justify-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>India, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-20 pt-8 text-center">
        <p className="text-gray-400">
          © 2024 Aaditya Sharma. All rights reserved. Built with passion and creativity.
        </p>
      </div>
    </section>
  );
};

export default Contact;