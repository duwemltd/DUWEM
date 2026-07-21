import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MerchantLayout({
  children,
}: Props) {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 32,
      }}
    >
      {children}
    </main>
  );
}