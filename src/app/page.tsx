import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Social from "@/components/Social";
import Whoweare from "@/components/Whoweare";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div className="">
   <Hero/>
   <Whoweare/>
   <HowItWorks/>
   <Industries/>
   <Services/>
   <Careers/> 
   <Social/>
   <Footer/>
   </div>
  );
}
