import travel1 from '../images/travel-imgs/1.jpg';
import travel2 from '../images/travel-imgs/2.jpg';
import travel3 from '../images/travel-imgs/3.jpg';
import travel4 from '../images/travel-imgs/4.jpg';
import travel5 from '../images/travel-imgs/5.jpg';
import travel6 from '../images/travel-imgs/6.jpg';
import travel7 from '../images/travel-imgs/7.jpg';
import travel8 from '../images/travel-imgs/8.jpg';
import travel9 from '../images/travel-imgs/9.jpg';
import travel10 from '../images/travel-imgs/10.jpg';
import travel11 from '../images/travel-imgs/11.jpg';
import travel12 from '../images/travel-imgs/12.jpg';
import travel13 from '../images/travel-imgs/13.jpg';

import "../styles/Images.css";

function Travel() {

    const travelImages = [travel1, travel2, travel3, travel4, 
        travel5, travel6, travel7, travel8, travel9, travel10, travel11, 
        travel12, travel13];
        
  return (
    <section className="travel">
       <h2>Travel</h2>

      <div className='image-container'>
        {travelImages.map((image, index) => (
            <img key={index} src={image} alt={`Travel-photo ${index}`} />
        ))}    
      </div>
    </section>
  )
}

export default Travel