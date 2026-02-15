import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

export default function CustomLoader({
  message = "Waking up server...",
  minHeight = "100vh",
}) {
  const theme = useTheme();
  const gradientColor = `conic-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight={minHeight}
      gap={2}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: gradientColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "spin 1.5s linear infinite",
        }}
      >
        <CircularProgress
          size={60}
          sx={{
            color: theme.palette.background.default,
            position: "absolute",
          }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
      >
        {message}
      </Typography>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
}
