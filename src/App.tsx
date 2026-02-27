import "./index.css";
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from "./components";

export default function App() {
  return (
    <div className="bg-bg text-hi font-mono min-h-screen overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[100px] bg-accent  top-[-100px] right-[-100px] z-0" />
      <div className="fixed w-[350px] h-[350px] rounded-full pointer-events-none opacity-10 blur-[100px] bg-accent2 bottom-[25%] left-[-130px] z-0" />
      <div className="fixed w-[280px] h-[280px] rounded-full pointer-events-none opacity-10 blur-[100px] bg-accent3 top-[55%]   right-[5%]   z-0" />

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
