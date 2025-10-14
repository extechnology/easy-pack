import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import WhatsAppChat from "../common/WhatsApp"




export default function MainLayout() {



    return (


        <div className="flex flex-col w-full min-h-screen">


            {/* Header */}
            <header >
                <Navbar />
            </header>



            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>


            {/* Footer */}
            <footer>
                <Footer />
            </footer>


            <section aria-label="WhatsApp Chat">
                <WhatsAppChat />
            </section>


        </div>


    )



}
