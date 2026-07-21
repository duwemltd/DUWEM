import { getFoundingVoices } from "../../lib/admin/foundingVoices";

export default async function AdminDashboard() {
  const voices = await getFoundingVoices();

  const pending = voices.filter(
    (voice) => voice.status === "pending"
  ).length;

  return (
    <>
      <h1
        style={{
          color: "white",
          marginBottom: 8,
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: 32,
        }}
      >
        Welcome to the DUWEM administrator portal.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        <DashboardCard
          title="Applications"
          value={voices.length}
        />

        <DashboardCard
          title="Pending"
          value={pending}
        />

        <DashboardCard
          title="Approved"
          value={
            voices.filter(
              (voice) => voice.status === "approved"
            ).length
          }
        />

        <DashboardCard
          title="Rejected"
          value={
            voices.filter(
              (voice) => voice.status === "rejected"
            ).length
          }
        />
      </div>
    </>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: 16,
        padding: 24,
        color: "white",
      }}
    >
      <p
        style={{
          color: "#9ca3af",
          marginBottom: 12,
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: 36,
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );
}