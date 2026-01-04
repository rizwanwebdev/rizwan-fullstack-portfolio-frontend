import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FallbackImage from "../components/FallbackImage";
// import { toast } from "sonner";
import { fetchBlogBySlug, fetchBlogs } from "../services/api";

import {
  Clock,
  Calendar,
  Heart,
  ThumbsUp,
  Laugh,
  Frown,
  Angry,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  CheckCircle,
  Send,
  User,
  Binary,
} from "lucide-react";

const blogPost = {
  author: {
    name: "Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    bio: "Full-stack developer passionate about web security and performance optimization.",
  },
};

const similarPosts = [
  {
    id: "4",
    title: "Introduction to Bug Bounty Hunting",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop",
    category: "Security",
  },
  {
    id: "8",
    title: "OWASP Top 10 Explained",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
    category: "Security",
  },
  {
    id: "10",
    title: "Secure Coding Practices",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
    category: "Security",
  },
];

const reactions = [
  { type: "like", icon: ThumbsUp, color: "primary", label: "Like" },
  { type: "love", icon: Heart, color: "red", label: "Love" },
  { type: "laugh", icon: Laugh, color: "yellow", label: "Haha" },
  { type: "sad", icon: Frown, color: "primary", label: "Sad" },
  { type: "angry", icon: Angry, color: "orange", label: "Angry" },
];

const BlogPost = () => {
  const { id } = useParams();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isRecommended, setIsRecommended] = useState(false);
  const [isInterested, setIsInterested] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Very informative.",
      date: "2 hours ago",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "This helped me understand security better.",
      date: "1 day ago",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [newBlog, setNewBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setFetchError("");
      try {
        const data = await fetchBlogBySlug(id);

        if (data) {
          setNewBlog(data);
        }
      } catch (error) {
        setFetchError(error.message) || "Something went wrong!";
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    // toast.success("Link copied to clipboard!");
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments((prev) => [
      { id: Date.now(), author: "You", content: comment, date: "Just now" },
      ...prev,
    ]);
    setComment("");
    // toast.success("Comment posted!");
  };
  return (
    <>
      <Header />
      <main>
        {/* Hero Image */}
        <section className=" bg-linear-to-b from-card/50 to-background">
          <div className="container-custom top-padding relative z-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="relative  mt-4 mb-6 rounded-2xl overflow-hidden  border-2 border-border">
                  <FallbackImage
                    src={"https://picsum.photos/1920/1080"}
                    alt={newBlog.title}
                    height={"h-full"}
                  />
                  {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" /> */}
                </div>

                <article>
                  <div className="bg-card rounded-2xl border border-border p-8 mb-8">
                    {/* <span className="mb-4 badge border-accent/50 text-accent">
                  {blogPost.category}
                </span> */}
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {newBlog.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(newBlog.publishedAt).toDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        12min Read
                      </span>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          img: ({ node, ...props }) => (
                            <img
                              {...props}
                              className="rounded-xl my-6 mx-auto"
                              loading="lazy"
                            />
                          ),
                        }}
                      >
                        {newBlog.content}
                      </ReactMarkdown>
                    </div>
                  </div>

                  {/* Interaction Section */}
                  <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      How did you find this article?
                    </h3>

                    {/* Reactions */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {reactions.map((reaction) => (
                        <button
                          key={reaction.type}
                          onClick={() => setSelectedReaction(reaction.type)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                            selectedReaction === reaction.type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <reaction.icon className="w-5 h-5" />
                          <span className="text-sm">{reaction.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Recommend / Interested */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                      <button
                        onClick={() => setIsRecommended(!isRecommended)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                          isRecommended
                            ? "bg-green/10 text-green border border-green/30"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {isRecommended ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <ThumbsUp className="w-5 h-5" />
                        )}
                        <span>Recommend</span>
                        <span className="text-xs opacity-70">(42)</span>
                      </button>
                      <button
                        onClick={() => setIsInterested(!isInterested)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                          isInterested
                            ? "bg-primary/10 text-primary border border-primary/30"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {isInterested ? (
                          <Heart className="w-5 h-5 fill-current" />
                        ) : (
                          <Heart className="w-5 h-5" />
                        )}
                        <span>Interested</span>
                        <span className="text-xs opacity-70">(18)</span>
                      </button>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                    <div className="flex items-start gap-4">
                      <FallbackImage
                        src={blogPost.author.avatar}
                        alt={blogPost.author.name}
                        className="rounded-full  "
                        width={"w-16"}
                        height={"h-16"}
                        aspect={"aspect-square"}
                      />

                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-foreground">
                          {blogPost.author.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {blogPost.author.bio}
                        </p>

                        <Link to="/contact">
                          <button className="solid-button px-6">
                            <Binary />
                            Hire Me
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-6">
                      Comments ({comments.length})
                    </h3>

                    <form onSubmit={handleSubmitComment} className="mb-6">
                      <textarea
                        name="comment"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mb-3 border-2 p-2 w-full rounded-lg"
                      />
                      <button type="submit" className="solid-button">
                        <Send className="w-4 h-4" />
                        Post Comment
                      </button>
                    </form>

                    <div className="space-y-4">
                      {comments.map((c) => (
                        <div
                          key={c.id}
                          className="p-4 rounded-lg bg-secondary/50"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">
                                {c.author}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {c.date}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {c.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Similar Posts */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Similar Posts
                    </h3>
                    <div className="space-y-4">
                      {similarPosts.map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="flex gap-3 group"
                        >
                          <FallbackImage
                            src={post.image}
                            alt={post.title}
                            className="rounded-lg "
                            width={"w-20"}
                            height={"h-14"}
                          />

                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </p>

                            <span className="mt-1 badge text-xs">
                              {post.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Share Article
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <a
                        // href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        //   window.location.href
                        // )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        // href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        //   window.location.href
                        // )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        // href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        //   window.location.href
                        // )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        {linkCopied ? (
                          <CheckCircle className="w-5 h-5 text-green" />
                        ) : (
                          <Link2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
