import { Download, Moon } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full h-20 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Download className="w-8 h-8 text-blue-500" />

          <h1 className="text-3xl font-bold">
            <span className="text-white">Down</span>
            <span className="text-blue-500">Pro</span>
          </h1>
        </div>

        {/* Theme Toggle */}
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

      </div>
    </header>
  );
}

export default Navbar;