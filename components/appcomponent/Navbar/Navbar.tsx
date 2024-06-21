"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinksConstant } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 left-0 h-20 flex items-center pl-7 pr-10 z-20  justify-between bg-dark-1">
      <div className="flex gap-2">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger className="p-0 bg-none m-0 ">
              {" "}
              <Image
                src={"/icons/hamburger.svg"}
                width={29}
                height={29}
                alt="Bar"
                className="md:hidden"
              />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="w-56 h-full flex flex-col bg-dark-1 border-none"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-dark-1 z-10 p-6">
                <div className="w-full flex justify-between">
                  <Image
                    src={"/icons/yoom-logo.svg"}
                    width={90}
                    height={90}
                    alt={"Logo"}
                  />
                  <SheetClose>
                    <Image
                      src={"/icons/hamburger.svg"}
                      width={29}
                      height={29}
                      alt="Bar"
                      className="md:hidden"
                    />
                  </SheetClose>
                </div>
                <div className="w-full mt-5 flex flex-col gap-4">
                  {NavLinksConstant.map((link) => (
                    <Link
                      href={link.path}
                      className={cn(
                        "h-10 bg-dark-2 px-3 flex items-center text-white rounded-lg py-2 gap-3",
                        {
                          "bg-blueCol": pathname == link.path,
                        }
                      )}
                      key={link.id}
                    >
                      <Image
                        width={18}
                        height={18}
                        src={link.image}
                        alt={link.label}
                      />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Image
          src={"/icons/yoom-logo.svg"}
          width={90}
          height={90}
          alt={"Logo"}
        />
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

    </header>
  );
}
