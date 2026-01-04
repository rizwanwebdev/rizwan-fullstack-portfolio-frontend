import Footer from "../components/Footer";
import Header from "../components/Header";
const Terms = () => {
  return (
    <>
      <Header />
      <main>
        <section className="top-padding">
          <div className="container-custom max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms & Conditions
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: December 2024
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using this website, you agree to be bound by
                these Terms and Conditions. If you disagree with any part of
                these terms, you may not access the website.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Intellectual Property
              </h2>
              <p className="text-muted-foreground mb-4">
                The content on this website, including text, graphics, logos,
                and images, is the property of the website owner and is
                protected by copyright laws.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use this website for any unlawful purpose or in
                any way that could damage, disable, or impair the website.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-4">
                In no event shall we be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of this website.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Changes to Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Your
                continued use of the website after changes constitutes
                acceptance of the new terms.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Contact
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us
                at
                <a href="mailto:contact@rizwanweb.site">
                  contact@rizwanweb.site
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
