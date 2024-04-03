import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => (
  <header>
    <Typography
      variant="h3"
      sx={{
        p: 1,
        mb: 1,
        textAlign: "center",
        fontWeight: { xs: "bold", md: "normal" },
      }}
    >
      Stackoverflow tags
    </Typography>
  </header>
);

export default Header;
