// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="text-black cursor-pointer" />
        <div className="flex w-11/12 flex-col md:mx-8">
          <nav className="my-5">
            <AppSidebar />
          </nav>
          <main>{children}</main>
        </div>
      </SidebarProvider>
      
    </div>
  );
}
