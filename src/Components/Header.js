import React from 'react';

const Header = (props) => {

  


        return <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/orig.png'/>
            <div>
              <h2 className='text-uppercase'>React Sheackers</h2>
              <p>the store fot the best shoes</p>
            </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img onClick={props.onClickCard} className='bascet' width={40} height={40} src='/img/cart.png'/>
            <span>700 $</span>
          </li>
          <li>
            <img width={40} height={40} src='/img/user.png'/>
          </li>
        </ul>
      </header>
    
}

export default Header;