import { Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#002B3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/company/test-community-ke/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#FFA726] transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Follow us on LinkedIn
              </a>
              <a
                href="https://chat.whatsapp.com/HQ8Uy5s4sxb2IqulwzKKox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#FFA726] transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join our WhatsApp Community
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFA726] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-[#FFA726] transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-[#FFA726] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-[#FFA726] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-[#FFA726] transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Test Community Kenya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
