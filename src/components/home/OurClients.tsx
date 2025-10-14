import LogoLoop from "../LogoLoop";




export default function OurClients() {


    const imageLogosone = [
        { src: "/Client-1.jpg", alt: "Company 1" },
        { src: "/Client-2.jpg", alt: "Company 2" },
        { src: "/Client-3.jpg", alt: "Company 3" },
        { src: "/Client-4.jpg", alt: "Company 3" },
        { src: "/Client-5.jpg", alt: "Company 3" },
        { src: "/Client-6.jpg", alt: "Company 3" },
        { src: "/Client-7.jpg", alt: "Company 3" },
        { src: "/Client-8.jpg", alt: "Company 3" },
    ];


    const imageLogostwo = [
        { src: "/Client-9.jpg", alt: "Company 1" },
        { src: "/Client-10.jpg", alt: "Company 2" },
        { src: "/Client-11.jpg", alt: "Company 3" },
        { src: "/Client-12.jpg", alt: "Company 3" },
        { src: "/Client-13.jpg", alt: "Company 3" },
        { src: "/Client-14.jpg", alt: "Company 3" },
        { src: "/Client-15.jpg", alt: "Company 3" },
        { src: "/Client-16.jpg", alt: "Company 3" },
        { src: "/Client-17.jpg", alt: "Company 3" },
        { src: "/Client-18.jpg", alt: "Company 3" },
    ];


    return (


        <section className="py-8 border-t-2 border-dashed border-gray-200 hidden sm:block">


            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-14 relative">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block group">
                        Our Customers
                        {/* Animated underline */}
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto italic">
                        Trusted by amazing companies around the globe. Experience seamless collaboration and performance.
                    </p>
                </div>


                <div className="relative overflow-hidden h-[300px] sm:h-[250px] xs:h-[180px]">
                    <LogoLoop
                        logos={imageLogosone}
                        speed={120}
                        direction="left"
                        logoHeight={100} // we'll adjust this with responsive
                        gap={20}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                        style={{ maxHeight: '100%' }}
                    />
                    <LogoLoop
                        logos={imageLogostwo}
                        speed={120}
                        direction="right"
                        logoHeight={100} // same as above
                        gap={20}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                        style={{ maxHeight: '100%' }}
                    />
                </div>

            </div>
        </section>
    );
}
