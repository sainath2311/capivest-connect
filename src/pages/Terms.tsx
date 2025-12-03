import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Terms & <span className="text-gold">Conditions</span>
            </h1>
            <p className="text-cream/80">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Capivest Trade Private Limited website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Capivest Trade Private Limited provides sourcing and distribution services for consumer products. Our website serves as an informational platform to showcase our capabilities and facilitate business inquiries.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use this website only for lawful purposes and in a manner that does not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Infringe upon the rights of others</li>
                  <li>Restrict or inhibit anyone else's use of the website</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Introduce malicious software or harmful content</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of Capivest Trade Private Limited and is protected by applicable intellectual property laws. Unauthorized use of any content is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Product Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate product information, we do not warrant that product descriptions or other content on this website are complete, accurate, or error-free. Product availability and specifications may change without notice.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Capivest Trade Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on information provided herein.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Business Relationships</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Formal business relationships, including product sourcing agreements and distribution partnerships, are subject to separate written agreements and are not established solely through website inquiries.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Continued use of the website constitutes acceptance of modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these Terms and Conditions, please contact us at:<br />
                  Email: info@capivest.in<br />
                  Phone: +91 1234567890
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
