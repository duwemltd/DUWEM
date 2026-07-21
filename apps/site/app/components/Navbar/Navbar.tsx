import { Button, Container, Flex, Typography } from "@repo/ui";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container>
        <Flex justify="between" align="center">
          <Typography variant="h3">
            DUWEM
          </Typography>

          <Flex gap="6" align="center">
            <a href="#">Products</a>
            <a href="#">Developers</a>
            <a href="#">Community</a>
            <a href="#">Roadmap</a>

            <Button>
              Join Waitlist
            </Button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}