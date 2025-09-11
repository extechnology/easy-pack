import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";



export default function Cta() {



    return (


        <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6">


            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">


                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Make a Perfect Box or Packings <br className="hidden sm:block" />
                        for your Business
                    </h2>
                    <p className="mt-3 text-gray-300 text-sm md:text-base">
                        Custom solutions designed to fit your packaging needs.
                    </p>
                </motion.div>


                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <a
                        href="https://wa.me/+919656247222?text=Hi%20Easypack%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20packaging%20solutions."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
                    >
                        Quote Now
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>

            </div>


        </section>


    )



}
