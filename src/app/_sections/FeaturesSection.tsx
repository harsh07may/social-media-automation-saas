import {
  DownloadIcon,
  Grid3x3Icon,
  Instagram,
  KeyIcon,
  SparklesIcon,
  Workflow,
} from "lucide-react";
import React from "react";

function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <SparklesIcon className="w-7 h-7 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">AI Captions</h3>
          <p className="text-gray-600">
            Generate engaging captions and hashtags in seconds with advanced AI.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
            <Grid3x3Icon className="w-7 h-7 text-cyan-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Beautiful Templates
          </h3>
          <p className="text-gray-600">
            Choose from dozens of professionally designed templates.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <DownloadIcon className="w-7 h-7 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Export</h3>
          <p className="text-gray-600">
            Download your posts instantly and share across all platforms.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-pink-200 rounded-xl flex items-center justify-center mb-4">
            <Instagram className="w-7 h-7 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Publishing Integrations
          </h3>
          <p className="text-gray-600">
            Directly publish to Instagram using the Meta Graph API for seamless
            automation.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <KeyIcon className="w-7 h-7 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            BYOK Gemini Key
          </h3>
          <p className="text-gray-600">
            Bring your own Gemini API key option to reduce costs.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-orange-50 rounded-100 rounded-xl flex items-center justify-center mb-4">
            <Workflow className="w-7 h-7 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Export as workflow
          </h3>
          <p className="text-gray-600">
            Export as a automated workflow to save even more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
