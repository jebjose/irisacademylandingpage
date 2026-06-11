
import { testimonials } from "../../data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function  TestimonialsSection(){
    return(
        <>
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
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id}
                     {...testimonial} />
                  ))}
            </section>
            {testimonials.length === 0 && (
          <p className="mt-20 text-center text-brand-dark/60">
            No testimonials yet. Check back soon!
          </p>
            )}
        </>
        
    );
}