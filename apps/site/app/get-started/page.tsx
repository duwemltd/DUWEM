import { Typography } from "@repo/ui";

import {
  JourneyHeader,
  JourneyLayout,
} from "../components/journey";

import { RoleGrid } from "./components/RoleGrid";

export default function GetStartedPage() {
  return (
    <JourneyLayout>
      <JourneyHeader title="Become a Founding Voice">
        <Typography variant="body-lg">
          Every great platform begins by listening.
        </Typography>

        <Typography variant="body-lg">
          We're building DUWEM alongside businesses,
          creators, developers and everyday shoppers.
        </Typography>

        <Typography variant="body-lg">
          Choose the perspective that best describes you.
        </Typography>
      </JourneyHeader>

      <RoleGrid />
    </JourneyLayout>
  );
}