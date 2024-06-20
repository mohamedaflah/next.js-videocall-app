export default function Meeting({ params }: { params: { meetingid: string } }) {
  const { meetingid } = params;
  meetingid;
  return <main>Meeting {meetingid}</main>;
}
