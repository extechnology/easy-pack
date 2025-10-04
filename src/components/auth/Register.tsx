import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { useRegister } from "@/services/auth/mutations"
import OtpModal from "./OtpModal"
import { useState } from "react"



// ✅ Props
interface LoginProps {
  onClose: () => void;
}


// ✅ Validation schema
const registerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  passwordrepeat: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordrepeat, {
  path: ["passwordrepeat"], message: "Passwords do not match",
})




type RegisterSchema = z.infer<typeof registerSchema>





export default function Register({ onClose }: LoginProps) {



  // Otp Modal
  const [isOpen, setIsOpen] = useState(false);



  // ✅ Register Mutation
  const { mutate: RegisterUser, isPending } = useRegister();



  // ✅ Form
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      passwordrepeat: "",
      email: "",
    },
  })




  // ✅ Submit Register
  function onSubmit(values: RegisterSchema) {

    const formdata = new FormData();
    formdata.append("email", values.email);
    formdata.append("username", values.username);
    formdata.append("password", values.password);
    formdata.append("password_confirm", values.passwordrepeat);


    RegisterUser(formdata, {

      onSuccess: () => { setIsOpen(true) }

    });

  }




  return (


    <div className="max-w-md mx-auto space-y-6 p-0">


      <Form {...form}>


        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">


          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    className="bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-red-400 py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white text-sm" />
              </FormItem>
            )}
          />



          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
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


          {/* Re-Enter Password */}
          <FormField
            control={form.control}
            name="passwordrepeat"
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
            {isPending ? (<Loader className="animate-spin" />) : (<LogIn size={18} />)} Register

          </Button>


        </form>

      </Form>


      {/* Otp Modal */}
      <OtpModal isOpen={isOpen} setIsOpen={setIsOpen} RegisterData={form.getValues()} onClose={onClose} reset={form.reset} />


    </div>

  )



}
