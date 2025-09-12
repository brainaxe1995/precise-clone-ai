import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductTabs from "@/components/ProductTabs";
import ExquisiteTasteSection from "@/components/ExquisiteTasteSection";
import BrowseByCategorySection from "@/components/BrowseByCategorySection";
import FindRightTeaSection from "@/components/FindRightTeaSection";
import BrandLogosSection from "@/components/BrandLogosSection";
import CraftedByExpertsSection from "@/components/CraftedByExpertsSection";
import MasterTasterSection from "@/components/MasterTasterSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductTabs />
      <ExquisiteTasteSection />
      <BrowseByCategorySection />
      <FindRightTeaSection />
      <BrandLogosSection />
      <CraftedByExpertsSection />
      <MasterTasterSection />
      <CustomerReviewsSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
