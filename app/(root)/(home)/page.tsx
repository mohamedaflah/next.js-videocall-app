import { Hero } from "@/components/appcomponent/Home/Hero-section/Hero";
import { Cards } from "@/components/appcomponent/Home/cards/Cards";
import { MeetingList } from "@/components/appcomponent/Home/upcoming-meetings/MeetingList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full  pt-12 px-12 flex flex-col gap-8 text-white ">
      <Hero />
      <Cards />
      <MeetingList />
    </main>
  );
}
