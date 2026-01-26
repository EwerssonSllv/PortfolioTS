import { FiHome } from "react-icons/fi";
import { Link } from "react-router";
import { Footer } from "../../components/footer";

const projects = [
    {
        title: "Personal Linktree",
        description: "Landing page inspired by Linktree with modern UI and responsive layout.",
        techs: ["ReactJS", "Tailwind", "Firebase", "Vite", "Exercise"],
        demo: "https://ewrssonlinktree.vercel.app/",
        github: "https://github.com/EwerssonSllv/Linktree-Personal",
        category: "Frontend",
    },
    {
        title: "Cryptocurrency ",
        description: "Dashboard that consumes an external API for cryptocurrency data (Without Responsive Layout).",
        techs: ["React", "Typescript", "Tailwind", "External API", "Exercise"],
        demo: "https://cryptocurrencyewerssonsllv.netlify.app/",
        github: "https://github.com/EwerssonSllv/Cryptocurrency",
        category: "Frontend",
    },
    {
        title: "Gasoline Or Alcohol",
        description: "Website that calculates which type of fuel is most economical",
        techs: ["React", "CSS", "TTypeScript", "Exercise"],
        demo: "https://alcoholorgasolineewerssonslv.netlify.app/",
        github: "https://github.com/EwerssonSllv/GasolineOrAlcohol",
        category: "Frontend",
    }

];
function getScreenshot(url: string) {
    const key = import.meta.env.VITE_SCREENSHOTONE_KEY;

    return `https://api.screenshotone.com/take?access_key=${key}&url=${encodeURIComponent(
        url
    )}&viewport_width=1280&viewport_height=800&format=jpg&delay=2&block_ads=true&block_cookie_banners=true`;
}

const categories = ["Fullstack", "Frontend", "Backend"];

export default function Projects() {
    return (
        <section id="projects" className="py-20 text-white"
            style={{ background: "linear-gradient(#040202,  #050512)" }}>


            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-medium mb-12 text-center">
                    Projects
                </h2>

                {categories.map((category) => {
                    const filtered = projects.filter(
                        (p) => p.category === category
                    );

                    if (filtered.length === 0) return null;

                    return (
                        <div key={category} className="mb-16">
                            <h3 className="text-2xl font-semibold mb-6 text-white">
                                {category} Projects
                            </h3>

                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {filtered.map((p, i) => (
                                    <div
                                        key={i}
                                        className="group bg-black border border-white/10 rounded-xl overflow-hidden hover:border-green-400/40 transition"
                                    >
                                        <div className="overflow-hidden">
                                            <img
                                                src={getScreenshot(p.demo)}
                                                alt={p.title}
                                                className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="p-5 flex flex-col gap-3">
                                            <h3 className="text-lg font-medium">
                                                {p.title}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {p.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {p.techs.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 text-xs rounded-md bg-green-400/10 text-green-400 border border-green-400/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3 mt-4">
                                                <a
                                                    href={p.demo}
                                                    target="_blank"
                                                    className="px-3 py-1.5 text-xs rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                                                >
                                                    Live Demo
                                                </a>

                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    className="px-3 py-1.5 text-xs rounded-lg border border-white/20 hover:border-white/40 transition"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link
                to="/"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-400 flex items-center justify-center shadow-lg hover:bg-green-500 transition-all hover:scale-110"
            >
                <FiHome />
            </Link>
            <Footer />
        </ section>
    );
}