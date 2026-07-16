import { Download, LoaderCircle } from "lucide-react";

interface ButtonProps {
  loading: boolean;
  onClick: () => void;
}

function Button({ loading, onClick }: ButtonProps) {
  return (
    <button
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
      {loading ? (
        <LoaderCircle
          size={22}
          className="animate-spin"
        />
      ) : (
        <Download size={22} />
      )}

      {loading ? "Baixando..." : "Baixar Agora"}
    </button>
  );
}

export default Button;