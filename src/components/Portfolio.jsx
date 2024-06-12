import cards from '../cards';
import "../styles/Portfolio.css";
import Button from './Button';


function Portfolio( { setPage } ) {

  const handleClick = (e, card) => {
    e.preventDefault();

    if (card.title === "Portraits") {
      setPage(card.link);
    }else if (card.title === "Someday, Somewhere") {
      setPage(card.link);
    }else if (card.title === "Travel") {
      setPage(card.link);
    }else {
      setPage(card.link);
    }
  };

  const cardList = cards.map((card) => {

  return (
    <div key={card.title} className="ui-card">
        <h3>{card.title}</h3>
        <img src={card.image} alt={card.title} />
        <Button
          className="button"
          onClick={(e) => handleClick(e, card)}
          visual="button"
        >
          {card.buttonText}
        </Button>
      </div>
    );
  });

  return (
    <section className='cards'>
      
      <div className="ui-cards">{cardList}</div>
    </section >
  );
};

export default Portfolio;