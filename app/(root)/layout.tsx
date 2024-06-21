import StreamVideoProvider from "@/providers/StreamClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-dark-2">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
