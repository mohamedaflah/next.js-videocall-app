import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MeetingRecordCardProp {
  iconpath: string;
  code: string;
  endTime: string;
  startTime: string;
  buttonStats: boolean;
}
export const MeetRecordCard = ({
  iconpath,
  code,
  endTime,
  startTime,

  buttonStats,
}: MeetingRecordCardProp) => {
  return (
    <div className=" bg-dark-1 rounded-xl p-6 flex flex-col gap-4 justify-between">
      <div>
        <Image src={iconpath} width={24} height={24} alt="meeting" />
      </div>
      <div>
        <span className="text-2xl font-medium">{code}</span>
      </div>
      <div className="flex gap-3 ">
        <span className="text-lightText">{startTime}</span>
        <span className="text-lightText"> </span>
        <span className="text-lightText">{endTime}</span>
      </div>
      <div className="w-full mt-2">
        {buttonStats && (
          <>
            <div className="gap-2 grid-cols-1 grid md:grid-cols-2 ">
              <Button className="bg-blueCol rounded-sm flex gap-3">
                <Image
                  src={"/icons/Video.svg"}
                  width={16}
                  height={16}
                  alt="copy"
                />
                <span>Play</span>
              </Button>
              <Button className="flex gap-3 hover:bg-dark-3 bg-dark-3 rounded-sm">
                <Image
                  src={"/icons/share.svg"}
                  width={16}
                  height={16}
                  alt="copy"
                />
                <span>Share</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
