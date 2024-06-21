import { NavLinksConstant } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="sticky bg-dark-1  min-h-screen left-0 top-0  min-w-56  md:flex hidden flex-col gap-5 px-5 font-medium ">
      <div className="flex flex-col gap-5 sticky top-0 left-0">
        {NavLinksConstant.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={`px-4 h-12 flex items-center gap-3 ${
              link.label == "Home" && "bg-blueCol"
            } rounded-md text-lightText`}
          >
            <Image width={20} height={20} src={link.image} alt={link.label} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
