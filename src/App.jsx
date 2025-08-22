import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Theme from './components/Theme';
import BlurText from "./components/BlurText";
import Footer from './components/Footer';

function App() {

  const handleAnimationComplete = () => {
  console.log("Animation done!");
};

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Theme />
      <main className="flex text-left">
        <Header />
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
      </main>
      <Footer />
    </div>
  )
}

export default App;
