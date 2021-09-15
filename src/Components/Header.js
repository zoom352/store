import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  


  return <header className='d-flex justify-between align-center p-40'>
          
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/orig.png'/>
      <div>
        <Link to='/'>
          <h2 className='text-uppercase'>React Sheackers</h2>
        </Link>
              <p>the store fot the best shoes</p>
            </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img onClick={props.onClickCard} className='bascet' width={40} height={40} src='/img/cart.png'/>
            <span>700 $</span>
      </li>
      <Link to='favorite'>
        <p>Избранное</p>
      </Link>
          <li>
            <img width={40} height={40} src='/img/user.png'/>
          </li>
      </ul>
      
      </header>
    
}

export default Header;