import Header from "./components/Header";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";
import VideoCarousel from "./components/section/VideoCarousel";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}

export default App;
