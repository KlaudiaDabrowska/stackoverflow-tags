import apiClient from "@/config/apiConfig";
import OrderBy from "@/utils/types/OrderBy";
import SortBy from "@/utils/types/SortBy";
import { TagsResponse } from "@/utils/types/Tags";

const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

const getTags = async ({
  page = 1,
  pageSize,
  orderBy,
  sortBy,
}: {
  page: number;
  pageSize: number;
  orderBy: OrderBy;
  sortBy: SortBy;
}) => {
  const response = await apiClient.get<TagsResponse>(
    `/${apiVersion}/tags?page=${page}&pagesize=${pageSize}&order=${orderBy}&sort=${sortBy}&site=stackoverflow&filter=!nNPvSNVZBz`
  );

  return response.data;
};

export default getTags;
