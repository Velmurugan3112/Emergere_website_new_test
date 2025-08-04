import ModernTech from "@/page/modern_technology";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function ModernTechRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ModernTech />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
