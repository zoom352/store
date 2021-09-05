import React, { useState } from 'react';
import BascketCard from './basketCard/basketCard';

const Drawer = ({ onClose, onRemove, items = [] }) => {
  

  // const newArray = items.filter(item => item.id !== id)
    
  

        return <div className='overlay'>
        
        <div className='drawer'>
            <h3 className='mb-30 d-flex justify-between'>
              basket
              <img className='cu-p' width={40} height={40} onClick={onClose} src='/img/delete.png' /></h3>
          
            <div className='items'>
              
              {items.map((obj) => (
               
                 <div className='cartItem d-flex align-center mb-20'>
                  
                  <div style={{ backgroundImage: `url(${obj.url})` }} className='cardItemImg'>
                   </div>
             <div className='mr-20 flex'>
                  <p className='mb-5'>{obj.shoes}</p>
                  <b>{obj.buy}</b>
            </div> 
                <img onClick={() => onRemove(obj.id)} className='removeBtn' width={40}
                  height={40} src='/img/delete.png' /> 
              </div>
              ))}
            </div>
          
          <div className='cartTotalBlock'>
            <ul className='cartTotalBlock'>
            <li className='d-flex'>
              <span>Итого</span>
              <div></div>
              <b>21 498 р.</b>
            </li>
            <li className='d-flex'>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 р.</b>
            </li>
            </ul>
            <button className='greenButton'> order <img className='align-right' width={40} height={40} src='/img/arrow.png'/></button>
          </div>
        </div>
      </div>
    
}

export default Drawer;




{/* <div className='cartItem d-flex align-center mb-20'>
            <img className='mr-15' width={70} height={70} src='/img/asic1.png' alt='' />
            <div style={{ backgroundImage: 'url(/img/asic1.png)'}} className='cardItemImg'></div>
            <div className='mr-20 flex'>
              <p className='mb-5'></p>
                  <b>gbbg</b>
            </div>
              <img className='removeBtn' width={40} height={40} src='/img/delete.png'/>  
            </div> */}