import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import FallbackImage from "../components/FallbackImage";
import DisplayError from "../components/DisplayError";
import { Link } from "react-router-dom";
import { fetchGithub } from "../services/api";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Book,
  BookOpen,
} from "lucide-react";
const categories = ["All", "Web Development", "SEO", "Security", "Bug Bounty"];

const categoryColors = {
  "Web Development": "bg-primary/10 text-primary border-primary/50",
  SEO: "bg-green/10 text-green border-green/50",
  Security: "bg-accent/10 text-accent border-accent/50",
  "Bug Bounty": "bg-red/10 text-red border-red/50",
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const [allProjects, setAllProjects] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      setIsError("");
      try {
        const data = await fetchGithub();

        // filter repos with at least one topic
        const filtered = data.filter(
          (project) => project.topics && project.topics.length > 0
        );

        if (filtered.length === 0) setIsError("Projects Not Found");
        setAllProjects(filtered);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, []);

  const featuredNames = [
    "movies-explorer",
    "cooking-art",
    "domain-authority-checker",
  ];
  const featuredProjects = allProjects.filter((project) =>
    featuredNames.includes(project.name)
  );

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.topics.includes(activeCategory));

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setVisibleCount((prev) => prev + 6);
    setIsLoading(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className="top-padding bg-linear-to-b from-card/50 to-background">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of my work across web development, SEO, and security
            </p>
          </div>
        </section>
        {/* Featured Carousel */}
        {isLoading ? (
          <DisplayError errorMessage={"Loading..."} />
        ) : isError ? (
          <DisplayError errorMessage={isError} />
        ) : (
          <section>
            <div className="container-custom">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Featured Projects
              </h2>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredProjects.map((project) => (
                      <div key={project.id} className="w-full shrink-0">
                        <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-card border border-border rounded-2xl">
                          <div className="aspect-video rounded-xl overflow-hidden">
                            <FallbackImage
                              src={`https://raw.githubusercontent.com/rizwanwebdev/screenshots/refs/heads/main/${project.name}.png`}
                              alt={project.title}
                              className={"w-full h-full object-cover"}
                            />
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                              {project.name
                                .split("-")
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join(" ")}
                            </h3>
                            <p className="text-muted-foreground mb-4">
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
                            <div className="flex flex-wrap gap-4">
                              {project.homepage && (
                                <a href={project.homepage} target="_blank">
                                  <button
                                    title="Live Demo"
                                    className="solid-button w-full sm:w-fit"
                                  >
                                    View Project
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                </a>
                              )}
                              <a href={project.html_url} target="_blank">
                                <button className="outline-button w-full sm:w-fit">
                                  <Github className="w-4 h-4" />
                                  Source Code
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevSlide}
                  className="cursor-pointer absolute left-4 top-1/4 md:top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:shadow-accent shadow transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="cursor-pointer absolute right-4 top-1/4 md:top-1/2  -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors hover:shadow-accent shadow"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-primary"
                          : "bg-muted hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-2">
          <div className="px-6 min-w-full">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(12);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        {isLoading ? (
          <DisplayError errorMessage={"Loading..."} />
        ) : isError ? (
          <DisplayError errorMessage={isError} />
        ) : (
          <section>
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-card rounded-xl border-2 border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-4/3 overflow-hidden group">
                      <FallbackImage
                        src={`https://raw.githubusercontent.com/rizwanwebdev/screenshots/refs/heads/main/${project.name}.png`}
                        alt={project.title}
                        className={
                          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        }
                      />

                      <div
                        className={`absolute bottom-1 lg:bottom-0 left-1 flex justify-center items-start opacity-100 lg:opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 *:bg-background *:cursor-pointer *:flex *:justify-center *:items-center gap-1 *:border   *:${
                          categoryColors[project.category]
                        }`}
                      >
                        <span className="w-10 aspect-square rounded-lg ">
                          <a href={project.html_url} target="_blank">
                            <Github className="hover:scale-110" />
                          </a>
                        </span>
                        {project.homepage && (
                          <span className="w-10 aspect-square rounded-lg ">
                            <a href={project.homepage} target="_blank">
                              <ExternalLink className="hover:scale-110" />
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        <Link to={project.html_url}>
                          {project.name
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </Link>
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <p className="text-primary text-sm mb-2 text-wrap">
                        Tags:&nbsp;
                        {project.topics.map((topic) => (
                          <span
                            className="text-muted-foreground px-0.5 text-wrap"
                            key={topic}
                          >
                            {topic},
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    className="outline-button"
                    onClick={loadMore}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Load More Projects"
                    )}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Projects;
