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
  TableRow,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useState } from "react";
import getTags from "@/api/getTags";
import { useQuery } from "@tanstack/react-query";
import LoadingProgress from "../Common/LoadingProgress";
import { ErrorResponse, TagsResponse } from "@/utils/types/Tags";
import { AxiosError } from "axios";
import ErrorInfo from "../Common/ErrorInfo";
import OrderBy from "@/utils/types/OrderBy";
import SortBy from "@/utils/types/SortBy";
import TableHead from "./TableHead";
import { useDebounce } from "use-debounce";
import { parseAsStringEnum, useQueryState } from "nuqs";
import PageSizeBox from "./PageSizeBox";

const TagsTable: FunctionComponent = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("page");

  const [page, setPage] = useState(queryPage ? +queryPage : 1);
  const [pageSize, setPageSize] = useState(10);
  const [debouncedPageSize] = useDebounce(pageSize, 1000);
  const [orderBy, setOrderBy] = useQueryState(
    "orderBy",
    parseAsStringEnum<OrderBy>(Object.values(OrderBy)).withDefault(OrderBy.DESC)
  );
  const [sortBy, setSortBy] = useQueryState(
    "sortBy",
    parseAsStringEnum<SortBy>(Object.values(SortBy)).withDefault(SortBy.POPULAR)
  );

  const { data, isLoading, isError, error } = useQuery<
    TagsResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["tags", page, debouncedPageSize, orderBy, sortBy],
    queryFn: () => getTags({ page, pageSize, orderBy, sortBy }),
    retry: 1,
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);

    push(`?page=${page}&sortBy=${sortBy}&orderBy=${orderBy}`);
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
      <PageSizeBox pageSize={pageSize} setPageSize={setPageSize} />

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
            <Table sx={{ minWidth: 650 }} aria-label="tags table">
              <TableHead
                sortBy={sortBy}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                setSortBy={setSortBy}
              />
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
        count={data && Math.ceil(data?.total / debouncedPageSize)}
        siblingCount={0}
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
