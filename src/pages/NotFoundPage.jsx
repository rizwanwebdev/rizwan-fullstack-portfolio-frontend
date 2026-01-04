import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const NotFoundPage = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="flex min-h-screen items-center justify-center relative bg-background">
            <div className=" absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
            <div
              id="accent-blob"
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            />
            <div className="text-center z-8">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <button onClick={() => showCurrent()}>click</button>
              <p className="mb-4 text-xl text-muted-foreground">
                Oops! Page not found
              </p>
              <a
                href="/"
                className="text-primary underline hover:text-primary/90"
              >
                Return to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
