import React from "react";

export function FloatingAppButton() {
  return (
    <a
      href="https://derma-ai-prd.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir aplicação Derm AI"
      className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-background shadow-lg transition hover:bg-navy-soft focus:outline-none"
    >
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M10 3a1 1 0 01.894.553l5 10A1 1 0 0115 15H5a1 1 0 01-.894-1.447l5-10A1 1 0 0110 3z" />
      </svg>
      <span className="hidden sm:inline">App</span>
    </a>
  );
}

export default FloatingAppButton;
