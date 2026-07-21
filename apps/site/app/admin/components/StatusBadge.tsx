interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  const colors = {
    pending: "#EAB308",
    approved: "#22C55E",
    rejected: "#EF4444",
  } as const;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 600,
        color: "white",
        background:
          colors[
            status as keyof typeof colors
          ] ?? "#64748B",
      }}
    >
      {status}
    </span>
  );
}