import { createFileRoute } from '@tanstack/react-router'
import { EventSection } from '../../components/sections/EventSection';

export const Route = createFileRoute('/_public/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
          <EventSection/>
        </div>
  );
}
