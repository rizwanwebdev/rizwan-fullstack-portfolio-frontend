import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import Rlogo from "../assets/logo/r-logo.png";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed z-110  ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 transition-all duration-300"
            : "bg-transparent py-5 "
        }`}
      >
        <div className="container px-6 relative min-w-screen z-10 flex justify-between items-center">
          <Link to="/" className="flex items-center group gap-2">
            {/* <div
              className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-xl
            bg-linear-to-br from-primary/70 to-accent  group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
            >
              <Terminal />
            </div> */}
            <img src={Rlogo} className="h-10" />
            <span className="text-foreground -ml-3 text-3xl font-semibold">
              izwan
            </span>
          </Link>
          <nav className="hidden lg:block">
            <ul className="list-none flex flex-row gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>
                  <li
                    className={`text-sm transition-all duration-100 cursor-pointer hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary border-b border-b-primary"
                        : "text-muted-foreground "
                    }`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="solid-button  w-full"
                >
                  <Code2 className="w-4 h-4 " /> Hire Me
                </button>
              </Link>
            </div>
          </div>

          <Link to="contact" className="hidden lg:block">
            <button className="solid-button">
              <Code2 className="w-4 h-4 " /> Hire Me
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
