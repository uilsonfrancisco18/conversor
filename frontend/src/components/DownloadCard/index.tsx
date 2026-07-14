import { useState } from "react";

import Input from "./Input";
import TipoSelector from "./TipoSelector";
import QualitySelector from "./QualitySelector";
import Button from "./Button";
import Status from "./Status";

function DownloadCard() {
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");

  return (
    <section className="w-full px-6 pb-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-8 shadow-2xl">

        <div className="space-y-6">

          <Input />

          <div className="grid gap-6 md:grid-cols-2">
            <TipoSelector
              tipo={tipo}
              setTipo={setTipo}
            />

            <QualitySelector
              tipo={tipo}
              qualidade={qualidade}
              setQualidade={setQualidade}
            />
          </div>

          <Button />

          <Status />

        </div>

      </div>
    </section>
  );
}

export default DownloadCard;