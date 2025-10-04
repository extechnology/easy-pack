import { useMutation } from "@tanstack/react-query";
import { Login, Register, GoogleLogin,VerifyOtp, ResendOtp } from "../AllApi";
import { toast } from "sonner";



// User Login
export const useLogin = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await Login(data);

        },
        onError: (error: any) => {

            toast.error("Ops..!", { description: `${error?.data?.detail || "Something went wrong Please try again."}`, duration: 5000 })
            console.log("Login Error", error);
        }

    })

};



// User Register
export const useRegister = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await Register(data);

        },
        onSuccess() {

            toast.success("An OTP has been sent to your Email Address", { duration: 5000 });

        },
        onError: (error: any) => {

            toast.error("Ops..!", { description: `${error?.data?.email[0] || "Something went wrong Please try again."}`, duration: 5000 })
            console.log("Register Error", error);
        }

    })

};




// Verfy Otp
export const useVerifyOtp = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await VerifyOtp(data);

        },
        onSuccess() {

            toast.success("User Registered Successfully", { duration: 5000 });

        },
        onError: (error: any) => {

            toast.error("Ops..!", { description: `${error?.data?.non_field_errors[0] || "Something went wrong Please try again."}`, duration: 5000 })
            console.log("Verify Otp Error", error);
        }

    })

};




// Resend Otp
export const useResendOtp = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await ResendOtp(data);

        },
        onSuccess() {

            toast.success("An OTP has been Resent to your Email Address", { duration: 5000 });

        },
        onError: (error: any) => {

            toast.error("Ops..!", { description: "Something went wrong Please try again.", duration: 5000 })
            console.log("Otp Error", error);
        }

    })

};



// Google Login
export const useLoginWithGoogle = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await GoogleLogin(data);

        },
        onError: (error: any) => {

            toast.error("Ops..!", { description: `${error?.message || "Something went wrong Please try again."}`, duration: 5000 })
            console.log("Google Login Error", error);
        }

    })

};