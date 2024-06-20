import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MeetingCard } from "./MeetingCard/MeetingCard";

export const MeetingList = () => {
  return (
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
        <MeetingCard />
        <MeetingCard />
      </div>
    </div>
  );
};
