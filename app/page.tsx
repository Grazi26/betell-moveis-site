import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FactsBar from "@/components/FactsBar";
import CategoriesSection from "@/components/CategoriesSection";
import QuoteSection from "@/components/QuoteSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <FactsBar />
        <CategoriesSection />
        <QuoteSection />
        <ClosingSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
