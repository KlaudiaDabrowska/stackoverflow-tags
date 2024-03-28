import { TableCellProps } from "@mui/material";

type Columns = {
  field: string;
  headerName: string;
  align: TableCellProps["align"];
  width: number;
};

const columns: Columns[] = [
  {
    field: "name",
    headerName: "Name",
    align: "center",
    width: 150,
  },
  {
    field: "count",
    headerName: "Count",
    align: "center",
    width: 150,
  },
];

export default columns;
