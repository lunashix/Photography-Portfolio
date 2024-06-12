// import panel1 from '../images/panel1.jpg';
import "../styles/Home.css";
import Carousel from './Carousel';


function Home() {
  

  return (
    <div className='first-panel'>
      
        <div className="panel-text-container">
          <h2 className="panel-header">I'M A <br />  PHOTOGRAPHER </h2>
          <p className="panel-text">Seattle, USA </p>
          
        </div>
        {/* <img className="panel-pic" src={panel1} alt="Sakura blossom at UW campus in spring." /> */}
        <Carousel />
    </div>
  );

}

export default Home;