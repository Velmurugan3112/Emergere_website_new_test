import HomePage from "@/page/homepage";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePageRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}
