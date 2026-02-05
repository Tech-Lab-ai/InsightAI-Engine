"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ConsoleSidebarContent } from "./console-sidebar-content";
import { ConsoleHeader } from "./console-header";

export function AppLayout({ children }: { children: React.ReactNode }) {
  // Get the initial state from a cookie
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      defaultOpen
    >
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <ConsoleSidebarContent />
      </Sidebar>
      <SidebarInset className="flex flex-col p-0 m-0 rounded-none shadow-none md:m-0 md:rounded-none md:shadow-none min-h-screen">
        <ConsoleHeader />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
