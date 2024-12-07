import React from "react";
import { Calendar, Clock, Video } from "lucide-react";

const EventCard = ({ title, date, time, description, image, link, isPast }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div
        className={`text-sm font-semibold mb-2 ${
          isPast ? "text-gray-500" : "text-[#FFA726]"
        }`}
      >
        {isPast ? "Past Event" : "Upcoming Event"}
      </div>
      <h3 className="text-xl font-bold text-[#002B3D] mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        <span>{time}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#002B3D] hover:text-[#FFA726]"
        >
          <Video className="w-4 h-4 mr-2" />
          Join Meeting
        </a>
      )}
    </div>
  </div>
);

const Activities = () => {
  const events = {
    upcoming: [
      {
        title: "Lorem ipsum dolor sit amet",
        date: "December , 2024",
        time: "0:00 PM - 0:00 PM",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://meet.google.com",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "December , 2024",
        time: "0:00 PM - 0:00 PM",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://meet.google.com",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "January , 2025",
        time: "0:00 PM - 0:00 PM",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco  consequat",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://meet.google.com",
      },
    ],
    past: [
      {
        title: "QA101: Building a Strong Foundation in Software Testing",
        date: "November 28, 2024",
        time: "8:00 PM - 9:00 PM",
        description:
          "Whether you're new to QA or looking to strengthen your skills, this session is packed with insights on QA fundamentals, tools, and best practices to help you excel.",
        image: "https://shorturl.at/yqtuA",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "December , 2024",
        time: "0:00 PM - 0:00 PM",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "December , 2024",
        time: "0:00 PM - 0:00 PM",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image:
          "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B3D] mb-4">Our Events</h2>
          <div className="w-20 h-1 bg-[#FFA726] mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#002B3D] mb-8">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.upcoming.map((event, index) => (
              <EventCard key={index} {...event} isPast={false} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#002B3D] mb-8">
            Past Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.past.map((event, index) => (
              <EventCard key={index} {...event} isPast={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
