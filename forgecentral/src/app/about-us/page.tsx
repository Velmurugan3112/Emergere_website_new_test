import AboutUs from "@/page/aboutus";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutUsRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <AboutUs />
      <Footer />
    </div>
  );
}
