import { Section } from "../Section";
import type { JSX } from "react";
import type { HeroProps } from "./Hero.types";

import { Container } from "../Container";
import { Typography } from "../Typography";
import { Button } from "../Button";

import styles from "./Hero.module.css";

export function Hero({
  className = "",
  ...props
}: HeroProps): JSX.Element {
  return (
    <Section
  className={[styles.hero, className].join(" ")}
  {...props}
>
      <Container>
        <div className={styles.content}>
          <Typography variant="display-lg">
            DUWEM
          </Typography>

          <Typography variant="h2">
            Building the Future of African Commerce
          </Typography>

          <Typography>
            Africa's Web3-powered Social Commerce Platform.
          </Typography>

          <div className={styles.actions}>
            <Button>
              Join Waitlist
            </Button>

            <Button variant="secondary">
              Documentation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}