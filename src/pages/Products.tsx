import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";
import { useGetAllProducts } from "@/services/products/queries";
import { useState } from "react";
import ProductCardSkeleton from "@/components/loaders/ProductSkelton";
import ErrorLoader from "@/components/loaders/ErrorLoader";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function Products() {
    

    // current page
    const [page, setPage] = useState<number>(1);



    // get all products
    const { data: products, isLoading, isError, isFetching } = useGetAllProducts(page);



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
            <div className="px-2 lg:px-12 pb-0 pt-12">


                {isError && <ErrorLoader message="Something went wrong on our servers." onRetry={() => window.location.reload()} />}


                {products?.results?.length === 0 && !isLoading && !isFetching && !isError && (

                    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                        {/* Pulsing Search Icon */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="mb-6"
                        >
                            <Search className="w-16 h-16 text-gray-400" />
                        </motion.div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                            No products found
                        </h2>

                        {/* Optional subtitle */}
                        <p className="text-gray-500 max-w-sm">
                            Try searching for another product or check back later.
                        </p>
                    </div>

                )}


                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    <AnimatePresence>

                        {(isLoading || isFetching) && <ProductCardSkeleton count={6} />}


                        {!isLoading && !isFetching && !isError && products?.results?.length && products?.results?.map((product, idx) => (
                            <ProductCard key={idx} product={product} />
                        ))}


                    </AnimatePresence>


                </motion.div>


                {/* Pagination Bar */}
                <div className="flex justify-center px-4 py-3 gap-2 items-center">

                    <Button variant="outline" className="py-5 px-5 bg-gradient-to-r from-green-600 to-green-500 text-white hover:cursor-pointer" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
                        Previous
                    </Button>

                    <span className="text-sm font-medium dark:text-white">Page {page} of {products?.total_pages ?? 0}</span>

                    <Button variant="outline" className="py-5 px-5 bg-gradient-to-r from-green-600 to-green-500 text-white hover:cursor-pointer" size="sm" disabled={page === products?.total_pages} onClick={() => setPage(page + 1)}>
                        Next
                    </Button>

                </div>


            </div>


        </div>

    )

}




