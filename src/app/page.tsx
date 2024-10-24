import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import Whoweare from "@/components/Whoweare";


export default function Home() {
  return (
   <div className=" min-h-[300vh]">
   <Hero/>
   <Whoweare/>
   <HowItWorks/>
   <Industries/>
   <Services/>
   <Footer/>
   
   </div>
  );
}
