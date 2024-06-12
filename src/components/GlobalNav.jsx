import menu from '../menu';
import '../styles/GlobalNav.css';
import { useState } from 'react';

function GlobalNav( {className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);
    

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setShowMenu(!showMenu);
        }
    };

    const list = menu.map((item) => {

        return (
            <li key={item.name} className='global-nav__item'>
                <a className='global-nav__link' 
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name.toLowerCase());
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    list.push(
        <li key="socials" className='global-nav__item'>
                 <a href='https://www.instagram.com/lunasxka?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' 
                 className='global-nav__link' > Socials </a>
             </li>
     
    )

    // list.push(
    //     <li key="socials" className='global-nav__item'>
    //         <a href='#'className='global-nav__link' > Socials </a>
    //         <div className='dropdown-content'  >
    //             <a  href='https://www.instagram.com/lunasxka?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
    //             Instagram
    //             </a>
    //             <a  href='https://weibo.com/u/5388227422'>
    //             Weibo
    //             </a>
    //         </div>
    //     </li>
    // );

  return (
    <nav className={`global-nav ${className} `}>
        <div className={`gg-menu ${showMenu ? 'open': '' }`}  tabIndex="0" 
         onClick={ toggleMenu } onKeyDown={handleKeyPress}>
            
        </div>
        
        <ul className={ `global-nav__list ${showMenu ? 'open' : ''}` }>

            {list}
        </ul>
        
    </nav>
  );
  
}

export default GlobalNav;