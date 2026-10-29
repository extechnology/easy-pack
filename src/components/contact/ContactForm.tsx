import React, { useState } from "react";
import {
  User,
  Mail,
  FileText,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Package,
  RotateCcw,
} from "lucide-react";
import { SubmitContactEnquiry } from "@/services/AllApi";
import type {
  ContactFormData,
  ContactEnquiryResponse,
  ContactFormErrors,
} from "@/types/ContactType";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
  onSuccessCallback?: (data: ContactEnquiryResponse) => void;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  onSuccessCallback,
}) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [successResponse, setSuccessResponse] =
    useState<ContactEnquiryResponse | null>(null);

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  // Client-side field-level validator
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = ["Full name is required."];
    } else if (formData.name.trim().length > 100) {
      newErrors.name = ["Name cannot exceed 100 characters."];
    }

    if (!formData.email.trim()) {
      newErrors.email = ["Email address is required."];
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = ["Please enter a valid email address."];
    }

    if (!formData.subject.trim()) {
      newErrors.subject = ["Subject is required."];
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = ["Subject cannot exceed 100 characters."];
    }

    if (!formData.message.trim()) {
      newErrors.message = ["Message is required."];
    } else if (formData.message.trim().length < 10) {
      newErrors.message = ["Message should be at least 10 characters."];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearing when user modifies the field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Form Validation Error", {
        description: "Please correct the highlighted fields before submitting.",
      });
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccessResponse(null);

    try {
      const response = (await SubmitContactEnquiry(
        formData
      )) as ContactEnquiryResponse;

      setSuccessResponse(response);
      setFormData(initialFormData);

      toast.success("Enquiry Submitted Successfully!", {
        description:
          response?.message ||
          "Your contact enquiry has been recorded. An email confirmation has been sent to your inbox.",
        duration: 6000,
      });

      if (onSuccessCallback) {
        onSuccessCallback(response);
      }
    } catch (err: any) {
      console.error("Contact Form Submission Error:", err);

      if (err?.data && typeof err.data === "object") {
        setErrors(err.data as ContactFormErrors);

        const firstErrorKey = Object.keys(err.data)[0];
        const firstErrorMsg = Array.isArray(err.data[firstErrorKey])
          ? err.data[firstErrorKey][0]
          : err.data[firstErrorKey];

        toast.error("Submission Error", {
          description:
            firstErrorMsg ||
            "Please check the provided details and try again.",
        });
      } else {
        const errorMsg =
          err?.message ||
          "Unable to connect to the server. Please check your internet connection.";
        setErrors({
          non_field_errors: [errorMsg],
        });
        toast.error("Network Error", {
          description: errorMsg,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetSuccess = () => {
    setSuccessResponse(null);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Packaging theme accent top border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700" />

      <div className="p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/70 mb-3">
            <Package className="w-3.5 h-3.5 text-amber-600" />
            <span>EasyPack Direct Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Have questions about custom boxes, packaging materials, or bulk
            pricing? Send us a message and our packaging specialists will respond
            promptly.
          </p>
        </div>

        {/* Global Error Banner */}
        {errors.non_field_errors && errors.non_field_errors.length > 0 && (
          <div
            role="alert"
            className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm animate-in fade-in duration-200"
          >
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to submit enquiry</p>
              <p className="text-red-700 text-xs mt-0.5">
                {errors.non_field_errors.join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* Success Banner */}
        {successResponse && (
          <div
            role="status"
            className="mb-8 p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-green-200 shadow-xs animate-in fade-in zoom-in-95 duration-300"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-full bg-green-100 text-green-700 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-green-900">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="mt-1 text-sm text-green-800 leading-relaxed">
                  {successResponse.message ||
                    "Thank you! Your contact enquiry has been received."}
                </p>

                {successResponse.email_status?.customer_sent && (
                  <p className="mt-2 text-xs font-medium text-green-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-green-600" />
                    A confirmation email has been dispatched to your inbox.
                  </p>
                )}

                <div className="mt-4 pt-3 border-t border-green-200/80 flex items-center justify-between">
                  <span className="text-xs text-green-700">
                    Ref ID: #{successResponse.data?.id || "EP-NEW"}
                  </span>
                  <button
                    type="button"
                    onClick={handleResetSuccess}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-800 hover:text-green-950 underline transition"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Send another inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-800 flex items-center gap-1.5"
              >
                <User className="w-4 h-4 text-gray-500" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-gray-400">
                {formData.name.length}/100
              </span>
            </div>
            <div className="relative">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                disabled={loading}
                placeholder="e.g. John Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-3 bg-gray-50/50 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.name
                    ? "border-red-400 focus:ring-red-400/30 bg-red-50/20"
                    : "border-gray-200 hover:border-gray-300 focus:border-amber-600 focus:ring-amber-600/20"
                }`}
              />
            </div>
            {errors.name && (
              <p
                id="name-error"
                className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.name[0]}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-gray-500" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                placeholder="e.g. john@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 bg-gray-50/50 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400/30 bg-red-50/20"
                    : "border-gray-200 hover:border-gray-300 focus:border-amber-600 focus:ring-amber-600/20"
                }`}
              />
            </div>
            {errors.email && (
              <p
                id="email-error"
                className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.email[0]}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-800 flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-gray-500" />
                Subject <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-gray-400">
                {formData.subject.length}/100
              </span>
            </div>
            <div className="relative">
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                maxLength={100}
                disabled={loading}
                placeholder="e.g. Bulk enquiry for 3-ply corrugated boxes"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full px-4 py-3 bg-gray-50/50 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.subject
                    ? "border-red-400 focus:ring-red-400/30 bg-red-50/20"
                    : "border-gray-200 hover:border-gray-300 focus:border-amber-600 focus:ring-amber-600/20"
                }`}
              />
            </div>
            {errors.subject && (
              <p
                id="subject-error"
                className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.subject[0]}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-800 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-gray-500" />
                Message / Specifications <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-gray-400">
                {formData.message.length} chars
              </span>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                placeholder="Please describe your packaging requirements (dimensions L×W×H, flute grade, expected quantities, custom printing needs, or delivery location)..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-3 bg-gray-50/50 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 transition-all resize-y focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                  errors.message
                    ? "border-red-400 focus:ring-red-400/30 bg-red-50/20"
                    : "border-gray-200 hover:border-gray-300 focus:border-amber-600 focus:ring-amber-600/20"
                }`}
              />
            </div>
            {errors.message && (
              <p
                id="message-error"
                className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.message[0]}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-semibold text-sm rounded-xl shadow-lg shadow-black/10 hover:shadow-black/20 hover:from-black hover:to-black active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Sending Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            <p className="mt-2.5 text-center text-xs text-gray-500">
              Your inquiry is emailed directly to our team at{" "}
              <span className="font-medium text-gray-700">
                info2easypack@gmail.com
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

