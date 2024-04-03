import { theme } from "@/styles/theme";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingProgress = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress
      sx={{
        color: theme.palette.primary.dark,
      }}
    />
  </Box>
);

export default LoadingProgress;
