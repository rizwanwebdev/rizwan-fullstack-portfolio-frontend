import { ArrowRight } from "lucide-react";
import FallbackImage from "./FallbackImage";
import { Link } from "react-router-dom";
import Rizwan1 from "../assets/images/rizwan-1.png";
import Rizwan2 from "../assets/images/rizwan-2.png";
import Rizwan3 from "../assets/images/rizwan-3.png";
import Rizwan4 from "../assets/images/rizwan-4.png";
import Rizwan5 from "../assets/images/rizwan-5.png";
import Rizwan6 from "../assets/images/rizwan-6.png";
const AboutSection = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <span className="text-primary">About Me</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Crafting <br /> Digital Excellence <br /> with Code & Strategy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise spanning
                  web development, SEO optimization, and application security.
                  With over 3 years of hands-on experience, I've helped
                  businesses transform their digital presence.
                </p>
                <p>
                  My journey started with a curiosity for how things work on the
                  web, which evolved into mastering modern frameworks like React
                  and Node.js, diving deep into SEO strategies, and exploring
                  the fascinating world of Cyber Security.
                </p>
                <p>
                  I believe in writing clean, maintainable code that not only
                  works flawlessly but is also secure and optimized for search
                  engines. Every project I undertake is an opportunity to create
                  something meaningful.
                </p>
              </div>
              <div className="flex gap-3">
                <Link to="/about">
                  <button className="solid-button">
                    More About Me <ArrowRight className="w-3 " />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="outline-button">Get In Touch</button>
                </Link>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="grid grid-rows-2 gap-8 px-2">
                <div className="grid grid-cols-3 justify-end  items-end gap-4 *:overflow-hidden">
                  <div className="about-images-sec h-full">
                    <FallbackImage src={Rizwan3} alt="Rizwan" />
                  </div>
                  <div className="about-images-sec h-[85%]">
                    <FallbackImage src={Rizwan2} alt="Rizwan" />
                  </div>
                  <div className="about-images-sec h-[70%]">
                    <FallbackImage src={Rizwan4} alt="Rizwan" />
                  </div>
                </div>
                <div className="grid grid-cols-3 justify-start gap-4 *:overflow-hidden">
                  <div className="about-images-sec h-[70%]">
                    <FallbackImage src={Rizwan6} alt="Rizwan" />
                  </div>
                  <div className="about-images-sec h-[85%]">
                    <FallbackImage src={Rizwan1} alt="Rizwan" />
                  </div>
                  <div className="about-images-sec h-full">
                    <FallbackImage src={Rizwan5} alt="Rizwan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
