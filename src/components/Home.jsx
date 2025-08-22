import './Home.css';
import BlurText from "./BlurText";


export default function Header() {
    const handleAnimationComplete = () => {
        console.log("Animation finished!");
    };
    return (
        <div className="flex text-left">
            <header className="pt-20 fixed left-25 mt-6 w-screen text-3xl">
                <h1>Cayn Hallow</h1>
            </header>
            <div className="fixed top-55 left-28 max-w-250">
                <BlurText
                    text="Welcome!"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="my-5 pt-20 text-3xl"
                    />
            <p className="pt-5 text-3xl">Pursuing Software Engineer with a focus in React.js and Tailwind. Making code seamless and clean one line at a time!</p>
            </div>
        </div>
    )
}