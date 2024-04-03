import Klases from "../Klasemens/Klasemens.js";
import "./Main.css";
import "../Klasemens/Klasemens.css"
import Hero from "../Hero/Hero.js";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Klases />
    </div>
  );
};

export default Main;
