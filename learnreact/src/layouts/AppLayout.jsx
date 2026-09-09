import { Outlet } from "react-router";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
function AppLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <SidebarInset>
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default AppLayout;
