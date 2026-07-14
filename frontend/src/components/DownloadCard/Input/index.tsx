import { Link } from "lucide-react";

function Input() {
  return (
    <div className="space-y-3">

      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <Link size={18} className="text-blue-500" />
        URL do vídeo
      </label>

      <input
        type="text"
        placeholder="https://youtube.com/watch?v=..."
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/30
        "
      />

    </div>
  );
}

export default Input;