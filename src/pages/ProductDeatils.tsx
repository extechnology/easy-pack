import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ShoppingCart, Star, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import RelatedProducts from "@/components/common/RelatedProducts";
import { useGetSingleProduct } from "@/services/products/queries";
import { useParams } from "react-router-dom";
import ErrorLoader from "@/components/loaders/ErrorLoader";
import ProductDetailsSkeleton from "@/components/loaders/ProductDeatilLoader";




export default function ProductDeatils() {


    const { id } = useParams();
    const { data: productData, isLoading, isFetching, isError } = useGetSingleProduct(id as string);


    // States
    const [selectedPaper, setSelectedPaper] = useState("Brown");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");



    // Set initial size, price, and image once productData is loaded
    useEffect(() => {

        if (productData?.sizes?.length) {

            const firstSize = productData?.sizes[0];
            setSelectedSize(firstSize?.size_ratio);

            // Set price and image based on the default paper
            setPrice(selectedPaper === "Brown" ? firstSize?.paper_brown_price : firstSize?.paper_white_price);
            setImage(selectedPaper === "Brown" ? firstSize?.paper_brown_img : firstSize?.paper_white_img);

        }

    }, [productData]);



    // Update price and image when size or paper changes
    useEffect(() => {

        if (!productData?.sizes?.length) return;

        const sizeObj = productData?.sizes?.find(size => size?.size_ratio === selectedSize);
        if (!sizeObj) return;

        setPrice(selectedPaper === "Brown" ? sizeObj?.paper_brown_price : sizeObj?.paper_white_price);
        setImage(selectedPaper === "Brown" ? sizeObj?.paper_brown_img : sizeObj?.paper_white_img);

    }, [selectedSize, selectedPaper, productData]);



    if (isError) return <ErrorLoader message="Something went wrong on our servers." onRetry={() => window.location.reload()} />;



    if (isLoading || !productData || isFetching) return <ProductDetailsSkeleton />;


    return (

        <section className="w-full min-h-screen px-2 py-16 sm:py-20 md:px-10 lg:px-20">


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-4">
                    <span className="cursor-pointer hover:underline">Home</span> /{" "}
                    <span className="cursor-pointer hover:underline">Products</span> /{" "}
                    <span className="text-gray-700">{productData?.title}</span>
                </div>


                <div className="grid lg:grid-cols-2 gap-10">


                    {/* Left Section - Product Images */}
                    <div>

                        <img
                            src={image}
                            alt="Peanuts Long Sleeve Sweatshirt"
                            loading="lazy"
                            className="rounded-xl w-full h-100 object-cover"
                        />

                        {/* Thumbnails */}
                        <div className="flex gap-3 mt-4 overflow-x-auto pb-3">
                            <img
                                src={image}
                                alt="thumbnail"
                                loading="lazy"
                                className="w-20 h-20 rounded-lg object-cover cursor-pointer border hover:border-black"
                            />
                        </div>

                    </div>


                    {/* Right Section - Product Info */}
                    <div>

                        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                            {productData?.title}
                        </h1>

                        {/* Availability */}
                        <div className="flex items-center gap-2 mb-4">

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex items-center gap-2 w-fit text-sm font-medium ${true
                                    ? " text-green-700"
                                    : "text-red-700"
                                    }`}
                            >
                                {productData?.is_available ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span>In Stock</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        <span>Unavailable</span>
                                    </>
                                )}
                            </motion.div>


                            {/* Rating stays beside */}
                            <div className="flex items-center gap-1 text-gray-600">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span>4.9</span>
                            </div>

                        </div>


                        <p className="text-gray-600 mb-4 text-justify text-leading-6">
                            {productData?.description}
                        </p>


                        {/* Price */}
                        <div className="flex items-center gap-4 mb-4 sm:mb-6">
                            <span className="text-xl font-bold text-green-700">₹{price}/box</span>
                        </div>


                        {/* Quantity & Paper Type */}
                        <div className="flex md:flex-row md:items-center gap-6 mb-1">

                            <div className="sm:mb-4 mb-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    min={1}
                                    onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                                    defaultValue={selectedQuantity}
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>


                            {/* Paper Type Options */}
                            <div className="mb-2 sm:mb-4">
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

                        </div>


                        {/* Sizes */}
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-700 mb-2">Box Size</p>
                            <Select
                                value={selectedSize}
                                onValueChange={(value) => setSelectedSize(value)}
                            >
                                <SelectTrigger className="w-52 border-gray-300 focus:ring-2 focus:ring-black rounded-md">
                                    <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg shadow-lg">
                                    {productData?.sizes?.map((size) => (
                                        <SelectItem key={size.id} value={size.size_ratio}>
                                            {size.size_ratio}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>


                        {/* Buttons */}
                        <div className="flex flex-col gap-3 w-full">

                            <button className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:cursor-pointer">
                                Order Now <ShoppingCart className="inline-block w-5 h-5 ml-2" />
                            </button>

                            <button className="w-full py-3 rounded-lg bg-black hover:bg-gray-900 text-gray-100 font-medium hover:cursor-pointer">
                                Enquire About Product <Mail className="inline-block w-5 h-5 ml-2" />
                            </button>

                        </div>

                    </div>

                </div>

            </motion.div>


            {/* Related Products Section */}
            <div className="w-full mt-8 sm:mt-14 border-t-2 border-dashed pt-8 sm:pt-10">

                {/* Heading Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Related Products
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Customers also viewed these items you might like
                    </p>
                </div>

                <RelatedProducts />

            </div>


        </section>

    )


}
