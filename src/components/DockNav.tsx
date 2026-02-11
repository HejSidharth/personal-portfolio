import { Link, useLocation } from "react-router-dom";
import { Home, Github, Linkedin, Moon, Sun, Accessibility, Plus, Minus, Contrast, RefreshCw } from "lucide-react";
// import { FileText } from "lucide-react"; // Commented out - resume link disabled
import { useTheme } from "@/components/theme-provider";
import { ROUTES, SOCIAL_LINKS } from "@/config/constants";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useEffect, useState } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DockNav() {
  const location = useLocation();
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");
  const { 
    fontSize, 
    contrast, 
    increaseFontSize, 
    decreaseFontSize, 
    toggleContrast, 
    resetAccessibility 
  } = useAccessibility();

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

    return () => observer.disconnect();
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
        magnification={40}
      >
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent side="top">Home</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">GitHub</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">LinkedIn</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center justify-center text-muted-foreground hover:text-yellow-500 transition-colors"
                    aria-label="Accessibility settings"
                  >
                    <Accessibility className="w-6 h-6" />
                  </button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side="top">Accessibility</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="mb-2">
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()} 
                onClick={increaseFontSize} 
                className="flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>Increase Text</span>
                <Plus className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()} 
                onClick={decreaseFontSize} 
                className="flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>Decrease Text</span>
                <Minus className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()} 
                onClick={toggleContrast} 
                className="flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>Contrast: {contrast === 'high' ? 'High' : 'Normal'}</span>
                <Contrast className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()} 
                onClick={resetAccessibility} 
                className="flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>Reset All</span>
                <RefreshCw className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5 text-xs text-muted-foreground text-center">
                Font Size: {fontSize}%
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent side="top">
              {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

