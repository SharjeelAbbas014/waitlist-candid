import { Footer, Header } from "@/components";
import { Blog } from "@/components/Blog";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "The Ultimate Guide to SLS Free Toothpaste in Pakistan",
  description: "For the savvy Pakistani consumer, health has become a top priority. Candid: SLS free toothpaste, championing a safer, greener approach to oral health.",
};

const content = [
  {
    title: "Introduction",
    content:
      "In today's wellness-focused world, the toothpaste you choose is more than just a cavity fighter - it's a statement about your health priorities. For the savvy Pakistani consumer, ditching harsh chemicals like Sodium Lauryl Sulfate (SLS) has become a top priority. Enter Candid: the trailblazer in the realm of SLS-free toothpaste, championing a cleaner, greener approach to oral health.",
    img: "/toxin-free.webp",
  },
  {
    title: "Decoding SLS: The Why Behind the Wave of Change",
    content:
      "Sodium Lauryl Sulfate (SLS) is the frothy culprit behind the suds in many personal care products. But here's the twist: while it's great for creating bubbles, it's not so great for your mouth. Linked to canker sores and the breakdown of delicate oral tissues, SLS is increasingly being side-eyed by health-conscious individuals. The pivot towards SLS-free toothpaste isn't just a fad - it's an informed choice for better oral ecology.",
  },
  {
    title: "Candid: At the Vanguard of Pakistan's Oral Health Revolution",
    content:
      "As Pakistan rides the wave towards more natural oral care solutions, Candid toothpaste is leading the charge. This isn't just about removing SLS; it's about reimagining toothpaste. Candid is a testament to what happens when efficacy meets purity, offering a blend that cleanses, nourishes, and supports your mouth's natural defenses without the chemical baggage",
  },
  {
    title: "Choosing Your Champion in the SLS-Free Arena",
    content:
      "Embarking on your SLS-free journey? Keep an eye out for toothpaste that swaps out harmful chemicals for ingredients with a purpose. Whether it's the cavity-fighting prowess of xylitol or the anti-inflammatory action of green tea extract, the best toothpaste is one that aligns with your body's natural processes. And remember, a quick chat with your dentist can provide tailored advice to match your oral health vibe.",
  },
];

export default function slsFree() {
  const lastLine =
    "The shift towards SLS-free toothpaste in Pakistan is more than just a trend - it's a movement towards embracing oral care that's in sync with our bodies and the environment. Candid isn't just leading the pack; it's redefining it, offering a product that's not only safe and effective but also a joy to use. Choosing Candid is choosing a brighter, healthier smile on your terms. Step into the future of oral care with Candid toothpaste. Your smile deserves it.";
  const heading =
    "The Ultimate Guide to SLS-Free Toothpaste in Pakistan: Why Candid is the Healthier Choice";
  return (
    <main className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      <Header />
      <Blog heading={heading} content={content} lastLine={lastLine} />
      <Footer />
    </main>
  );
}
