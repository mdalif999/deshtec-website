import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/siteData";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-12">
          <Link to="/" className="text-orange-500 hover:text-orange-600 text-sm font-medium">← Back to Home</Link>
        </nav>
        <h1 className="text-5xl font-bold text-center mb-16 gradient-text">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-500 font-bold text-xl">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.description}</p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                <h4 className="text-lg font-bold mb-3 text-orange-500">Key Features</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-orange-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/" className="inline-block px-6 py-3 bg-white text-orange-500 rounded-xl font-medium border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}