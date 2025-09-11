import { useState, useEffect } from "react";
import { AlignLeft, Mail, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";






const Navbar = () => {



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();



  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);



  // Detect scroll position only on home page
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfScreen = window.innerHeight * 3;
      setIsScrolled(scrollY > halfScreen);
    };

    if (location.pathname === "/") {
      // Check immediately when coming back to home
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Any other page → navbar should be always white
      setIsScrolled(true);
    }
  }, [location.pathname]);





  // Services list
  const services = [
    {
      title: "Regular Slotted Carton ",
      description:
        "Regular Slotted Cartons (RSC) are widely used packaging boxes known for their durability, versatility, and cost-effectiveness",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      title: "Folding Cartons",
      description:
        "Folding cartons are lightweight, versatile packaging solutions made from paperboard, commonly used for retail products.",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
    },
    {
      title: "Litholaminated boxes",
      description:
        "Litho laminated cartons combine high-quality lithographic printing with strong corrugated board, creating durable and visually appealing packaging",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
    {
      title: "Die-Cut Boxes",
      description:
        "Customized and non-customized die-cut boxes are precision-cut packaging solutions tailored to specific shapes and sizes.",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046861.png",
    },
    {
      title: "Rigid Boxes",
      description:
        "Customized and non-customized rigid boxes are durable, premium packaging solutions designed for strength and elegance.",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046787.png",
    },
    {
      title: "Corrugated Mailer Boxes",
      description:
        "Customized and non-customized corrugated mailer boxes offer strong, lightweight, and eco-friendly packaging ideal for shipping.",
      href: "/products",
      icon: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
    },
  ];




  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Market", href: "/market" },
    { name: "Contact Us", href: "/contact" },
  ];




  // Dynamic classes
  const isHome = location.pathname === "/";
  const bgClass = isHome && !isScrolled ? "bg-transparent" : "bg-white shadow";
  const textClass = isHome && !isScrolled ? "text-white" : "text-gray-800";



  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
    >


      <div className="max-w mx-auto px-4 sm:px-6 lg:px-14">


        <div className="flex items-center justify-between h-16">


          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 px-4 p-1">
              {isScrolled ? (
                <img
                  src="/Logo-dark.png"
                  alt="nav-logo"
                  loading="lazy"
                  className="h-12 sm:h-16 w-full object-contain"
                />
              ): (
                <img 
                  src="/Logo-White.png"
                  alt="nav-logo"
                  loading="lazy"
                  className="h-12 sm:h-16 w-full object-contain"
                />
              )}
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:block">


            <NavigationMenu>


              <NavigationMenuList className="space-x-3">


                {navItems.slice(0, 2).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        location.pathname === item.href
                          ? `${textClass} font-bold`
                          : `${textClass} font-medium`,
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md transition-colors hover:opacity-80"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}


                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${textClass} bg-transparent hover:cursor-pointer hover:opacity-80 text-sm font-medium transition-colors`}
                  >
                    Products
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="[&[data-state=open]]:shadow-lg">
                    <div className="grid gap-3 p-6 w-[600px]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md 
                            bg-gradient-to-b from-[#001224] via-[#4B0B12] to-[#D6040B] 
                            p-6 no-underline outline-none focus:shadow-md transition duration-300 hover:scale-[1.02]"
                          >
                            <div className="mb-2 mt-4 text-lg font-semibold text-white drop-shadow">
                              Our Products & Service
                            </div>
                            <p className="text-sm leading-tight text-gray-100 drop-shadow-sm">
                              Comprehensive solutions for all your business needs
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.title} asChild>
                            <Link
                              to={service.href}
                              className="group grid grid-cols-[60px_1fr] gap-3 rounded-md p-0 hover:bg-accent transition-colors"
                            >
                              <img
                                src={service.icon}
                                loading="lazy"
                                alt={service.title}
                                className="w-14 h-14 object-contain rounded-xl"
                              />
                              <div>
                                <div className="text-sm font-medium leading-none group-hover:underline">
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.slice(2).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        location.pathname === item.href
                          ? `${textClass} font-bold`
                          : `${textClass} font-medium`,
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md transition-colors hover:opacity-80"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm
              transition-all duration-300 ease-in-out
              ${isHome && !isScrolled
                ? "bg-white text-black hover:opacity-90"
                : "bg-zinc-900 text-white hover:shadow-lg hover:scale-[1.03] active:scale-[0.97]"
              }`}
          >
            <Mail size={14} />
            Enquire Now
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${textClass}`}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <AlignLeft className="block h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          navItems={navItems}
          services={services}
        />
      </div>
    </nav>
  );
};

export default Navbar;
