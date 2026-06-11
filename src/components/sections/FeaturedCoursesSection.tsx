import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { courses } from "../../data/courses";
import { CourseCard } from "./CourseCard";
import { LINKS } from "../../constants/links";


export function FeaturedCoursesSection() {
    return(

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
          {courses.map((course) => (
            <CourseCard
                key={course.title}
                {...course}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to={LINKS.LOGIN}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:bg-brand/90"
          >
            Browse all courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    );
}