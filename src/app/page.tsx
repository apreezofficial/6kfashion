import Image from "next/image";
import Hero from './HeroMain';
import NavBar from './NavBar';
import AcademicDifference from './AcademyDifference';
import CraftSection from "./CraftSection"; 
import MentorsSection from "./MentorsSection"; 
import ImpactSection from "./ImpactSection";
import CoursesSection from "./CoursesSection";
import GallerySection from "./GallerySection";
import CTASection from "./CtaSection";
import ContactSection from "./ContactSection";
export default function Home() {
    return (
    <>
    <NavBar />
    <Hero />
<AcademicDifference />
<CraftSection />
        <MentorsSection />
    <ImpactSection />
        <CoursesSection />
        <GallerySection />
        <CTASection />
        <ContactSection />
    </>
  );
}
