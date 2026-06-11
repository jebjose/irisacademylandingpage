import { photos } from "../../data/photos";
import { EventCard } from "./EventCard";

export function EventSection(){
    return(

       <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand"> Iris Academy </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl tracking-tight text-brand-dark md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }} >
             Moments at Iris </h1>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-brand" /> <p className="mx-auto mt-6 max-w-2xl text-base text-brand-dark/70 md:text-lg">
           Celebrations, practical sessions, and everyday life on campus — captured through our lens. </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="mb-6 break-inside-avoid"
            >
              <EventCard {...photo} />
            </div>
          ))}
        </div>
      </div>
    </section>
            
    );
}