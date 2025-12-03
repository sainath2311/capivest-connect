import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Shirt, Home, Sparkles, Utensils, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Laptop,
    name: "Electronics",
    description: "Consumer electronics and accessories",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Shirt,
    name: "Apparel",
    description: "Fashion and clothing products",
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    icon: Home,
    name: "Home & Living",
    description: "Furniture and home essentials",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    icon: Sparkles,
    name: "Beauty & Care",
    description: "Personal care and cosmetics",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Utensils,
    name: "Kitchen",
    description: "Kitchen appliances and cookware",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Dumbbell,
    name: "Sports & Fitness",
    description: "Sports equipment and gear",
    color: "from-red-500/20 to-red-600/20",
  },
];

export function ProductCategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product <span className="text-gold">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We source and distribute across diverse product categories, serving varied market needs with quality and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/products"
                className="group block bg-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
