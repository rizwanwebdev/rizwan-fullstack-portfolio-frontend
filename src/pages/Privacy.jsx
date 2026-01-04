import Footer from "../components/Footer";
import Header from "../components/Header";
const Privacy = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="top-padding container-custom max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: December 2024
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when
                you contact us through our contact form, subscribe to our
                newsletter, or interact with our content.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to respond to your inquiries,
                send you newsletters you've subscribed to, and improve our
                services.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties without your
                consent.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                We use cookies to enhance your experience on our website. You
                can choose to disable cookies through your browser settings.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at
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

export default Privacy;
