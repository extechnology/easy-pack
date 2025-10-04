import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";



// Interface for props
interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
    logo?: string;
}



export default function ErrorLoader({ message = "Something went wrong on our servers.", onRetry, logo, }: ErrorStateProps) {


    return (


        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
        >


            {/* Logo / Icon */}
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
            >

                {logo ? (
                    <img src={logo} alt="App Logo" className="w-24 h-24 object-contain" />
                ) : (
                    <AlertTriangle className="w-24 h-24 text-red-500 drop-shadow-lg" />
                )}

            </motion.div>


            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 mb-2"
            >
                Server Error
            </motion.h2>


            {/* Message */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 max-w-md mb-6"
            >
                {message}
            </motion.p>


            {/* Retry Button */}
            {onRetry && (
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-md transition-all"
                    onClick={onRetry}
                >
                    <RefreshCcw className="w-5 h-5 animate-spin-slow" />
                    Try Again
                </motion.button>
            )}


        </motion.div>

    );

}
