import { Hero } from "@/components/appcomponent/Home/Hero-section/Hero";
import { Cards } from "@/components/appcomponent/Home/cards/Cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full  pt-12 px-12 flex flex-col gap-8 text-white ">
      <Hero />
      <Cards />
      <div className="flex flex-col gap-5">
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="font-medium text-1xl sm:text-2xl md:text-3xl">
              Today’s Upcoming Meetings
            </span>
          </div>
          <div>
            <span className="text-[13px] md:text-sm">See all</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-64 bg-dark-1 rounded-lg p-6 flex flex-col gap-4">
            <div>
              <Image
                src={"/icons/previous.svg"}
                width={24}
                height={24}
                alt="meeting"
              />
            </div>
            <div>
              <span className="text-2xl font-medium">
                Team Sync: Sprint Planning & Updates
              </span>
            </div>
            <div className="flex gap-3">
              <span>March 15 2024</span>
              <span>-</span>
              <span>10:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
