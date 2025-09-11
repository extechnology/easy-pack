import { motion } from "framer-motion";
import { Link } from "react-router-dom";




export default function MobileHero() {


    // Product Data 
    const products = [
        {
            title: "Litholaminated boxes",
            img: "https://packwire.com/images/home/boxs/header-box-new/blue-folding.png",
            desc: "Litho laminated cartons combine high-quality lithographic printing with strong corrugated board, creating durable and visually appealing packaging.",
        },
        {
            title: "Die-Cut Boxes",
            img: "https://packwire.com/images/home/boxs/header-box-new/blue-rigid.png",
            desc: "Customized and non-customized die-cut boxes are precision-cut packaging solutions tailored to specific shapes and sizes.",
        },
        {
            title: "Rigid Boxes",
            img: "https://packwire.com/images/home/boxs/header-box-new/blue-mailer.png",
            desc: "Customized and non-customized rigid boxes are durable, premium packaging solutions designed for strength and elegance.",
        },
        {
            title: "Corrugated Mailer Boxes",
            img: "https://packwire.com/images/home/boxs/header-box-new/blue-shipping.png",
            desc: "Customized and non-customized corrugated mailer boxes offer strong, lightweight, and eco-friendly packaging ideal for shipping.",
        },
    ];



    return (



        <section className="block lg:hidden bg-gradient-to-b from-red-500 to-red-600 w-full px-6 py-20 space-y-12 text-center">



            {/* Hero Content */}
            <motion.div
                className="space-y-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                <h1 className="text-4xl font-extrabold leading-tight">
                    Strength You <br /> Can Trust,
                    <br /> Style You Can See.
                </h1>


                <p className="text-base opacity-80">
                    Ensuring your products are safe, secure, and beautifully presented.
                    Built with durability and designed for impact, we deliver boxes that
                    protect and promote your brand.
                </p>

            </motion.div>



            {/* Products */}
            <div className="grid grid-cols-1 gap-10 text-white mt-12">


                {products.map((item, i) => (


                    <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 hover:bg-white/20 transition"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >

                        <motion.img
                            src={item.img}
                            alt={item.title}
                            className="w-40 h-auto mx-auto object-contain"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />


                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.desc}</p>


                        <Link to={'/products'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold shadow-md hover:cursor-pointer hover:bg-yellow-500 transition"
                            >
                                Customize it
                            </motion.button>
                        </Link>

                    </motion.div>


                ))}

            </div>


        </section>

    );


}
