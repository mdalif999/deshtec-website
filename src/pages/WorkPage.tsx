import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/siteData";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  const handleCardClick = (id: number) => {
    navigate(`/work/${id}`);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link
            to="/"
            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </nav>

        <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
          Our Work
        </h1>
        <p className="text-gray-500 text-center mb-12">
          Explore our projects. Select a category to filter, or click any project
          to see full details.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No projects found
            </h2>
            <p className="text-gray-500 mb-6">
              Try selecting a different category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
            >
              Show All
            </button>
          </div>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => handleCardClick(p.id)}
            >
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span
                className={`text-xs font-medium uppercase mb-3 block ${
                  p.category === "Mobile App"
                    ? "text-orange-500"
                    : p.category === "Desktop POS"
                    ? "text-blue-500"
                    : "text-purple-500"
                }`}
              >
                {p.category}
              </span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{p.description}</p>

              <div className="mt-auto pt-6 border-t border-gray-50">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
                  >
                    View Project <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-xl font-medium cursor-not-allowed">
                    Live link coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-500 text-sm">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} shown
        </p>
      </div>
    </div>
  );
}
