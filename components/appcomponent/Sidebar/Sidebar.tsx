import Image from "next/image";

export default function SideBar() {
  return (
    <aside className="sticky bg-dark-1  min-h-screen left-0 top-0  min-w-56  md:flex hidden flex-col gap-5 px-5 font-medium ">
      <div className="px-4 h-12 flex items-center gap-3 bg-blueCol rounded-md text-white">
        <Image width={20} height={20} src={"/icons/Home.svg"} alt="Home" />
        <span>Home</span>
      </div>
      <div className="px-4 h-12 flex items-center gap-3  rounded-md text-white">
        <Image width={20} height={20} src={"/icons/upcoming.svg"} alt="Home" />
        <span>Upcoming</span>
      </div>
      <div className="px-4 h-12 flex items-center gap-3  rounded-md text-white">
        <Image width={20} height={20} src={"/icons/previous.svg"} alt="Home" />
        <span>Previous</span>
      </div>
      <div className="px-4 h-12 flex items-center gap-3  rounded-md text-white">
        <Image width={20} height={20} src={"/icons/recordings.svg"} alt="Home" />
        <span>Recordings</span>
      </div>
      <div className="px-4 h-12 flex items-center gap-3  rounded-md text-white">
        <Image width={20} height={20} src={"/icons/add-personal.svg"} alt="Home" />
        <span>Personal</span>
      </div>
    </aside>
  );
}
