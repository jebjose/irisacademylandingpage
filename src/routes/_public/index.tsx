import { createFileRoute } from '@tanstack/react-router'
import { createSeo } from '../../utils/seo'
import { SEO } from '../../constants/seo'
import { HeroSection } from '../../components/sections/HeroSection';
import { FeaturedCoursesSection } from '../../components/sections/FeaturedCoursesSection';

export const Route = createFileRoute('/_public/')({
    head: () => createSeo(SEO.HOME),
    component: Index,
})

function Index() {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection/>
        <FeaturedCoursesSection/>
      </div>
    );
}
