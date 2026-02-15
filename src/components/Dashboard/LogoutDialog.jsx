import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  useTheme,
} from "@mui/material";

const LogoutDialog = ({ open, onClose, onLogout }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: 3,
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>
        Confirm Logout
      </DialogTitle>
      <DialogContent>
        <Typography color={theme.palette.text.secondary} fontSize={14}>
          Are you sure you want to logout?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: theme.palette.text.primary,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { backgroundColor: theme.palette.action.hover },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onLogout}
          sx={{
            bgcolor: theme.palette.error.main,
            color: theme.palette.getContrastText(theme.palette.error.main),
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { bgcolor: theme.palette.error.dark },
          }}
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
