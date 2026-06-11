import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../../type/Testimonial";

type TestimonialCardProps = Testimonial;

export function TestimonialCard({ 
    name,
    role,
    avatarUrl,
    rating,
    message
 }: TestimonialCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-card p-6 shadow-[0_10px_30px_-15px_rgba(30,64,175,0.25)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(30,64,175,0.35)]">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-brand/15" />
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-brand/20"
        />
        <div>
          <h3 className="text-base font-bold text-brand-dark">{name}</h3>
          <p className="text-xs font-medium text-brand-dark/60">{role}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-brand text-brand" : "text-brand/20"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-brand-dark/80">"{message}"</p>
    </article>
  );
}