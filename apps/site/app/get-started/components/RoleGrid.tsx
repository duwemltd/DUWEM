import { Stack } from "@repo/ui";

import { RoleCard } from "./RoleCard";
import { roles } from "./roles";

export function RoleGrid() {
  return (
    <Stack spacing="6">
      {roles.map((role) => (
        <RoleCard
          key={role.href}
          emoji={role.emoji}
          title={role.title}
          description={role.description}
          href={role.href}
        />
      ))}
    </Stack>
  );
}