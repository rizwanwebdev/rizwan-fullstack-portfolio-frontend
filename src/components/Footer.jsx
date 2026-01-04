import { Link } from "react-router-dom";
import {
  Terminal,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Clock,
  ArrowRight,
  Instagram,
  Codepen,
  Facebook,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const toolsLinks = [
  { name: "SEO Analyzer", path: "#" },
  {
    name: "Domain Authority Checker",
    path: "https://github.com/rizwanwebdev/domain-authority-checker/releases/tag/v1.0.0",
  },
  { name: "JSON Formatter", path: "#" },
  { name: "Color Picker", path: "#" },
  { name: "Meta Generator", path: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rizwanwebdev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rizwanwebdev",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/rizwanwebdev",
    label: "Instagram",
  },
  { icon: Facebook, href: "https://fb.me/rizwanwebdev", label: "Facebook" },
];
const Footer = () => {
  return (
    <>
      <footer className="bg-card/50 border-t border-border">
        {/* Main Footer */}
        <div className="container-custom">
          <div className="grid  grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="max-[500px]:col-span-2">
              <Link to="/" className="flex group items-center gap-2 mb-4">
                <div
                  className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-xl
            bg-linear-to-br from-primary/70 to-accent  group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                >
                  <Terminal />
                </div>
                <span className="font-bold text-2xl text-foreground">
                  Rizwan
                </span>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Full-stack developer passionate about building secure, scalable,
                and SEO-optimized web applications. Let's create something
                amazing together.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Quick Tools
              </h4>
              <ul className="space-y-3">
                {toolsLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="max-[500px]:col-span-2">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:contact@rizwanweb.site"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      contact@rizwanweb.site
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>
                    <p className="text-foreground text-sm">
                      Remote • Worldwide
                    </p>
                  </div>
                </li>
              </ul>
              <Link to="/contact">
                <button className="solid-button mt-6 w-full">
                  Let's Work Together
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dev.Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
