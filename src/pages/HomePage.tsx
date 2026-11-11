import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { services, projects, teamMembers } from "../data/siteData";







export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="py-8 px-6 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-2xl tracking-tight gradient-text">DeshTec</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Services</Link>
            <Link to="/work" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Work</Link>
            <Link to="/team" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Team</Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About</Link>
            <Link to="/contact" className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">Get in Touch</Link>
          </nav>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 z-20 flex flex-col p-6 gap-2 overflow-hidden"
        >
          <Link
            to="/services"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-black px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/work"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-black px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Work
          </Link>
          <Link
            to="/team"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-black px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Team
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-black px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors self-start w-fit"
          >
            Get in Touch
          </Link>
        </motion.div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center">
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-extrabold tracking-tight mb-6 gradient-text"
        >DeshTec</motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10"
        >Building Digital Experiences</motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/work" className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all">View Work</Link>
            <Link to="/contact" className="px-8 py-4 border border-gray-200 text-black rounded-full font-medium text-lg hover:border-orange-500 hover:text-orange-600 transition-all">Contact Us</Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-primary mb-3"
            >Our Services</motion.h2>
              <p className="text-gray-500 text-lg">We craft modern digital solutions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-6 border border-gray-200">{s.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-3">Featured Work</h2>
              <p className="text-gray-500 text-lg">Our latest projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <span className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-2 block">{p.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-orange-600 uppercase mb-2 block">{p.category}</span>
                  <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                  <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800">View Details <span className="text-xs">→</span></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


                  <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-3">Our Team</h2>
            <p className="text-gray-500 text-lg">Meet the people behind DeshTec</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/team"
                  className="block text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-orange-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x400/ff6600/white?text=${member.name.charAt(0)}`; }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
                    {member.post}
                  </span>
                  <p className="mt-4 text-gray-500 text-sm">{member.short}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >Let's Build Together</motion.h2>
          <p className="text-gray-400 text-lg mb-10">Have a project in mind? We'd love to hear from you.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all cursor-pointer">Get in Touch</Link>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DeshTec. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
