import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every product we source and every partnership we build.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest dealings form the foundation of all our business relationships.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct business ethically, ensuring compliance and fairness in every transaction.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Our partners trust us to deliver quality products on time, every time.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Product Selection",
    description: "We identify high-demand consumer products through market research and partner feedback.",
  },
  {
    step: "02",
    title: "Quality Verification",
    description: "Every product undergoes rigorous quality checks to meet our exacting standards.",
  },
  {
    step: "03",
    title: "Strategic Distribution",
    description: "We leverage our network to deliver products efficiently to retail and online channels.",
  },
  {
    step: "04",
    title: "Continuous Support",
    description: "Ongoing partnership support ensures long-term success for our clients and vendors.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gold/50 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Building Trust Through{" "}
              <span className="text-gold">Quality Distribution</span>
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed">
              Capivest Trade Private Limited is a forward-thinking company dedicated to sourcing and distributing consumer products that meet the highest standards of quality and value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connecting Quality Products with{" "}
                <span className="text-gold">Growing Markets</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is to serve as a trusted bridge between quality consumer products and the businesses that bring them to market. We are committed to excellence in sourcing, reliability in distribution, and integrity in all our partnerships.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By focusing on customer satisfaction and sustainable business practices, we aim to create lasting value for our partners, vendors, and the communities we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-10 text-cream"
            >
              <h3 className="font-display text-2xl font-semibold mb-6 text-gold">Our Vision</h3>
              <p className="text-cream/80 leading-relaxed mb-8">
                To become a leading distribution partner recognized for quality, reliability, and customer-centric service across diverse consumer product markets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-cream/80">Expand product portfolio across categories</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-cream/80">Build lasting partnerships with retailers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-cream/80">Deliver exceptional customer experiences</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Principles That <span className="text-gold">Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gold">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="font-display text-6xl font-bold text-gold/20 mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
