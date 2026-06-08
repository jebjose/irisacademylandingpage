import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Play,
  ShoppingCart,
  PlayCircle,
  Clock,
  BookOpen,
  Star,
} from "lucide-react";
import { Header } from "../components/Header";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Iris Academy" },
      {
        name: "description",
        content:
          "Explore expert-led optometry and vision care courses at Iris Academy. Start with a free introduction or add to your cart.",
      },
      { property: "og:title", content: "Courses — Iris Academy" },
      {
        property: "og:description",
        content: "Browse Iris Academy's catalog of eye care courses.",
      },
    ],
  }),
  component: CoursesPage,
});

type Course = {
  id: string;
  title: string;
  tutor: string;
  price: number;
  thumbnail: string;
};

// Placeholder data — replace with admin-managed source.
// The FIRST course shows "Start Learning" (free intro video).
// All subsequent courses show "Add to Cart".
const courses: Course[] = [
  {
    id: "1",
    title: "OPHTHALMIC LENS TECHNICIAN COURSE INTRODUCTION",
    tutor: "Sunu Joseph",
    price: 0,
    thumbnail:
      "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "2",
    title: "Clinical Refraction Mastery",
    tutor: "Dr. Rahul Verma",
    price: 1499,
    thumbnail:
      "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "3",
    title: "Contact Lens Fitting",
    tutor: "Dr. Anjali Mehta",
    price: 1999,
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "4",
    title: "Pediatric Vision Care",
    tutor: "Dr. Mohammed Khan",
    price: 1799,
    thumbnail:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "5",
    title: "Optical Business Essentials",
    tutor: "Sneha Iyer",
    price: 2499,
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "6",
    title: "Advanced Eye Diagnostics",
    tutor: "Dr. Arjun Patel",
    price: 2299,
    thumbnail:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=70",
  },
];


function CourseCard({ course, isIntro }: { course: Course; isIntro: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_-12px_rgba(30,64,175,0.22)] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(30,64,175,0.32)] hover:ring-brand/20">
      {isIntro && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          Free Intro
        </span>
      )}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand/10">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <PlayCircle className="h-6 w-6 text-brand" strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-bold leading-snug text-brand-dark line-clamp-2">
          {course.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-brand-dark/50">{course.tutor}</p>

        <div className="mt-2.5 flex items-center gap-3 text-[11px] text-brand-dark/40">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> 40m
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-3 w-3" /> 4 lessons
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/30 text-amber-400/30"}`}
            />
          ))}
          <span className="ml-1 text-[11px] font-semibold text-brand-dark/50">4.8</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-xl font-extrabold text-brand">
            {course.price === 0 ? "Free" : `₹${course.price.toLocaleString()}`}
          </p>
          {isIntro ? (
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-xs font-bold text-brand-foreground shadow-md shadow-brand/20 transition hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/30">
              <Play className="h-3.5 w-3.5" /> Start
            </button>
          ) : (
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-brand/40 bg-card px-3.5 py-2 text-xs font-bold text-brand transition hover:border-brand hover:bg-brand/5">
              <ShoppingCart className="h-3.5 w-3.5" /> Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hero-from to-hero-to">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
            Our Courses
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-dark/70">
            Expert-led programs designed to launch and grow your career in eye care.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} isIntro={i === 0} />
          ))}
        </section>

        {courses.length === 0 && (
          <p className="mt-20 text-center text-brand-dark/60">
            No courses yet. Check back soon!
          </p>
        )}
      </main>
    </div>
  );
}