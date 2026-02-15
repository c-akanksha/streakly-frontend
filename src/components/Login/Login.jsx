import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../api/auth";
import ImageRotator from "../ImageRotator/ImageRotator";
import badminton from "../../assets/badminton.png";
import cow from "../../assets/cow.png";
import exercise from "../../assets/exercise.png";
import handball from "../../assets/handball.png";
import karate from "../../assets/karate.png";
import running from "../../assets/running.png";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const loginMutation = useLogin();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    setError("");

    loginMutation.mutate(form, {
      onSuccess: () => navigate("/dashboard"),
      onError: (err) => setError(err.response?.data?.message || "Login failed"),
    });
  };

  return (
    <Box
      display="flex"
      flexDirection={isMdUp ? "row" : "column"}
      minHeight="100vh"
      bgcolor={theme.palette.background.default}
    >
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: isMdUp
            ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
            : theme.palette.background.default,
          color: isMdUp ? "#fff" : theme.palette.text.primary,
          p: 4,
        }}
      >
        <ImageRotator
          images={[badminton, cow, exercise, handball, karate, running]}
          height={isMdUp ? 180 : 140}
          interval={4000}
        />
        <Typography
          variant="h1"
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          Streakly
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: 300,
            textAlign: "center",
            mt: 1,
            color: isMdUp ? "#fff" : theme.palette.text.secondary,
          }}
        >
          Track your streaks. Celebrate your wins. Build habits that stick!
        </Typography>
      </Box>

      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            bgcolor: theme.palette.background.paper,
            borderRadius: 4,
            p: 4,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            Welcome Back! 🎉
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: theme.palette.text.secondary }}
          >
            Log in and continue your streaks.
          </Typography>

          {error && (
            <Typography color="error" mb={2}>
              {error}
            </Typography>
          )}

          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />

            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: "#fff",
                fontWeight: 600,
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                },
              }}
              disabled={loginMutation.isLoading}
            >
              {loginMutation.isLoading ? "Logging in..." : "Login"}
            </Button>
          </Box>

          <Typography variant="body2" mt={2}>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
