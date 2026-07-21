import { useState } from "react";
import { toast } from "sonner";
import { downloadService } from "../../services/downloadService";
import { getErrorMessage } from "../../utils/errorHandler";
import { STATUS, type StatusType } from "../../constants/status";
import { validateUrl } from "../../utils/validateUrl";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [status, setStatus] = useState<StatusType>(STATUS.IDLE);

  async function handleDownload() {

    // Campo vazio
    if (!url.trim()) {
      toast.warning("Digite uma URL para continuar.");
      return null;
    }

    // URL inválida
    if (!validateUrl(url)) {
      toast.error("Informe uma URL válida.");
      return null;
    }

    let intervalo: ReturnType<typeof setInterval> | undefined;

    try {
      setLoading(true);
      setStatus(STATUS.PREPARING);
      setMensagem("");

      toast.info("Iniciando download...");

      setProgresso(10);

      intervalo = setInterval(() => {
        setProgresso((valor) => {
          if (valor >= 90) return valor;
          return valor + 10;
        });
      }, 1000);


      setStatus(STATUS.DOWNLOADING);


      const data = await downloadService({
        url,
        tipo,
        qualidade,
      });


      if (intervalo) {
        clearInterval(intervalo);
      }


      setProgresso(100);

      setMensagem(data.mensagem);

      setStatus(STATUS.SUCCESS);

      toast.success(data.mensagem);


      // Libera o botão imediatamente
      setLoading(false);


      // Limpa formulário
      setTimeout(() => {
        setUrl("");
        setTipo("video");
        setQualidade("");
      }, 500);


      // Retorna os dados do backend
      return data;


    } catch (error) {

      if (intervalo) {
        clearInterval(intervalo);
      }


      console.error(error);


      setStatus(STATUS.ERROR);


      const mensagemErro = getErrorMessage(error);


      setMensagem(mensagemErro);


      toast.error(mensagemErro);


      setLoading(false);


      return null;


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

    progresso,
    setProgresso,

    status,

    handleDownload,
  };
}