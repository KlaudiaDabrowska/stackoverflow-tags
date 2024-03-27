"use client";

import {
  Card,
  CardContent,
  CardHeader,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useState } from "react";
import getTags from "@/api/getTags";
import { useQuery } from "@tanstack/react-query";
import columns from "@/utils/helpers/tagsTableColumns";
import LoadingProgress from "./LoadingProgress";
import { ErrorResponse, TagsResponse } from "@/utils/types/Tags";
import { AxiosError } from "axios";
import ErrorInfo from "./ErrorInfo";

const TagsTable: FunctionComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("page");

  const [page, setPage] = useState(queryPage ? +queryPage : 1);
  const [pageSize, setPageSize] = useState(10);
  const [order, setOrder] = useState("desc");

  const { data, isLoading, isError, error } = useQuery<
    TagsResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["tags", page, pageSize, order],
    queryFn: () => getTags({ page, pageSize, order }),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <Card
      sx={{
        mt: { xs: 0, md: 5 },
        py: { xs: 1, md: 2 },
        width: { md: "100%" },
      }}
    >
      <CardHeader title="Tags list" sx={{ textAlign: "center" }} />
      {isLoading ? (
        <LoadingProgress />
      ) : isError ? (
        <ErrorInfo
          error={error.response?.data.error_message}
          statusCode={error.response?.data.error_id}
        />
      ) : (
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="users table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    return (
                      <TableCell
                        key={column.field}
                        align={column.align}
                        sx={{ fontWeight: 700 }}
                      >
                        {column.headerName}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.items.map((tag) => (
                  <TableRow
                    key={tag.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {tag.name}
                    </TableCell>
                    <TableCell align="center">{tag.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      )}
      <Pagination
        count={data && Math.ceil(data?.total / pageSize)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Card>
  );
};

export default TagsTable;
