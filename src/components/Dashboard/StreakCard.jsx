import {
  Card,
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ICON_OPTIONS } from "../../utils/icons";

const StreakCard = ({ streak, markDone }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const today = new Date();
  const todayDayIndex = today.getDay();

  const getIconComponent = (label) => {
    const found = ICON_OPTIONS.find((i) => i.label === label);
    return found ? found.icon : null;
  };

  const getProgress = () => {
    if (streak.currentStreak === 0) {
      if (streak.type === "daily") return Array(7).fill(false);
      if (streak.type === "weekly") return Array(4).fill(false);
      if (streak.type === "monthly") return Array(7).fill(false);
    }

    if (streak.type === "daily") {
      const p = Array(7).fill(false);
      const filledCount = Math.min(streak.currentStreak, 7);
      for (let i = 0; i < filledCount; i++) {
        const idx = (todayDayIndex - i + 7) % 7;
        p[idx] = true;
      }
      return p;
    }

    if (streak.type === "weekly") {
      const p = Array(4).fill(false);
      const filledCount = Math.min(streak.currentStreak, 4);
      for (let i = 0; i < filledCount; i++) {
        p[3 - i] = true;
      }
      return p;
    }

    if (streak.type === "monthly") {
      const p = Array(7).fill(false);
      const filledCount = Math.min(streak.currentStreak, 7);
      const centerIndex = 3; 
      for (let i = 0; i < filledCount; i++) {
        p[centerIndex - filledCount + i + 1] = true;
      }
      return p;
    }
  };

  const getPeriods = () => {
    if (streak.type === "daily")
      return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    if (streak.type === "weekly") {
      const weeks = [];
      for (let i = 3; i >= 0; i--) {
        weeks.push(`W-${i}`); 
      }
      return weeks;
    }
    if (streak.type === "monthly") {
      const months = [];
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const currentMonth = new Date().getMonth(); // 0-11
      for (let i = -3; i <= 3; i++) {
        months.push(monthNames[(currentMonth + i + 12) % 12]);
      }
      return months;
    }
  };

  const progress = getProgress();
  const periods = getPeriods();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        width: isMobile ? "100%" : 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
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
      <IconButton
        onClick={() => markDone.mutate(streak._id)}
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          background: theme.palette.background.default,
          "&:hover": { background: theme.palette.primary.light },
          color: theme.palette.primary.main,
        }}
      >
        {streak.completedToday ? <CheckIcon /> : <CheckCircleOutlineIcon />}
      </IconButton>
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
          mb: 1,
          background:
            theme.palette.mode === "dark"
              ? `${theme.palette.background.default}55`
              : `${theme.palette.background.default}aa`,
        }}
      >
        {getIconComponent(streak.icon)}
      </Box>

      <Typography variant="h6" fontWeight={700} textAlign="center">
        {streak.title}
      </Typography>
      <Typography fontWeight={600} mt={0.5} textAlign="center">
        Current Streak: {streak.currentStreak}
      </Typography>

      <Stack direction="column" mt={2} spacing={1} alignItems="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          {progress.map((done, idx) => (
            <Box
              key={idx}
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: done
                  ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                  : theme.palette.background.default,
                border: done
                  ? "none"
                  : `1px solid ${theme.palette.text.secondary}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" mt={0.5}>
          {periods.map((p, i) => (
            <Typography
              key={i}
              fontSize={10}
              color="text.secondary"
              textAlign="center"
            >
              {p}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default StreakCard;
