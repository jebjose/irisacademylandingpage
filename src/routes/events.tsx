import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { Header } from "../components/Header";
import photo1 from "../assets/onephoto.jpg";
import photo2 from "../assets/secondphoto.jpg";
import photo3 from "../assets/photothree.jpg";
import photo4 from "../assets/photofour.jpg";
import photo5 from "../assets/photofive.jpg"

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Gallery — Iris Academy" },
      {
        name: "description",
        content:
          "A photo gallery of celebrations, practical sessions, and student life at Iris Academy.",
      },
      { property: "og:title", content: "Events Gallery — Iris Academy" },
      {
        property: "og:description",
        content:
          "Glimpses from celebrations, workshops, and practical sessions at Iris Academy.",
      },
    ],
  }),
  component: EventsPage,
});

type Photo = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  span?: "wide" | "tall" | "big";
};

const photos: Photo[] = [
  {
    id: "1",
    title: "Christmas Celebration",
    date: "December 2024",
    description:
      "A warm evening of carols, cake-cutting and gifts as students and faculty came together to mark Christmas on campus.",
    image:
      photo4,
    span: "big",
  },
  {
    id: "2",
    title: "Refraction Practical Session",
    date: "November 2024",
    description:
      "Final-year students performed live refraction on volunteers, refining technique under one-on-one faculty guidance.",
    image:
      photo3,
  },
  {
    id: "3",
    title: "Onam Celebration",
    date: "September 2024",
    description:
      "Pookalams, sadhya and traditional attire filled the campus as the Iris family came together for Onam.",
    image:
      photo1,
  },
  {
    id: "4",
    title: "Slit Lamp Examination Training",
    date: "October 2024",
    description:
      "Hands-on learning at the clinical lab — students practised anterior segment evaluation on the slit lamp biomicroscope.",
    image:
      photo2,
  },
  {
    id: "5",
    title: "Contact Lens Fitting Lab",
    date: "October 2024",
    description:
      "A focused session on soft and RGP lens fitting, covering case selection, trial fit and patient counselling.",
    image:
      photo4,
  },
  {
    id: "6",
    title: "Independence Day",
    date: "August 2024",
    description:
      "Flag hoisting, patriotic songs and a heartfelt address by the principal marked our Independence Day celebration.",
    image:
      photo1,
  },
  {
    id: "7",
    title: "Community Eye Camp",
    date: "January 2025",
    description:
      "Over 500 patients were screened and free spectacles distributed at a weekend camp organised by students and faculty.",
    image:
      photo2,
    span: "wide",
  },
  {
    id: "8",
    title: "Annual Day",
    date: "March 2024",
    description:
      "An evening of music, dance and dramatics celebrating another rewarding year at Iris Academy.",
    image:
      photo3,
    span: "tall",
  },
  {
    id: "9",
    title: "Retinoscopy Workshop",
    date: "September 2024",
    description:
      "An intensive workshop on objective refraction techniques, with peer practice and faculty-led demonstrations.",
    image:
      photo4,
  },
  {
    id: "11",
    title: "Optical Dispensing Lab",
    date: "November 2024",
    description:
      "Students worked through frame selection, lens edging and fitting — the practical foundations of dispensing optics.",
    image:
      photo5,
  },
  
];

function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Iris Academy
          </p>
          <h1
            className="mx-auto mt-4 max-w-3xl text-5xl tracking-tight text-brand-dark md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            Moments at Iris
          </h1>
          <div className="mx-auto mt-5 h-[2px] w-16 bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-brand-dark/70 md:text-lg">
            Celebrations, practical sessions, and everyday life on campus —
            captured through our lens.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-flow-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {photos.map((p) => {
              const spanClass =
                p.span === "wide"
                  ? "lg:col-span-2"
                  : p.span === "tall"
                    ? "lg:row-span-2"
                    : p.span === "big"
                      ? "lg:col-span-2 lg:row-span-2"
                      : "";
              return (
                <figure
                  key={p.id}
                  className={`group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-brand-dark/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(30,64,175,0.35)] ${spanClass}`}
                >
                  <div
                    className={`relative overflow-hidden bg-brand/10 ${p.span === "tall" || p.span === "big" ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex flex-1 flex-col px-5 py-4 md:px-6 md:py-5">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      <Calendar className="h-3 w-3" />
                      {p.date}
                    </div>
                    <h3
                      className="mt-2 text-xl leading-snug text-brand-dark"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                      }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-3 h-[2px] w-8 bg-brand/60" />
                    <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                      {p.description}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
