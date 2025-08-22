import { AiOutlineLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";

export default function Footer() {
    return (
        <div>
            <div className="flex items-center gap-6">
                <div className="p-8 ml-1 fixed left-0 bottom-0 text-3xl">
                    <button onClick={() => {
            setTheme("dark");
            }} 
            className="text-black-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                    <AiOutlineLinkedin />
                    </button>
                </div>
                <div className="pb-8 ml-19 fixed left-0 bottom-0 text-3xl">
                    <button onClick={() => {
            setTheme("dark");
            }} 
            className="text-black-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                <ImGithub />
                    </button>
                </div>
            </div>
            <p className="p-10 fixed right-0 bottom-0 text-2xl">Copyright© 2025 Cayn Hallow</p>
        </div>
    )
}