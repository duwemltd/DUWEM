export const dynamic = "force-dynamic";
import { Stack, Typography } from "@repo/ui";

import { getMerchants } from "../../../lib/merchant/service";

import { MerchantCard } from "./MerchantCard";

export default async function MerchantsPage() {
  const merchants = await getMerchants();

  return (
    <Stack spacing="8">
      <Typography variant="display-sm">
        Merchants
      </Typography>

      <Typography variant="body-lg">
        {merchants.length} merchant(s)
      </Typography>

      {merchants.map((merchant) => (
        <MerchantCard
          key={merchant.id}
          merchant={merchant}
        />
      ))}
    </Stack>
  );
}