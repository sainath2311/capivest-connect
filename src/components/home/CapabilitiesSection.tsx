import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Users, BarChart3, Award } from "lucide-react";

const capabilities = [
  {
    icon: Package,
    title: "Product Sourcing",
    description:
      "We identify and procure high-quality consumer products from verified suppliers, ensuring authenticity and value for our partners.",
  },
  {
    icon: Users,
    title: "Partner Network",
    description:
      "Our extensive network of retailers, distributors, and online platforms enables seamless market access for diverse product categories.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Data-driven insights guide our sourcing decisions, helping us anticipate market trends and meet evolving consumer demands.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous quality checks and compliance standards ensure every product meets our high benchmarks before reaching the market.",
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core <span className="text-gold">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sourcing to distribution, we deliver end-to-end solutions that help businesses access quality products efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-8 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg h-full">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <capability.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
