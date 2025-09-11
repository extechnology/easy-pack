import { motion } from "framer-motion";
import Cta from "@/components/home/Cta";


const industries = [
    {
        title: "Food & Beverage Industry",
        desc: "Easy Pack delivers premium cardboard boxes and packaging solutions exclusively designed for the food and beverage industry. Ensuring durability, hygiene, freshness, and eco-friendliness, we support restaurants, bakeries, cafes, and delivery services with innovative and customized solutions.",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "E-commerce & Online Retail",
        desc: "High-quality cardboard packaging for safe delivery, product protection, and professional presentation. We support clothing, electronics, and essentials with customized solutions that enhance customer experience and logistics reliability.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Electronics & Appliances",
        desc: "Sturdy, eco-friendly boxes for mobiles, laptops, and appliances. Designed to ensure product protection, safe transit, and professional presentation while promoting sustainability.",
        img: "https://images.unsplash.com/photo-1581091870633-7dc074f8b9f6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Pharmaceuticals & Healthcare",
        desc: "Specialized, eco-friendly packaging for medicines, devices, and healthcare essentials. Ensures safety, hygiene, durability, and compliance with industry standards.",
        img: "https://images.unsplash.com/photo-1588776814546-ec6f5c2e20d0?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Cosmetics & Personal Care",
        desc: "Premium, customizable boxes that balance durability, style, and sustainability. Designed to enhance beauty product presentation and brand identity.",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4f3ae9f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Stationery & Printing",
        desc: "Durable, eco-friendly packaging for books, office supplies, and printed materials. Ensures professional appearance, protection, and organized presentation.",
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Furniture & Home Décor",
        desc: "Sturdy packaging for heavy and delicate décor items. Ensures safe handling, aesthetic appeal, and reduced damage risk during storage and transit.",
        img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Automotive & Spare Parts",
        desc: "Reliable cardboard solutions for heavy loads and sensitive components. Customizable, eco-friendly packaging designed for efficiency and safety.",
        img: "https://images.unsplash.com/photo-1523983303491-9cc7b6b4d1e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Agriculture & Farming",
        desc: "Eco-friendly boxes for fresh produce, seeds, and grains. Ensures freshness, safety, and cost-effective delivery for agricultural businesses.",
        img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Textiles & Garments",
        desc: "Premium packaging for clothing and fabrics. Combines durability, branding, and eco-friendliness to enhance product presentation and storage.",
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
];




export default function OurMarket() {



    return (



        <section className="w-full bg-white text-gray-900">



            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
                    alt="Our Market"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />

                {/* Black Inset Overlay */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 text-center px-6"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                        Our Market
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto italic">
                        Serving industries with innovative, durable, and sustainable packaging solutions tailored to every need.
                    </p>
                </motion.div>
            </div>




            {/* Industries Section */}
            <div className="max-w-7xl mx-auto px-2 py-20">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {industries.map((industry, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={industry.img}
                                    alt={industry.title}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-semibold text-xl mb-3 group-hover:text-green-600 transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-5">
                                    {industry.desc}
                                </p>
                                <a
                                    href="https://wa.me/+919656247222?text=Hi%20Easypack%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20packaging%20solutions."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 self-start px-4 py-2 bg-black text-white text-sm rounded-full shadow-md hover:bg-gray-800 transition"
                                >
                                    Learn More →
                                </a>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>



            <Cta />


        </section>


    );


}
