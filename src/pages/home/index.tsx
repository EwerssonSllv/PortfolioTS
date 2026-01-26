import { Carrer } from "../../components/education";
import { Footer } from "../../components/footer";
import Hero from "../../components/hero";
import { Skills } from "../../components/skills";

export default function Home() {
    return (
            <div className="min-h-screen text-white"
                style={{ background: "linear-gradient(#000000, #050509, #020609, #050509)" }}
            >
                <Hero />
                <h1 className="text-center font-medium text-4xl">About</h1>
                <Carrer />
                <Skills />
                <Footer/>
            </div>
    );
}

