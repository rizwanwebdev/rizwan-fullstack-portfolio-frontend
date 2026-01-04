import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FallbackImage from "../components/FallbackImage";
import ReactionButton from "../components/ReactionButton";
import DisplayError from "../components/DisplayError";
import { fetchBlogs, searchBlog } from "../services/api";
import { useSearchParams, useNavigate } from "react-router-dom";

import {
  Search,
  Clock,
  ChevronLeft,
  ChevronRight,
  Heart,
  ThumbsUp,
  Laugh,
  Frown,
  Angry,
} from "lucide-react";

const Blog = () => {
  const categories = ["All", "Web Development", "SEO", "Security", "Tutorials"];
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsByPage, setBlogsByPage] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (blogsByPage[currentPage]) {
      setAllBlogs(blogsByPage[currentPage]);
      return;
    }
    const fetchPage = async () => {
      setLoading(true);
      setFetchError("");

      try {
        const data = await fetchBlogs(currentPage);

        setBlogsByPage((prev) => ({
          ...prev,
          [currentPage]: data.blogs,
        }));

        setAllBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (error) {
        setFetchError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, [currentPage]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/blog?search=${searchQuery}`);
  };

  useEffect(() => {
    if (!search.trim()) {
      // reset to normal paginated blogs
      setFetchError("");
      setCurrentPage(1);
      return;
    }
    const getSearchResult = async () => {
      setLoading(true);
      setFetchError("");

      try {
        const data = await searchBlog(search);
        setAllBlogs(data.blogs);
      } catch (error) {
        setFetchError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    const delay = setTimeout(getSearchResult, 400);
    return () => clearTimeout(delay);
  }, [search]);

  const featuredPosts = allBlogs.filter((post) => post.featured);
  const [currentSlide, setCurrentSlide] = useState(0, (prev) => prev + 1);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="top-padding bg-linear-to-b from-card/50 to-background">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="text-gradient">Blog</span> & Articles
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Insights on web development, SEO, and security
            </p>
          </div>
        </section>

        {/* Featured Carousel */}
        {loading ? (
          <DisplayError errorMessage={"Loading... Carousel"} />
        ) : fetchError ? (
          <DisplayError errorMessage={fetchError} />
        ) : (
          <section>
            <div className="container-custom">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Featured Posts
              </h2>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {featuredPosts.map((post) => (
                      <div key={post.slug} className="w-full shrink-0">
                        <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
                          <div className="aspect-video rounded-xl overflow-hidden">
                            <img />
                            <FallbackImage
                              src={post.thumbnailImage}
                              alt={post.title}
                            />
                          </div>
                          <div className="space-y-2">
                            {/* <span
                                className={`badge  ${
                                  post.category.toLowerCase() === "seo"
                                    ? "text-green"
                                    : post.category.toLowerCase() === "security"
                                    ? "text-accent"
                                    : post.category.toLowerCase() ===
                                      "bug bounty"
                                    ? "text-red"
                                    : "text-primary"
                                }`}
                              >
                                {post.category}
                              </span> */}
                            <h3 className="font-heading text-2xl font-bold text-foreground ">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground ">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{post.date}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>
                            <Link to={`/blog/${post.slug}`}>
                              <button className="mt-2 px-8 solid-button">
                                Read More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + featuredPosts.length) % featuredPosts.length
                    )
                  }
                  className="absolute left-3 top-1/4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
                  }
                  className="absolute right-3 top-1/4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Search*/}
        <section>
          <div className="px-6 min-w-screen flex justify-center items-center">
            <form
              onSubmit={handelSubmit}
              className="relative w-full md:w-[70%] border-2 border-border px-2 py-2 rounded-3xl bg-secondary focus-within:border-primary/50"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleChange}
                className="pl-10 w-full outline-0 bg-transparent"
                required
              />
            </form>
          </div>
        </section>
        {loading ? (
          <DisplayError errorMessage={"Loading... Blogs"} />
        ) : fetchError ? (
          <DisplayError errorMessage={fetchError} />
        ) : (
          <>
            {/* Posts Grid */}
            <section>
              <div className="container-custom">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allBlogs.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-card rounded-xl border-2 border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <div className="relative aspect-video overflow-hidden">
                          <FallbackImage
                            src={post.thumbnailImage}
                            alt={post.title}
                            aspect={"aspect-video"}
                            className="h-full transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </Link>
                      <div className="p-4">
                        {/* <span
                          className={`mb-3 badge text-xs ${
                            post.category.toLowerCase() === "seo"
                              ? "text-green"
                              : post.category.toLowerCase() === "security"
                              ? "text-accent"
                              : post.category.toLowerCase() === "bug bounty"
                              ? "text-red"
                              : "text-primary"
                          } `}
                        >
                          {post.category}
                        </span> */}

                        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-4" />
                            {post.readTime}
                          </div>
                          <ReactionButton postId={post.slug} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            {/* pagination */}
            <section>
              <div className="mb-6 flex flex-wrap justify-center items-center gap-3">
                <button
                  className="solid-button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Prev
                </button>

                <span className="px-4 py-2">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  className="solid-button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Blog;
