// components/AuthModal.tsx
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react"; // modern icons




interface AuthModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}




const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {


    return (


        <Dialog open={open} onOpenChange={onOpenChange}>


            <DialogContent className="p-0 sm:max-w-md w-full bg-white overflow-hidden rounded-2xl shadow-2xl border-0">


                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-red-500 text-white"
                >


                    {/* Logo */}
                    <DialogHeader className="flex flex-col items-center">
                        <img
                            src="/Logo-White.png"
                            alt="Company Logo"
                            loading="lazy"
                            className="h-24 w-auto mb-2 drop-shadow-lg"
                        />
                    </DialogHeader>



                    {/* Tabs */}
                    <Tabs defaultValue="login" className="w-full mt-2">


                        <TabsList className="grid grid-cols-2 bg-white/20 rounded-lg p-0">

                            <TabsTrigger
                                value="login"
                                className="data-[state=active]:bg-white data-[state=active]:text-red-500 rounded-md py-2 font-semibold transition"
                            >
                                Login
                            </TabsTrigger>

                            <TabsTrigger
                                value="register"
                                className="data-[state=active]:bg-white data-[state=active]:text-red-500 rounded-md py-2 font-semibold transition"
                            >
                                Register
                            </TabsTrigger>

                        </TabsList>



                        {/* Login */}
                        <TabsContent value="login" className="mt-6 space-y-4">

                            <Input
                                placeholder="Username"
                                className="bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400 py-5"
                            />

                            <Input
                                type="password"
                                placeholder="Password"
                                className="bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400 py-5"
                            />

                            <Button className="w-full py-5 bg-white text-red-500 hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-200">
                                <LogIn size={18} /> Login
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full py-5 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 border border-gray-300 shadow-sm transition-all duration-200"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                                    alt="Google"
                                    loading="lazy"
                                    className="w-5 h-5"
                                />
                                Login with Google
                            </Button>

                        </TabsContent>




                        {/* Register */}
                        <TabsContent value="register" className="mt-6 space-y-4">

                            <Input
                                placeholder="Username"
                                className="bg-white py-5 text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400"
                            />

                            <Input
                                type="password"
                                placeholder="Password"
                                className="bg-white py-5 text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400"
                            />

                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                className="bg-white py-5 text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400"
                            />

                            <Button className="w-full py-5 bg-white text-red-500 hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-200">
                                <UserPlus size={18} /> Register
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full py-5 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 border border-gray-300 shadow-sm transition-all duration-200"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                                    alt="Google"
                                    loading="lazy"
                                    className="w-5 h-5"
                                />
                                Register with Google
                            </Button>

                        </TabsContent>

                    </Tabs>

                </motion.div>

            </DialogContent>

        </Dialog>

    );

};


export default AuthModal;
