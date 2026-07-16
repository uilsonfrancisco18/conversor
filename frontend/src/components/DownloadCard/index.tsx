import Input from "./Input";
import TipoSelector from "./TipoSelector";
import QualitySelector from "./QualitySelector";
import Button from "./Button";
import Status from "./Status";
import ProgressBar from "./ProgressBar";
import { useDownload } from "../../hooks/useDownloadd";

function DownloadCard() {
  const {
    url,
    setUrl,
    tipo,
    setTipo,
    qualidade,
    setQualidade,
    loading,
    progresso,
    status,
    handleDownload,
  } = useDownload();

  return (
    <section className="w-full px-6 pb-20">
      <div
        className="
          mx-auto
          max-w-3xl
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/90
          p-8
          shadow-2xl
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-slate-700
          hover:shadow-blue-500/20
        "
      >
        <div className="space-y-6">
          <Input
            url={url}
            setUrl={setUrl}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <TipoSelector
              tipo={tipo}
              setTipo={setTipo}
              setQualidade={setQualidade}
            />

            <QualitySelector
              tipo={tipo}
              qualidade={qualidade}
              setQualidade={setQualidade}
            />
          </div>

          <Button
            loading={loading}
            onClick={handleDownload}
          />

          <ProgressBar progresso={progresso} />

          <Status status={status} />
        </div>
      </div>
    </section>
  );
}

export default DownloadCard;