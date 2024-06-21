"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export function CreateMeeting() {
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const [loader, setLoader] = useState<boolean>(false);
  const router = useRouter();
  async function handleCreateMeeting() {
    setLoader(true);
    if (!client || !user) return;
    try {
      const callId = crypto.randomUUID();
      const call = client.call("default", callId);
      if (!call) throw new Error("call err");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast.success("Meeting succesfully created");
    } catch (error) {
      toast.error("Error ocurred while creating meeting");
      console.log("🚀 ~ handleCreateMeeting ~ error:", error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-8 pb-5">
      <div className="w-full flex justify-center ">
        <h1 className="md:text-3xl text-2xl font-bold">
          Start Instant meeting
        </h1>
      </div>
      <div className="w-full h-12 flex items-center justify-center">
        <Button
          className={cn("w-[90%] bg-blueCol h-full hover:bg-blue-500", {
            "bg-blue-300 pointer-events-none": loader,
          })}
          onClick={handleCreateMeeting}
        >
          <span>Start meeting</span>
          {loader && (
            <>
              <Image
                src={"/icons/loading-circle.svg"}
                alt=""
                width={23}
                height={23}
              />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
