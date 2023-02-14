import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-1 bg-redAccent-500">
      <h1>hello!</h1>
    </div>
  );
}
