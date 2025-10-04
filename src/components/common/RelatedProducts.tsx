import { AnimatePresence, motion } from "framer-motion";
import { useGetAllProducts } from "@/services/products/queries";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../loaders/ProductSkelton";
import ErrorLoader from "../loaders/ErrorLoader";
import { Search } from "lucide-react";



export default function RelatedProducts() {


    const { data: productsData, isLoading, isFetching, isError } = useGetAllProducts(1);


    return (

        <section className="w-full ">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {(isLoading || isFetching) && <ProductCardSkeleton count={3} />}

            </div>

            {isError &&  <ErrorLoader message="Something went wrong on our servers." onRetry={() => window.location.reload()} />}


            { !isLoading && !isError && !isFetching && !productsData?.results.length && (

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
                        Come back later 
                    </p>
                </div>

            )}

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {!isLoading && !isError && !isFetching && productsData?.results.length && productsData?.results?.slice(0, 3)?.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                    ))}
                </AnimatePresence>

            </motion.div>

        </section>

    )


}
