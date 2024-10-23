import Homepage from "@/components/Homepage";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Foooter from "@/components/Footer";


export default function Home() {
  return (
   <div className=" min-h-[300vh]">
   <Homepage/>
   <HowItWorks/>
   <Industries/>
   <Services/>
   <Foooter/>
   
   </div>
  );
}
