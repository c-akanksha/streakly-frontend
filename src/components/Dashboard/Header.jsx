import { Stack, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = ({ onLogout }) => {

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography variant="h4" fontWeight={700}>
        🔥 Streakly
      </Typography>
      <Stack direction="row" spacing={1}>
        <ThemeToggle />
        <IconButton onClick={onLogout}>
          <LogoutIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
