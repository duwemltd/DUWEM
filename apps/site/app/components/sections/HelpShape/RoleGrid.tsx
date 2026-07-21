import { Grid } from "@repo/ui";

import { RoleCard } from "./RoleCard";

export function RoleGrid() {
  return (
    <Grid columns={2} gap="6">
      <RoleCard
        emoji="🏪"
        title="Business Owner"
        description="Share the challenges you face selling online in Africa."
        action="Take Merchant Survey"
      />

      <RoleCard
        emoji="🛒"
        title="Shopper"
        description="Help us build a better online shopping experience."
        action="Take Consumer Survey"
      />

      <RoleCard
        emoji="🎥"
        title="Creator"
        description="Help us imagine a commerce platform where creators thrive."
        action="Take Creator Survey"
      />

      <RoleCard
        emoji="💻"
        title="Developer"
        description="Help build the technology powering DUWEM."
        action="Join Developer Community"
      />
    </Grid>
  );
}