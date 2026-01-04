import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
// import { toast } from "sonner";

import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    // toast.success("Message sent successfully!");
  };
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="top-padding bg-linear-to-b from-background to-card/50">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's discuss how I can help you achieve
              your goals
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Let's work together
                </h2>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out through any of the channels below.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a
                        href="mailto:contact@rizwanweb.site"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                      >
                        contact@rizwanweb.site
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">WhatsApp</h3>
                      <a
                        href="https://wa.me/1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                      >
                        +1 234 567 890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        Remote • Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-yellow/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        Availability
                      </h3>
                      <p className="text-muted-foreground">
                        24/7
                        <span className="text-sm">
                          as i am searching for job 😁
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-foreground mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/rizwanwebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/rizwanwebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/rizwanwebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="solid-button"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>

                        <input
                          className="border-2 border-border px-3 py-2 rounded-xl text-sm w-full bg-background"
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          className="border-2 border-border px-3 py-2 rounded-xl text-sm w-full bg-background"
                          name="email"
                          autoComplete="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        className="border-2 border-border px-3 py-2 rounded-xl text-sm w-full bg-background"
                        type="text"
                        name="subject"
                        autoComplete="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        className="border-2 border-border px-3 py-2 rounded-xl text-sm w-full bg-background"
                        type="text"
                        name="message"
                        autoComplete="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      name="submit"
                      className="w-full solid-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="solid-button flex items-center gap-2">
                          <Send className="w-4 h-4 animate-pulse" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
