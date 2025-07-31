import Careers from "@/page/careers";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function CareersRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <Careers />
      <Footer />
    </div>
  );
}
