import NavBar from "@/components/appcomponent/Navbar/Navbar";
import SideBar from "@/components/appcomponent/Sidebar/Sidebar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen flex flex-col ">
      {" "}
      {/* Ensure main is a flex column */}
      <NavBar />
      <div className="flex flex-1 h-full w-full overflow-hidden relative ">
        <SideBar />
        <div className="flex-1 overflow-auto ">{children}</div>
      </div>
    </main>
  );
}
