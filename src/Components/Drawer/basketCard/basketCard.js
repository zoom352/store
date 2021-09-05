

const BascketCard = (obj, removeShoes) => {

    

    return  <div className='cartItem d-flex align-center mb-20'>
                  
                  <div style={{ backgroundImage: `url(${obj.url})` }} className='cardItemImg'>
                   </div>
             <div className='mr-20 flex'>
                  <p className='mb-5'>{obj.shoes}</p>
                  <b>{obj.buy}</b>
            </div> 
                <img onClick={removeShoes} className='removeBtn' width={40}
                  height={40} src='/img/delete.png' /> 
              </div>
}

export default BascketCard