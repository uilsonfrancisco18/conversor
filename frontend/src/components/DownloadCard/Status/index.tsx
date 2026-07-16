interface StatusProps {
  mensagem: string;
}

function Status({ mensagem }: StatusProps) {
  if (!mensagem) return null;

  return (
    <div
      className="
        mt-4
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        p-4
        text-center
        text-sm
        text-slate-200
      "
    >
      {mensagem}
    </div>
  );
}

export default Status;