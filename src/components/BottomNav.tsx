import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { ROUTES, SOCIAL_LINKS } from "@/config/constants";
import SocialLink from "@/components/SocialLink";

export default function BottomNav() {
  const location = useLocation();
  const { setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to={ROUTES.home}
              className={`flex items-center gap-2 transition-colors ${
                isActive(ROUTES.home)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-yellow-500"
              }`}
            >
              <Home className="w-5 h-5" />
            </Link>
            <a
              href="/Sidharth_Hejamadi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-yellow-500 transition-colors"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Social Links & Theme Toggle */}
          <div className="flex items-center gap-4">
            <SocialLink
              icon={Github}
              href={SOCIAL_LINKS.github}
              label="GitHub"
              iconClassName="w-5 h-5 text-muted-foreground hover:text-yellow-500 transition-colors"
            />
            <SocialLink
              icon={Linkedin}
              href={SOCIAL_LINKS.linkedin}
              label="LinkedIn"
              iconClassName="w-5 h-5 text-muted-foreground hover:text-yellow-500 transition-colors"
            />
            <button
              onClick={() => {
                const currentTheme =
                  document.documentElement.classList.contains("dark")
                    ? "dark"
                    : "light";
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
              className="text-muted-foreground hover:text-yellow-500 transition-colors"
              aria-label="Toggle theme"
            >
              {document.documentElement.classList.contains("dark") ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
