import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section className="w-full flex flex-col bg-gray-50/40">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center bg-black/50">
        <img
          src="/Contact-banner.jpg"
          alt="Contact Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <Link
              to="/"
              className="text-sm font-semibold text-white hover:underline transition"
            >
              HOME
            </Link>
            <span className="text-sm text-white/70">/</span>
            <span className="text-sm font-semibold text-white">CONTACT US</span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Form (7 columns on desktop) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Contact Information & Hours (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
                <span>Reach Out Directly</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                EasyPack Headquarters
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our support and sales teams are available to assist you with
                custom corrugated box orders, bulk logistics, or packaging
                design inquiries.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-xl p-3 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Factory & Office Address
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                      EASYPACK PACKING SOLUTIONS,
                      <br />
                      Bldg No: 8/354A, UKC, Kakkanchery,
                      <br />
                      Chelembra, Malappuram - 673634, Kerala, India.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-xl p-3 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Call Us Directly
                    </p>
                    <div className="flex flex-col gap-1 mt-1">
                      <a
                        href="tel:+917907798266"
                        className="text-gray-700 hover:text-black font-medium text-sm transition"
                      >
                        +91 79077 98266 (WhatsApp)
                      </a>
                      <a
                        href="tel:+919656247222"
                        className="text-gray-700 hover:text-black font-medium text-sm transition"
                      >
                        +91 96562 47222
                      </a>
                      <a
                        href="tel:+919995664686"
                        className="text-gray-700 hover:text-black font-medium text-sm transition"
                      >
                        +91 99956 64686
                      </a>
                      <a
                        href="tel:+919995980464"
                        className="text-gray-700 hover:text-black font-medium text-sm transition"
                      >
                        +91 99959 80464
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-xl p-3 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Official Support Email
                    </p>
                    <p className="text-sm mt-0.5">
                      <a
                        href="mailto:info2easypack@gmail.com"
                        className="text-amber-800 hover:text-amber-950 font-medium break-all underline"
                      >
                        info2easypack@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-xl p-3 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Business Hours
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      Monday – Saturday: 9:00 AM – 6:30 PM IST
                      <br />
                      <span className="text-xs text-gray-500">
                        Sunday: Closed (Inquiries reviewed next morning)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/917907798266?text=Hi%20EasyPack%2C%20I%20have%20an%20enquiry%20regarding%20packaging%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Location */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h4 className="text-base font-bold text-gray-900 mb-1">
            Visit Our Factory & Warehouse
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Located conveniently in Kakkanchery, Chelembra, Malappuram district.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4324655921073!2d75.89315327452178!3d11.155581152086787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65025d5a40d37%3A0x92cf41a376619303!2sEasyPack!5e0!3m2!1sen!2sin!4v1757577911547!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          title="EasyPack Location Map"
          className="w-full"
        />
      </div>
    </section>
  );
}
