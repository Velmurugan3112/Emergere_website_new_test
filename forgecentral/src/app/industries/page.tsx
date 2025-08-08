import Industries from "@/page/industries";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function IndustriesRoute() {
  return (
    <div className="mt-[-100px] scroll-mt-[104px] relative">
      <Nav />
      <Industries />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
