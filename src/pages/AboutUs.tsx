import { motion } from "framer-motion";




export default function AboutUs() {



    return (



        <section className="w-full bg-white text-gray-900 overflow-hidden">



            {/* Hero Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gray-100 overflow-hidden">


                <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-3d-render-of-corrugated-cardboard-boxes-image_3803840.jpg"
                    alt="Packaging factory"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 text-center px-4 sm:px-6"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                        About Us
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Easypack Packing Solutions – crafting packaging that protects,
                        enhances, and presents your brand’s true value.
                    </p>
                </motion.div>

            </div>



            {/* Company Story */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 leading-tight">
                        Who <span className="text-indigo-600">We Are</span>
                    </h2>

                    <div className="w-20 sm:w-28 h-1 bg-indigo-600 rounded mb-6 sm:mb-8"></div>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold text-gray-900">
                            Easypack Packing Solutions
                        </span>{" "}
                        is your one-stop shop for all your packaging needs, from printing to
                        packaging. Established in 2014 in Kakkanchery, Malappuram, we draw
                        on over{" "}
                        <span className="font-semibold text-indigo-600">
                            10 years of international experience
                        </span>{" "}
                        in the packaging industry.
                    </p>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        From humble beginnings, we have expanded with advanced machinery and
                        operations across South India. We are known for our{" "}
                        <span className="font-semibold text-gray-900">
                            flexible approach, innovative ideas, timely delivery,
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-gray-900">cost-effectiveness.</span>
                    </p>

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >

                    <img
                        src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
                        alt="Our Factory"
                        loading="lazy"
                        className="rounded-2xl shadow-xl object-cover w-full h-[250px] sm:h-[320px] md:h-[380px] transform group-hover:scale-105 transition duration-700 ease-in-out"
                    />

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>

                </motion.div>

            </div>



            {/* Vision & Mission */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 sm:py-16 md:py-20">

                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_50%)]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
                    >

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative inline-block">
                            Our Vision
                            <span className="absolute left-0 -bottom-1 w-12 sm:w-16 h-1 bg-indigo-500 rounded-full"></span>
                        </h3>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            To serve as the primary point of contact for our clients by
                            offering{" "}
                            <span className="font-semibold text-white">
                                high-quality paper corrugated boxes
                            </span>{" "}
                            at competitive prices. We continually strive to improve our
                            services through{" "}
                            <span className="font-semibold text-indigo-400">
                                expertise and cutting-edge machinery
                            </span>{" "}
                            to reinforce our leading position in the industry.
                        </p>

                    </motion.div>



                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
                    >

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative inline-block">
                            Our Mission
                            <span className="absolute left-0 -bottom-1 w-12 sm:w-16 h-1 bg-pink-500 rounded-full"></span>
                        </h3>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            To offer{" "}
                            <span className="font-semibold text-white">
                                comprehensive packaging solutions
                            </span>
                            , from printing to packaging, while ensuring{" "}
                            <span className="font-semibold text-indigo-400">
                                quality and innovation
                            </span>
                            . We are committed to{" "}
                            <span className="font-semibold text-white">
                                advanced technologies
                            </span>{" "}
                            and genuine service to meet client needs with excellence.
                        </p>

                    </motion.div>

                </div>

            </div>




            {/* Infrastructure */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

                <motion.img
                    src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
                    alt="Infrastructure"
                    loading="lazy"
                    className="rounded-2xl shadow-lg object-cover w-full h-[240px] sm:h-[300px] md:h-[350px]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Our Infrastructure
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        Our factory is equipped with advanced pre- and post-press equipment,
                        including{" "}
                        <span className="font-semibold text-gray-800">
                            UV, lamination, drip-off, and laser cutting
                        </span>
                        , as well as carton-making machinery for{" "}
                        <span className="font-semibold text-gray-800">
                            fluting, die punching, gluing, and patching
                        </span>
                        . This comprehensive setup allows us to operate as a{" "}
                        <span className="font-semibold text-indigo-600">
                            full-fledged manufacturing unit
                        </span>
                        .
                    </p>
                </motion.div>

            </div>


            {/* Specializations */}
            <div className="bg-gray-900 text-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
                        We Are Specialized In
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: "3Ply, 5Ply, 7Ply | A, B, C, DE & E Flute",
                                img: "https://cdn-icons-png.flaticon.com/512/5270/5270211.png",
                            },
                            {
                                title: "Corrugated Cartons | Master Boxes",
                                img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
                            },
                            {
                                title: "Shipping & Printed Cartons",
                                img: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
                            },
                            {
                                title: "Diecut Boxes | Counter Displays",
                                img: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
                            },
                            {
                                title: "Printing | Lamination | UV - Drip Off",
                                img: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
                            },
                            {
                                title: "Handle Boxes | Window Boxes",
                                img: "https://cdn-icons-png.flaticon.com/512/2920/2920258.png",
                            },
                            {
                                title: "Dividers & Inserts",
                                img: "https://cdn-icons-png.flaticon.com/512/1239/1239712.png",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-green-600 transition-all duration-300"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
                                />
                                <p className="text-sm sm:text-base font-medium">{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Quality Assurance */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5 sm:space-y-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                            Your Product Deserves
                        </span>{" "}
                        the Perfect Box
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        At Easypaks, quality is at the core of everything we do. From raw
                        material selection to final delivery, every stage undergoes rigorous
                        testing and inspection to meet international standards.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        Our Quality Assurance Policy ensures precision, durability, and
                        consistency. We emphasize eco-friendly practices, innovative design,
                        and continuous improvement — promising not just boxes, but packaging
                        excellence.
                    </p>
                </motion.div>

                <motion.img
                    src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
                    alt="Quality Assurance"
                    loading="lazy"
                    className="rounded-2xl shadow-2xl object-cover w-full h-[240px] sm:h-[320px] md:h-[420px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                />

            </div>

        </section>

    );


}
