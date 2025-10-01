import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";




interface Product {
    id: number;
    title: string;
    description: string;
    points: string[];
    image: string;
    price: number;
    oldPrice?: number;
    inStock: boolean;
}




export default function ProductCard({ product }: { product: Product }) {


    const [selectedPaper, setSelectedPaper] = useState("Brown");


    return (


        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

            {/* Image */}
            <div className="relative h-56 overflow-hidden">


                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>


                {/* Stock Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4"
                >

                    {product.inStock ? (
                        <span className="flex items-center gap-1 text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full shadow-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            In Stock
                        </span>
                    ) : (
                        <span className="flex items-center gap-1 text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full shadow-sm">
                            <XCircle className="w-4 h-4" />
                            Out of Stock
                        </span>
                    )}

                </motion.div>

            </div>




            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">


                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                    {product.title}
                </h3>


                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl font-semibold text-gray-900">
                        ₹{product.price}
                    </span>
                    {product.oldPrice && (
                        <span className="text-sm line-through text-gray-400">
                            ₹{product.oldPrice}
                        </span>
                    )}
                </div>


                {/* Paper Type Options */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Paper Type</p>
                    <div className="flex gap-2">
                        {["Brown", "White"].map((paper) => (
                            <button
                                key={paper}
                                onClick={() => setSelectedPaper(paper)}
                                className={`px-4 py-2 rounded-md border text-sm font-medium transition-all hover:cursor-pointer ${selectedPaper === paper
                                    ? "bg-green-600 text-white border-green-600 shadow-sm"
                                    : "bg-gray-50 border-gray-300 text-gray-700 hover:border-green-600"
                                    }`}
                            >
                                {paper}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                </p>


                {/* CTA */}
                <Link to={`/productdetails/${product.id}`} className="mt-auto">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        className={`w-full px-6 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2
              ${product.inStock
                                ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:cursor-pointer"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        {product.inStock ? "Customize & Order" : "Out of Stock"}
                        <ShoppingCart className="h-4 w-4" />
                    </motion.button>
                </Link>

            </div>

        </motion.div>

    );

}
