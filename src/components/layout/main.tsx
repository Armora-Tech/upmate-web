import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function MyApp(props: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
