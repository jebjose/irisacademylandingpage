import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Award, Clock, Users, Star } from "lucide-react";
import heroStudent from "@/assets/herostd.png";
import { Header } from "../components/Header";
import introduction from "../assets/Introduction.png"
import level1 from "../assets/level1.png"
import level2 from "../assets/level2.png"
import level3 from "../assets/level3.png"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iris Academy — Be an eye professional, build a bright future" },
      {
        name: "description",
        content:
          "Iris Academy offers expert-led optometry courses. Learn from industry leaders, earn certified credentials, and grow your career in eye care.",
      },
      { property: "og:title", content: "Iris Academy" },
      {
        property: "og:description",
        content: "Be an eye professional, build a bright future.",
      },
    ],
  }),
  component: Index,
});

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="h-5 w-5 text-brand" strokeWidth={2.2} />
      </div>
      <div>
        <div className="text-lg font-bold text-brand-dark">{value}</div>
        <div className="text-xs text-brand-dark/70">{label}</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-hero-from to-hero-to">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:py-20 lg:grid-cols-2">
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
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:bg-brand/90"
              >
                Register for free
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-card px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Explore courses
              </Link>
            </div>

              <div className="mt-10 flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#1877F2] shadow-sm hover:shadow-md"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-pink-600 shadow-sm hover:shadow-md"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>

                <a
                  href="https://www.youtube.com/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-red-600 shadow-sm hover:shadow-md"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
              </div>

          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -right-6 -top-6 hidden h-72 w-72 rounded-full bg-brand/10 blur-3xl md:block" />
            <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[40%_60%_55%_45%/55%_45%_55%_45%] shadow-2xl ring-1 ring-black/5">
              <img
                src={heroStudent}
                alt="Iris Academy student"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Featured courses
            </h2>
            <p className="mt-2 max-w-md text-brand-dark/70">
              Hand-picked your programs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            { title: "OPHTHALMIC LENS TECHNICIAN COURSE INTRODUCTION", tutor: "Sonu Joseph", learners: 53, thumb: introduction },
            { title: "OPHTHALMIC LENS TECHNICIAN COURSE LEVEL 1", tutor: "Sonu Joseph", learners: 46, thumb: level1 },
            { title: "OPHTHALMIC LENS TECHNICIAN COURSE LEVEL 2", tutor: "Sonu Joseph", learners: 70, thumb: level2 },
            { title: "OPHTHALMIC LENS TECHNICIAN COURSE LEVEL 3", tutor: "Sonu Joseph", learners: 13, thumb: level3 },
          ].map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_6px_20px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.25)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand/10">
                <img
                  src={c.thumb}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[15px] font-semibold leading-snug text-brand-dark line-clamp-2 min-h-[42px]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-brand">{c.tutor}</p>
                <div className="mt-2 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-brand-dark/60">{c.learners} Active Learners</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:bg-brand/90"
          >
            Browse all courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}