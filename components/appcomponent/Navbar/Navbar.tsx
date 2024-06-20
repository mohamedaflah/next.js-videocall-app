import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 left-0 h-20 flex items-center pl-7 pr-10 z-20  justify-between bg-dark-1">
      <div className="flex gap-2">
        <div className="flex items-center">
          <Image src={"/icons/hamburger.svg"} width={29} height={29} alt="Bar" className="md:hidden" />
        </div>
        <Image
          src={"/icons/yoom-logo.svg"}
          width={90}
          height={90}
          alt={"Logo"}
        />
      </div>
      <div className="rounded-full p-1 border cursor-pointer">
        <Image
          src={"/images/avatar-1.jpeg"}
          width={40}
          height={40}
          className="rounded-full"
          alt="User"
        />
      </div>
    </header>
  );
}
