import { useState } from "react";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function handleDownload() {

    if (!url) {
      setMensagem("Digite uma URL para continuar");
      return;
    }

    try {
      setLoading(true);
      setMensagem("");

      const response = await fetch(
        "http://127.0.0.1:8000/download",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url,
            tipo,
            qualidade,
          }),
        }
      );

      const data = await response.json();

      setMensagem(data.mensagem);

    } catch (error) {
      console.error(error);
      setMensagem("Erro ao realizar download");

    } finally {
      setLoading(false);
    }
  }

  return {
    url,
    setUrl,

    tipo,
    setTipo,

    qualidade,
    setQualidade,

    loading,

    mensagem,

    handleDownload,
  };
}