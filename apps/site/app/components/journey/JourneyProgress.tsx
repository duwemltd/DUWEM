import { Fragment } from "react";

import {
  Flex,
  Typography,
} from "@repo/ui";

interface JourneyProgressProps {
  step: number;
  total: number;
}

export function JourneyProgress({
  step,
  total,
}: JourneyProgressProps) {
  return (
    <>
      <Flex align="center">
        {Array.from({ length: total }).map((_, index) => (
          <Fragment key={index}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background:
                  index < step
                    ? "#7C3AED"
                    : "#3F3F46",
                flexShrink: 0,
              }}
            />

            {index < total - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 3,
                  margin: "0 8px",
                  background:
                    index < step - 1
                      ? "#7C3AED"
                      : "#3F3F46",
                }}
              />
            )}
          </Fragment>
        ))}
      </Flex>

      <Typography variant="caption">
        Step {step} of {total}
      </Typography>
    </>
  );
}