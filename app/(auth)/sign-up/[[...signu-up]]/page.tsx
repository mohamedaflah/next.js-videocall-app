import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <SignUp />
    </main>
  );
}
