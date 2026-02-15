import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import FullscreenWakeScreen from "../components/BackendWakeGate/FullscreenWakeScreen";
import WakeOverlay from "../components/BackendWakeGate/WakeOverlay";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <FullscreenWakeScreen>
            <Login />
          </FullscreenWakeScreen>
        }
      />

      <Route
        path="/signup"
        element={
          <FullscreenWakeScreen>
            <Signup />
          </FullscreenWakeScreen>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <WakeOverlay>
              <Dashboard />
            </WakeOverlay>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
