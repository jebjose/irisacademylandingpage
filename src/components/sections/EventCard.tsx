import { Play } from "lucide-react";
import type { EventMedia } from "../../type/EventMedia";

export function EventCard({
  image,
  caption,
  type,
}: EventMedia) {
  return (
<article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  
  <div className="relative aspect-[4/3] overflow-hidden">
    <img
    src={image}
    alt={caption}
    className="h-full w-full object-cover"
  />
   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

    {type === "video" && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg">
          <Play className="h-5 w-5 fill-current text-brand" />
        </div>
      </div>
     )}
  </div>
  
  <div className="h-16 p-4">
    <p className="text-sm text-brand-dark/75
      line-clamp-2
      group-hover:line-clamp-none">
     {caption}
    </p>
  </div>
</article>
  );
}