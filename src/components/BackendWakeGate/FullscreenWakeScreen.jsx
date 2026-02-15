import { useBackendHealth } from "../../hooks/useBackendHealth";
import CustomLoader from "./CustomLoader";

const FullscreenWakeScreen = ({ children }) => {
  const { data, isFetching } = useBackendHealth();

  if (isFetching || data?.status !== "ok") {
    return <CustomLoader message="Waking up Server..." />;
  }

  return children;
};
export default FullscreenWakeScreen;
