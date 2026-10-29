import { CommonApi } from "./CommonApi";
import type { ContactFormData } from "@/types/ContactType";


const Base_Url = import.meta.env.VITE_API_BASE_URL || "https://pv0smzkc-8000.inc1.devtunnels.ms/api/easypack/";


// User API Login
export const Login = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}token/`, data, {});

}


// User API Register
export const Register = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}register/`, data, {});

}


// Verfiy Otp
export const VerifyOtp = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}verify-otp/`, data, {});

}


// Resend Otp
export const ResendOtp = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}resend-otp/`, data, {});

}


// Google Login
export const GoogleLogin = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}google-auth/`, data, {});

}



// Get All Products
export const GetAllProducts = async (page: number, headers: object) => {

    const params = new URLSearchParams({ page: page.toString() });

    return await CommonApi("GET", `${Base_Url}boxes/?${params}`, "", headers);

}



// Get Single Product
export const GetSingleProduct = async (id: string, headers: object) => {

    const params = new URLSearchParams({ id: id.toString() });

    return await CommonApi("GET", `${Base_Url}boxes-single/?${params}`, "", headers);

}


// Submit Contact Enquiry
export const SubmitContactEnquiry = async (data: ContactFormData) => {

    return await CommonApi("POST", `${Base_Url}contact/`, data, { 'Content-Type': 'application/json' });

}


// Get Contact Enquiries
export const GetContactEnquiries = async (headers: object = {}) => {

    return await CommonApi("GET", `${Base_Url}contact/`, "", headers);

}
