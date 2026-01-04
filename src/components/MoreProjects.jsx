import { ArrowRight } from "lucide-react";
import FallbackImage from "./FallbackImage";
import { Link } from "react-router-dom";
const MoreProjects = ({ moreProjects }) => {
  return (
    <>
      <section>
        <div className="container-custom">
          <div className="flex justify-between items-center space-y-4">
            <div className="space-y-1 flex flex-col">
              <span className="text-primary">Portfolio</span>
              <h2 className="text-foreground text-3xl md:text-4xl font-bold">
                More Projects
              </h2>
            </div>
            <Link to="/projects">
              <button className="outline-button">
                View All Projects <ArrowRight className="w-4" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl border-2 border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer h-full"
              >
                <a href={project.url} target="_blank">
                  <div className="overflow-hidden relative">
                    <FallbackImage
                      src={`https://raw.githubusercontent.com/rizwanwebdev/screenshots/refs/heads/main/${project.name}.png`}
                      alt={project.name}
                      className={
                        "aspect-4/3 group-hover:scale-110 transition-all duration-300"
                      }
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                  </div>
                </a>
                <div className="p-3 z-10">
                  <a href={project.homepage || "#"} target="_blank">
                    <h4 className="text-foreground text-2xl font-bold">
                      {project.name
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h4>
                  </a>
                  <p className="text-muted-foreground line-clamp-2">
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
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none " />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreProjects;
