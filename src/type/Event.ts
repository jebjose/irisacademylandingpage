export type Photo = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  span?: "wide" | "tall" | "big";
};