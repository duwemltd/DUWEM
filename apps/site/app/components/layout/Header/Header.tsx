import Link from "next/link";

import { Navbar, Logo, Button } from "@repo/ui";

import { MainNavigation } from "../MainNavigation";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar
        logo={<Logo variant="brand" />}
        navigation={<MainNavigation />}
        actions={
          <Link href="/get-started">
            <Button>
              Become a Founding Voice
            </Button>
          </Link>
        }
      />
    </header>
  );
}