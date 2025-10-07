import AppSidebar from "@/components/shared/AppSidebar";
import Footer from "@/components/shared/Footer";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </>
  );
}
