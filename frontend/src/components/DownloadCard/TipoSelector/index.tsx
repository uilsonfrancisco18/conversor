import { Music, Video } from "lucide-react";
interface TipoSelectorProps {
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
}

function TipoSelector({ tipo, setTipo }: TipoSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-300">
        Tipo
      </label>

      <div className="space-y-3">
        <button
          onClick={() => setTipo("video")}
          className={`w-full rounded-xl border p-4 transition flex items-center justify-between ${
            tipo === "video"
              ? "border-blue-500 bg-blue-500/10"
              : "border-slate-700 hover:border-slate-500"
          }`}
        >
          <div className="flex items-center gap-3">
            <span>Vídeo</span>
          </div>
          <Video className="text-blue-500" />
        </button>

        <button
          onClick={() => setTipo("mp3")}
          className={`w-full rounded-xl border p-4 transition flex items-center justify-between ${
            tipo === "mp3"
              ? "border-blue-500 bg-blue-500/10"
              : "border-slate-700 hover:border-slate-500"
          }`}
        >
          <div className="flex items-center gap-3">
            <span>MP3</span>
          </div>
          <Music className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}

export default TipoSelector;