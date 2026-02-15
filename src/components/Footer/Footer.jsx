import React from "react";
import { Box, Typography, Link, useTheme, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      width="100%"
      py={1}
      textAlign="center"
      sx={{
        bgcolor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : "#FFF3F8",
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)"
        }`,
      }}
    >
      {/* Fun “Made by” line */}
      <Typography fontSize={14} fontWeight={500}>
        Made with{" "}
        <span
          style={{
            color: "red",
            display: "inline-block",
            animation: "heartbeat 1.5s infinite",
          }}
        >
          ❤️
        </span>{" "}
        by{" "}
        <Tooltip title="Connect with me on LinkedIn!">
          <Link
            href="https://www.linkedin.com/in/c-akanksha"
            target="_blank"
            rel="noopener"
            sx={{
              fontWeight: 600,
              textDecoration: "none",
              color: theme.palette.primary.main,
              display: "inline-flex",
              alignItems: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
                textDecoration: "underline",
              },
            }}
          >
            Akanksha C
            <LinkedInIcon
              fontSize="small"
              sx={{
                ml: 0.5,
                verticalAlign: "middle",
                animation: "bounce 2s infinite",
              }}
            />
          </Link>
        </Tooltip>
      </Typography>

      {/* Animations */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </Box>
  );
};

export default Footer;
