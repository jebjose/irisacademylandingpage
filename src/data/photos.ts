
import photo1 from "../assets/onephoto.jpg";
import photo2 from "../assets/secondphoto.jpg";
import photo3 from "../assets/photothree.jpg";
import photo4 from "../assets/photofour.jpg";
import photo5 from "../assets/photofive.jpg"
import type { EventMedia } from "../type/EventMedia";

export const photos: EventMedia[] = [
  {
    id: "1",
    image: photo4,
    caption: "Students celebrating their achievements.",
    type: "photo",
  },
  {
    id: "2",
    image: photo3,
    caption: "Students celebrating onam.",
    type: "photo",
  },
  {

    id: "3",
    image: photo1,
    caption: "Pookalams, sadhya and traditional attire filled the campus.",
    type: "photo",
  },
  {
    id: "4",
    image: photo2,
    caption: "Pookalams, sadhya and traditional attire filled the campus.",
    type: "video",
  },
  {

    id: "5",
    image: photo4,
    caption: "A focused session on soft and RGP lens fitting, covering case selection.",
    type: "photo",    

  },
  {

    id: "7",
    image: photo2,
    caption: "Over 500 patients were screened and free spectacles distributed at a weekend camp",
    type: "video", 

  },
  {

    id: "8",
    image: photo5,
    caption: "An evening of music, dance and dramatics celebrating another rewarding year",
    type: "photo", 

  },
  
];