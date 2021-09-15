import React, { useState } from 'react';


const CardFavorite = ({
    id,
    url,
    shoes,
    price,
    buy,
    onPlus,
    onLike,
  favorited,
  loading
  }) => {

  const [isAdded, setAdded] = useState(false)
  const [isLike, setLike] = useState(favorited)


  const addWasChanged = () => {
    onPlus({url,
      shoes,
      price,
      buy})
    setAdded(!isAdded)
  }

  const likeWasChanged = () => {
    onLike({id, url,
      shoes,
      price,
      buy})
    setLike(isLike)
  }

        return <div className='card'>
            <div className='favorite'>
            <img onClick={likeWasChanged} width={40} height={40}
              src={isLike ? '/img/unlike.png' : '/img/like.png'} />
              
            </div>
              <img width={133} height={112} src={url} alt='' />
             <h5>{shoes}</h5>
              <div className='d-flex justify between align-center'>
                <div className='d-flex flex-column'>
              <span>{price}</span>
              <b>{buy}</b>
                </div>
            {/* <button className='button'>add in the bascet</button> */}
            <img onClick={addWasChanged} className='added' width={40} height={40}
              src={isAdded ? '/img/green.png' : '/img/add.png'} />
            </div>
          </div>
    }


export default CardFavorite;