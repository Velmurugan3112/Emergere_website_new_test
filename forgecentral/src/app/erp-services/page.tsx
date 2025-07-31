import ERPServices from "@/page/erp_services";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function ERPServicesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ERPServices />
      <Footer />
    </div>
  );
}
