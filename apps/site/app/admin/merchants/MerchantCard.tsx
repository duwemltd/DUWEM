import Link from "next/link";

import { Button, Stack, Typography } from "@repo/ui";

import type { Merchant } from "../../../lib/merchant/types";

interface MerchantCardProps {
  merchant: Merchant;
}

export function MerchantCard({
  merchant,
}: MerchantCardProps) {
  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
      }}
    >
      <Stack spacing="4">
        <Typography variant="h3">
          {merchant.business_name}
        </Typography>

        <Typography>
          Owner: {merchant.owner_name}
        </Typography>

        <Typography>
          {merchant.email}
        </Typography>

        <Typography>
          Status: {merchant.status}
        </Typography>

        <Link
          href={`/admin/merchants/${merchant.id}`}
        >
          <Button>
            View Merchant
          </Button>
        </Link>
      </Stack>
    </div>
  );
}