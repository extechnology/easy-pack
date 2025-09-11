import Hero from "@/components/home/Hero"
import AboutUs from "@/components/home/AboutUs"
import OurClients from "@/components/home/OurClients"
import Cta from "@/components/home/Cta"
import { BlurFade } from "@/components/magicui/blur-fade"




export default function Index() {


  return (


    <section className="w-full min-h-screen flex flex-col items-center justify-center">


      <div className="w-full h-full">
        <BlurFade delay={0.25} duration={0.5} inView>
          <Hero />
        </BlurFade>
      </div>


      <BlurFade delay={0.25 * 3} duration={0.5} inView>
        <AboutUs />
      </BlurFade>


      <BlurFade delay={0.25 * 4} duration={0.5} inView>
        <OurClients />
      </BlurFade>


      <div className="w-full h-full">
        <BlurFade delay={0.25 * 5} duration={0.5} inView>
          <Cta />
        </BlurFade>
      </div>

    </section>


  )



}
