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
import { useSignup } from "../../api/auth";
import ImageRotator from "../ImageRotator/ImageRotator";
import skateboarding from "../../assets/skateboarding.png";
import tennis from "../../assets/tennis.png";
import triangle1 from "../../assets/triangle (1).png";
import triangle from "../../assets/triangle.png";
import weightlifting from "../../assets/weightlifting.png";
import woman from "../../assets/woman.png";

const Signup = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const signupMutation = useSignup();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    setError("");

    signupMutation.mutate(form, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (err) =>
        setError(err.response?.data?.message || "Signup failed"),
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
          images={[
            skateboarding,
            tennis,
            triangle,
            triangle1,
            weightlifting,
            woman,
          ]}
          height={isMdUp ? 180 : 140}
          interval={4000}
        />

        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Fredoka One', sans-serif",
            mt: 2,
            textAlign: "center",
          }}
        >
          Streakly
        </Typography>

        <Typography
          variant="h5"
          sx={{
            maxWidth: 300,
            textAlign: "center",
            mt: 1,
            color: isMdUp ? "#fff" : theme.palette.text.secondary,
          }}
        >
          Start small. Stay consistent. Build unstoppable habits.
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
            maxWidth: 420,
            bgcolor: theme.palette.background.paper,
            borderRadius: 4,
            p: 4,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            Join the Streak! 🚀
          </Typography>

          <Typography
            variant="body2"
            sx={{ mb: 3, color: theme.palette.text.secondary }}
          >
            Create your account and start building momentum.
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
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              required
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{
                mt: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: "#fff",
                fontWeight: 600,
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                },
              }}
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? "Creating account..." : "Sign Up"}
            </Button>
          </Box>

          <Typography variant="body2" mt={2}>
            Already have an account?{" "}
            <Link
              to="/login"
              sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
