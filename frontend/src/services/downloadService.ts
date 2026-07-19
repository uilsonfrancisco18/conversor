import { api } from "../constants/api";
import type { DownloadRequest } from "../types/DownloadRequest";
import type { DownloadResponse } from "../types/DownloadResponse";

export async function downloadService(
  dados: DownloadRequest
): Promise<DownloadResponse> {
  const response = await api.post<DownloadResponse>(
    "/download",
    dados
  );

  return response.data;
}