import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Portraits from './Portraits';
import Someday from './Someday';
import Travel from './Travel';
import Works from './Works';

function MainArea( { page, setPage } ) {
  return (
    <main id="main-content">
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "portfolio" && <Portfolio setPage={ setPage }/>}
      {page === "contact" && <Contact />}
      {page === "portraits" && <Portraits />}
      {page === "someday" && <Someday />}
      {page === "travel" && <Travel />}
      {page === "works" && <Works />}

    </main>
  );
};

export default MainArea;