import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillsWebDev from "../components/SkillsWebDev";
import SkillSEO from "../components/SkillSEO";
import SkillSecurity from "../components/SkillSecurity";
import { Calendar, Award, Briefcase, TrendingUp } from "lucide-react";

const activityTimeline = [
  {
    date: "Dec 2024",
    title: "Completed Security Audit",
    description: "Major e-commerce platform security assessment",
    type: "security",
  },

  {
    date: "Nov 2024",
    title: "Launched SEO Campaign",
    description: "150% traffic increase for client website",
    type: "seo",
  },
  {
    date: "Oct 2024",
    title: "Built Full-Stack App",
    description: "Real-time collaboration tool with React & Node",
    type: "development",
  },
  {
    date: "Sep 2024",
    title: "Bug Bounty Achievement",
    description: "Critical vulnerability found in fintech app",
    type: "security",
  },
  {
    date: "Aug 2024",
    title: "Open Source Contribution",
    description: "Major contribution to popular React library",
    type: "development",
  },
];

const typeColors = {
  security: "bg-accent/10 text-accent border-accent/30",
  seo: "bg-green/10 text-green border-green/30",
  development: "bg-primary/10 text-primary border-primary/30",
};
const Skills = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="top-padding bg-linear-to-b from-card/50 to-background">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical expertise and tools
            </p>
          </div>
        </section>

        {/* Skills Sections */}
        <SkillsWebDev />
        <SkillSEO />
        <SkillSecurity />

        {/* Activity Timeline */}
        <section>
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2">Recent Work</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Activity & Achievements
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative ">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                {/* Timeline Items */}
                {activityTimeline.map((item, index) => (
                  <div key={index} className="relative pl-16 pb-12 last:pb-0">
                    {/* Dot */}
                    <div className="absolute left-4 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    {/* Content */}
                    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                        <span
                          className={`text-sm px-2.5 font-medium border py-0.5 rounded-full ${
                            typeColors[item.type]
                          }`}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Skills;
