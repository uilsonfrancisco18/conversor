import { useState } from "react";
import { toast } from "sonner";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [progresso, setProgresso] = useState(0);


  async function handleDownload() {

    if (!url) {
      toast.warning("Digite uma URL para continuar");
      return;
    }

    try {
      setLoading(true);
      toast.info("Iniciando download...");
      setMensagem("");

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

      toast.success(data.mensagem);

      setProgresso(100);

    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar download");

    } finally {
      setLoading(false);

      setTimeout(() => {
        setMensagem("");
        setProgresso(0);
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

    handleDownload,
  };
}