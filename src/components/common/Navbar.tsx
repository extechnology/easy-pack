import { useState, useEffect } from "react";
import { AlignLeft, X, LogOut, UserRound } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import AuthModal from "@/pages/Auth";
import { useAuth } from "@/context/AuthContext";
import { useGetAllProducts } from "@/services/products/queries";




const Navbar = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();


  // Auth context
  const { isAuthenticated, logout } = useAuth();


  // Get all products
  const { data: products, isLoading, isError, isFetching } = useGetAllProducts(1);



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
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }

  }, [location.pathname]);



  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Market", href: "/market" },
    { name: "Contact Us", href: "/contact" },
  ];



  // Dynamic classes
  const isHome = location.pathname === "/";
  const bgClass = isHome && !isScrolled ? "bg-transparent" : "bg-white";
  const textClass = isHome && !isScrolled ? "text-white" : "text-gray-800";



  // Auth click
  const handleAuthClick = () => {

    if (isAuthenticated) {

      logout();

    } else {

      setIsAuthModalOpen(true);

    }
  };





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
              ) : (
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

                          <div
                            className="flex h-full w-full select-none flex-col justify-end rounded-md 
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

                        {isLoading || products?.results?.length === 0 || isFetching || isError ? Array.from({ length: 4 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="animate-pulse flex gap-3 items-start rounded-md p-2 bg-gray-200/50"
                          >
                            {/* Image skeleton */}
                            <div className="w-14 h-14 bg-gray-200 rounded-xl" />

                            {/* Text skeleton */}
                            <div className="flex-1 space-y-2 py-1">
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-3 bg-gray-200 rounded w-full"></div>
                            </div>
                          </div>
                        ))
                          : products?.results?.slice(0, 4).map((service) => (
                            <NavigationMenuLink key={service?.title} asChild>
                              <Link
                                to={`/products`}
                                className="group grid grid-cols-[60px_1fr] gap-3 rounded-md p-0 hover:bg-accent transition-colors"
                              >
                                <img
                                  src={service?.paper_brown_img}
                                  loading="lazy"
                                  alt={service?.title}
                                  className="w-14 h-14 object-contain rounded-xl"
                                />
                                <div>
                                  <div className="text-sm font-medium leading-none group-hover:underline line-clamp-4">
                                    {service?.title}
                                  </div>
                                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                    {service?.description}
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



          {/* Right side buttons */}
          <div className="flex items-center gap-4">

            {/* Auth Button */}
            <Button
              onClick={handleAuthClick}
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full ${isHome && !isScrolled ? "bg-white text-black hover:bg-gray-100 hover:cursor-pointer hover:scale-105" : "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] hover:cursor-pointer"} `}
            >
              {isAuthenticated ? (
                <>
                  <LogOut size={16} /> Logout
                </>
              ) : (
                <>
                  <UserRound size={16} /> Login
                </>
              )}
            </Button>

          </div>


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
          services={products?.results || []}
          isError={isError}
          isLoading={isLoading}
          isFetching={isFetching}
        />

      </div>

      {/* Place modal once here */}
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />

    </nav>
  );
};

export default Navbar;
