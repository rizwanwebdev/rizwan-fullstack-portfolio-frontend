import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import FallbackImage from "./FallbackImage";
import { Link } from "react-router-dom";
import MoreProjects from "./MoreProjects";
import { useEffect, useState } from "react";
import { fetchGithub } from "../services/api";
import DisplayError from "./DisplayError";
const FeaturedProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const fetchProject = async () => {
      setIsError("");
      try {
        const data = await fetchGithub();

        const filtered = data.filter(
          (project) => project.topics && project.topics.length > 0
        );

        if (filtered.length === 0) setIsError("Projects Not Found");
        setAllProjects(filtered);
      } catch (error) {
        setIsError(error.message);
      }
    };
    fetchProject();
  }, []);

  const featuredNames = ["movies-explorer", "cooking-art"];
  const featuredProjects = allProjects.filter((project) =>
    featuredNames.includes(project.name)
  );
  return (
    <>
      {isError ? (
        <DisplayError errorMessage={isError} />
      ) : (
        <section className=" bg-linear-to-b from-background to-card/30">
          <div className="container-custom flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <p className="text-center text-primary text-lg">Featured Work</p>
              <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-bold">
                Top Projects
              </h2>
              <p className="text-center text-muted-foreground mb-3">
                Showcasing my best work in web development and SEO optimization
              </p>
            </div>
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 == 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative group ${
                      index % 2 == 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-border">
                      <FallbackImage
                        src={`https://raw.githubusercontent.com/rizwanwebdev/screenshots/refs/heads/main/${project.name}16-9.png`}
                        alt={project.name}
                        className="transition-transform duration-500 group-hover:scale-105"
                        aspect={" aspect-video"}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 ">
                        <div className="flex gap-2">
                          <a
                            href={project.html_page}
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.homepage}
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                      {/* featured badge */}
                    </div>
                    <div className="absolute -top-3 -right-3 flex items-center gap-3 px-3 py-1.5 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                  {/* content========== */}
                  <div
                    className={`space-y-6 ${
                      index % 2 == 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {project.name
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-muted-foreground text-sm mb-2 ">
                      Tags:&nbsp;
                      {project.topics.map((topic) => (
                        <span className="px-0.5" key={topic}>
                          {topic},
                        </span>
                      ))}
                    </p>

                    <a href={project.homepage} target="_blank">
                      <button className="solid-button">
                        View Live <ArrowRight className="w-4" />
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {isError ? (
        <DisplayError errorMessage={isError} />
      ) : (
        <MoreProjects moreProjects={allProjects} />
      )}
    </>
  );
};

export default FeaturedProjects;
