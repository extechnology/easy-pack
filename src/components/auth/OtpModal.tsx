import { Dialog, DialogContent } from "../ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from 'framer-motion';
import { BadgeCheck, Loader, RefreshCw, ShieldCheck } from "lucide-react";
import { useVerifyOtp, useResendOtp } from "@/services/auth/mutations";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";




// Props
interface EmailOtpProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onClose: () => void;
    reset: () => void
    RegisterData: { email: string; username: string; password: string; passwordrepeat: string };
}




// Form Schema
const FormSchema = z.object({

    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),

})




export default function OtpModal({ isOpen, setIsOpen, RegisterData , onClose, reset }: EmailOtpProps) {


    // Otp time out
    const [timeLeft, setTimeLeft] = useState(300);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [otpExpired, setOtpExpired] = useState(false);



    // Add a state to trigger timer reset
    const [timerKey, setTimerKey] = useState(0);



    // Auth Context
    const { login } = useAuth()



    // Email Verification
    const { mutate: verifyOtp, isPending: isverifying } = useVerifyOtp()



    // Resend Otp
    const { mutate: resendOtp, isPending: isResending } = useResendOtp()



    // Timer function
    useEffect(() => {

        if (!isOpen) return;

        setTimeLeft(600);
        setIsResendDisabled(true);
        setOtpExpired(false);

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setOtpExpired(true);
                    setIsResendDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    }, [isOpen, timerKey]);




    // Function to format time (MM:SS)
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };




    // Form
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {

            pin: "",

        },
    });




    // Handle Submit
    const onSubmit = (data: z.infer<typeof FormSchema>) => {

        const formdata = new FormData()

        formdata.append("otp", data.pin)
        formdata.append("email", RegisterData.email)
        formdata.append("username", RegisterData.username)
        formdata.append("password", RegisterData.password)
        formdata.append("password_confirm", RegisterData.passwordrepeat)

        
        verifyOtp(formdata, {

            onSuccess: (response) => {

                login(response.access)
                reset()
                form.reset()
                setIsOpen(false)
                onClose()

            }

        })

    }




    // Resend Otp
    const handleResendOtp = () => {

        const formdata = new FormData()

        formdata.append("email", RegisterData.email)
        formdata.append("username", RegisterData.username)
        formdata.append("password", RegisterData.password)
        formdata.append("password_confirm", RegisterData.passwordrepeat)


        resendOtp(formdata, {

            onSuccess: () => {

                setTimerKey(prev => prev + 1);
                setIsResendDisabled(true);
                setOtpExpired(false);

            }

        })


    }






    return (


        <>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>


                <DialogContent className="p-0 max-w-md overflow-hidden rounded-3xl bg-slate-50 border-0 shadow-xl">


                    <div className="p-6">


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-2xl font-bold flex items-center justify-center">Verification Required <ShieldCheck size={26} /></h2>
                            <p className="text-gray-500 mt-2">Please enter the code sent to your Email</p>
                        </motion.div>


                        <Form {...form}>


                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">


                                <FormField
                                    control={form.control}
                                    name="pin"
                                    render={({ field }) => (

                                        <FormItem className="space-y-4">

                                            <FormControl>

                                                <div className="flex justify-center">

                                                    <InputOTP maxLength={6} {...field} className="gap-4">
                                                        <InputOTPGroup className="gap-2">
                                                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                                                <motion.div
                                                                    key={index}
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                                >
                                                                    <InputOTPSlot
                                                                        index={index}
                                                                        className="w-12 h-14 text-lg rounded-xl border border-gray-400 shadow-sm"
                                                                    />
                                                                </motion.div>
                                                            ))}
                                                        </InputOTPGroup>
                                                    </InputOTP>

                                                </div>

                                            </FormControl>

                                            <FormDescription className="text-center text-gray-500">
                                                Check your Email for the verification code
                                            </FormDescription>

                                            {/* Countdown Timer */}
                                            <p className="text-center text-gray-500">
                                                {otpExpired ? (
                                                    <span className="text-red-500">OTP Expired! Please request a new one.</span>
                                                ) : (
                                                    <span className="text-black font-semibold">OTP Expires In <span className="text-red-500">{formatTime(timeLeft)}</span> </span>
                                                )}
                                            </p>

                                            <FormMessage className="text-center" />

                                        </FormItem>
                                    )}
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    className="flex flex-col space-y-3"
                                >
                                    <Button
                                        type="submit"
                                        disabled={otpExpired || isverifying || isResending}
                                        className={`${otpExpired || isverifying || isResending ? "bg-gray-400 hover:cursor-not-allowed py-6" : " w-full py-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"} `}
                                    >
                                        Verify {isverifying || isResending ? <Loader className="animate-spin  ms-1 duration-3000" /> : <BadgeCheck size={24} />}

                                    </Button>

                                    <Button
                                        type="button"
                                        variant="default"
                                        className="text-white bg-black font-semibold py-6"
                                        onClick={handleResendOtp}
                                        disabled={isResendDisabled || isResending}
                                    >
                                        Resend OTP {isResending ? <Loader className="animate-spin ms-1 duration-3000" /> : <RefreshCw />}
                                    </Button>

                                </motion.div>

                            </form>

                        </Form>

                    </div>

                </DialogContent>

            </Dialog>
        </>

    )

}
