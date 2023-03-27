import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Description from "./Description";
import imageOne from "./images/lambo.jpg";

import Image from "./Image";

function App() {
  return (
    <div className="App">
      <Image className="image" img={imageOne} />

      <div className="card-body">
        <Title className="header" name="LAMBORGHINI URUS" />

        <Description
          className="para"
          hello="The 2022 Lamborghini Urus is available in a single trim level.The 2022 Lamborghini Urus is an exotic high-performance SUV. When it comes to carrying people and cargo, it doesn't get much faster than this. A powerful V8, sport-tuned suspension and a sophisticated all-wheel-drive system that works wonders at managing traction make the Urus feel like a true Lamborghini. The Urus' interior and exterior design draws a lot of influence from other Lamborghini models, especially the Huracan, so it looks like one, too.This is one of the best cars you can drive and still look good when driving."
        />
      </div>
    </div>
  );
}

export default App;
