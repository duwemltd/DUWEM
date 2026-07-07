import { Typography } from "@repo/ui";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          textAlign: "center",
        }}
      >
        <Typography variant="display-lg">
          DUWEM
        </Typography>

        <Typography variant="h2">
          Building the Future of African Commerce
        </Typography>

        <Typography>
          Africa's Web3-powered Social Commerce Platform
        </Typography>
      </div>
    </main>
  );
}