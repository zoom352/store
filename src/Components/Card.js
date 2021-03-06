import React, { useState } from 'react';
import ContentLoader from "react-content-loader"

const Card = ({
    id,
    url,
    shoes,
    price,
    buy,
    onPlus,
    onLike,
    loading=false
  }) => {

  const [isAdded, setAdded] = useState(false)
  const [isLike, setLike] = useState(true)

  

  const addWasChanged = () => {
    onPlus({url,
      shoes,
      price,
      buy})
    setAdded(!isAdded)
  }

  const likeWasChanged = () => {
    onLike({
      id,
      url,
      shoes,
      price,
      buy
    })
    setLike(!isLike)
  }

  return <div className='card'>
    {loading ?
      <ContentLoader
        speed={2}
        width={150}
        height={250}
        viewBox="0 0 150 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="1" y="0" rx="10" ry="10" width="150" height="155" />
        <rect x="0" y="167" rx="10" ry="10" width="150" height="15" />
        <rect x="0" y="187" rx="10" ry="10" width="100" height="15" />
        <rect x="3" y="217" rx="10" ry="10" width="80" height="24" />
        <rect x="121" y="207" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> :
      <>
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
          </>}
          </div>
    }


export default Card;