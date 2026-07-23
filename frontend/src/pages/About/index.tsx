import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Music,
  History,
  MonitorSmartphone,
  Code,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  useEffect(() => {
    document.title = "sobre";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Sobre o <span className="text-blue-500">DownPro</span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            O DownPro é uma aplicação moderna desenvolvida para facilitar o
            download de vídeos e a conversão de músicas em MP3 de maneira
            rápida, simples e intuitiva.
          </p>

          <Link
            to="/"
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              transition
              hover:bg-blue-700
            "
          >
            <ArrowLeft size={20} />
            Voltar para o DownPro
          </Link>

        </section>

        {/* Recursos */}
        <section className="max-w-6xl mx-auto px-6 py-10">

          <h2 className="text-3xl font-bold text-center mb-10">
            Recursos
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <Download className="text-blue-500 mb-4" size={36} />

              <h3 className="text-xl font-semibold mb-2">
                Download de Vídeos
              </h3>

              <p className="text-slate-400">
                Baixe vídeos em alta qualidade de plataformas suportadas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <Music className="text-green-500 mb-4" size={36} />

              <h3 className="text-xl font-semibold mb-2">
                Conversão para MP3
              </h3>

              <p className="text-slate-400">
                Extraia apenas o áudio dos vídeos em poucos segundos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <History className="text-yellow-500 mb-4" size={36} />

              <h3 className="text-xl font-semibold mb-2">
                Histórico
              </h3>

              <p className="text-slate-400">
                Os três últimos downloads ficam salvos automaticamente.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <MonitorSmartphone className="text-purple-500 mb-4" size={36} />

              <h3 className="text-xl font-semibold mb-2">
                Interface Moderna
              </h3>

              <p className="text-slate-400">
                Desenvolvida para oferecer uma experiência rápida e agradável.
              </p>
            </div>

          </div>

        </section>

        {/* Plataformas */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Plataformas Suportadas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 flex items-center gap-5">
              <FaYoutube className="text-red-500" size={42} />

              <div>
                <h3 className="text-2xl font-semibold">
                  YouTube
                </h3>

                <p className="text-slate-400">
                  Download de vídeos e conversão para MP3.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 flex items-center gap-5">
              <FaInstagram className="text-pink-500" size={42} />

              <div>
                <h3 className="text-2xl font-semibold">
                  Instagram
                </h3>

                <p className="text-slate-400">
                  Download de vídeos públicos da plataforma.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Tecnologias */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Tecnologias Utilizadas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "FastAPI",
              "Python",
              "yt-dlp",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex items-center justify-center gap-3"
              >
                <Code className="text-blue-500" />

                <span className="font-medium">
                  {tech}
                </span>
              </div>
            ))}

          </div>

        </section>

        {/* Desenvolvedor */}
        <section className="max-w-5xl mx-auto px-6 py-20">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">

            <h2 className="text-3xl font-bold mb-6">
              Desenvolvedor
            </h2>

            <h3 className="text-2xl font-semibold text-blue-500">
              Uilson Francisco do Nascimento Filho
            </h3>

            <p className="mt-4 text-slate-400">
              Projeto desenvolvido utilizando React, TypeScript, FastAPI,
              Python e yt-dlp como parte do processo de aprendizado e
              aprimoramento em desenvolvimento Full Stack.
            </p>

            <p className="mt-8 text-slate-500">
              © 2026 • DownPro
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;