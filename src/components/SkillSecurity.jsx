import {
  Shield,
  Bug,
  AlertTriangle,
  Lock,
  Terminal,
  Fingerprint,
  Scan,
  FileWarning,
} from "lucide-react";

const SkillSecurity = () => {
  const securitySkills = [
    "Penetration Testing",
    "Bug Bounty",
    "Application Security",
    "OWASP Top 10",
    "Vulnerability Assessment",
  ];

  const securityTools = [
    { name: "Kali Linux", icon: Terminal },
    { name: "Nmap", icon: Scan },
    { name: "Burp Suite", icon: Bug },
    { name: "Metasploit", icon: Shield },
    { name: "Wireshark", icon: Fingerprint },
    { name: "OWASP ZAP", icon: Lock },
  ];

  const floatingItems = [
    { icon: Bug, label: "Bug", color: "red", x: "10%", y: "20%", delay: 0 },
    {
      icon: AlertTriangle,
      label: "Warning",
      color: "yellow",
      x: "80%",
      y: "15%",
      delay: 0.5,
    },
    {
      icon: Shield,
      label: "Secure",
      color: "green",
      x: "70%",
      y: "70%",
      delay: 1,
    },
    {
      icon: FileWarning,
      label: "Critical",
      color: "red",
      x: "15%",
      y: "75%",
      delay: 1.5,
    },
    {
      icon: Lock,
      label: "Fixed",
      color: "primary",
      x: "50%",
      y: "10%",
      delay: 2,
    },
    {
      icon: Scan,
      label: "Scan",
      color: "accent",
      x: "85%",
      y: "45%",
      delay: 2.5,
    },
  ];
  return (
    <>
      <section>
        <div className="container-custom relative overflow-hidden bg-linear-to-b from-background to-card/30">
          <div className="absolute inset-0 opacity-10 ">
            <div className="w-full h-full background-box" />
          </div>

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-2">Cybersecurity</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Application Security & Ethical Hacking
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Securing applications and finding vulnerabilities before hackers
                do
              </p>
            </div>

            {/* Floating Animation Area */}
            <div className="relative h-72 md:h-96 mb-16 rounded-2xl border border-accent/20 bg-card/30 overflow-hidden">
              {/* Terminal Window Effect */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red" />
                <div className="w-3 h-3 rounded-full bg-yellow" />
                <div className="w-3 h-3 rounded-full bg-green" />
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
                security_scan.sh
              </div>

              {/* Floating Elements */}
              {floatingItems.map((item, index) => (
                <div
                  key={item.label}
                  className="absolute animate-float"
                  style={{
                    left: item.x,
                    top: item.y,
                    animationDelay: `${item.delay}s`,
                    animationDuration: `${4 + (index % 3)}s`,
                  }}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-${item.color}/30 hover:border-${item.color}/60 transition-colors group cursor-default`}
                  >
                    <item.icon className={`w-4 h-4 text-${item.color}`} />
                    <span className={`text-xs font-mono text-${item.color}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Central Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-accent/50 animate-pulse-glow flex items-center justify-center">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border border-accent/30 animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                </div>
              </div>

              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-accent/50 to-transparent animate-[slide-down_3s_linear_infinite]" />
              </div>
            </div>

            {/* Skills and Tools */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Security Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {securitySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-accent" />
                  Security Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {securityTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <tool.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "100+", label: "Bugs Found" },
                { value: "$50K+", label: "Bounties Earned" },
                { value: "500+", label: "Pentests Done" },
                { value: "0", label: "Breaches" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border"
                >
                  <p className="font-heading text-3xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSecurity;
