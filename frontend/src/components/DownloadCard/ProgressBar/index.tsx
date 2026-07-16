interface ProgressBarProps {
  progresso: number;
}

function ProgressBar({ progresso }: ProgressBarProps) {
  if (progresso === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-slate-300">
        <span>
          {progresso < 100 ? "Baixando..." : "Concluído!"}
        </span>

        <span>{progresso}%</span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;