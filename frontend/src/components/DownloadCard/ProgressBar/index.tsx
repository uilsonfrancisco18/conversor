interface ProgressBarProps {
  progresso: number;
}

function ProgressBar({ progresso }: ProgressBarProps) {
  if (progresso === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-slate-300">
        <span>Progresso</span>
        <span>{progresso}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500"
          style={{
            width: `${progresso}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;