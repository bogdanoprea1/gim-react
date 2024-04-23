import React, { useRef, useState } from "react";

const FullScreenGif: React.FC<FullScreenGifProps> = ({
  src,
  alt,
  className,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const gifRef = useRef<HTMLImageElement>(null);

  const toggleFullScreen = () => {
    const current = gifRef.current;

    if (!isFullScreen && current) {
      const requestFullscreen: Function =
        current.requestFullscreen ||
        (current as any).mozRequestFullScreen ||
        (current as any).webkitRequestFullscreen ||
        (current as any).msRequestFullscreen;

      if (requestFullscreen) {
        requestFullscreen.call(current);
      }

      setIsFullScreen(true);
    } else {
      const exitFullscreen: Function =
        document.exitFullscreen ||
        (document as any).mozCancelFullScreen ||
        (document as any).webkitExitFullscreen ||
        (document as any).msExitFullscreen;

      if (exitFullscreen) {
        exitFullscreen.call(document);
      }

      setIsFullScreen(false);
    }
  };

  return (
    <img
      ref={gifRef}
      src={src}
      alt={alt}
      style={{ cursor: "pointer", width: "100%", height: "auto" }}
      onClick={toggleFullScreen}
      className={className || ""}
    />
  );
};

export default FullScreenGif;
