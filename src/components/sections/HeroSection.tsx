import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { LINKS } from "../../constants/links";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import heroStudent from "@/assets/herostd.png";

export function HeroSection(){
    return(
        <section className="bg-gradient-to-b from-hero-from to-hero-to min-h-[calc(100vh-80px)]">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <GraduationCap className="h-3.5 w-3.5" /> IRIS ACADEMY
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
              Develop skills that move your{" "}
              <span className="text-brand">eye-care career</span> forward
            </h1>
            <p className="mt-6 max-w-lg text-base text-brand-dark/75 md:text-lg">
              Get guidance to develop the{" "}
              <span className="font-semibold text-brand-dark">critical skills</span>{" "}
              you need to{" "}
              <span className="font-semibold text-brand-dark">advance your career</span>{" "}
              from the only learning platform built for optometry professionals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={LINKS.LOGIN}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:bg-brand/90"
              >
                Register for free
              </Link>
              <Link
                to={LINKS.LOGIN}
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-card px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Explore courses
              </Link>
            </div>

              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="text-sm font-semibold tracking-wide text-gray-600">
                  Follow us on
                </span>

                <a
                  href={LINKS.FACEBOOK}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1877F2] bg-white text-[#1877F2] transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>

                <a
                  href={LINKS.INSTAGRAM}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-500 bg-white text-pink-500 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>

                <a
                  href={LINKS.YOUTUBE}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-600 bg-white text-red-600 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
              </div>

          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center lg:-translate-y-6">
            <div className="absolute -right-6 -top-6 hidden h-72 w-72 rounded-full bg-brand/10 blur-3xl md:block" />
            <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-[40%_60%_55%_45%/55%_45%_55%_45%] shadow-2xl ring-1 ring-black/5">
              <img
                src={heroStudent}
                alt="Iris Academy student"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    );
}