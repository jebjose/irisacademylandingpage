import { Link, useLocation } from "@tanstack/react-router";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { LogIn, Menu, UserPlus } from "lucide-react";
import icon from "../assets/iconnew.png";
import { NAVIGATION } from "../constants/navigation";
import type { LINKS } from "@/constants/links";


export function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="bg-gradient-to-r
        from-[#081B4B]/80
        via-[#0F2F73]/80
        to-[#145DA0]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full overflow-hidden bg-white ring-2 ring-white/20 shadow-lg flex-shrink-0">
          <img
            src={icon}
            alt="IRIS Academy"
            className="w-full h-full object-cover"
          />
        </div>

      <div className="leading-none">
        <div className="text-2xl font-extrabold tracking-tight text-white">
          IRIS
        </div>
        <div className="text-[10px] font-semibold tracking-[0.25em] text-white/80">
          ACADEMY
        </div>
      </div>
    </Link>

      {/* Desktop Nav */}
      <nav className="hidden items-center gap-8 lg:gap-12 md:flex">
        {NAVIGATION.map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-base font-medium transition-colors ${
                isActive
                  ? "font-semibold text-[#FFD54F]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-[#FFD54F]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Auth */}
      <div className="hidden items-center gap-3 md:flex">
        <a
        href="https://irisacademyonline.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2
        rounded-xl
        border border-white/30
        px-5 py-2
        text-sm font-semibold
        text-white
        hover:bg-white/10
        transition">
          Login <LogIn className="h-4 w-4" />
        </a>
        <a
        href="https://irisacademyonline.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2
        rounded-xl
        bg-[#FFD54F]
        px-5 py-2
        text-sm font-semibold
        text-[#0B1630]
        shadow-lg
        hover:bg-[#FFCA28]
        transition">
          Sign Up <UserPlus className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand/30 bg-[#FFD54F] text-brand hover:bg-[#FFCA28] md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-card p-6">
          <div className="flex flex-col gap-6 pt-8">
            <nav className="flex flex-col gap-4">
              {NAVIGATION.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? "text-brand font-semibold"
                          : "text-brand-dark/80 hover:text-brand"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            <div className="h-px bg-border" />
            <div className="flex flex-col gap-3">
              <a
                href= "https://irisacademyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Login <LogIn className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90">
                Sign Up <UserPlus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
        </div>
      </div>
      
    </header>
  );
}