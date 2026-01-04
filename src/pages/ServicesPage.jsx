import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Code2,
  Search,
  Shield,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Server,
  Lock,
  TrendingUp,
  Bug,
  FileCode,
} from "lucide-react";
const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive, and performant web applications built with cutting-edge technologies.",
    features: [
      "Custom React/Next.js Applications",
      "Full-Stack Development (Node.js, MongoDB)",
      "API Development & Integration",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
    ],
    color: "primary",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Content Strategy",
      "Analytics & Reporting",
    ],
    color: "green",
  },
  {
    icon: Shield,
    title: "Security Services",
    description:
      "Comprehensive security assessments to protect your applications from cyber threats.",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Audits",
      "Bug Bounty Consulting",
      "Security Training",
    ],
    color: "accent",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your goals, requirements, and challenges through detailed consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Creating a comprehensive strategy and roadmap tailored to your needs.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Implementing solutions with regular updates and transparent communication.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Final delivery with documentation, training, and ongoing support.",
  },
];
const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="top-padding bg-linear-to-b from-card/50 to-background">
          <div className=" container-custom text-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                My <span className="text-gradient">Services</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                End-to-end solutions for web development, SEO, and security
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`group bg-card rounded-2xl border border-border p-8 hover:border-${service.color}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}/5`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className={`w-4 h-4 text-${service.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <button className="outline-button mt-8">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className=" bg-card/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">How I Work</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                My Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="container-custom">
            <div className="bg-linear-to-br from-primary/20 via-card to-accent/20 rounded-2xl p-12 text-center border border-border">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how I can help bring your vision to life with
                quality code, optimized performance, and rock-solid security.
              </p>

              <Link to="/contact">
                <button className="solid-button">
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
