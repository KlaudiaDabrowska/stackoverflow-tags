import apiClient from "@/config/apiConfig";
import { TagsResponse } from "@/utils/types/Tags";

const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

const getTags = async ({
  page = 1,
  pageSize,
  order,
}: {
  page: number;
  pageSize: number;
  order: string;
}) => {
  const response = await apiClient.get<TagsResponse>(
    `/${apiVersion}/tags?page=${page}&pagesize=${pageSize}&order=${order}&site=stackoverflow&filter=!nNPvSNVZBz`
  );

  return response.data;
};

export default getTags;
