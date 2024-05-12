import MyApp from "../../layout/main";
import { Header } from "./header";
import { Section1 } from "./section1";
import { Section2 } from "./section2";

export function HomePage() {
  return (
    <MyApp>
      <Header />
      <Section1 />
      <Section2 />
    </MyApp>
  );
}
