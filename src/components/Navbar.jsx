// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="space-x-6">
      <span
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Eve Lin
      </span>
      {["About", "Projects", "Contact"].map((id) => (
        <a key={id} href={`#${id}`} className="hover:underline capitalize">
          {id}
        </a>
      ))}
    </nav>
  );
}