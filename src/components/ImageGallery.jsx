import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import FallbackImage from "./FallbackImage";
const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      title: "Coding Setup",
      category: "Workspace",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop",
      title: "Conference Talk",
      category: "Events",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      title: "Code Review",
      category: "Work",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      title: "Tech Stack",
      category: "Development",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      title: "Security Lab",
      category: "Security",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "Analytics Dashboard",
      category: "SEO",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <>
      <section>
        <div className="container-custom flex justify-center flex-col items-center overflow-hidden gap-5 ">
          <div className="space-y-3 *:text-center">
            <p className="text-primary">Gallery</p>
            <h2 className="text-3xl text-foreground md:text-4xl lg:text-5xl font-bold">
              Behind The Scenes
            </h2>
            <p className="text-muted-foreground">
              A glimpse into my journey and workspace
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative cursor-pointer group overflow-hidden border-2 border-border rounded-2xl  ${
                  index === 0
                    ? "col-span-2 md:row-span-2"
                    : index === 3
                    ? "max-md:col-span-2 max-md:row-span-2"
                    : ""
                }`}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(image)}
              >
                <div className="sm:relative overflow-hidden h-full aspect-3/2 ">
                  <FallbackImage
                    src={image.src}
                    alt={image.title}
                    height={"h-full"}
                    aspect={"aspect-3/2"}
                    className={
                      "transition-transform duration-500 group-hover:scale-110"
                    }
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent transition-opacity duration-300 ${
                      hoveredId === image.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300`}
                      style={{
                        transform:
                          hoveredId === image.id
                            ? "translateY(0)"
                            : "translateY(20px)",
                      }}
                    >
                      <p className="text-xs text-primary font-medium mb-1">
                        {image.category}
                      </p>
                      <h3 className="font-heading font-semibold text-foreground">
                        {image.title}
                      </h3>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border">
                      <ZoomIn className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border
                  opacity-0 group-hover:opacity-100 duration-300 "
                  >
                    <ZoomIn className="w-5 h-5 text-foreground" />
                  </div>
                  <div
                    className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 pointer-events-none ${
                      hoveredId === image.id
                        ? "border-primary/50"
                        : "border-transparent"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          {selectedImage && (
            <div
              className="fixed inset-0 z-110 flex items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-screen h-5/7  w-full mx-4 z-10">
                <FallbackImage
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="rounded-xl shadow-2xl animate-scale-in shadow-secondary "
                  width={"w-full"}
                  height={"h-full"}
                />
                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-sm text-primary font-medium">
                    {selectedImage.category}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
