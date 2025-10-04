import { CommonApi } from "./CommonApi";


const Base_Url = "https://98d978d879a4.ngrok-free.app/api/easypack/";


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