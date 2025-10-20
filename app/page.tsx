import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import PreHeader from "@/components/home/preheader";

export default function Home() {
  return (
    <>
      <PreHeader />
      <Header />
      <Hero />
      <Overview />
    </>
  );
}
