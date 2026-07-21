import { Container, Stack, Flex } from "@repo/ui";

import { HeroEyebrow } from "./HeroEyebrow";
import { HeroHeadline } from "./HeroHeadline";
import { HeroDescription } from "./HeroDescription";
import { HeroActions } from "./HeroActions";
import { HeroScroll } from "./HeroScroll";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Stack className={styles.content}>
          <HeroEyebrow />

          <HeroHeadline />

          <HeroDescription />

          <Flex
            justify="center"
            align="center"
            gap="6"
            className={styles.actions}
            >
            <HeroActions />
          </Flex>

          <HeroScroll />
        </Stack>
      </Container>
    </section>
  );
}