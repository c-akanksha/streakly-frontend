import { Box, Modal } from "@mui/material";
import { useBackendHealth } from "../../hooks/useBackendHealth";
import CustomLoader from "./CustomLoader";

const WakeOverlay = ({ children }) => {
  const { data, isFetching } = useBackendHealth();
  const sleeping = isFetching || data?.status !== "ok";

  return (
    <>
      {children}

      <Modal open={sleeping} closeAfterTransition>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            minHeight: 150,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#1D1F29" : "#FFFFFF",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomLoader message="Reconnecting..." minHeight="auto" />
        </Box>
      </Modal>
    </>
  );
};

export default WakeOverlay;
