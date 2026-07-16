import { Music, Video } from "lucide-react";

interface TipoSelectorProps {
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
  setQualidade: React.Dispatch<React.SetStateAction<string>>;
}

function TipoSelector({
  tipo,
  setTipo,
  setQualidade,
}: TipoSelectorProps) {

  const alterarTipo = (novoTipo: string) => {
    if (novoTipo === tipo) return;

    setTipo(novoTipo);
    setQualidade("");
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-300">
        Tipo do Download
      </label>

      <div className="space-y-3">

        <button
          type="button"
          onClick={() => alterarTipo("video")}
          className={`
            w-full
            rounded-xl
            border
            p-4
            flex
            items-center
            justify-between
            transition-all
            duration-300
            hover:scale-[1.02]
            active:scale-95
            ${
              tipo === "video"
                ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                : "border-slate-700 bg-slate-950 hover:border-blue-400 hover:bg-slate-900"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <Video
              size={20}
              className={tipo === "video" ? "text-blue-500" : "text-slate-400"}
            />

            <span className="font-medium text-white">
              Vídeo
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => alterarTipo("mp3")}
          className={`
            w-full
            rounded-xl
            border
            p-4
            flex
            items-center
            justify-between
            transition-all
            duration-300
            hover:scale-[1.02]
            active:scale-95
            ${
              tipo === "mp3"
                ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                : "border-slate-700 bg-slate-950 hover:border-blue-400 hover:bg-slate-900"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <Music
              size={20}
              className={tipo === "mp3" ? "text-blue-500" : "text-slate-400"}
            />

            <span className="font-medium text-white">
              MP3
            </span>
          </div>
        </button>

      </div>
    </div>
  );
}

export default TipoSelector;