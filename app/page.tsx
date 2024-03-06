import { About, Hero, Header, HowWorks, Footer } from "@/components";
import { Metadata } from "next";
import config from "@/config/general";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function Home() {
  return (
    <main className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      <Header />
      <Hero />
      <About />
      <HowWorks />
      <Footer />
    </main>
  );
}
