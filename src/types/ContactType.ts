export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactEnquiryRecord {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface ContactEnquiryResponse {
  message: string;
  email_status: {
    admin_sent: boolean;
    customer_sent: boolean;
  };
  data: ContactEnquiryRecord;
}

export interface ContactFormErrors {
  name?: string[];
  email?: string[];
  subject?: string[];
  message?: string[];
  non_field_errors?: string[];
  detail?: string;
  [key: string]: string[] | string | undefined;
}

