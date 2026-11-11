import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/siteData";
import { ArrowLeft, ExternalLink, Monitor, Smartphone, Laptop } from "lucide-react";

const categoryIcon: Record<string, React.ElementType> = {
  "Mobile App": Smartphone,
  "Desktop POS": Monitor,
  "Mobile POS": Laptop,
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link
            to="/work"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
          >
            Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  const Icon = categoryIcon[project.category] || Monitor;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: back button + image */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
            >
              <ArrowLeft size={18} /> Back to Our Work
            </button>
            <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-sm mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: details */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <Icon size={20} className="text-orange-500" />
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Full details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Project Details</h2>
              <p className="text-gray-600 leading-relaxed">{project.details}</p>
            </div>

            {/* Tech stack */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* View Live */}
            <div className="mt-auto pt-6">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl active:scale-95"
                >
                  <ExternalLink size={20} /> View Live
                </a>
              ) : (
                <button
                  disabled
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 text-gray-400 rounded-2xl font-bold cursor-not-allowed"
                >
                  View Live
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
