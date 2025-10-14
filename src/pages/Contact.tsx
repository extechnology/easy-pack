import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {



    return (



        <section className="w-full flex flex-col">


            {/* Hero Section */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center bg-black/50">
                <img
                    src="/Contact-banner.jpg"
                    alt="Contact Background"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-4">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>

                    <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                        <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                            HOME
                        </Link>
                        <span className="text-sm text-white/70">/</span>
                        <span className="text-sm font-semibold text-white">CONTACT US</span>
                    </nav>

                </div>
            </div>



            {/* Contact Section */}
            <div className="w-full px-2 sm:px-10 lg:px-24 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">


                {/* Left: Form */}
                <div>


                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        Have a question?
                    </h2>
                    <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
                        Please do not fill out this form for any purpose other than
                        partnerships. We are not looking for any services at this time. We
                        cannot buy leads or calls.
                    </p>

                    <form className="flex flex-col gap-6">

                        <div>
                            <label className="text-gray-700 text-sm font-medium">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your First Name"
                                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm font-medium">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Last Name"
                                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-black  text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>



                {/* Right: Contact Info */}
                <div className="bg-blue-50 rounded-xl p-2 sm:p-8 shadow-sm h-fit">

                    <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                    <p className="text-gray-600 mb-6">
                        We love to hear from you. Our friendly team is always here to chat.
                    </p>

                    <div className="flex flex-col gap-6">

                        <div className="flex items-start gap-4">
                            <div className="bg-black rounded-full p-2"><MapPin className="w-6 h-6 text-white" /></div>
                            <div>
                                <p className="text-gray-900 font-semibold">Address</p>
                                <p className="text-gray-700">
                                    EASYPACK PACKING SOLUTIONS,
                                    Bldg No: 8/354A, UKC, Kakkanchery,
                                    Chelembra, Malappuram- 673634, Kerala.
                                </p>
                            </div>
                        </div>


                        <div className="space-y-6">
                            {/* Phone Section */}
                            <div className="flex items-start gap-4">
                                <div className="bg-black rounded-full p-2">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-semibold">Phone</p>
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
                                        <p className="text-gray-700">
                                            <a href="tel:+919656247222">+91 9656247222</a>
                                        </p>
                                        <p className="text-gray-700">
                                            <a href="tel:+919995664686">+91 9995664686</a>
                                        </p>
                                        <p className="text-gray-700">
                                            <a href="tel:+919995980464">+91 9995980464</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mail Section */}
                            <div className="flex items-start gap-4">
                                <div className="bg-black rounded-full p-2">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-semibold">Mail</p>
                                    <p className="text-gray-700 break-all">
                                        <a href="mailto:info2easypack@gmail.com">info2easypack@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>



            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4324655921073!2d75.89315327452178!3d11.155581152086787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65025d5a40d37%3A0x92cf41a376619303!2sEasyPack!5e0!3m2!1sen!2sin!4v1757577911547!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>


        </section>
    );
}
