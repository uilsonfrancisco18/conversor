import { useState } from "react";
import { toast } from "sonner";
import { downloadService } from "../../services/downloadService";
import { getErrorMessage } from "../../utils/errorHandler";
import { STATUS, type StatusType } from "../../constants/status";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [status, setStatus] = useState<StatusType>(STATUS.IDLE);

  async function handleDownload() {
    if (!url) {
      setStatus(STATUS.ERROR);
      setMensagem("Digite uma URL para continuar");
      toast.warning("Digite uma URL para continuar");
      return;
    }

    try {
      setLoading(true);
      setStatus(STATUS.PREPARING);
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

      setStatus(STATUS.DOWNLOADING);

      const data = await downloadService({
        url,
        tipo,
        qualidade,
      });

      setMensagem(data.mensagem);
      setStatus(STATUS.SUCCESS);

      toast.success(data.mensagem);

      setProgresso(100);
    } catch (error) {
      console.error(error);

      setStatus(STATUS.ERROR);

      const mensagemErro = getErrorMessage(error);

      setMensagem(mensagemErro);

      toast.error(mensagemErro);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setMensagem("");
        setProgresso(0);
        setStatus(STATUS.IDLE);
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