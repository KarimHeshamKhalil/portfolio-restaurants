import Image from "next/image";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import ImagesCarousel from "./components/ImagesCarousel";

export default function Home() {
  const socialLinks = [
    {
      text: "Github",
      to: "https://github.com/KarimHeshamKhalil",
      icon: <FaGithubSquare />
    },
    {
      text: "Instagram",
      to: "https://www.instagram.com/restaurants_websites?igsh=MW1icnI1aHl6cWljcw%3D%3D&utm_source=qr",
      icon: <FaInstagramSquare />
    },
  ]

  const firstWebImages = [
    { id: 1, src: "/images/first-website/first.png", alt: "first" },
    { id: 2, src: "/images/first-website/second.png", alt: "second" },
    { id: 3, src: "/images/first-website/third.png", alt: "third" },
    { id: 4, src: "/images/first-website/fourth.png", alt: "fourth" },
    { id: 5, src: "/images/first-website/fifth.png", alt: "fifth" },
  ]

  const secondWebImages = [
    { id: 1, src: "/images/second-website/first.png", alt: "first" },
    { id: 2, src: "/images/second-website/second.png", alt: "second" },
    { id: 3, src: "/images/second-website/third.png", alt: "third" },
    { id: 4, src: "/images/second-website/fourth.png", alt: "fourth" },
  ]

  return (
    <div className="flex flex-col mt-12 w-full text-2xl lg:text-3xl">
      <div className="px-10 lg:px-32">
        <h1 className="mb-10 text-3xl lg:text-4xl">
          Modern websites for restaurants that want more <i>customers</i>
        </h1>

        <h2>
          From <u>modern menus</u>  to <u>online reservations</u>, <br />
          I help restaurants stand out and get more customers online.
        </h2>

        <div className="flex items-center gap-x-2 mt-4 text-4xl">
          {socialLinks.map((link, index) => (
            <Link target="_blank" className="transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 duration-100" href={link.to} key={index}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 px-4">
        <h3 className="flex items-center ml-8 md:ml-12 text-neutral-700">
          <span>First Demo Website</span>

          <Link target="_blank" href={"https://restuarant-website-wine.vercel.app/"} className="bg-black ml-4 px-4 py-1 text-neutral-100 text-2xl">VISIT HERE</Link>
        </h3>
        <ImagesCarousel images={firstWebImages} />
      </div>

      <div className="mt-10 px-4">
        <h3 className="flex items-center ml-8 md:ml-12 text-neutral-700">
            <span>Second Demo Website</span>

            <Link target="_blank" href={"https://restaurant-website-second-template.vercel.app/"} className="bg-black ml-4 px-4 py-1 text-neutral-100 text-2xl">VISIT HERE</Link>
          </h3>
        <ImagesCarousel images={secondWebImages} />
      </div>
    </div>
  );
}
