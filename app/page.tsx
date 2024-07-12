import AboutSection from "@/components/index/AboutSection";
import ContactSection from "@/components/index/ContactSection";
import Hero from "@/components/index/Hero";
import PictureSection from "@/components/index/PictureSection";
import ProjectsSection from "@/components/index/ProjectsSection";
import StackSection from "@/components/index/StackSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <div className="h-screen">
          <Link
            href="/comic"
            target="_self"
            className="absolute bottom-0 right-0 rounded-tl-2xl bg-stone-700 outline outline-1 outline-white w-max cursor-pointer"
          >
            <p className="m-4">XKCD Comic</p>
          </Link>
        </div>
        <hr />
        <AboutSection />
        <hr />
        <StackSection />
        <hr />
        <ProjectsSection />
        <hr />
        <PictureSection />
        <hr />
        <ContactSection />
        <hr />
      </main>
    </>
  );
}
