import { MeetRecordCard } from "@/components/appcomponent/Home/recordings/MeetingRecordCard";

export default function Recording() {
  return (
    <main className="w-full h-full  py-12 px-12 flex flex-col gap-8 text-white ">
      <div className="w-full">
        <div>
          <span className="font-medium text-2xl">Meeting Recordings</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MeetRecordCard buttonStats={true} code="#f23cv1d" startTime="1hr 33mins" endTime="33 mins" iconpath="/icons/recordings.svg"/>
        <MeetRecordCard buttonStats={true} code="#f23cv1d" startTime="1hr 33mins" endTime="33 mins" iconpath="/icons/recordings.svg"/>
        <MeetRecordCard buttonStats={true} code="#f23cv1d" startTime="1hr 33mins" endTime="33 mins" iconpath="/icons/recordings.svg"/>
        <MeetRecordCard buttonStats={true} code="#f23cv1d" startTime="1hr 33mins" endTime="33 mins" iconpath="/icons/recordings.svg"/>
      </div>
    </main>
  );
}
