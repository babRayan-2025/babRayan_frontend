import { useState } from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg overflow-auto scroll-behavior: auto shadow-lg w-[100%] max-w-5xl h-[90%]">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => onOpenChange(false)}
        >
          <p className="text-3xl">✖</p>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className=" font-bold">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
