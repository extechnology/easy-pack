import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { useState } from "react";



// ✅ Full product list
const products = [
    {
        title: "Regular Slotted Carton (RSC)",
        description:
            "Regular Slotted Cartons (RSC) are widely used packaging boxes known for their durability, versatility, and cost-effectiveness. Featuring equally sized flaps that meet at the center, they provide excellent protection for goods during shipping and storage. Ideal for multiple industries, RSC boxes are strong, efficient, and customizable for branding needs.",
        points: [
            "Standard Design – All flaps have the same length, and the two outer flaps (lengthwise) meet at the center when closed.",
            "Cost-Effective – Economical to manufacture due to minimal cutting and waste.",
            "Efficient Use of Material – Designed with maximum board utilization, reducing excess trim.",
            "Versatile Packaging – Suitable for a wide range of products across industries.",
            "Stackable Strength – Provides excellent compression strength, ideal for stacking during storage and shipping.",
            "Easy Assembly – Simple to fold and seal with tape, glue, or staples.",
            "Customizable – Can be produced in different board grades, thicknesses, and printing options.",
            "Protective – Offers good protection for contents during handling, storage, and transit.",
            "Standardized Size Availability – Widely available in standard sizes, reducing lead times.",
            "Eco-Friendly – Typically made from recyclable corrugated fiberboard, supporting sustainability.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Folding Cartons",
        description:
            "Folding cartons are lightweight, versatile packaging solutions made from paperboard, commonly used for retail products. They are easily customizable, eco-friendly, and cost-effective, offering attractive branding opportunities while ensuring product protection and convenient handling for various industries.",
        points: [
            "Lightweight – Made from paperboard, making them easy to handle and transport.",
            "Customizable Shapes & Sizes – Can be die-cut into unique structures.",
            "High-Quality Printing – Supports vibrant graphics, branding, and finishes.",
            "Cost-Effective – Affordable to manufacture in bulk.",
            "Flat Shipping – Supplied flat, saving storage and shipping space.",
            "Easy Assembly – Quick to fold and secure for packaging.",
            "Product Visibility Options – Can include windows or cutouts to display contents.",
            "Eco-Friendly – Recyclable and sustainable packaging solution.",
            "Protective – Provides adequate protection for lightweight to medium-weight items.",
            "Versatile Applications – Commonly used in food, cosmetics, pharmaceuticals, and retail products.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Litholaminated Boxes",
        description:
            "Litho laminated cartons combine high-quality lithographic printing with strong corrugated board, creating durable and visually appealing packaging. Ideal for retail displays, electronics, and consumer goods, they offer excellent print clarity, vibrant graphics, and robust protection. Perfect for businesses seeking premium branding, product visibility, and reliable packaging performance.",
        points: [
            "Premium Print Quality – High-resolution lithographic printing laminated onto corrugated board.",
            "Strong & Durable – Combines sturdy corrugated strength with luxury print finish.",
            "Brand Impact – Enhances shelf appeal with vibrant graphics and colors.",
            "Customizable Designs – Available in various sizes, shapes, and structural styles.",
            "Protective Packaging – Ensures safety of products during storage and transport.",
            "Lightweight – Easy to handle while maintaining rigidity.",
            "Versatile Applications – Suitable for electronics, cosmetics, food, beverages, and retail products.",
            "Eco-Friendly Options – Made with recyclable and sustainable materials.",
            "Flat Packed – Delivered in flat form for cost-efficient storage and shipping.",
            "Luxury Appeal – Ideal for high-end retail and promotional packaging.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Die-Cut Boxes",
        description:
            "Customized and non-customized die-cut boxes are precision-cut packaging solutions tailored to specific shapes and sizes. They provide superior fit, protection, and presentation, with customization enhancing branding, while non-customized options offer versatile, cost-effective packaging for diverse business needs.",
        points: [
            "Custom Shapes & Styles – Designed to fit unique product dimensions and branding needs.",
            "Precise Cutting – Manufactured with die-cutting technology for accuracy and consistency.",
            "Enhanced Presentation – Offers stylish designs for premium product display.",
            "Strong & Durable – Provides reliable protection during handling and shipping.",
            "Eco-Friendly Materials – Made from recyclable and sustainable corrugated board.",
            "Easy Assembly – Often self-locking or interlocking without extra tape or glue.",
            "Flat Packed – Supplied flat to save storage and shipping space.",
            "Custom Printing – Supports branding with logos, graphics, and finishes.",
            "Versatile Applications – Ideal for e-commerce, food, electronics, cosmetics, and retail.",
            "Cost-Effective – Reduces material waste while delivering high visual and functional value.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Rigid Boxes",
        description:
            "Customized and non-customized rigid boxes are durable, premium packaging solutions designed for strength and elegance. Customized versions enhance brand identity with tailored designs, while non-customized options provide reliable, ready-to-use packaging. Both ensure superior protection, luxury appeal, and lasting impressions, making them ideal for gifts, electronics, and high-value products.",
        points: [
            "Premium Quality – Made with thick, durable paperboard for a luxury feel.",
            "Strong & Sturdy – Provides excellent protection for delicate and high-value products.",
            "Luxury Appeal – Ideal for premium branding and upscale packaging.",
            "Custom Shapes & Sizes – Designed to match product requirements and aesthetics.",
            "High-End Printing & Finishing – Supports embossing, foiling, lamination, and UV finishes.",
            "Reusable – Often kept by customers as storage boxes due to durability.",
            "Eco-Friendly Options – Manufactured with recyclable and sustainable materials.",
            "Perfect for Gifting – Adds value to gift packaging with elegance and presentation.",
            "Versatile Applications – Widely used for electronics, fashion, jewelry, cosmetics, and luxury goods.",
            "Enhanced Brand Value – Creates a lasting impression that strengthens brand identity.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Corrugated Mailer Boxes",
        description:
            "Customized and non-customized corrugated mailer boxes offer strong, lightweight, and eco-friendly packaging ideal for shipping. Customized options enhance branding with logos and designs, while non-customized provide ready-to-use practicality. Both ensure secure product protection, easy handling, and a professional appearance, making them perfect for e-commerce, retail, and subscription-based businesses.",
        points: [
            "Durable Construction – Made with strong corrugated board for maximum protection.",
            "Lightweight – Easy to handle and ship without adding much weight.",
            "Self-Locking Design – Usually folds together securely without extra tape or glue.",
            "Eco-Friendly – Recyclable and sustainable packaging choice.",
            "Custom Printing – Can be branded with logos, graphics, or designs.",
            "Flat Packed – Supplied flat for cost-effective storage and transport.",
            "Protective – Shields products from damage during shipping and handling.",
            "Versatile Applications – Popular for e-commerce, subscription boxes, gifts, and retail.",
            "Easy Assembly – Quick to fold and pack products.",
            "Professional Look – Clean, stylish appearance enhances customer unboxing experience.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Display Boxes",
        description:
            "Customized and non-customized display boxes are designed to showcase products attractively in retail spaces. Customized options allow branding, graphics, and tailored sizing for maximum visibility, while non-customized versions offer ready-to-use practicality. Both enhance product presentation, boost sales, and create an organized, professional display that captures customer attention effectively.",
        points: [
            "Attractive Presentation – Designed to showcase products directly on shelves or counters.",
            "Customizable Shapes & Sizes – Can be tailored to fit different product types.",
            "High-Quality Printing – Supports branding with vibrant graphics and logos.",
            "Durable Material – Made from sturdy cardboard or corrugated board for stability.",
            "Space-Saving – Compact designs maximize retail shelf space.",
            "Easy Assembly – Quick to fold and set up at point of sale.",
            "Versatile Use – Ideal for cosmetics, food, electronics, and promotional items.",
            "Eco-Friendly – Recyclable and sustainable packaging option.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Partitioned Boxes",
        description:
            "Customized and non-customized partitioned boxes provide secure packaging with internal dividers, ideal for fragile or multiple items. Customized options allow tailored partitions for specific product dimensions, ensuring added protection. Non-customized versions offer ready-to-use solutions, minimizing movement and damage during transit while keeping products organized, safe, and neatly arranged.",
        points: [
            "Product Separation – Built-in dividers keep items neatly organized and separated.",
            "Enhanced Protection – Prevents collision, scratches, or breakage during transport.",
            "Customizable Partitions – Adjustable to fit different product sizes and shapes.",
            "Strong & Durable – Made from sturdy corrugated board for maximum safety.",
            "Versatile Applications – Ideal for glass bottles, cosmetics, electronics, and fragile goods.",
            "Eco-Friendly – Manufactured using recyclable and sustainable materials.",
            "Flat Packed – Supplied in flat form for cost-efficient shipping and storage.",
            "Improved Handling – Makes packing, storing, and unpacking products easier and safer.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Eco-Friendly Kraft Boxes",
        description:
            "Customized and non-customized eco-friendly Kraft boxes are made from recyclable, biodegradable materials, offering sustainable packaging solutions. Customized designs enhance branding with unique prints and sizes, while non-customized options provide versatile, ready-to-use packaging. Both ensure durability, eco-conscious appeal, and safe product storage, supporting businesses committed to environmental responsibility and green practices.",
        points: [
            "Eco-Friendly Material – Made from recyclable and biodegradable kraft paper.",
            "Sustainable Choice – Supports environmentally responsible packaging.",
            "Durable & Sturdy – Provides strong protection despite being lightweight.",
            "Natural Appearance – Rustic, organic look that appeals to eco-conscious consumers.",
            "Customizable Printing – Can be branded with eco-friendly inks and designs.",
            "Cost-Effective – Affordable packaging solution for businesses.",
            "Versatile Applications – Suitable for food, cosmetics, gifts, and retail products.",
            "Flat Packed – Delivered flat for efficient storage and transport.",
            "Easy Assembly – Quick to fold and set up.",
            "Customer Appeal – Enhances brand value by promoting sustainability.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
    {
        title: "Gable Boxes & Telescope Boxes",
        description:
            "Customized and non-customized gable boxes and telescope boxes provide versatile, durable, and stylish packaging solutions. Gable boxes feature a convenient handle and are ideal for food, gifts, or retail items, while telescope boxes offer superior protection with two-piece design. Customization supports branding, while non-customized options ensure quick, cost-effective packaging for businesses.",
        points: [
            "Unique Structural Design – Gable boxes feature a built-in handle, while telescope boxes offer a two-piece lid-and-base style.",
            "Strong & Durable – Made from quality board to protect products during handling and transit.",
            "Customizable Sizes & Styles – Tailored to suit different product dimensions and branding.",
            "High-Quality Printing – Supports logos, graphics, and finishes for premium presentation.",
            "Eco-Friendly – Manufactured using recyclable and sustainable materials.",
            "Flat Packed – Delivered flat for space-saving storage and cost-efficient shipping.",
            "Versatile Applications – Ideal for gifts, bakery, apparel, electronics, and luxury items.",
            "Enhanced Customer Appeal – Combines practicality with stylish packaging for an impressive unboxing.",
        ],
        image:
            "https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=",
    },
];




export default function Products() {


    return (


        <div className="min-h-screen bg-gray-50 py-16">


            {/* Banner */}
            <section
                className="relative bg-cover bg-center text-white py-24 px-6 text-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://thermal-space.com/wp-content/uploads/package-and-delivery-1.jpg')",
                }}
            >
                {/* Dark overlay (inset effect) */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold"
                    >
                        Boxes That Build Your Brand
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 italic"
                    >
                        Custom-designed boxes do more than protect,  they showcase your identity,
                        enhance product appeal, and create lasting impressions,
                        turning every package into a powerful brand-building tool.
                    </motion.p>
                </div>

                {/* Decorative blobs */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-700 rounded-full blur-3xl opacity-20 z-0"></div>
            </section>



            {/* Product Grid */}
            <div className="px-2 lg:px-12 pb-16 py-12">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {products.map((product, idx) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>


        </div>


    )


}



function ProductCard({ product }: { product: any }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 text-white"
                >
                    <span className="text-xs uppercase tracking-wide bg-black/40 px-3 py-1 rounded-full">
                        Featured
                    </span>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 text-sm text-gray-700">
                    <AnimatePresence>
                        {product.points
                            .slice(0, expanded ? product.points.length : 3)
                            .map((point: string, i: number) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle
                                        size={16}
                                        className="text-green-600 shrink-0 mt-0.5"
                                    />
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                    </AnimatePresence>
                </ul>

                {/* Expand / Collapse */}
                {product.points.length > 3 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-3 flex items-center text-green-700 text-sm font-medium hover:underline transition"
                    >
                        {expanded ? (
                            <>
                                Show Less <ChevronUp size={16} className="ml-1" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDown size={16} className="ml-1" />
                            </>
                        )}
                    </button>
                )}

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 self-start px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white transition-all duration-300"
                >
                    Customize & Order Now{" "}
                    <ShoppingCart className="inline-block ml-2 h-4 w-4" />
                </motion.button>
            </div>
        </motion.div>
    );
}
