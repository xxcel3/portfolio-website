// src/components/Contact.jsx

import React from "react";
import { Mail, Linkedin, FileText, ArrowUp } from "lucide-react";

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-tr from-gray-900 to-purple-900 py-2">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img src="/contact.png" alt="Contact Header" className="mx-auto w-78 mb-4" />

        {/* Links with Icons */}
        <div className="flex flex-col items-center space-y-3">
          <a
            href="https://www.linkedin.com/in/eve-lin-34a870283"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-rose-400 transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-rose-400 transition"
          >
            <FileText className="w-5 h-5" />
            <span>View My Resume</span>
          </a>

          <a
            href="mailto:evelin556656@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-rose-400 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Email: evelin556656@gmail.com</span>
          </a>
        </div>

        {/* Back to Top Button */}
        <div className="mt-6">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-gray-400 hover:text-rose-400 transition"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
