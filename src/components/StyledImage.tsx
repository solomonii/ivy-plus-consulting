import React, { useState } from "react";

interface StyledImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const StyledImage: React.FC<StyledImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Loading image...</p>
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Failed to load image</p>
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{
          filter: "brightness(0.97) contrast(1.03) saturate(0.95)",
        }}
      />

      {/* Subtle gradient overlay for consistency */}
      {imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default StyledImage;
