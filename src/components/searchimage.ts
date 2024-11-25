import axios from "axios";
import { Image } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const AK: string = "wy_Bd3s3ACzE47HtmH3TPFOW4-QV6uIp38LJvdkiL54";

interface FetchPhotosResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchPhotosTopic = async (
  query: string,
  currentPage: number
): Promise<FetchPhotosResponse> => {
  const { data } = await axios.get<FetchPhotosResponse>("?", {
    params: {
      query: query,
      client_id: AK,
      page: currentPage,
    },
  });
  return data;
};
