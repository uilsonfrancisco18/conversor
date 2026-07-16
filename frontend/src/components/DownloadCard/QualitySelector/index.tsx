import { SlidersHorizontal } from "lucide-react";

type Props = {
  tipo: string;
  qualidade: string;
  setQualidade: React.Dispatch<React.SetStateAction<string>>;
};

function QualitySelector({
  tipo,
  qualidade,
  setQualidade,
}: Props) {
  const opcoesVideo = [
    "360p",
    "720p",
    "1080p",
    "Melhor qualidade",
  ];

  const opcoesMp3 = [
    "128 kbps",
    "192 kbps",
    "320 kbps",
  ];

  const opcoes =
    tipo === "video"
      ? opcoesVideo
      : opcoesMp3;

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <SlidersHorizontal
          size={18}
          className="text-blue-500"
        />
        Qualidade
      </label>

      <select
        value={qualidade}
        onChange={(e) => setQualidade(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-950
          px-4
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          hover:border-slate-500
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/30
        "
      >
        <option value="">
          Selecione uma qualidade
        </option>

        {opcoes.map((opcao) => (
          <option
            key={opcao}
            value={opcao}
          >
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QualitySelector;