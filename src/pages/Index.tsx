import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CapabilitiesSection />
      <ProductCategoriesSection />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
