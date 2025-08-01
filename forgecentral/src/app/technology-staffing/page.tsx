import { TechnologyStaffing } from "@/page/technologystaffing";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function TechnologyStaffingRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <TechnologyStaffing />
      <Footer />
    </div>
  );
}
