import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroIllustration } from "./HeroIllustration";
import {
  ArrowRight,
  Download,
  Code2,
  Shield,
  Search,
  Sparkles,
} from "lucide-react";

const HerorSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* <div className="absolute inset-0 bg-hero-pattern opacity-30" /> */}
        <div className=" absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          id="accent-blob"
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        <div className="container-custom min-h-fit flex items-center justify-center relative z-10 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full ">
            <div className="order-1 lg:order-0 space-y-8 animate-fade-in">
              {/* Badge */}
              <div
                className="py-2 px-4 inline-flex items-center gap-2 rounded-full  bg-primary/10 border border-primary/20 fade-out"
                style={{
                  animationDuration: "0.9s",
                  animationTimingFunction: "ease-out",
                }}
              >
                <Sparkle className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm text-primary">
                  Available for new projects
                </span>
              </div>
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Hi, I'm a</span>
                  <br />
                  <span className="text-gradient ">Web Developer</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Specializing in&nbsp;
                  <span className="text-primary font-medium">
                    SEO & Digital Marketing
                  </span>
                  ,&nbsp;
                  <span className="text-accent font-medium">
                    Application Security
                  </span>
                  , and building modern, scalable web applications.
                </p>
              </div>
              {/* Skills icon and buttons */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Code2,
                    label: "Full-Stack Dev",
                    color: "text-primary",
                    border: "hover:border-primary",
                  },
                  {
                    icon: Search,
                    label: "SEO Expert",
                    color: "text-green",
                    border: "hover:border-green",
                  },
                  {
                    icon: Shield,
                    label: "Security",
                    color: "text-accent",
                    border: "hover:border-accent",
                  },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border transition-all  ${skill.border}  cursor-pointer`}
                  >
                    <skill.icon className={`w-4 h-4 ${skill.color}`} />
                    <span className="text-sm font-medium text-foreground ">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/projects"}>
                  <button className="solid-button w-full">
                    View My Works
                    <ArrowRight className="w-4 h-4 " />
                  </button>
                </Link>
                <a href="http://localhost:5173/rizwan-cv.pdf" download>
                  <button className="outline-button w-full ">
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </a>
              </div>
              {/* Stats */}
              <div className="flex flex-row gap-8">
                <p className="text-sm text-muted-foreground flex flex-col">
                  <span className="text-3xl font-bold text-primary">3+</span>
                  Years Experience
                </p>
                <p className="text-sm text-muted-foreground flex flex-col">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  Projects Done
                </p>
                <p className="text-sm text-muted-foreground flex flex-col">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  Happy Clients
                </p>
              </div>
            </div>

            <HeroIllustration />
          </div>
        </div>
      </section>
    </>
  );
};

export default HerorSection;
