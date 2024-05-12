import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface MyAppProps {
  children: ReactNode;
}

export default function MyApp(props: MyAppProps) {
  const { children } = props;
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
