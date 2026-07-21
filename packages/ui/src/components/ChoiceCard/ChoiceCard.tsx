import type { JSX } from "react";

import { Typography } from "../Typography";

import type { ChoiceCardProps } from "./ChoiceCard.types";

import styles from "./ChoiceCard.module.css";

export function ChoiceCard({
  icon,
  title,
  description,
  selected = false,
  className = "",
  ...props
}: ChoiceCardProps): JSX.Element {
  return (
    <div
      className={[
        styles.card,
        selected ? styles.selected : "",
        className,
      ].join(" ")}
      {...props}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <Typography variant="h3">
        {title}
      </Typography>

      {description && (
        <Typography variant="body-md">
          {description}
        </Typography>
      )}
    </div>
  );
}