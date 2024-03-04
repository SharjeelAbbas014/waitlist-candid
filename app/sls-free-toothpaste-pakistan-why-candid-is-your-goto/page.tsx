import { Footer, Header } from "@/components";
import { Blog } from "@/components/Blog";

const content = [
  {
    title: "Introduction",
    content:
      "In the quest for optimal dental health, the choice of toothpaste plays a pivotal role. Among the myriad of options, SLS-free toothpaste has emerged as a preferred choice for health-conscious individuals in Pakistan. With an increasing awareness of the harmful effects of Sodium Lauryl Sulfate (SLS) found in many toothpastes, Candid stands out as a leading SLS-free toothpaste, offering a safer and more effective dental care solution.",
    img: "/toxin-free.webp",
  },
  {
    title: "What is SLS and Its Effects?",
    content:
      "Sodium Lauryl Sulfate (SLS) is a chemical found in many personal care products, known for its ability to create a foaming action. However, its presence in toothpaste has been linked to several oral health issues, including canker sores, mouth irritation, and stripping away the protective lining of the mouth. This has led to a growing demand for SLS-free toothpaste options in Pakistan.",
  },
  {
    title: "Introducing Candid: The Best SLS-Free Toothpaste in Pakistan",
    content:
      "Candid toothpaste is at the forefront of the SLS-free movement in Pakistan, providing a premium dental care product that is both safe and effective. Formulated with natural ingredients, Candid toothpaste not only cleans your teeth but also nourishes your gums, ensuring a healthy and radiant smile. Its unique blend of ingredients sets it apart from other toothpastes on the market, making it the best choice for anyone looking to avoid SLS in their dental care routine.",
  },
];

export default function slsFree() {
  const lastLine =
    "The shift towards SLS-free toothpaste in Pakistan is more than just a trend; it's a move towards safer, more natural dental care. Candid toothpaste leads the way, offering a product that not only meets this demand but exceeds expectations with its quality and effectiveness. By choosing Candid, you're not just choosing an SLS-free toothpaste; you're choosing the best for your dental health.";
  const heading =
    "Discover the Best SLS-Free Toothpaste in Pakistan: Why Candid is Your Go-To Choice";
  return (
    <main className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      <Header />
      <Blog heading={heading} content={content} lastLine={lastLine} />
      <Footer />
    </main>
  );
}
