import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    align: "center",
  },
  {
    field: "count",
    headerName: "Count",
    align: "center",
  },
];

export default columns;
