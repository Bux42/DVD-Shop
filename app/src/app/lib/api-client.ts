import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiClient = async <T>({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method: string;
  body?: any;
  headers?: Record<string, string>;
}): Promise<T> => {
  const response = await axiosInstance.request<T>({
    url,
    method,
    data: body,
    headers,
  });

  return response.data;
};
