import { useEffect } from "react";
import { Navbar } from "./components/home/navbar";
import { Header } from "./components/home/header";
import { Section1 } from "./components/home/section1";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar/>
      <Header />
      <Section1 />
    </>
  );
}

export default App;
