import {
  Code2,
  Database,
  Globe,
  Server,
  Palette,
  GitBranch,
  Layers,
  PenTool,
  Cable,
} from "lucide-react";

const SkillsWebDev = () => {
  const webDevSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 92 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js / Express", level: 85 },
    { name: "MongoDB / PostgreSQL", level: 82 },
  ];

  const tools = [
    { icon: Code2, name: "VS Code", color: "primary" },
    { icon: GitBranch, name: "Git", color: "orange" },
    { icon: Database, name: "MongoDB", color: "green" },
    { icon: PenTool, name: "Illustrator", color: "white" },
    { icon: Palette, name: "Figma", color: "accent" },
    { icon: Globe, name: "Vercel", color: "primary" },
    { icon: Layers, name: "Docker", color: "primary" },
    { icon: Cable, name: "NPM", color: "green" },
  ];
  return (
    <>
      <section>
        <div className="container-custom">
          <div className="space-y-2">
            <p className="text-primary text-center font-medium">Expertise</p>
            <h2 className=" text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              Web Development Skills
            </h2>
            <p className="text-center text-muted-foreground">
              Building modern, scalable, and performant web applications
            </p>
          </div>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Technical Proficiency
              </h3>
              {webDevSkills.map((skill) => (
                <div key={skill.name} className="space-y-">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-skill"
                      style={{
                        width: `${skill.level}%`,
                        animationDuration: `${skill.level / 25}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group rounded-xl bg-card p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-${tool.color}/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <tool.icon className={`w-6 h-6 text-${tool.color}`} />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsWebDev;
