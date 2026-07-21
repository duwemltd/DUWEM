"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Dashboard",
    href: "/admin",
  },
  {
    label: "Founding Voices",
    href: "/admin/founding-voices",
  },
  {
    label: "Merchants",
    href: "/admin/merchants",
  },
  {
    label: "Products",
    href: "/admin/products",
  },
  {
    label: "Orders",
    href: "/admin/orders",
  },
  {
    label: "Communities",
    href: "/admin/communities",
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
  },
  {
    label: "Settings",
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 260,
        background: "#111827",
        color: "white",
        padding: 24,
        minHeight: "100vh",
      }}
    >
      <h2>DUWEM</h2>

      <div
        style={{
          marginTop: 32,
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: "block",
              padding: "12px 16px",
              marginBottom: 8,
              borderRadius: 10,
              textDecoration: "none",
              color:
                pathname === item.href
                  ? "#fff"
                  : "#9ca3af",
              background:
                pathname === item.href
                  ? "#7c3aed"
                  : "transparent",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}