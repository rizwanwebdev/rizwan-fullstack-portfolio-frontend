import {
  Code,
  Database,
  Globe,
  Shield,
  Search,
  Terminal,
  Cpu,
  Lock,
  Bug,
} from "lucide-react";

export const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-100 lg:min-h-125">
      {/* Central Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
          <div
            className="absolute inset-4 rounded-full border border-accent/20 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "25s" }}
          />

          {/* Central Glow */}
          <div className="absolute inset-8 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-xl" />
          <div className="absolute inset-12 rounded-full bg-linear-to-br from-primary to-accent opacity-80" />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Terminal className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div
        className="absolute top-[10%] left-[15%] animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="w-14 h-14 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-primary/50 transition-colors group">
          <Code className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute top-[5%] right-[20%] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-12 h-12 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-green/50 transition-colors group">
          <Search className="w-6 h-6 text-green group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute top-[25%] right-[5%] animate-float-reverse"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-16 h-16 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-accent/50 transition-colors group">
          <Shield className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute bottom-[25%] right-[10%] animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-12 h-12 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-orange/50 transition-colors group">
          <Bug className="w-6 h-6 text-orange group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute bottom-[10%] right-[25%] animate-float-reverse"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-14 h-14 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-yellow/50 transition-colors group">
          <Database className="w-7 h-7 text-yellow group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute bottom-[15%] left-[10%] animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="w-14 h-14 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-primary/50 transition-colors group">
          <Globe className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute top-[35%] left-[5%] animate-float-reverse"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-12 h-12 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-red/50 transition-colors group">
          <Lock className="w-6 h-6 text-red group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="absolute bottom-[35%] left-[20%] animate-float"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="w-10 h-10 rounded-xl bg-secondary border-2 duration-100 border-border flex items-center justify-center shadow-lg hover:border-cyan/50 transition-colors group">
          <Cpu className="w-5 h-5 text-cyan group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="hsl(var(--accent))"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>
        <line
          x1="15%"
          y1="15%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="80%"
          y1="10%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="90%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="85%"
          y1="70%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="15%"
          y1="80%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="10%"
          y1="40%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
