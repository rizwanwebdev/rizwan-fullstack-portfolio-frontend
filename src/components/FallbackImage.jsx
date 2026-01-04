import { useState } from "react";
// const ERROR_IMG_SRC =
//   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHN0cm9rZT0iI2U1ZTVlNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgb3BhY2l0eT0iLjMiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMy43Ij48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjYiLz48cGF0aCBkPSJtMTYgNTggMTYtMTggMzIgMzIiLz48Y2lyY2xlIGN4PSI1MyIgY3k9IjM1IiByPSI3Ii8+PC9zdmc+";

const ERROR_IMG_SRC = "/transparent-placeholder.jpg";
const FallbackImage = ({ src, alt, className, height, width, aspect }) => {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };
  return didError ? (
    <img
      className={`bg-center bg-cover ${width ? width : "w-full"} ${
        aspect ? aspect : ""
      }  ${height ? height : "h-auto"} ${className ? className : ""}`}
      src={ERROR_IMG_SRC}
      alt="Error Loading Image"
      data-original-url={src}
      loading="eager"
      fetchPriority="high"
      onClick={(e) => e.stopPropagation()}
    />
  ) : (
    <img
      className={`bg-center bg-cover  ${width ? width : "w-full"} ${
        aspect ? aspect : ""
      }  ${height ? height : "h-auto"} ${className ? className : ""}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={handleError}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

export default FallbackImage;
