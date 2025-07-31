import { DigitalServices } from "@/page/digitalservices";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function DigitalServicesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <DigitalServices />
      <Footer />
    </div>
  );
}
