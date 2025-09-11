import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:justify-between md:items-start text-white">
        {/* Left Section */}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
           <img src="/Logo-White.png" alt="logo" className="w-36 h-auto" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Easypack Packing Solutions is your one-stop shop for all your packaging needs, from printing to packaging. 
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-pinterest fa-xl"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-2/3">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to='/' className="hover:text-white">Home</Link></li>
              <li><Link to='/about' className="hover:text-white">About Us</Link></li>
              <li><Link to='/market' className="hover:text-white">Our Market</Link></li>
              <li><Link to='/products' className="hover:text-white">Our Products</Link></li>
              <li><Link to='/contact' className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to='/products' className="hover:text-white">Regular Slotted Carton (RSC)</Link></li>
              <li><Link to='/products' className="hover:text-white">Folding Cartons</Link></li>
              <li><Link to='/products' className="hover:text-white">Litholaminated Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Die-Cut Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Rigid Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Corrugated Mailer Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Display Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Partitioned Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Eco-Friendly Kraft Boxes</Link></li>
              <li><Link to='/products' className="hover:text-white">Gable & Telescope Boxes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  EASYPACK PACKING SOLUTIONS,
                  <br />
                  Bldg No: 8/354A, UKC, Kakkanchery,
                  <br />
                  Chelembra, Malappuram – 673634, Kerala.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919656247222" className="hover:text-white">+91 9656 24 72 22</a>
                  <a href="tel:+919995664686" className="hover:text-white">+91 9995 66 46 86</a>
                  <a href="tel:+919995980464" className="hover:text-white">+91 9995 98 04 64</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <a href="mailto:info2easypack@gmail.com" className="hover:text-white break-all">
                  info2easypack@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p className="mb-4 md:mb-0">© 2025 EASYPACK. All rights reserved.</p>
          <p className="mb-4 md:mb-0">
            <a href="https://extechnology.in">Developed by <span className="text-white">ex-technology</span></a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Shipment Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
