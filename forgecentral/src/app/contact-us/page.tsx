import { ContactUs } from "@/page/contactus";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactUsRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <ContactUs />
      <Footer />
    </div>
  );
}
