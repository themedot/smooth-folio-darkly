
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Blog", section: "blog" },
  { label: "Contact", section: "contact" },
];

export function MobileMenu({ onNavigate }: { onNavigate: (sectionId: string) => void }) {
  const [open, setOpen] = useState(false);

  const handleNav = (section: string) => {
    setOpen(false);
    onNavigate(section);
  };

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open navigation menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Menu />
      </Button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 z-50 bg-background border rounded-lg py-2 shadow-lg flex flex-col">
          {navLinks.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className="px-4 py-2 text-left hover:bg-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
