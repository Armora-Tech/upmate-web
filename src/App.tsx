import { useEffect } from "react";
import { Navbar } from "./components/home/navbar";
import { Header } from "./components/home/header";
import { Section1 } from "./components/home/section1";
import AOS from "aos";
import "aos/dist/aos.css";
import { Section2 } from "./components/home/section2";
import { Section3 } from "./components/home/section3";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
