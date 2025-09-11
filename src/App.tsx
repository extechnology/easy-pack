import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import SuspenseLoader from "./components/common/SuspenseLoader"
import ScrollToTop from "./components/common/ScrollToTop"



// Lazy loading pages
const Home = lazy(() => import("./pages/Index"))
const Products = lazy(() => import("./pages/Products"))
const Contact = lazy(() => import("./pages/Contact"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const OurMarket = lazy(() => import("./pages/Market"))


// Lazy loading Layouts
const MainLayout = lazy(() => import("./components/layout/MainLayout"))





function App() {


  return (



    <>

      <Suspense fallback={<SuspenseLoader />}>

        <ScrollToTop />

        <Routes>


          {/* Main Layout */}
          <Route element={<MainLayout />}>

            <Route index element={<Home />} />

            <Route path="products" element={<Products />} />

            <Route path="contact" element={<Contact />} />

            <Route path="about" element={<AboutUs />} />

            <Route path="market" element={<OurMarket />} />

          </Route>


          {/* Fallback route for 404 - Not Found */}
          <Route path="*" element={<div>404 - Not Found</div>} />


        </Routes>

      </Suspense>


    </>


  )


}

export default App
