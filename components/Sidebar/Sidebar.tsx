"use client";

import { useState } from "react";
import Sections from "./Sections";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

interface SectionInfo {
  icon: React.ReactNode;
  text: string;
  href: string;
  name: string;
}

const sections: SectionInfo[] = [
  {
    icon: <HomeIcon />,
    text: "Dashboard",
    href: "/",
    name: "dashboard",
  },
  {
    icon: <ClipboardDocumentListIcon />,
    text: "My List",
    href: "/my-list",
    name: "my-list",
  },
  {
    icon: <UserCircleIcon />,
    text: "Players",
    href: "/players",
    name: "players",
  },
  {
    icon: <UserGroupIcon />,
    text: "Teams",
    href: "/teams",
    name: "teams",
  },
  {
    icon: <NewspaperIcon />,
    text: "News",
    href: "/news",
    name: "news",
  },
  {
    icon: <CalendarDaysIcon />,
    text: "Fixtures",
    href: "/fixtures",
    name: "fixtures",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<string>("dashboard");

  return (
    <div
      className={`p-4 py-3 ${
        isOpen ? "w-[16rem]" : "w-[5rem]"
      } bg-primary-400 text-primary-100`}
    >
      <div
        className={`flex ${
          isOpen ? "justify-end" : "justify-center"
        } hover:text-primary-200 transition ease-in-out duration-200 cursor-pointer`}
        onClick={(e) => setIsOpen((curr) => !curr)}
      >
        <Bars3Icon className="h-8 w-8" />
      </div>
      <h1 className="text-3xl py-6">{isOpen ? "The Watchlist" : "WL"}</h1>

      <div className={`my-20 ${isOpen ? "mx-4" : "mx-2"}`}>
        {sections.map((section, idx) => (
          <div key={idx} onClick={(e) => setIsActive(section.name)}>
            <Sections
              icon={section.icon}
              text={section.text}
              href={section.href}
              isOpen={isOpen}
              isActive={isActive === section.name ? true : false}
            ></Sections>
          </div>
        ))}
      </div>
    </div>
  );
}
