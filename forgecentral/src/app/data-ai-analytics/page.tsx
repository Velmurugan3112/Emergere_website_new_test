import DataAnalytics from "@/page/data_ai_analytics";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function DataAnalyticsRoute() {
  return (
    <div className="mt-[-90px] scroll-mt-[104px] relative">
      <Nav />
      <DataAnalytics />
      <Footer />
    </div>
  );
}
