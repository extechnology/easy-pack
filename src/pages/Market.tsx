import { motion } from "framer-motion";
import Cta from "@/components/home/Cta";


const industries = [
    {
        title: "Food & Beverage Industry",
        desc: "Easy Pack delivers premium cardboard boxes and packaging solutions exclusively designed for the food and beverage industry. Ensuring durability, hygiene, freshness, and eco-friendliness, we support restaurants, bakeries, cafes, and delivery services with innovative and customized solutions.",
        img: "https://wp-headless.elca-cloud.com/glion/wp-content/uploads/sites/2/2025/06/What-is-food-and-beverage-service-2.jpg",
    },
    {
        title: "E-commerce & Online Retail",
        desc: "High-quality cardboard packaging for safe delivery, product protection, and professional presentation. We support clothing, electronics, and essentials with customized solutions that enhance customer experience and logistics reliability.",
        img: "https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=612x612&w=0&k=20&c=J2A6-q3RtqbISouQVBgpYtI1Ft9KeVsANUFHgG4Olbc=",
    },
    {
        title: "Electronics & Appliances",
        desc: "Sturdy, eco-friendly boxes for mobiles, laptops, and appliances. Designed to ensure product protection, safe transit, and professional presentation while promoting sustainability.",
        img: "https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg",
    },
    {
        title: "Pharmaceuticals & Healthcare",
        desc: "Specialized, eco-friendly packaging for medicines, devices, and healthcare essentials. Ensures safety, hygiene, durability, and compliance with industry standards.",
        img: "https://assets.thehansindia.com/h-upload/2019/12/28/249445-pharma.webp",
    },
    {
        title: "Cosmetics & Personal Care",
        desc: "Premium, customizable boxes that balance durability, style, and sustainability. Designed to enhance beauty product presentation and brand identity.",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/8/XN/NF/SB/157564005/beauty-personal-care.jpg",
    },
    {
        title: "Stationery & Printing",
        desc: "Durable, eco-friendly packaging for books, office supplies, and printed materials. Ensures professional appearance, protection, and organized presentation.",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/8/331131366/TO/YY/KQ/2783692/office-stationery-printing.jpg",
    },
    {
        title: "Furniture & Home Décor",
        desc: "Sturdy packaging for heavy and delicate décor items. Ensures safe handling, aesthetic appeal, and reduced damage risk during storage and transit.",
        img: "https://media.designcafe.com/wp-content/uploads/2020/12/21184029/living-room-furniture-decor-ideas.jpg",
    },
    {
        title: "Automotive & Spare Parts",
        desc: "Reliable cardboard solutions for heavy loads and sensitive components. Customizable, eco-friendly packaging designed for efficiency and safety.",
        img: "https://www.shutterstock.com/image-illustration/car-parts-auto-spare-isolated-600nw-2283939101.jpg",
    },
    {
        title: "Agriculture & Farming",
        desc: "Eco-friendly boxes for fresh produce, seeds, and grains. Ensures freshness, safety, and cost-effective delivery for agricultural businesses.",
        img: "https://cdn.prod.website-files.com/66604a97df59732aab43fcc8/674882e6935eaaad6bdf3fb7_post-23.webp",
    },
    {
        title: "Textiles & Garments",
        desc: "Premium packaging for clothing and fabrics. Combines durability, branding, and eco-friendliness to enhance product presentation and storage.",
        img: "https://indiantextilejournal.com/wp-content/uploads/Textile1.jpg",
    },
];




export default function OurMarket() {



    return (



        <section className="w-full bg-white text-gray-900">



            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img
                    src="/Our-Market-banner.jpg"
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
