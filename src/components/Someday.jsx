import someday1 from '../images/someday-imgs/1.jpg';
import someday2 from '../images/someday-imgs/2.jpg';
import someday3 from '../images/someday-imgs/3.jpg';
import someday4 from '../images/someday-imgs/4.jpg';
import someday5 from '../images/someday-imgs/5.jpg';
import someday6 from '../images/someday-imgs/6.jpg';
import someday7 from '../images/someday-imgs/7.jpg';
import someday8 from '../images/someday-imgs/8.jpg';
import someday9 from '../images/someday-imgs/9.jpg';
import someday10 from '../images/someday-imgs/10.jpg';
import someday11 from '../images/someday-imgs/11.jpg';
import someday12 from '../images/someday-imgs/12.jpg';
import  '../styles/Images.css';

function Someday() {

    const somedayImages = [someday1, someday2, someday3, someday4,
        someday5, someday6, someday7, someday8, someday9, someday10, someday11,
        someday12];

  return (
    <section className="someday">
      <h2>Someday, Somewhere</h2>
      <div className='image-container'>   
        {somedayImages.map((image, index) => (
            <img key={index} src={image} alt={`Someday-photo ${index}`} />
        ))}
        
      </div>
    </section>
  )
}

export default Someday