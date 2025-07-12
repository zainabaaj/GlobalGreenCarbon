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
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={["Home", "Products", "Contact Us"]} position="fixed" />

      <Hero />
      <About/>
      <Products/>
<ImpactSteps/>
<ContactUs/>



      <Footer />
    </>
  );
}
