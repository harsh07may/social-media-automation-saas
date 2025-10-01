import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-7 h-7 text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ContentAI
          </span>
        </div>
        <Link
          href="/create"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Start Creating
        </Link>
      </div>
    </nav>
  );
}

export default Header;
