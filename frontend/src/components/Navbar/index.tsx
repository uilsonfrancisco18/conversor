import { Download, Moon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full h-20 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
        >
          <Download className="w-8 h-8 text-blue-500" />

          <h1 className="text-3xl font-bold">
            <span className="text-white">Down</span>
            <span className="text-blue-500">Pro</span>
          </h1>
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-blue-500 transition"
          >
            Início
          </Link>

          <a

             href="/about"
             target="_blank"
             rel="noopener noreferrer"
             className="text-slate-300 hover:text-blue-500 transition"
           >
              Sobre
              
              </a>

          <button
            className="
              w-12
              h-12
              rounded-xl
              border
              border-slate-700
              flex
              items-center
              justify-center
              hover:bg-slate-800
              transition
            "
          >
            <Moon className="w-5 h-5 text-white" />
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;