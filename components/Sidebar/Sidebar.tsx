// "use client";

import Sections from "./Sections";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="p-4 py-10 w-[16rem] bg-primary-400 text-primary-100">
      <h1 className="text-3xl">The Watchlist</h1>

      <div className="my-20 mx-4">
        <Sections
          icon={<HomeIcon></HomeIcon>}
          text="Dashboard"
          href="/"
        ></Sections>
        <Sections
          icon={<ClipboardDocumentListIcon></ClipboardDocumentListIcon>}
          text="My List"
          href="/my-list"
        ></Sections>
        <Sections
          icon={<UserCircleIcon></UserCircleIcon>}
          text="Players"
          href="players"
        ></Sections>
        <Sections
          icon={<UserGroupIcon></UserGroupIcon>}
          text="Teams"
          href="teams"
        ></Sections>
        <Sections
          icon={<NewspaperIcon></NewspaperIcon>}
          text="News"
          href="news"
        ></Sections>
        <Sections
          icon={<CalendarDaysIcon></CalendarDaysIcon>}
          text="Fixtures"
          href="/fixtures"
        ></Sections>
      </div>
    </div>
  );
}
