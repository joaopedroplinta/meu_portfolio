import "./index.css";
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from "./components";

export default function App() {
  return (
    <div className="bg-bg text-hi font-mono min-h-screen overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="fixed w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.05] blur-[130px] bg-accent  top-[-120px] right-[-120px] z-0" />
      <div className="fixed w-[320px] h-[320px] rounded-full pointer-events-none opacity-[0.04] blur-[130px] bg-accent3 bottom-[20%] left-[-140px] z-0" />
      <div className="fixed w-[260px] h-[260px] rounded-full pointer-events-none opacity-[0.04] blur-[130px] bg-accent2 top-[60%]   right-[8%]   z-0" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
