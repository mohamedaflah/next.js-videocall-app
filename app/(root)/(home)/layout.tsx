import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <section className="w-full flex">
        <aside></aside>
        <main className="w-full min-h-screen flex-1 px-6 pb-6 pt-28 bg-black ">
          <div className="w-full">{children}</div>
        </main>
      </section>
    </main>
  );
}
