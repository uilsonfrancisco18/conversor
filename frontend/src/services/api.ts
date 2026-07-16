import { API_BASE_URL } from "../constants/api";

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao comunicar com a API.");
  }

  return response.json();
}