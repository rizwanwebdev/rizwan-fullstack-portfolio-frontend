import { useState } from "react";
import { Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

// import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      //   toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
    // toast.success("Successfully subscribed to the newsletter!");
  };
  return (
    <>
      <section>
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-card to-accent/20" />
            <div className="absolute inset-0 bg-hero-pattern opacity-50" />

            {/* Content */}
            <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
              <div className="max-w-2xl mx-auto">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Stay Updated with Latest Posts
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Get weekly insights on web development, SEO strategies, and
                  security tips delivered straight to your inbox. No spam,
                  unsubscribe anytime.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center gap-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        You're All Set!
                      </h3>
                      <p className="text-muted-foreground">
                        Thanks for subscribing. Check your inbox for a
                        confirmation email.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  >
                    <div
                      className="relative flex-1 border border-border rounded-xl hover:border-primary/30
                    transition-all  focus-within:border-primary"
                    >
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground " />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 bg-card/50 border-border focus:border-primary outline-0 placeholder:text-sm "
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="solid-button text-[16px] tracking-wider h-12"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 animate-spin" />
                          Subscribing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Subscribe
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </form>
                )}

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    No spam ever
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Weekly updates
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;
