import React from "react";
import { Link } from "react-router-dom";
import { facts } from "../data/siteData";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-16">
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        <header className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3">
            DeshTec
          </p>
          <h1 className="text-5xl font-bold gradient-text">About Us</h1>
        </header>

        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <p className="text-xl text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
            DeshTec builds web, mobile and desktop software for real
            businesses, with a focus on small trades and shops in Bangladesh.
          </p>

          <div className="my-10 h-px bg-gray-100" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-sm font-medium text-orange-500 mb-1">{f.label}</p>
                <p className="text-lg font-semibold text-gray-900">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="my-10 h-px bg-gray-100" />

          <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
            We believe software should be simple, reliable and built around how
            people actually work. That means listening first, then building
            something that saves time from day one.
          </p>

          <div className="mt-10 text-center">
            <Link
              to="/team"
              className="text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}