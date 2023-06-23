import { Intro } from '@/components/Intro';
import { Divider } from '@/components/Divider';
import { AboutUs } from '@/components/AboutUs';

export default function Home() {
  return (
    <>
      <Intro />

      <Divider gradientTo="left" />

      <AboutUs />

      <Divider gradientTo="right" />
    </>
  );
}
