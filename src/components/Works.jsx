import works1 from '../images/works-imgs/1.jpg';
import works2 from '../images/works-imgs/2.jpg';
import works3 from '../images/works-imgs/3.jpg';
import works4 from '../images/works-imgs/4.jpg';
import works5 from '../images/works-imgs/5.jpg';
import works6 from '../images/works-imgs/6.jpg';
import works7 from '../images/works-imgs/7.jpg';
import works8 from '../images/works-imgs/8.jpg';
import works9 from '../images/works-imgs/9.jpg';
import works10 from '../images/works-imgs/10.jpg';
import works11 from '../images/works-imgs/11.jpg';
import works12 from '../images/works-imgs/12.jpg';
import works13 from '../images/works-imgs/13.jpg';
import works14 from '../images/works-imgs/14.jpg';
import works15 from '../images/works-imgs/15.jpg';
import works16 from '../images/works-imgs/16.jpg';
import works17 from '../images/works-imgs/17.jpg';
import works18 from '../images/works-imgs/18.jpg';
import works19 from '../images/works-imgs/19.jpg';
import works20 from '../images/works-imgs/20.jpg';

import "../styles/Images.css";

function Works() {

    const worksImages = [works1, works2, works3, works4, 
        works5, works6, works7, works8, works9, works10, works11, 
        works12, works13, works14, works15, works16, works17, works18,
        works19, works20];


  return (
    <section className="works">
      <h2>Works</h2>

      <div className="image-container">
          {worksImages.map((image, index) => (
            <img key={index} src={image} alt={`Works-photo ${index}`} />
          ))}
      </div>
    </section>
  )
}

export default Works;