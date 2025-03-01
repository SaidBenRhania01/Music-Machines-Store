import Link from "next/link";
import Logo from "@/images/Logo.jpeg";
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const navigationItems = [
    {
      title: "Useful Links",
      description: "",
      items: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "About Us",
          href: "/about-us",
        },
        {
          title: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Legal",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Terms & Conditions",
          href: "/terms-and-conditions",
        },
        {
          title: "Licenses",
          href: "/licenses",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <div className="container px-4 py-10 md:py-12 lg:py-14 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Link href="/">
                <Image width={200} height={100} src={Logo} alt="Logo" className="w-20 md:w-24 lg:w-28" />
              </Link>
              <p className="max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Dj Stage the music store number one in Morocco.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Phone: +212 657-011638</p>
                <p>Email: dj-stage@gmail.com</p>
                <p>Address: Agadir, Morocco </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex gap-1 flex-col items-start">
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link href={item.href} className="flex justify-between items-center">
                      <span className="">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="">{item.title}</p>
                  )}
                  {item.items && item.items.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href} className="flex justify-between items-center">
                      <span className="text-background/75 text-sm">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-300"/>
      <div className="container px-4 py-4 lg:py-6 mx-auto max-w-7xl">
        <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
          <p className="text-sm leading-loose">
            DJ Stage. All rights reserved {new Date().getFullYear()}.
          </p>
          <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebookF className="w-4 h-4 lg:w-5 lg:h-5"/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};