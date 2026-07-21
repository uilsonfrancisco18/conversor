import { Download, LoaderCircle } from "lucide-react";

interface ButtonProps {
  loading: boolean;
  onClick: () => void;
}

function Button({ loading, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        py-4
        text-lg
        font-semibold
        flex
        items-center
        justify-center
        gap-3
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-blue-500/30
        active:scale-95
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      <LoaderCircle
        size={22}
        aria-hidden={!loading}
        className={loading ? "animate-spin" : "hidden"}
      />

      <Download
        size={22}
        aria-hidden={loading}
        className={loading ? "hidden" : ""}
      />

      <span className={loading ? "" : "hidden"}>
        Baixando...
      </span>

      <span className={loading ? "hidden" : ""}>
        Baixar Agora
      </span>
    </button>
  );
}

export default Button;