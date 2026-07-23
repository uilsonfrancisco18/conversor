import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import DownloadCard from "../../components/DownloadCard";
import Hero from "../../components/Hero";

/*
function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-400">
        DownPro 🚀
      </h1>
    </main>
  );
}

export default Home;*/
function Home() {
  useEffect(() => {
    document.title = "DownPro";
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <Hero />
      <DownloadCard />
    </main>
  );
}

export default Home;