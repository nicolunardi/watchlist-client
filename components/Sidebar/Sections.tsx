import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  text: string;
  href: string;
}

function Sections({ icon, text, href }: Props) {
  return (
    <Link className="flex flex-row space-x-2 mb-4" href={href}>
      <div className="h-5 w-5">{icon}</div>
      <div>{text}</div>
    </Link>
  );
}

export default Sections;
