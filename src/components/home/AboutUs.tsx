import { CheckCircle } from "lucide-react";
import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { Link } from "react-router-dom";




export default function AboutUs() {


    return (


        <section className="w-full px-2 sm:px-10 lg:px-20 py-8 sm:py-16">


            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                {/* LEFT column: Heading + Large Image */}
                <MotionEffect inView slide={{ direction: "down" }} fade zoom delay={0.4 * 0.1}>


                    <div className="flex flex-col gap-6">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            Easypack Packing Solutions
                            <br />
                            Your One-Stop Packaging Partner
                        </h2>


                        <div className="relative rounded-2xl overflow-hidden shadow-lg group">


                            {/* Image */}
                            <img
                                src="/whyus-1.jpg"
                                alt="Packaging industry machinery"
                                className="w-full object-cover min-h-[260px] sm:min-h-[320px] lg:min-h-[640px] transform transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />


                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Button */}
                            <Link to={"/about"}>
                                <button className="absolute bottom-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transform transition">
                                    Explore more about us
                                </button>
                            </Link>

                        </div>

                    </div>


                </MotionEffect>



                {/* RIGHT column: Description + Specialty + Small image */}
                <MotionEffect inView slide={{ direction: "down" }} fade zoom delay={0.4 * 0.1}>


                    <div className="flex flex-col gap-8 h-full">


                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base max-w-[520px] leading-relaxed">
                            Easypack Packing Solutions is your one-stop shop for all your packaging needs,
                            from printing to packaging. Since our humble beginning in 2014 in Kakkanchery,
                            Malappuram, we have been committed to delivering top-quality service by leveraging
                            advanced machinery, innovative concepts, and international expertise.
                            <br />
                            <br />
                            Despite challenges during the pandemic, our dedication to quality, flexibility, and
                            timely delivery has fueled our growth across South India. Today, Easypack stands as
                            a trusted partner known for cost-effectiveness, innovative solutions, and client satisfaction.
                        </p>


                        {/* Specialty */}
                        <div>

                            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "10+ Years of International Expertise",
                                    "Complete Packaging Solutions",
                                    "Advanced Machinery & Innovation",
                                    "Flexible & Cost-Effective Service",
                                    "Timely Delivery Across South India",
                                    "Client-Focused Approach",
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 text-gray-700 bg-white/40 rounded-md px-2 py-1"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>


                        {/* Small image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group self-stretch">
                            <img
                                src="/whyus-2.jpg"
                                alt="Easypack factory packaging process"
                                className="w-full object-cover h-[220px] sm:h-[240px] lg:h-[360px] transform transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                    </div>

                </MotionEffect>

            </div>

        </section>

    );

}
