import { Card, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddStreakCard = ({ onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      onClick={onClick}
      sx={{
        p: 3,
        borderRadius: 4,
        width: isMobile ? "100%" : 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
        background:
          theme.palette.mode === "dark"
            ? "#242633"
            : theme.palette.background.paper,
        border:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(0,0,0,0.05)",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 8px 24px rgba(0,0,0,0.6)"
            : "0 8px 24px rgba(0,0,0,0.08)",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          color: theme.palette.primary.main,
          mb: 2,
        }}
      >
        <AddIcon />
      </Box>
      <Typography fontWeight={700}>Add New</Typography>
    </Card>
  );
};

export default AddStreakCard;
