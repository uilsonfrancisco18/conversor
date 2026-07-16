export function getErrorMessage(error: unknown): string {
  if (error instanceof TypeError) {
    return "Não foi possível conectar ao servidor.";
  }

  if (error instanceof Error) {
    switch (error.message) {
      case "Failed to fetch":
        return "Servidor indisponível.";

      case "Falha ao realizar download":
        return "Não foi possível baixar o arquivo.";

      case "Network Error":
        return "Erro de conexão com a internet.";

      default:
        return error.message;
    }
  }

  return "Ocorreu um erro inesperado.";
}