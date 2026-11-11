import React from "react";
import { Link } from "react-router-dom";


import { teamMembers } from "../data/siteData";

export default function TeamPage() {
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
          <h1 className="text-5xl font-bold gradient-text">Our Team</h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            The people building software for real businesses.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-orange-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
                {member.post}
              </span>

              <p className="mt-4 text-gray-500">{member.short}</p>

              <div className="my-6 h-px bg-gray-100" />

              <p className="text-sm text-gray-600 leading-relaxed text-left">
                {member.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}