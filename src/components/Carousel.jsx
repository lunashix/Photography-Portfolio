import { useState } from "react";
import carousel from "../carousel";
import "../styles/Carousel.css";


function Carousel() {
    const [index, setIndex] = useState(0);
  
    const handlePrev = () => {
      setIndex((index - 1 + carousel.length) % carousel.length);
    };
  
    const handleNext = () => {
      setIndex((index + 1) % carousel.length);
    };
  
    return (
      <div className="carousel">
        <div className="carousel-image">
          <img src={carousel[index].image} alt={carousel[index].alt} />
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev} className="carousel-button" aria-label="Go to previous image">
            <span className="gg-chevron-left"></span>
          </button>
          <button onClick={handleNext} className="carousel-button" aria-label="Go to next image">
            <span className="gg-chevron-right"></span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Carousel;