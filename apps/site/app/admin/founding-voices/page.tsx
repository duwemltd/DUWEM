import Link from "next/link";

import { getFoundingVoices } from "../../../lib/admin/foundingVoices";

import { AdminCard } from "../components/AdminCard";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";

export default async function FoundingVoicesPage() {
  const voices = await getFoundingVoices();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
              marginBottom: 8,
            }}
          >
            Founding Voices
          </h1>

          <p
            style={{
              color: "#9CA3AF",
            }}
          >
            {voices.length} applications
          </p>
        </div>
      </div>

      <AdminCard>

        <input
          placeholder="Search by name, business or email..."
          style={{
            width: "100%",
            marginBottom: 20,
            padding: 12,
            borderRadius: 10,
            border: "1px solid #374151",
            background: "#0F172A",
            color: "white",
          }}
        />

        <DataTable>

          <thead>

            <tr>

              <th
                align="left"
                style={{
                  padding: 16,
                }}
              >
                Name
              </th>

              <th align="left">
                Business
              </th>

              <th align="left">
                Email
              </th>

              <th align="left">
                Status
              </th>

              <th align="left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {voices.map((voice) => (

              <tr
                key={voice.id}
                style={{
                  borderTop:
                    "1px solid #1F2937",
                }}
              >

                <td
                  style={{
                    padding: 16,
                  }}
                >
                  {voice.name}
                </td>

                <td>
                  {voice.business_name}
                </td>

                <td>
                  {voice.email}
                </td>

                <td>
                  <StatusBadge
                    status={voice.status}
                  />
                </td>

                <td>

                  <Link
                    href={`/admin/founding-voices/${voice.founding_voice_id}`}
                    style={{
                      color: "#7C3AED",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    View →
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </DataTable>

      </AdminCard>

    </>
  );
}