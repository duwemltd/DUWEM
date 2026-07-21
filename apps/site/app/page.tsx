import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { HelpShape } from "./components/sections/HelpShape";
import { OurWhy } from "./components/sections/OurWhy";

export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <HelpShape />

      <OurWhy />
    </>
  );
}