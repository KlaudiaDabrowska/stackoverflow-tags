import { Box, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";

type Props = {
  pageSize: number;
  setPageSize: (arg: number) => void;
};

const PageSizeBox: FunctionComponent<Props> = ({ pageSize, setPageSize }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          px: 1,
        }}
      >
        Rows per page
      </Typography>
      <TextField
        type="number"
        value={pageSize.toString()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (!Number.isInteger(parseInt(event.target.value))) {
            setPageSize(0);
            return;
          }
          setPageSize(parseInt(event.target.value));
        }}
        size="small"
        sx={{ width: { xs: "20%", md: "10%" } }}
      />
    </Box>
  );
};

export default PageSizeBox;
