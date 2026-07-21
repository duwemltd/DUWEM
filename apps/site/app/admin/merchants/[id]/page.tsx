import { notFound } from "next/navigation";

import { Typography } from "@repo/ui";

import { getMerchant } from "../../../../lib/merchant/service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MerchantPage({
  params,
}: Props) {
  const { id } = await params;

  const merchant = await getMerchant(id);

  if (!merchant) {
    notFound();
  }

  return (
    <div>
      <Typography variant="display-sm">
        {merchant.business_name}
      </Typography>

      <Typography>
        {merchant.owner_name}
      </Typography>

      <Typography>
        {merchant.email}
      </Typography>

      <Typography>
        {merchant.status}
      </Typography>
    </div>
  );
}