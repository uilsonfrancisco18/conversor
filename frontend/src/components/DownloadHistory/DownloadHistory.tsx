interface Download {
  nome: string;
  tipo: string;
  data: string;
}

interface DownloadHistoryProps {
  historico: Download[];
}

function DownloadHistory({ historico }: DownloadHistoryProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
      <h2 className="text-xl font-semibold text-white">
        Últimos Downloads
      </h2>

      {historico.length === 0 ? (
        <p className="mt-2 text-slate-400">
          Nenhum download realizado ainda.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {historico.map((download, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-900 p-4"
            >
              <p className="text-white">
                {download.nome}
              </p>

              <p className="text-sm text-slate-400">
                {download.tipo} • {download.data}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DownloadHistory;