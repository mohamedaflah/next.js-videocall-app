import Image from "next/image";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-2xl h-64 bg-sporange text-white p-6 flex flex-col justify-between">
        <div className="w-full flex">
          <div className="p-2 bg-white/25 rounded-lg size-10">
            <Image
              src={"/icons/add-meeting.svg"}
              width={27}
              height={27}
              alt="meeting"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="text-2xl font-medium">New Meeting</span>
          </div>
          <div>
            <span>Setup a new recording</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl h-64 bg-blueCol text-white p-6 flex flex-col justify-between">
        <div className="w-full flex">
          <div className="p-2 bg-white/25 rounded-lg size-10">
            <Image
              src={"/icons/join-meeting.svg"}
              width={27}
              height={27}
              alt="meeting"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="text-2xl font-medium">Join Meeting</span>
          </div>
          <div>
            <span className="lowercase">Via Invitation link</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl h-64 bg-spviolet text-white p-6 flex flex-col justify-between">
        <div className="w-full flex">
          <div className="p-2 bg-white/25 rounded-lg size-10">
            <Image
              src={"/icons/previous.svg"}
              width={27}
              height={27}
              alt="meeting"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="text-2xl font-medium capitalize">
              Schedule Meeting
            </span>
          </div>
          <div>
            <span className="">Plan your meeting</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl h-64 bg-spyellow text-white p-6 flex flex-col justify-between">
        <div className="w-full flex">
          <div className="p-2 bg-white/25 rounded-lg size-10 flex items-center justify-center">
            <Image
              src={"/icons/recordings.svg"}
              width={27}
              height={27}
              alt="meeting"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="text-2xl font-medium capitalize">
              View recordings
            </span>
          </div>
          <div>
            <span>Meeting recordings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
