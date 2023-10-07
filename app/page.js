import About from "./componnent/About";
import Hero from "./componnent/Hero";
import Map from "./componnent/Map";
import Priceing from "./componnent/Priceing";
import Process from "./componnent/Process";
import Servises from "./componnent/Servises";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Servises />
      <Priceing />
      <Process />
      <Map />
    </main>
  )
}
