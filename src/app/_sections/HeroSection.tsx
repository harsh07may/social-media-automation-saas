import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="md:text-6xl text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Create Stunning Instagram Posts
        <br />
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          with AI
        </span>
      </h1>
      <p className="md:text-xl text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Generate images, captions, and hashtags instantly. Boost your social
        media game with AI-powered content creation.
      </p>
      <Link
        href="/dashboard/create"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
      >
        Start Creating <SparklesIcon className="w-5 h-5" />
      </Link>

      <div className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <img
            src="https://assets.aceternity.com/pro/aceternity-landing.webp"
            alt="Landing page preview"
            className="aspect-[16/9] h-auto w-full object-cover"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
