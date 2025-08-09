import Careers from "@/page/careers";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function CareersRoute() {
  return (
    <div className="mt-[-100px] scroll-mt-[104px] relative">
      <Nav />
      <Careers />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
