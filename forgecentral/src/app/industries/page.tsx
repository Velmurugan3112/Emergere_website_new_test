import Industries from "@/page/industries";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function IndustriesRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <Industries />
      <Footer />
    </div>
  );
}
