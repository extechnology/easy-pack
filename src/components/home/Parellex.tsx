import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";



export default function Hero() {


    const containerRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });



    // Parallax for boxes
    const box1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const box2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const box3Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const box4Y = useTransform(scrollYProgress, [0, 1], [0, 20]);


    const box1X = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const box2X = useTransform(scrollYProgress, [0, 1], [0, 260]);
    const box3X = useTransform(scrollYProgress, [0, 1], [0, 510]);
    const box4X = useTransform(scrollYProgress, [0, 1], [0, 710]);



    // Right text (scrolls up + fades out)
    const textY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);


    // Product cards (fade in after parallax finishes)
    const cardOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const cardY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);



    return (


        <section ref={containerRef} className="relative h-[300vh] bg-red-500 w-full pb-20">


            {/* Sticky hero container */}
            <div className="sticky top-0 h-screen flex items-center justify-between px-8 lg:px-20 max-w-[1600px] mx-auto">


                {/* Left: Boxes */}
                <div className="relative flex-1 flex items-center justify-center">
                    <motion.img
                        src="https://packwire.com/images/home/boxs/header-box-new/blue-folding.png"
                        alt="box1"
                        loading="lazy"
                        className="w-24 sm:w-28 absolute z-40 top-32 left-24"
                        style={{ y: box1Y, x: box1X }}
                    />
                    <motion.img
                        src="https://packwire.com/images/home/boxs/header-box-new/blue-rigid.png"
                        alt="box2"
                        loading="lazy"
                        className="w-32 sm:w-72 absolute z-30 top-10 left-28"
                        style={{ y: box2Y, x: box2X }}
                    />
                    <motion.img
                        src="https://packwire.com/images/home/boxs/header-box-new/blue-mailer.png"
                        alt="box3"
                        loading="lazy"
                        className="w-40 sm:w-72 absolute z-20 -top-10 left-60"
                        style={{ y: box3Y, x: box3X }}
                    />
                    <motion.img
                        src="https://packwire.com/images/home/boxs/header-box-new/blue-shipping.png"
                        alt="box4"
                        loading="lazy"
                        className="w-44 sm:w-72 absolute z-10 -top-40 left-96"
                        style={{ y: box4Y, x: box4X }}
                    />
                </div>



                {/* Right: Hero Text (scrolls out) */}
                <motion.div
                    className="flex-1 text-white space-y-6"
                    style={{ y: textY, opacity: textOpacity }}
                >
                    <h1 className="text-3xl sm:text-6xl font-extrabold leading-tight">
                        Strength You <br /> Can Trust,<br /> Style You Can See.
                    </h1>
                    <p className="text-lg sm:text-lg opacity-80">
                        Ensuring your products are safe, secure, and beautifully presented. Built with durability and designed for impact, we deliver boxes that protect and promote your brand.
                    </p>
                    <Link to={'/products'}>
                        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition hover:cursor-pointer">
                            Customize your Box
                        </button>
                    </Link>
                </motion.div>


            </div>


            <motion.div
                style={{ opacity: cardOpacity, y: cardY }}
                className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] px-8 lg:px-20 py-24 custom-bottom"
            >
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center text-white">
                    {[
                        { title: "Litholaminated boxes", desc: "Litho laminated cartons combine high-quality lithographic printing with strong corrugated board, creating durable and visually appealing packaging." },
                        { title: "Die-Cut Boxes", desc: "Customized and non-customized die-cut boxes are precision-cut packaging solutions tailored to specific shapes and sizes." },
                        { title: "Rigid Boxes", desc: "Customized and non-customized rigid boxes are durable, premium packaging solutions designed for strength and elegance." },
                        { title: "Corrugated Mailer Boxes ", desc: "Customized and non-customized corrugated mailer boxes offer strong, lightweight, and eco-friendly packaging ideal for shipping. " },
                    ].map((item, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-sm opacity-80">{item.desc}</p>
                            <Link to={'/products'}>
                                <button className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition hover:cursor-pointer">
                                    Customize it
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>


        </section>

    );


}
