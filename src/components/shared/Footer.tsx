import { Sparkles } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 h-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold text-gray-900">ContentAI</span>
          </div>
          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
