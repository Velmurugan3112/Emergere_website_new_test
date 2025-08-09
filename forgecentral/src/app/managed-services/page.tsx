import { ManagedServices } from "@/page/managedservices";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function ManagedServicesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ManagedServices />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
