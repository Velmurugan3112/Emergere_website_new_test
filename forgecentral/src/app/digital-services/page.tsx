import { DigitalServices } from "@/page/digitalservices";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function DigitalServicesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <DigitalServices />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
