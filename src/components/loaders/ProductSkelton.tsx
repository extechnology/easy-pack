import { motion } from "framer-motion";


interface ProductCardSkeletonProps {
    count?: number;
}



export default function ProductCardSkeleton({ count = 1 }: ProductCardSkeletonProps) {


    return (


        <>

            {Array.from({ length: count }).map((_, idx) => (

                <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full animate-pulse"
                >

                    {/* Image Skeleton */}
                    <div className="relative h-56 w-full bg-gray-200" />

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">

                        {/* Title Skeleton */}
                        <div className="h-5 w-3/4 bg-gray-200 rounded-md" />

                        {/* Price Skeleton */}
                        <div className="h-6 w-1/3 bg-gray-200 rounded-md" />

                        {/* Paper Type Buttons Skeleton */}
                        <div className="flex gap-2">
                            <div className="h-8 w-16 bg-gray-200 rounded-md" />
                            <div className="h-8 w-16 bg-gray-200 rounded-md" />
                        </div>

                        {/* Description Skeleton */}
                        <div className="space-y-2">
                            <div className="h-3 w-full bg-gray-200 rounded-md" />
                            <div className="h-3 w-5/6 bg-gray-200 rounded-md" />
                            <div className="h-3 w-4/6 bg-gray-200 rounded-md" />
                        </div>

                        {/* CTA Skeleton */}
                        <div className="mt-auto">
                            <div className="h-10 w-full bg-gray-200 rounded-full" />
                        </div>

                    </div>

                </motion.div>

            ))}

        </>

    );

}
