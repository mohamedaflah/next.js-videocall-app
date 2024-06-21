import { MeetingCard } from "@/components/appcomponent/Home/upcoming-meetings/MeetingCard/MeetingCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Personal() {
  return (
    <main className="w-full h-full  text-white ">
      <div className=" py-12  px-12 flex flex-col gap-8 border-b-4 border-b-dark-1">
        <div className="w-full ">
          <div>
            <span className="font-medium text-2xl">Personal Meeting Room</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="min-h-10 flex items-center text-[17px]">
            <div className="w-36 h-full text-fontHighlite flex items-center  ">
              Topic:
            </div>
            <div className="h-full flex items-center font-medium">
              <span>aflah`s Meeting room</span>
            </div>
          </div>
          <div className="min-h-10 flex items-center text-[17px]">
            <div className="w-36 h-full text-fontHighlite flex items-center  ">
              Meeting ID:
            </div>
            <div className="h-full flex items-center font-medium">
              <span>324 531 3821</span>
            </div>
          </div>
          <div className="min-h-10 flex items-center text-[17px]">
            <div className="w-36 h-full text-fontHighlite flex items-center  ">
              Passcode:
            </div>
            <div className="h-full flex items-center font-medium gap-5">
              <span>* * * * * * * *</span>
              <button className="text-blueCol font-normal text-[14px]">
                Show
              </button>
            </div>
          </div>
          <div className="min-h-10 flex items-center text-[17px]">
            <div className="w-36 h-full text-fontHighlite flex items-center  ">
              Invite Link:
            </div>
            <div className="h-full flex items-center font-medium gap-5">
              <span className="text-blueCol font-normal cursor-pointer">
                https://us93web.qoom.us/345672?pwd=3f2uiui3h4un134if
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2 h-10 flex-wrap">
          <Button className="bg-blueCol hover:bg-blueCol rounded-sm">
            Start the meeting
          </Button>
          <Button className="flex gap-3 hover:bg-dark-3 bg-dark-3 rounded-sm">
            <Image src={"/icons/copy.svg"} width={16} height={16} alt="copy" />
            <span>Copy Invitation</span>
          </Button>
          <Button className="gap-3 bg-transparent hover:bg-transparent border-2 border-dark-3">
            <Image src={"/icons/Edit.svg"} width={16} height={16} alt="copy" />
            Edit
          </Button>
          <Button className="gap-3 bg-transparent hover:bg-transparent border-2 border-dark-3">
            <Image
              src={"/icons/Delete.svg"}
              width={16}
              height={16}
              alt="copy"
            />
            Delete
          </Button>
        </div>
      </div>
      <div className="py-12  px-12">
        <Button className="flex gap-3 hover:bg-dark-3 bg-dark-3 rounded-sm">
          <Image src={"/icons/add-meeting.svg"} width={13} height={13} alt="copy" />
          <span>Create a new Room</span>
        </Button>
      </div>
    </main>
  );
}
