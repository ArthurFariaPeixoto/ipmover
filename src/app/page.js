import Contact from "@/section/contact";
import Footer from "@/section/footer";
import Header from "@/section/header";
import Services from "@/section/services";
import Testimonials from "@/section/testiomonials";

export default function Home() {
  return (
    <>
      <Header />
      <Services />

      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
