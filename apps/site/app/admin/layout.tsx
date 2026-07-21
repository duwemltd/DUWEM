export const dynamic = "force-dynamic";

import type { ReactNode } from "react";

import { AdminSidebar } from "./components/AdminSidebar";
import { AdminTopbar } from "./components/AdminTopbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0b0b0f",
      }}
    >
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminTopbar />

        <main
          style={{
            flex: 1,
            padding: 32,
            overflowY: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}