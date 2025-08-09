import ApplyJob from "@/page/applyjob";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function ApplyJobRoute() {
  return (
    <div className="mt-[-100px] scroll-mt-[104px] relative">
      <Nav />
      <ApplyJob />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
