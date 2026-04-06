import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiPhone, FiYoutube } from "react-icons/fi";

export function Footer() {
    return (
        <footer className="border-t border-gray-800 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                        Ewersson Silva
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Software Developer focused on building scalable, modern and efficient solutions.
                        Passionate about backend, frontend and software architecture.
                    </p>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact
                    </h3>

                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 hover:text-green-400 transition">
                            <FiPhone size={16} />
                            <a href="https://wa.me/5583999085838" target="_blank">
                                +55 83 99908-5838
                            </a>
                        </li>

                        <li className="flex items-center gap-2 hover:text-green-400 transition">
                            <FiMail size={16} />
                            <a href="mailto:ewerssonsllv@gmail.com">
                                ewerssonsllv@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-2 hover:text-green-400 transition">
                            <FiGlobe size={16} />
                            <span>Brazil • João Pessoa, PB</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Links
                    </h3>

                    <div className=" grid-cols-2 flex flex-col gap-4 mt-7">
                        <a
                            href="https://github.com/EwerssonSllv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 flex items-center justify-center rounded-full  text-gray-400 hover:text-green-400 transition"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ewerssonsllv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 flex items-center justify-center rounded-full  text-gray-400 hover:text-green-400 transition"
                        >
                            <FiLinkedin />
                        </a>

                         <a
                            href="https://www.youtube.com/@Newerkt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 flex items-center justify-center rounded-full  text-gray-400 hover:text-green-400 transition"
                        >
                            <FiYoutube />
                        </a>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Ewersson Silva. All rights reserved.
            </div>
        </footer>
    );
}