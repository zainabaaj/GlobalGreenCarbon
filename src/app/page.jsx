import TopNavBar from "@/components/TopNavBar";
import {
  AdminDemos,
  Hero,
  LandingDemos,
  SecurityDemos,
  Footer,
  Features,
  About,
  ImpactSteps,

} from "@/components/home";
import ContactUs from "@/components/home/ContactUs";
import HeroAbout from "@/components/home/HeroAbout";
import HeroWhyUs from "@/components/home/HeroWhyUs";
import Products from "@/components/home/Products";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={["Home", "Products", "Contact Us"]} position="fixed" />

      <Hero />
      <About/>
      <HeroAbout/>

      <Products/>
      <HeroWhyUs />
      <WhyUs />
<ImpactSteps/>
<ContactUs/>



      <Footer />
    </>
  );
}
