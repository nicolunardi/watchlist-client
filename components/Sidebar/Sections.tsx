import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  text: string;
  href: string;
  isOpen: boolean;
  isActive: boolean;
}

function Sections({ icon, text, href, isOpen, isActive }: Props) {
  return (
    <Link
      className={`flex flex-row space-x-2 mb-6 ${
        isActive ? "text-greenAccent-500" : "text-inherit"
      }`}
      href={href}
    >
      <div className="h-5 w-5 hover:scale-110 transition duration-200 hover:text-greenAccent-400">
        {icon}
      </div>
      {isOpen && <div>{text}</div>}
    </Link>
  );
}

export default Sections;
