import Details from "@/components/Details/Details";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Partners from "@/components/Partners/Partners";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar selectedLink={'home'}/>
    <Landing/>
   <Details/>
   <Partners/>
   <Footer>copyright @ Mr Burger</Footer>
    </>
  );
}
