import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B3D] mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#FFA726] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be the leading community in fostering excellence in software testing across Kenya
            </p>
          </div>

          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-600">
              Empowering testers through knowledge sharing, collaboration, and professional development
            </p>
          </div>

          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <p className="text-gray-600">
              A vibrant network of QA professionals sharing experiences and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;