import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MeetCardProp {
  iconpath: string;
  mainTitle: string;
  date: string;
  time: string;
  users: {
    images: string[];
    remainNumber: number;
  };
  buttonStats: boolean;
}
export const MeetingCard = ({
  iconpath,
  mainTitle,
  date,
  time,
  users,
  buttonStats,
}: MeetCardProp) => {
  return (
    <div className=" bg-dark-1 rounded-lg p-6 flex flex-col gap-4 justify-between">
      <div>
        <Image src={iconpath} width={24} height={24} alt="meeting" />
      </div>
      <div>
        <span className="text-2xl font-medium">{mainTitle}</span>
      </div>
      <div className="flex gap-3 ">
        <span className="text-lightText">{date}</span>
        <span className="text-lightText">-</span>
        <span className="text-lightText">{time}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-start">
          {users.images?.map((path, index) => (
            <Image
              key={index}
              src={path}
              width={50}
              height={50}
              alt="avatar1"
              className={`rounded-full object-cover size-12  border-4 border-dark-3 ${
                index >=1 && "-ml-4"
              }`}
            />
          ))}

          <div className="size-12 bg-[#1E2757] flex items-center justify-center rounded-full -ml-4 font-medium border-4 border-dark-3">
            +{users.remainNumber}
          </div>
        </div>
        {buttonStats && (
          <>
            <div className="md:flex justify-end gap-2 grid grid-cols-2 mt-3 md:mt-0">
              <Button className="bg-blueCol rounded-sm ">Start</Button>
              <Button className="flex gap-3 hover:bg-dark-3 bg-dark-3 rounded-sm">
                <Image
                  src={"/icons/copy.svg"}
                  width={16}
                  height={16}
                  alt="copy"
                />
                <span>Copy Invitation</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
