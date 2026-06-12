import { createFileRoute } from '@tanstack/react-router'
import { EventSection } from '../../components/sections/EventSection';
import { createSeo } from '@/utils/seo';
import { SEO } from '@/constants/seo';

export const Route = createFileRoute('/_public/events')({
  head: () => createSeo(SEO.EVENTS),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
          <EventSection/>
        </div>
  );
}
