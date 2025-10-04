import React from "react";
import { Dialog, DialogContent, DialogHeader, } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";




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

                            <Login onClose={() => onOpenChange(false)} />

                        </TabsContent>


                        {/* Register */}
                        <TabsContent value="register" className="mt-6 space-y-4">

                            <Register onClose={() => onOpenChange(false)} />

                        </TabsContent>


                    </Tabs>


                </motion.div>


            </DialogContent>


        </Dialog>


    );


};


export default AuthModal;
