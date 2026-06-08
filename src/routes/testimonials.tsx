import { createFileRoute,  } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Header } from "../components/Header";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Iris Academy" },
      {
        name: "description",
        content:
          "Hear from Iris Academy students and graduates about their journey into eye care careers.",
      },
      { property: "og:title", content: "Testimonials — Iris Academy" },
      {
        property: "og:description",
        content: "Real stories from Iris Academy students and graduates.",
      },
    ],
  }),
  component: TestimonialsPage,
});

// Placeholder data — in production this would be populated via an admin panel
// (e.g., a `testimonials` table managed by an authenticated admin).
type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Optometry Graduate, 2024",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    message:
      "Iris Academy gave me the practical skills and confidence to start my own optical practice. The mentors are world-class.",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Vision Care Specialist",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "The flexible learning schedule helped me upskill while working. The certification opened up new career opportunities.",
  },
  {
    id: "3",
    name: "Anjali Mehta",
    role: "Student, Diploma in Optometry",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    message:
      "Industry-relevant curriculum and supportive faculty. I love how every concept ties back to real clinical practice.",
  },
  {
    id: "4",
    name: "Mohammed Khan",
    role: "Optical Retail Manager",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    message:
      "The business modules transformed how I run my store. Iris Academy is more than a school — it's a launchpad.",
  },
  {
    id: "5",
    name: "Sneha Iyer",
    role: "Clinical Optometrist",
    avatarUrl: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    message:
      "From basic refraction to advanced contact lens fitting, every course is taught with deep clinical insight.",
  },
  {
    id: "6",
    name: "Arjun Patel",
    role: "Final Year Student",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    message:
      "The hands-on workshops and live patient demos are unmatched. I feel job-ready already.",
  },
];


function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-card p-6 shadow-[0_10px_30px_-15px_rgba(30,64,175,0.25)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(30,64,175,0.35)]">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-brand/15" />
      <div className="flex items-center gap-4">
        <img
          src={t.avatarUrl}
          alt={t.name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-brand/20"
        />
        <div>
          <h3 className="text-base font-bold text-brand-dark">{t.name}</h3>
          <p className="text-xs font-medium text-brand-dark/60">{t.role}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < t.rating ? "fill-brand text-brand" : "text-brand/20"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-brand-dark/80">"{t.message}"</p>
    </article>
  );
}

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hero-from to-hero-to">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
            What Our Students Say
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-dark/70">
            Real stories from learners who've launched careers in eye care with Iris Academy.
          </p>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </section>

        {testimonials.length === 0 && (
          <p className="mt-20 text-center text-brand-dark/60">
            No testimonials yet. Check back soon!
          </p>
        )}
      </main>
    </div>
  );
}