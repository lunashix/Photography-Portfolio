import GlobalNav from "./GlobalNav";
import SkipLink from "./SkipLink";
import '../styles/Header.css';

function Header( { setPage }) {
  return (
    <header className="header" >
      <SkipLink />
      <div>
        <h1 className="title">Luna Photography</h1>
      </div>

      <GlobalNav className="header__nav" setPage={setPage}/>

    </header >
    
  );
}

export default Header;