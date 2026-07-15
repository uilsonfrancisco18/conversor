import { Download } from "lucide-react";

interface ButtonProps {
  loading: boolean;
  onClick: () => void;
}

function Button({
  loading,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        w-full
        rounded-xl
        bg-blue-600
        py-4
        text-lg
        font-semibold
        flex
        items-center
        justify-center
        gap-3
        transition
        hover:bg-blue-500
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      <Download size={22} />

      {loading ? "Baixando..." : "Baixar Agora"}

    </button>
  );
}

export default Button;