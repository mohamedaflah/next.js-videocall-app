import { NavLinksConstant } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="sticky bg-dark-1  min-h-screen left-0 top-0  min-w-56  md:flex hidden flex-col gap-5 px-5 font-medium ">
      {NavLinksConstant.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={`px-4 h-12 flex items-center gap-3 ${
            link.label == "Home" && "bg-blueCol"
          } rounded-md text-white`}
        >
          <Image width={20} height={20} src={link.image} alt={link.label} />
          <span>{link.label}</span>
        </Link>
      ))}
    </aside>
  );
}
