import { useEffect, useRef } from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Globe,
} from "lucide-react";
const SkillSEO = () => {
  const seoKeywords = [
    "SEO",
    "Keywords",
    "Backlinks",
    "Rankings",
    "SERP",
    "CTR",
    "Meta Tags",
    "Schema",
    "Crawling",
    "Indexing",
    "Domain Authority",
    "Page Speed",
    "Core Web Vitals",
    "Mobile-First",
    "Content Strategy",
    "Link Building",
    "Technical SEO",
    "Local SEO",
    "Analytics",
  ];

  const seoTools = [
    { name: "Google Search Console", icon: Search },
    { name: "SEMRush", icon: TrendingUp },
    { name: "Ahrefs", icon: BarChart3 },
    { name: "Moz", icon: Target },
    { name: "Screaming Frog", icon: Zap },
    { name: "Google Analytics", icon: Globe },
  ];
  const containerRef = useRef(null);
  return (
    <>
      <section>
        <div className="container-custom">
          <div className="space-y-2 mb-5">
            <p className="text-green text-center font-medium">
              Search Engine Optimization
            </p>
            <h2 className=" text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              SEO & Digital Marketing
            </h2>
            <p className="text-center text-muted-foreground">
              Driving organic traffic and improving search visibility
            </p>
          </div>
          {/* Floating Keywords */}
          <div
            ref={containerRef}
            className="relative h-64 mb-16 rounded-2xl border border-border bg-card/50 overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8">
              {seoKeywords.map((keyword, index) => (
                <span
                  key={keyword}
                  className="px-4 py-2 rounded-full border border-green/30 bg-green/5 text-green text-sm font-medium animate-float hover:bg-green/10 hover:border-green/50 transition-colors cursor-default"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: `${4 + (index % 3)}s`,
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-card/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card/50 to-transparent pointer-events-none" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoTools.map((tool, index) => (
              <div
                key={tool.name}
                className="group p-6 rounded-xl bg-card border border-border hover:border-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-green/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-green transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">SEO Tool</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "500K+", label: "Keywords Tracked" },
              { value: "150%", label: "Avg. Traffic Increase" },
              { value: "#1", label: "Page Rankings" },
              { value: "95+", label: "Core Web Vitals" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/50 border border-border"
              >
                <p className="font-heading text-3xl font-bold text-green mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSEO;
