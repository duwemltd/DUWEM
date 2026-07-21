import type { ReactNode } from "react";

interface QuestionCardProps {
  icon?: string;
  title: string;
  children: ReactNode;
}

export function QuestionCard({
  icon,
  title,
  children,
}: QuestionCardProps) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1F2937",
        borderRadius: 16,
        padding: 24,
        marginBottom: 20,
      }}
    >
      <h3
        style={{
          color: "white",
          marginBottom: 16,
        }}
      >
        {icon} {title}
      </h3>

      {children}
    </div>
  );
}