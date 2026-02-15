import { useState, useEffect } from "react";
import { Box, Tooltip } from "@mui/material";

export default function ImageRotator({
  images = [],
  height = "20vh",
  interval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Box
      sx={{
        width: "100%",
        height,
        position: "relative",
        mb: 3,
      }}
    >
      {images.map((img, idx) => (
        <Tooltip title="Icons from flatIcon.com">
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`rotator-${idx}`}
            sx={{
              width: "auto",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              transition: "opacity 1.5s ease-in-out",
              opacity: idx === currentIndex ? 1 : 0,
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
}
