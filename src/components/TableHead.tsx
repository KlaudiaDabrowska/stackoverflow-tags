import propertyNameMap from "@/utils/helpers/propertyNameMap";
import columns from "@/utils/helpers/tagsTableColumns";
import OrderBy from "@/utils/types/OrderBy";
import SortBy from "@/utils/types/SortBy";
import {
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { FunctionComponent } from "react";

type Props = {
  sortBy: SortBy;
  setSortBy: (arg: SortBy) => void;
  orderBy: OrderBy;
  setOrderBy: (arg: OrderBy) => void;
};

const TableHead: FunctionComponent<Props> = ({
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) => {
  const sortHandler = (property: string) => () => {
    const propertyName = propertyNameMap.get(property) || SortBy.POPULAR;

    const isAsc = sortBy === propertyName && orderBy === OrderBy.ASC;
    setOrderBy(isAsc ? OrderBy.DESC : OrderBy.ASC);
    setSortBy(propertyName);
  };

  return (
    <MuiTableHead>
      <TableRow>
        {columns.map((column) => {
          return (
            <TableCell
              key={column.headerName}
              align="center"
              sx={{ fontWeight: 700, width: "150px" }}
              sortDirection={
                sortBy === propertyNameMap.get(column.headerName)
                  ? orderBy
                  : false
              }
            >
              <TableSortLabel
                active={sortBy === propertyNameMap.get(column.headerName)}
                direction={
                  sortBy === propertyNameMap.get(column.headerName)
                    ? orderBy
                    : OrderBy.ASC
                }
                onClick={sortHandler(column.headerName)}
              >
                {column.headerName}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
