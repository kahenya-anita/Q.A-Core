"use client";

import { Target, Eye, Users } from "lucide-react";

const Events = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B3D] mb-4">Our Events</h2>
          <div className="w-20 h-1 bg-[#FFA726] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Meetups</h3>
            <p className="text-gray-600">
              Regular in-person gatherings to network and share knowledge
            </p>
          </div>

          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Webinars</h3>
            <p className="text-gray-600">
              Online sessions featuring expert speakers on various testing
              topics
            </p>
          </div>

          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#002B3D] rounded-full flex items-center justify-center">
              <CalendarDays className="w-8 h-8 text-[#FFA726]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Conference</h3>
            <p className="text-gray-600">
              Annual conference bringing together testing professionals from
              across Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
