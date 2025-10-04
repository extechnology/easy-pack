import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { useLogin, useLoginWithGoogle } from "@/services/auth/mutations"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"
import { useGoogleLogin } from "@react-oauth/google"




// ✅ Props
interface LoginProps {
  onClose: () => void;
}




// ✅ Validation schema
const loginSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})



type LoginSchema = z.infer<typeof loginSchema>




export default function Login({ onClose }: LoginProps) {


  // ✅ Login Mutation
  const { mutate: LoginUser, isPending } = useLogin();



  // ✅ Google Login Mutation
  const { mutate: GoogleLoginUser, isPending: isPendingGoogle } = useLoginWithGoogle();



  // ✅ Auth Context
  const { login } = useAuth()



  // ✅ Form
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })



  // ✅ Submit Login
  function onSubmit(values: LoginSchema) {

    const formdata = new FormData();
    formdata.append("username", values.email);
    formdata.append("password", values.password);

    LoginUser(formdata, {

      onSuccess: (response: any) => {

        toast.success("Logged In Successfully", { duration: 5000 });
        login(response.access)
        onClose();

      },

    });

  }




  // Google Login
  const GoogleLogin = useGoogleLogin({

    onSuccess: async (tokenResponse) => {

      try {

        const AccessToken = tokenResponse.access_token


        // Getting User Info Form Google
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
          },
        });


        if (!userInfoResponse.ok) {

          toast.error("Something went wrong. Please try again.")

          throw new Error('Failed to fetch user info');


        }
        else {

          const userInfo = await userInfoResponse.json();

          const formdata = new FormData()

          formdata.append("username", userInfo.name)
          formdata.append("email", userInfo.email)


          // Mutate
          GoogleLoginUser(formdata, {

            onSuccess: (response) => {

              login(response.access)
              toast.success("Login Successful", { duration: 5000 });
              onClose?.();

            }

          })

        }

      } catch (err) {

        console.log(err);

      }

    },
    onError(errorResponse) {

      console.log(errorResponse);

      toast.error("Google Login Failed. Please try again.")

    },

  })



  return (


    <div className="max-w-md mx-auto space-y-6 p-0">


      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Username */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400 py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white text-sm" />
              </FormItem>
            )}
          />


          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400 py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white text-sm" />
              </FormItem>
            )}
          />


          {/* Submit button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full py-6 hover:cursor-pointer bg-white text-red-500 hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-200"
          >
            {isPending ? (<Loader className="animate-spin" />) : (<LogIn size={18} />)}  Login
          </Button>


        </form>


      </Form>


      {/* Google login */}
      <Button
        variant="outline"
        onClick={() => GoogleLogin()}
        disabled={isPendingGoogle}
        className="w-full py-6 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 border border-gray-300 shadow-sm transition-all duration-200 hover:cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          alt="Google"
          loading="lazy"
          className="w-5 h-5"
        />
        Login with Google {isPendingGoogle && (<Loader className="animate-spin" />)}
      </Button>

    </div>

  )

}
