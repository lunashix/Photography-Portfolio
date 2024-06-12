import { useState } from "react";
import Button from "./Button";
import gallery from "../gallery"

import "../styles/Images.css";


function Portraits() {

    const [filter, setFilter] = useState("all");

    const handleFillterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const fillteredGallery = filter === "all" ? gallery : 
        filter === "indoor" ? gallery.filter((image) => image.type === "indoor") :
        filter === "outdoor" ? gallery.filter((image) => image.type === "outdoor") : gallery;

    const portraitsImages = fillteredGallery.map((image) => image.image);

  return (
    <section className="gallery">
        <h2>Portraits</h2>
        <div className="filter">
            <Button onClick={() => handleFillterChange("all")}>All</Button>
            <Button onClick={() => handleFillterChange("indoor")}>Indoor</Button>
            <Button onClick={() => handleFillterChange("outdoor")}>Outdoor</Button>
        </div>
        
        <div className="image-container">
            {portraitsImages.map((image, index) => (
                <img key={index} src={image} alt={`Portraits-photo ${index}`} />
            ))}
        </div>
       
    </section>
  )
};

export default Portraits;