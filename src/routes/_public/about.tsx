import { createFileRoute } from '@tanstack/react-router'
import { createSeo } from '../../utils/seo';
import { SEO } from '../../constants/seo';
import { Award, Heart, Target, Users } from 'lucide-react';

export const Route = createFileRoute('/_public/about')({
head: () => createSeo(SEO.ABOUT),
  component: AboutPage,
})

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

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
             Building Future Eye Care Professionals
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-dark/70">
            Iris Academy is a professional training center dedicated to
            preparing students for successful careers in Optometry, Optics
            Management, and Ophthalmic Lens Technology.
          </p>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl bg-card p-8 md:p-12 shadow-lg ring-1 ring-black/5">
          <h2 className="text-3xl font-bold text-brand-dark">
            Who We Are
          </h2>

         <div className="mt-3 h-1 w-12 rounded bg-brand" />

          <p className="mt-6 leading-relaxed text-brand-dark/75">
            Iris Academy is a specialized eye-care education center located in
            Kottayam, Kerala. We focus on developing skilled professionals for
            the growing vision-care industry through practical training,
            industry-focused curriculum, and personalized mentorship.
          </p>

          <p className="mt-4 leading-relaxed text-brand-dark/75">
            Our programs are designed to equip students with both technical
            expertise and professional confidence, helping them build rewarding
            careers in hospitals, optical stores, clinics, and eye-care
            organizations.
          </p>
         </div>
       </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Courses We Offer
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded bg-brand" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Diploma in Optometry",
                duration: "2 Years",
              },
              {
                title: "Ophthalmic Lens Fittings Course",
                duration: "6 Months",
              },
              {
                title: "Diploma in Optics Management",
                duration: "1 Year",
              },
            ].map((course) => (
            <div
              key={course.title}
              className="rounded-2xl bg-card p-6 text-center shadow-md ring-1 ring-black/5"
              >
                <h3 className="text-lg font-bold text-brand-dark">
                {course.title}
                </h3>

                <p className="mt-3 text-brand">
                  Duration: {course.duration}
                </p>
            </div>
            ))}
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

        <section className="mt-16 rounded-3xl bg-brand p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Start Your Eye-Care Career Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Join Iris Academy and gain the knowledge, practical skills, and
            confidence needed to succeed in the eye-care industry.
          </p>

          <div className="mt-8 space-y-2">
            <p>📞 9446297864</p>
            <p>📧 iriskottayam@gmail.com</p>
            <p>
              Boat Jetty Road, Pulimoodu Junction,
              Kottayam – 686001
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
