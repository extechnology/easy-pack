import LogoLoop from "../LogoLoop";




export default function OurClients() {


    const imageLogos = [
        { src: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg", alt: "Company 1", href: "https://company1.com" },
        { src: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg", alt: "Company 2", href: "https://company2.com" },
        { src: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg", alt: "Company 3", href: "https://company3.com" },
    ];


    return (


        <section className="py-8 border-t-2 border-dashed border-gray-200">


            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">


                {/* Heading */}
                <div className="text-center mb-16 relative">
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
                        logos={imageLogos}
                        speed={120}
                        direction="left"
                        logoHeight={90} // we'll adjust this with responsive
                        gap={20}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                        style={{ maxHeight: '100%' }}
                    />
                    <LogoLoop
                        logos={imageLogos}
                        speed={120}
                        direction="right"
                        logoHeight={90} // same as above
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
