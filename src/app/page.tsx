import Image from "next/image";
import Hero from './HeroMain';
import NavBar from './NavBar';
import AcademicDifference from './AcademyDifference';
export default function Home() {
  return (
    <NavBar />
    <Hero />
    <AcademicDifference />
  );
}
