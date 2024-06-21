import { ClerkProvider } from "@clerk/nextjs";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-dark-2">{children}</main>;
}
