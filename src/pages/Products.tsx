import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Shirt, Home, Sparkles, Utensils, Dumbbell, Headphones, Watch, Camera, Sofa, Lightbulb, Flower2, UtensilsCrossed, Coffee, ShoppingBag, Bike } from "lucide-react";

const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" },
  { id: "apparel", name: "Apparel" },
  { id: "home", name: "Home & Living" },
  { id: "beauty", name: "Beauty & Care" },
  { id: "kitchen", name: "Kitchen" },
  { id: "sports", name: "Sports & Fitness" },
];

const products = [
  {
    id: 1,
    name: "Smart Wireless Earbuds",
    category: "electronics",
    icon: Headphones,
    description: "Premium audio quality with noise cancellation technology",
    features: ["Active Noise Cancellation", "30hr Battery Life", "Water Resistant"],
  },
  {
    id: 2,
    name: "Fitness Smartwatch",
    category: "electronics",
    icon: Watch,
    description: "Advanced health tracking and connectivity features",
    features: ["Heart Rate Monitor", "GPS Tracking", "Sleep Analysis"],
  },
  {
    id: 3,
    name: "Digital Camera Kit",
    category: "electronics",
    icon: Camera,
    description: "Professional-grade photography equipment for enthusiasts",
    features: ["4K Video", "Interchangeable Lenses", "WiFi Connectivity"],
  },
  {
    id: 4,
    name: "Premium Casual Collection",
    category: "apparel",
    icon: Shirt,
    description: "Comfortable everyday wear with modern styling",
    features: ["Organic Cotton", "Multiple Colors", "All Sizes"],
  },
  {
    id: 5,
    name: "Designer Accessories",
    category: "apparel",
    icon: ShoppingBag,
    description: "Stylish bags and accessories for every occasion",
    features: ["Genuine Leather", "Handcrafted", "Timeless Design"],
  },
  {
    id: 6,
    name: "Modern Living Furniture",
    category: "home",
    icon: Sofa,
    description: "Contemporary furniture pieces for modern homes",
    features: ["Sustainable Materials", "Modular Design", "Easy Assembly"],
  },
  {
    id: 7,
    name: "Smart Home Lighting",
    category: "home",
    icon: Lightbulb,
    description: "Intelligent lighting solutions for ambient living",
    features: ["Voice Control", "Energy Efficient", "Color Options"],
  },
  {
    id: 8,
    name: "Natural Skincare Line",
    category: "beauty",
    icon: Flower2,
    description: "Organic skincare products for healthy, glowing skin",
    features: ["Paraben-Free", "Cruelty-Free", "Natural Ingredients"],
  },
  {
    id: 9,
    name: "Premium Beauty Tools",
    category: "beauty",
    icon: Sparkles,
    description: "Professional-quality beauty and grooming tools",
    features: ["Ergonomic Design", "Long-lasting", "Travel-friendly"],
  },
  {
    id: 10,
    name: "Chef's Cookware Set",
    category: "kitchen",
    icon: UtensilsCrossed,
    description: "Professional-grade cookware for home chefs",
    features: ["Non-stick Coating", "Heat Resistant", "Dishwasher Safe"],
  },
  {
    id: 11,
    name: "Artisan Coffee Equipment",
    category: "kitchen",
    icon: Coffee,
    description: "Premium coffee brewing essentials",
    features: ["Precision Brewing", "Multiple Sizes", "Easy Cleaning"],
  },
  {
    id: 12,
    name: "Performance Fitness Gear",
    category: "sports",
    icon: Dumbbell,
    description: "High-quality equipment for home workouts",
    features: ["Commercial Grade", "Compact Design", "Versatile Use"],
  },
  {
    id: 13,
    name: "Outdoor Adventure Kit",
    category: "sports",
    icon: Bike,
    description: "Complete gear for outdoor enthusiasts",
    features: ["Weather Resistant", "Lightweight", "Durable Materials"],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Quality Products for{" "}
              <span className="text-gold">Every Market</span>
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed">
              Explore our diverse portfolio of consumer products, carefully sourced and quality-verified to meet the needs of retailers and consumers alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-navy-deep shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-navy/10" />
                  <product.icon className="w-16 h-16 text-gold/50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold font-medium uppercase tracking-wide">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      Request Information <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Looking for Specific Products?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can help you find the right products for your business needs. Contact us to discuss your requirements.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
