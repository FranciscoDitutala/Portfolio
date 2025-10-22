import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
