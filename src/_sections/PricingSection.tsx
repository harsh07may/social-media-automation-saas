import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

function PricingSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Simple Pricing
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            $0<span className="text-lg text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" /> 10 posts per month
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" /> Basic templates
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" /> AI captions
            </li>
          </ul>
          <Button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all">
            Get Started
          </Button>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <div className="text-4xl font-bold mb-6">
            $29<span className="text-lg opacity-80">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Unlimited posts
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Premium templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Advanced AI features
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Priority support
            </li>
          </ul>
          <Button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
