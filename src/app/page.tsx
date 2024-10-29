import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Social from "@/components/Social";
import WhyChooseUs from "@/components/WhyChooseUS";
import Careers from "@/components/Careers";



export default function Home() {
  return (
   <div className="">
   <Hero/>
   <WhyChooseUs/>
   <HowItWorks/>
   <Industries/>
   <Services/>
   <Careers/> 
   <Social/>
   </div>
  );
}
