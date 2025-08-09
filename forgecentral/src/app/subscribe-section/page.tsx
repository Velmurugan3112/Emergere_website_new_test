import SubscribeSection from "@/components/subscribesection";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function SubscribeSectionRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
