import HerorSection from "../components/HerorSection";
import Header from "../components/Header";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSection from "../components/AboutSection";
import ImageGallery from "../components/ImageGallery";
import SkillsWebDev from "../components/SkillsWebDev";
import SkillSEO from "../components/SkillSEO";
import SkillSecurity from "../components/SkillSecurity";
import NewsletterSection from "../components/NewsletterSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HerorSection />
        <AboutSection />
        <FeaturedProjects />
        <SkillsWebDev />
        <SkillSEO />
        <SkillSecurity />
        <ImageGallery />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
