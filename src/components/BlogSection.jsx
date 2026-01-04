import { Link } from "react-router-dom";
import FallbackImage from "./FallbackImage";
import ReactionButton from "./ReactionButton";
import DisplayError from "./DisplayError";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { fetchBlogs } from "../services/api";
import { useState, useEffect } from "react";

const BlogSection = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setFetchError("");
      try {
        const data = await fetchBlogs(1);
        setAllBlogs(data.blogs);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);
  const featuredPost = allBlogs.find((post) => post.featured);

  return (
    <>
      {featuredPost && (
        <section>
          <div className="container-custom flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-medium text-primary">Blog</p>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
                  Latest Article
                </h2>
              </div>
              <button className="outline-button text-foreground">
                View All Posts <ArrowRight />
              </button>
            </div>
            {/* featured post */}
            <div className="grid grid-cols-1 md md:grid-cols-2 gap-5 bg-secondary/40 p-3 border-2 border-border transition-all duration-300 hover:border-primary/30 rounded-3xl">
              <div className="rounded-2xl w-full  h-full overflow-hidden">
                <FallbackImage
                  src={featuredPost.thumbnailImage}
                  alt={featuredPost.title}
                  className={"hover:scale-105 transition-all duration-300"}
                />
              </div>
              <div className="space-y-4 flex justify-center flex-col">
                {/* <span className="badge">{featuredPost.category}</span> */}
                <Link to={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary ">
                    {featuredPost.title}
                  </h3>
                </Link>
                <div className="flex flex-row gap-3 justify-start items-center text-sm text-muted-foreground *:flex *:items-center *:gap-1">
                  <span>
                    <Clock className="w-4" />
                    12Min
                  </span>
                  <span>
                    <Calendar className="w-4" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
                <p className="text-muted-foreground tracking-tight">
                  {featuredPost.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <button className="solid-button px-6">Read More</button>
                  </Link>
                  <ReactionButton
                    className={"mr-2"}
                    postId={featuredPost.slug}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {loading ? (
        <DisplayError errorMessage={"Loading... Blog Cards"} />
      ) : fetchError ? (
        <DisplayError errorMessage={fetchError} />
      ) : (
        <section>
          <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allBlogs.map((post) => (
              <div
                key={post.slug}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative aspect-video overflow-hidden">
                    <FallbackImage
                      src={post.thumbnailImage}
                      alt={post.title}
                      className="transition-transform duration-500 group-hover:scale-110"
                      height={"h-full"}
                      aspect={"aspect-video"}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  {/* <span className="badge mb-3 text-xs">{post.category}</span> */}
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to={`/blog/${post.slug}`}>
                      <button className="p-0 h-auto text-sm transition-all duration-300 text-primary hover:text-accent ">
                        Read More
                      </button>
                    </Link>

                    <ReactionButton postId={post.slug} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default BlogSection;
