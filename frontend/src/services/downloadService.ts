import { api } from "./api";

import type { DownloadRequest } from "../types/DownloadRequest";
import type { DownloadResponse } from "../types/DownloadResponse";

export async function downloadService(
  dados: DownloadRequest
): Promise<DownloadResponse> {
  return api<DownloadResponse>("/download", {
    method: "POST",
    body: JSON.stringify(dados),
  });
}