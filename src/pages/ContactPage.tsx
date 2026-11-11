import React from "react";
import { Link } from "react-router-dom";
import { contacts } from "../data/siteData";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <nav className="mb-16">
          <Link
            to="/"
            className="text-sm font-medium text-gray-400 hover:text-orange-500 transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Let's Build Together
            </h1>
            <p className="mt-4 text-gray-500">
              Have a project in mind? We'd love to hear from you.
            </p>
          </header>

          <ul className="space-y-3">
            {contacts.map((c) => {
              const inner = (
                <>
                  <span className="w-11 h-11 shrink-0 rounded-full bg-orange-50 flex items-center justify-center text-lg">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-medium text-gray-400">{c.label}</span>
                    <span className="block text-black font-medium">{c.text}</span>
                  </span>
                </>
              );
              const base = "flex items-center gap-4 p-3 rounded-2xl";
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`${base} hover:bg-gray-50 transition-colors`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={base}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 text-center">
            <a
              href="mailto:deshtec999@gmail.com"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}