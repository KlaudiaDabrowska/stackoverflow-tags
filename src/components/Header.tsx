import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => (
  <header>
    <Typography
      variant="h3"
      sx={{
        p: 3,
        mb: { xs: 4, md: 8 },
        textAlign: "center",
        fontWeight: { xs: "bold", md: "normal" },
      }}
    >
      Stackoverflow tags
    </Typography>
  </header>
);

export default Header;
