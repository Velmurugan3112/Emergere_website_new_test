import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import HomePage from "@/page/homepage";

export default function Home() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}
