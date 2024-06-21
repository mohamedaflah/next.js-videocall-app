
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MeetingCard
          buttonStats={true}
          date="March 15, 2024"
          time="10:00 AM"
          mainTitle="Team Sync: Sprint Planning & Updates"
          iconpath="/icons/previous.svg"
          users={{
            images: [
              "/images/avatar-1.jpeg",
              "/images/avatar-2.jpeg",
              "/images/avatar-3.png",
              "/images/avatar-4.png",
              "/images/avatar-5.png",
            ],
            remainNumber: 9,
          }}
        />
        <MeetingCard
          buttonStats={true}
          date="March 15, 2024"
          time="10:00 AM"
          mainTitle="Team Sync: Sprint Planning & Updates"
          iconpath="/icons/previous.svg"
          users={{
            images: [
              "/images/avatar-1.jpeg",
              "/images/avatar-2.jpeg",
              "/images/avatar-3.png",
              "/images/avatar-4.png",
              "/images/avatar-5.png",
            ],
            remainNumber: 9,
          }}
        />
      </div>
    </div>
  );
};
