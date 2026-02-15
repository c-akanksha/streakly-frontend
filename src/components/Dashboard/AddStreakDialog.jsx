import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { ICON_OPTIONS } from "../../utils/icons";

const AddStreakDialog = ({ open, onClose, createStreak }) => {
  const theme = useTheme();
  const [title, setTitle] = React.useState("");
  const [icon, setIcon] = React.useState(ICON_OPTIONS[0].label);
  const [type, setType] = React.useState("daily");

  const handleAdd = () => {
    if (!title.trim()) return;
    createStreak.mutate({ title, icon, type });
    setTitle("");
    setIcon(ICON_OPTIONS[0].label);
    setType("daily");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Streak</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Streak Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mt: 2 }}
        />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel shrink>Icon</InputLabel>
          <Select
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            renderValue={(selected) => {
              const found = ICON_OPTIONS.find((i) => i.label === selected);
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.main,
                  }}
                >
                  {found?.icon}
                </Box>
              );
            }}
            sx={{
              height: 56,
              "& .MuiSelect-select": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            MenuProps={{
              PaperProps: { sx: { maxHeight: 240, width: 260, p: 2 } },
              MenuListProps: {
                sx: {
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 1,
                },
              },
            }}
          >
            {ICON_OPTIONS.map((option) => {
              const isSelected = icon === option.label;
              return (
                <MenuItem
                  key={option.label}
                  value={option.label}
                  sx={{
                    height: 50,
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: isSelected
                      ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      : theme.palette.mode === "dark"
                        ? "#232533"
                        : "#F5F5F5",
                    color: isSelected ? "#fff" : theme.palette.primary.main,
                    transition: "0.2s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  {option.icon}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Streak Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStreakDialog;
