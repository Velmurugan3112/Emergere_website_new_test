import { ContactUs } from "@/page/contactus";
import Nav from "@/components/navbar";
import SubscribeSection from "@/components/subscribesection";
import Footer from "@/components/footer";

export default function ContactUsRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ContactUs />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
