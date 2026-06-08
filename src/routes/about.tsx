import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Heart,
  Award,
  Users,
} from "lucide-react";
import { Header } from "../components/Header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iris Academy" },
      {
        name: "description",
        content:
          "Learn about Iris Academy's mission to train the next generation of eye care professionals through expert-led, industry-relevant programs.",
      },
      { property: "og:title", content: "About — Iris Academy" },
      {
        property: "og:description",
        content: "Our mission, vision, and the team behind Iris Academy.",
      },
    ],
  }),
  component: AboutPage,
});


function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Target;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-[0_10px_30px_-15px_rgba(30,64,175,0.25)] ring-1 ring-black/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="h-6 w-6 text-brand" strokeWidth={2.2} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{description}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hero-from to-hero-to">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
            About Iris Academy
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-dark/70">
            Empowering the next generation of eye care professionals with world-class training,
            mentorship, and industry-ready skills.
          </p>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-[0_10px_30px_-15px_rgba(30,64,175,0.25)] ring-1 ring-black/5">
            <h2 className="text-2xl font-bold text-brand-dark">Our Mission</h2>
            <div className="mt-3 h-1 w-12 rounded bg-brand" />
            <p className="mt-4 text-base leading-relaxed text-brand-dark/75">
              To make high-quality optometry and vision care education accessible to every aspiring
              professional — combining clinical expertise, business acumen, and modern teaching to
              prepare graduates for real-world success.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-[0_10px_30px_-15px_rgba(30,64,175,0.25)] ring-1 ring-black/5">
            <h2 className="text-2xl font-bold text-brand-dark">Our Vision</h2>
            <div className="mt-3 h-1 w-12 rounded bg-brand" />
            <p className="mt-4 text-base leading-relaxed text-brand-dark/75">
              A world where everyone has access to skilled eye care — driven by professionals
              trained at Iris Academy who lead practices, build businesses, and improve lives
              through better vision.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-3xl font-bold text-brand-dark">What We Stand For</h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded bg-brand" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={Target}
              title="Excellence"
              description="Industry-relevant curriculum built and taught by leading eye care professionals."
            />
            <ValueCard
              icon={Heart}
              title="Care"
              description="A supportive learning environment where every student is guided to succeed."
            />
            <ValueCard
              icon={Award}
              title="Certified"
              description="Accredited programs that open doors to careers across the eye care industry."
            />
            <ValueCard
              icon={Users}
              title="Community"
              description="A growing network of alumni, mentors, and partners across the field."
            />
          </div>
        </section>

        <section className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-brand p-10 text-brand-foreground md:grid-cols-4">
          {[
            { value: "5,000+", label: "Students Trained" },
            { value: "98%", label: "Course Completion" },
            { value: "50+", label: "Expert Faculty" },
            { value: "10+", label: "Years of Excellence" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm opacity-90">{s.label}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}