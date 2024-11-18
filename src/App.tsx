import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className="max-w-2xl mx-auto py-10 px-8 space-y-5">
        <About />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}
