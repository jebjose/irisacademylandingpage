import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


import { NAVIGATION } from "../constants/navigation";
import { LINKS } from "../constants/links";
import { Globe } from "lucide-react";

export function Footer() {
  return (

    <footer className="bg-gradient-to-br from-[#132238] via-[#0F1B2D] to-[#0B1220] text-white">
  <div className="mx-auto max-w-7xl px-6 py-16">
 
   <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  
    <div>
     <h3 className="text-lg font-semibold text-white">
      IRIS Academy
     </h3>

     <p className="mt-5 text-sm leading-relaxed text-slate-300">
      Iris Academy is a professional training center dedicated to
      developing future eye-care professionals through
      industry-focused education and hands-on learning.
     </p>

     <div className="mt-5">
      <h4 className="text-sm font-semibold text-white">
        Courses Offered
      </h4>

      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        <li>Diploma in Optometry (2 Years)</li>
        <li>Diploma in Optics Management (1 Year)</li>
        <li>Ophthalmic Lens Fittings Course (6 Months)</li>
      </ul>
     </div>
    </div>

    {/* QUICK LINKS */}
    <div>
     <h3 className="text-lg font-semibold text-white">
      Quick Links
     </h3>

     <ul className="mt-5 space-y-3">
      {NAVIGATION.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="text-sm text-slate-300 transition hover:text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}
     </ul>
    </div>

   {/* CONTACT */}
    <div>
     <h3 className="text-lg font-semibold text-white">
      Contact Us
     </h3>

     <div className="mt-5 space-y-4 text-sm text-slate-300">
      <div>
        <p className="font-medium text-white">Phone</p>
        <p>+91 9446297864</p>
      </div>

      <div>
        <p className="font-medium text-white">Email</p>
        <p>iriskottayam@gmail.com</p>
      </div>

      <div>
        <p className="font-medium text-white">Address</p>
        <p>
          Boat Jetty Road,
          <br />
          Pulimoodu Junction,
          <br />
          Kottayam, Kerala 686001
        </p>
      </div>
     </div>
    </div>

    {/* FOLLOW US */}
   <div>
    <h3 className="text-lg font-semibold text-white">
      Follow Us
    </h3>

    <div className="mt-5 flex gap-3">
      <a
        href={LINKS.FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-brand"
      >
        <FaFacebookF />
      </a>

      <a
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-brand"
      >
        <FaInstagram />
      </a>

      <a
        href={LINKS.YOUTUBE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-brand"
      >
        <FaYoutube />
      </a>
    </div>
  </div>
 </div>
</div>

  {/* Udemy-style bottom bar */}
   <div className="border-t border-white/10 bg-[#0B1220]">
     <div className="border-t border-white/10 bg-[#0B1220]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
    
      {/* Left */}
       <div className="flex items-center gap-3">

       <span className="text-sm text-slate-300">
        © {new Date().getFullYear()} IRIS Academy, Inc.
       </span>
      </div>

     {/* Right */}
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <Globe className="h-4 w-4" />
        <span>English</span>
      </div>

     </div>
    </div>
   </div>
 </footer>
 
  );
}