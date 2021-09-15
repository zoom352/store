import { useState } from 'react';
import Card from './../Card';


const Home = ({clearSearch, search, items, addProduct, addLike, onSearchChange}) => {


  const renderItems = () => {
    
    return items
    .filter(item => item.shoes.toLowerCase().includes(search))
      .map((crd, index) => <Card key={index}
        onPlus={(obj) => addProduct(obj)}
        onLike={(obj) => addLike(obj)} favorited={true} loading={false}
        {...crd} />);
    
  }

    return <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{search ? `search on request ${search}` : 'all the shoes'}</h1>
          <div className='search-block d-flex'>
            
            <img width={40} height={40} src='/img/search.png' alt='Search' />
                {search ? <img onClick={clearSearch} className='clear'
                    width={40} height={40} src='/img/delete.png' alt='Search' /> : null}
            <input onChange={onSearchChange} value={search} placeholder='Search....'/>
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {renderItems}
        </div>
      </div>
}


// shoes={crd.shoes}
//           price={crd.price} buy={crd.buy} url={crd.url}

export default Home;