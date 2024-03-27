import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

type Props = {
  error?: string;
  statusCode?: number;
};

const ErrorInfo: FunctionComponent<Props> = ({ error, statusCode }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Typography variant="h3" sx={{ color: "error.main", p: 0 }}>
      Ooops, something went wrong.
    </Typography>
    <Typography variant="h4" sx={{ color: "error.main", p: 0 }}>
      {statusCode}: {error}
    </Typography>
  </Box>
);

export default ErrorInfo;
