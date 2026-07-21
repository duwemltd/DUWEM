import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function AdminSection({
  title,
  children,
}: Props) {
  return (
    <section
      style={{
        marginTop: 32,
      }}
    >
      <h3
        style={{
          color: "white",
          marginBottom: 16,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          background: "#111827",
          borderRadius: 16,
          padding: 24,
          border: "1px solid #1F2937",
        }}
      >
        {children}
      </div>
    </section>
  );
}