import { Link, useLocation } from "react-router-dom";
import { Home, Github, Linkedin, Moon, Sun } from "lucide-react";
// import { FileText } from "lucide-react"; // Commented out - resume link disabled
import { useTheme } from "@/components/theme-provider";
import { ROUTES, SOCIAL_LINKS } from "@/config/constants";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useEffect, useState } from "react";

export default function DockNav() {
  const location = useLocation();
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setCurrentTheme(isDark ? "dark" : "light");

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleThemeToggle = () => {
    const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <Dock 
        direction="bottom" 
        className="pointer-events-auto"
        magnification={isMobile ? 40 : 60}
      >
        <DockIcon>
          <Link
            to={ROUTES.home}
            className={`flex items-center justify-center transition-colors ${
              isActive(ROUTES.home)
                ? "text-foreground"
                : "text-muted-foreground hover:text-yellow-500"
            }`}
          >
            <Home className="w-6 h-6" />
          </Link>
        </DockIcon>
        {/* <DockIcon>
          <a
            href="/Sidharth_Hejamadi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
          >
            <FileText className="w-6 h-6" />
          </a>
        </DockIcon> */}
        <DockIcon>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <button
            onClick={handleThemeToggle}
            className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </DockIcon>
      </Dock>
    </div>
  );
}

