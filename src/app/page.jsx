import TopNavBar from "@/components/TopNavBar";
import {
  Hero,
  Footer,
  About,
  ImpactSteps,

} from "@/components/home";
import ContactUs from "@/components/home/ContactUs";
import FAQs from "@/components/home/FAQs";
import HeroAbout from "@/components/home/HeroAbout";
import HeroWhyUs from "@/components/home/HeroWhyUs";
import Products from "@/components/home/Products";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={["Home", "Products","FAQs", "Contact Us"]} position="fixed" />

      <Hero />
      <About/>
      <HeroAbout/>

      <Products/>
      <HeroWhyUs />
      <WhyUs />
      <ImpactSteps/>
      <FAQs/>
      <ContactUs/>



      <Footer />
    </>
  );
}
