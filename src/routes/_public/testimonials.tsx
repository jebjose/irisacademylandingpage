import { createFileRoute } from '@tanstack/react-router'
import { createSeo } from '../../utils/seo';
import { SEO } from '../../constants/seo';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection';

export const Route = createFileRoute('/_public/testimonials')({
   head: () =>  createSeo(SEO.TESTIMONIALS),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hero-from to-hero-to">
          <main className="mx-auto max-w-7xl px-6 pb-20 pt-8">
            <TestimonialsSection/>
          </main>
        </div>
  );
}
