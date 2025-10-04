import { motion } from "framer-motion";

export default function ProductDetailsSkeleton() {
    return (
        <section className="w-full min-h-screen px-2 py-16 sm:py-20 md:px-10 lg:px-20 animate-pulse">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Breadcrumb */}
                <div className="h-4 w-3/5 bg-gray-200 rounded mb-6"></div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Section - Image */}
                    <div>
                        <div className="w-full h-96 bg-gray-200 rounded-xl mb-4"></div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 overflow-x-auto pb-3">
                            {Array(4).fill(0).map((_, idx) => (
                                <div
                                    key={idx}
                                    className="w-20 h-20 bg-gray-200 rounded-lg"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Info */}
                    <div className="space-y-4">

                        {/* Title */}
                        <div className="h-6 w-2/3 bg-gray-200 rounded"></div>

                        {/* Availability & Rating */}
                        <div className="flex items-center gap-4">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-4 w-12 bg-gray-200 rounded"></div>
                        </div>

                        {/* Description */}
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

                        {/* Price */}
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>

                        {/* Quantity & Paper */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="h-10 w-24 bg-gray-200 rounded"></div>
                            <div className="flex gap-2">
                                <div className="h-10 w-20 bg-gray-200 rounded"></div>
                                <div className="h-10 w-20 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="h-10 w-52 bg-gray-200 rounded"></div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                            <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
                            <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
                        </div>

                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-14 border-t-2 border-dashed pt-10">
                    <div className="h-6 w-1/3 bg-gray-200 rounded mb-3 mx-auto"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-6 mx-auto"></div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array(4).fill(0).map((_, idx) => (
                            <div key={idx} className="h-52 bg-gray-200 rounded-lg"></div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
