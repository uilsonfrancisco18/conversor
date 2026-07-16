import {
  CheckCircle,
  AlertCircle,
  Download,
  LoaderCircle,
  Circle,
} from "lucide-react";

interface StatusProps {
  status: string;
}

function Status({ status }: StatusProps) {
  const statusMap = {
    idle: {
      icon: <Circle className="text-green-500" size={18} />,
      title: "Pronto",
      message: "Pronto para iniciar um download.",
    },

    preparing: {
      icon: (
        <LoaderCircle
          className="animate-spin text-yellow-500"
          size={18}
        />
      ),
      title: "Preparando",
      message: "Preparando download...",
    },

    downloading: {
      icon: (
        <Download
          className="animate-bounce text-blue-500"
          size={18}
        />
      ),
      title: "Baixando",
      message: "Baixando arquivo...",
    },

    success: {
      icon: (
        <CheckCircle
          className="text-green-500"
          size={18}
        />
      ),
      title: "Concluído",
      message: "Download finalizado com sucesso.",
    },

    error: {
      icon: (
        <AlertCircle
          className="text-red-500"
          size={18}
        />
      ),
      title: "Erro",
      message: "Não foi possível concluir o download.",
    },
  };

  const current =
    statusMap[status as keyof typeof statusMap] ??
    statusMap.idle;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition-all">
      <div className="flex items-center gap-3">
        {current.icon}

        <div>
          <h3 className="font-semibold text-white">
            {current.title}
          </h3>

          <p className="text-sm text-slate-300">
            {current.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Status;