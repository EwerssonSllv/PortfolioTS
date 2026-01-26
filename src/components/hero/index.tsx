import { FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import Typewriter from "../typewriter";
import { NavLink } from "react-router";

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" }
];

export default function Hero() {
    return (
        <>
            <header
                className="min-h-screen text-white flex items-center"
                style={{ background: "linear-gradient(#232630, #050507)" }}
            >
                <div className="w-full max-w-6xl mx-auto px-7 text-left">

                    <h1 className="text-5xl font-bold mb-3">
                        I'm <span className="text-green-400">Ewersson Silva</span>
                    </h1>

                    <p className="mt-3 text-3xl">
                        I'm a <Typewriter />
                    </p>

                    <p className="text-gray-300 mb-6 mt-6 max-w-lg text-justify">
                        Software engineering student focused on building scalable, efficient and modern applications.
                        Passionate about technology, problem solving and continuous learning.
                    </p>

                    <nav className="mt-6 flex flex-wrap gap-6 text-sm uppercase font-medium">
                        {links.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative transition-colors duration-300 ${isActive ? "text-green-400" : "hover:text-green-400"}
                                    after:content-[''] after:absolute after:left-0 after:-bottom-2 
        after:h-0.5 after:bg-[#8B5A2B] after:transition-all after:duration-300
        ${isActive ? "after:w-1/2" : "after:w-0 hover:after:w-1/2"}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex gap-4 mt-7">
                        <a
                            href="https://github.com/EwerssonSllv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ewerssonsllv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="https://seusite.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                        >
                            <FiTerminal />
                        </a>
                    </div>


                </div>
            </header>
        </>
    );
}
