import { Download } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-24 px-6">

      {/* Glow de fundo */}
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">

        {/* Ícone */}
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">
          <Download className="h-12 w-12 text-blue-500" />
        </div>

        {/* Título */}
        <h1 className="mt-10 text-center text-5xl font-extrabold leading-tight md:text-7xl">
          <span className="block text-white">
            Downloader de
          </span>

          <span className="block">
            <span className="text-white">
             Músicas e  Vídeos do
            </span>{" "}
            <span className="text-blue-500">
              YouTube
            </span>
          </span>
        </h1>

        {/* Texto */}
        <p className="mt-8 max-w-2xl text-center text-lg leading-8 text-slate-400">
          Baixe vídeos em alta qualidade ou converta para MP3
          rapidamente, gratuitamente e sem complicações.
        </p>

      </div>

    </section>
  );
}

export default Hero;