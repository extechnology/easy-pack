import { CommonApi } from "./CommonApi";


const Base_Url = "http://localhost:5000/api/v1";


// User API Login
export const Login = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}token/`, data, {});

}