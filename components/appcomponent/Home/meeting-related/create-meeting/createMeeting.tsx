import { Button } from "@/components/ui/button";

export function CreateMeeting() {
  return (
    <div className="w-full flex flex-col gap-8 pb-5">
      <div className="w-full flex justify-center ">
        <h1 className="md:text-3xl text-2xl font-bold">
          Start Instant meeting
        </h1>
      </div>
      <div className="w-full h-12 flex items-center justify-center">
        <Button className="w-[90%] bg-blueCol h-full hover:bg-blue-500">
          Start meeting
        </Button>
      </div>
    </div>
  );
}
