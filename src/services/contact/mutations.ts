import { useMutation } from "@tanstack/react-query";
import { SubmitContactEnquiry } from "../AllApi";
import type { ContactFormData, ContactEnquiryResponse } from "@/types/ContactType";
import { toast } from "sonner";

export const useSubmitContact = () => {
  return useMutation<ContactEnquiryResponse, any, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      return (await SubmitContactEnquiry(data)) as ContactEnquiryResponse;
    },
    onSuccess: (response) => {
      toast.success("Message Sent Successfully!", {
        description:
          response?.message ||
          "Thank you for contacting EasyPack. We have sent a confirmation email to your inbox.",
        duration: 6000,
      });
    },
    onError: (error: any) => {
      // If DRF returned validation errors (e.g. 400), don't toast generic error if field errors are present, or provide summary
      const errorMsg =
        error?.data?.non_field_errors?.[0] ||
        error?.data?.detail ||
        error?.message ||
        "Unable to submit your enquiry. Please verify your details and try again.";
      toast.error("Submission Failed", {
        description: errorMsg,
        duration: 5000,
      });
      console.error("Contact Enquiry Submission Error:", error);
    },
  });
};

