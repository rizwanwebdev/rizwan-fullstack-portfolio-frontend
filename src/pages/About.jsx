import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ProfilePicture from "../assets/images/rizwan.png";
import {
  Download,
  ArrowRight,
  MapPin,
  Mail,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import FallbackImage from "../components/FallbackImage";

const experience = [
  {
    title: "Searching for a web developer job",
    company: "Tech Company",
    period: "2026 - Present",
    description: "Passionate Developer,Security Enthusiast searching for job",
  },
  {
    title: "SEO Specialist",
    company: "Digital Agency",
    period: "2025 - 2025",
    description: "Implemented SEO strategies for client",
  },
  {
    title: "Wordpress Plugin Creation",
    company: "getmyppt.net",
    period: "2025 - 2025",
    description:
      "Created a plugin to download free slideshares for getmyppt.net",
  },
  {
    title: "Movies Website with nodejs",
    company: "Moviesmod.website",
    period: "2025 - 2025",
    description:
      "Created a full-stack movies website with custom and TMDB API. Where user can search movies/series and get full detail as well a shared link to view",
  },
];

const education = [
  {
    degree: "Intermediate Education",
    institution: "College",
    year: "2021-2023",
  },
  {
    degree: "Certified Developer (CEH) (dumy)",
    institution: "EC-Council",
    year: "2021",
  },
];

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="top-padding bg-linear-to-b from-background to-card/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p
                  className="text-primary font-medium mb-2 fade-in-left"
                  style={{
                    animationDuration: "0.8s",
                    animationTimingFunction: "ease-out",
                  }}
                >
                  About Me
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Passionate Developer,
                  <span className="text-gradient ">Security Enthusiast</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  I'm a full-stack developer with a passion for building secure,
                  scalable, and SEO-optimized web applications. With expertise
                  spanning multiple domains, I bring a holistic approach to
                  every project.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div
                    className="flex items-center gap-2 text-muted-foreground fade-out"
                    style={{
                      animationDuration: "0.7s",
                      animationTimingFunction: "ease-out",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Remote • Worldwide</span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-muted-foreground fade-out"
                    style={{
                      animationDuration: "0.7s",
                      animationTimingFunction: "ease-out",
                    }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>
                      <a href="mailto:contact@rizwanweb.site">
                        contact@rizwanweb.site
                      </a>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <button className="solid-button">
                      Get In Touch
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <a
                    href="http://localhost:5173/rizwan-developer-resume.pdf"
                    download
                  >
                    <button className="outline-button text-foreground font-semibold">
                      <Download className="w-4 h-4" />
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative order-1 md:order-2 z-3 bubble-effect overflow-hidden aspect-square bg-linear-to-br from-primary via-card to-accent border-2 ">
                <FallbackImage
                  src={ProfilePicture}
                  alt={"Profile"}
                  className={
                    "w-full h-full object-cover mix-blend-luminosity opacity-80"
                  }
                />
                <div className="absolute z-2 inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Education
                  </h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm text-accent mb-2">
                        <Award className="w-4 h-4" />
                        {edu.year}
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
