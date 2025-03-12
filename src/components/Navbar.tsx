import { Menu } from "lucide-react";
import { images } from '../config/cloudinary.ts'

const Navbar = () => {
  return (
    <nav className="bg-[#002B3D] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={images.logo2}
              alt="Test Community Kenya"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-[#FFA726] px-3 py-2">
                Home
              </a>
              <a href="#about" className="hover:text-[#FFA726] px-3 py-2">
                About
              </a>
              <a href="#activities" className="hover:text-[#FFA726] px-3 py-2">
                Events
              </a>
              <a href="#events" className="hover:text-[#FFA726] px-3 py-2">
                Activities
              </a>
              <a href="#team" className="hover:text-[#FFA726] px-3 py-2">
                Team
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQfv9IGpLYyoEwphS0MzcQcRj6fj359MXt32K-OxfZdtrk6w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFA726] text-[#002B3D] px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                Contribute
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
