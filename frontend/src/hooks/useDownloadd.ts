import { useState } from "react";
import { toast } from "sonner";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [status, setStatus] = useState("idle");

  async function handleDownload() {
    if (!url) {
      setStatus("error");
      toast.warning("Digite uma URL para continuar");
      return;
    }

    try {
      setLoading(true);
      setStatus("preparing");
      setMensagem("");

      toast.info("Iniciando download...");

      setProgresso(10);

      const intervalo = setInterval(() => {
        setProgresso((valor) => {
          if (valor >= 90) {
            clearInterval(intervalo);
            return valor;
          }

          return valor + 10;
        });
      }, 1000);

      setStatus("downloading");

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

      if (!response.ok) {
        throw new Error("Falha ao realizar download");
      }

      const data = await response.json();

      setMensagem(data.mensagem);
      setStatus("success");

      toast.success(data.mensagem);

      setProgresso(100);

    } catch (error) {
      console.error(error);

      setStatus("error");

      toast.error("Erro ao realizar download");

    } finally {
      setLoading(false);

      setTimeout(() => {
        setMensagem("");
        setProgresso(0);
        setStatus("idle");
      }, 1500);
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

    progresso,
    setProgresso,

    status,

    handleDownload,
  };
}