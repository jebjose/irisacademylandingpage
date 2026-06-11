import { Star } from "lucide-react";
import type { Course } from "../../type/Course";


export function CourseCard({
    title,
    tutor,
    learners,
    thumb,
}: Course){
    return(
        <article
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_6px_20px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.25)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand/10">
                <img
                  src={thumb}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[15px] font-semibold leading-snug text-brand-dark line-clamp-2 min-h-[42px]">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-brand">{tutor}</p>
                <div className="mt-2 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-brand-dark/60">{learners} Active Learners</p>
              </div>
            </article>
    );
}