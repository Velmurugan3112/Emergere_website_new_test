import { ManagedServices } from "@/page/managedservices";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function ManagedServicesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ManagedServices />
      <Footer />
    </div>
  );
}
