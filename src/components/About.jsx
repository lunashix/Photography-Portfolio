import panel2 from '../images/panel2.jpg';
import "../styles/About.css";

function About() {
  return (
    <div className='second-panel'>
      
        <div className="panel-text-container">
          <h2 className="panel-header">ABOUT ME </h2>
          <p className="panel-header">Professional portrait photographer based in <b> Seattle. </b> </p>
          <p className="panel-text">I specialize in outdoor and indoor portraits. <br />
            I have a passion for capturing beautiful moments and creating memories for my clients. 
            I am dedicated to providing the best experience and the highest quality images. 
            Also, I am available for travel and wedding photography. </p>
          
        </div>
        <img className="panel-pic" src={panel2} alt="I enjoy the view in the cottage during winter." />
      
    </div>
  )
}

export default About