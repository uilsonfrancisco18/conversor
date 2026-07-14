import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <DownloadCard />
      <Footer />
    </main>
  );
  }
  export default Home;