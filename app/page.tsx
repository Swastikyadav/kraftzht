import Header from "@/components/header";
import Hero from "@/components/hero";
import Overview from "@/components/overview";
import PreHeader from "@/components/preheader";

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
