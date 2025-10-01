import React from "react";

const templates = [
  {
    id: 1,
    name: "Modern Gradient",
    category: "Abstract",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    name: "Sunset Vibes",
    category: "Nature",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    name: "Ocean Breeze",
    category: "Nature",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    name: "Mint Fresh",
    category: "Minimal",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: 5,
    name: "Peach Glow",
    category: "Warm",
    color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: 6,
    name: "Purple Dream",
    category: "Abstract",
    color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

function TemplatesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Popular Templates
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div className="h-48" style={{ background: template.color }}></div>
            <div className="p-5">
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {template.category}
              </span>
              <h4 className="font-semibold text-gray-900">{template.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplatesSection;
