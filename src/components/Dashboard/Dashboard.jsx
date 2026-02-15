import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Footer from "../Footer/Footer";

import { useNavigate } from "react-router-dom";
import { useStreaks, useCreateStreak, useMarkDone } from "../../api/streaks";

import AddStreakCard from "./AddStreakCard";
import StreakCard from "./StreakCard";
import AddStreakDialog from "./AddStreakDialog";
import LogoutDialog from "./LogoutDialog";
import Header from "./Header";

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data: streaks = [] } = useStreaks();
  const createStreak = useCreateStreak();
  const markDone = useMarkDone();

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.background.default}
      px={isMobile ? 2 : 4}
      py={3}
    >
      <Box flex={1}>
        <Header onLogout={() => setLogoutDialogOpen(true)} />

        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
        >
          <AddStreakCard onClick={() => setAddDialogOpen(true)} />

          {streaks.map((streak) => (
            <StreakCard key={streak._id} streak={streak} markDone={markDone} />
          ))}
        </Box>

        <AddStreakDialog
          open={addDialogOpen}
          onClose={() => setAddDialogOpen(false)}
          createStreak={createStreak}
        />

        <LogoutDialog
          open={logoutDialogOpen}
          onClose={() => setLogoutDialogOpen(false)}
          onLogout={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        />
      </Box>

      <Footer />
    </Box>
  );
};

export default Dashboard;
