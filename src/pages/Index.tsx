import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductTabs from "@/components/ProductTabs";
import ExquisiteTasteSection from "@/components/ExquisiteTasteSection";
import FindRightTeaSection from "@/components/FindRightTeaSection";
import BrandLogosSection from "@/components/BrandLogosSection";
import CraftedByExpertsSection from "@/components/CraftedByExpertsSection";
import MasterTasterSection from "@/components/MasterTasterSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";

import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductTabs />
      <ExquisiteTasteSection />
      <FindRightTeaSection />
      <BrandLogosSection />
      <CraftedByExpertsSection />
      <MasterTasterSection />
      <CustomerReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
