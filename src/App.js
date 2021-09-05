import logo from './logo.svg';
import './App.css';
import './index.scss';
import Card from './Components/Card';
import Header from './Components/Header';
import Drawer from './Components/Drawer/Drawer';
import { useEffect, useState } from 'react';
import axios from 'axios';


const App = (props) => {

  const [items, setItems] = useState([])
  const [CardItems, setCardItems] = useState([])
  const [isBasket, setBasket] = useState(false)
  const [search, setSearch] = useState('')

  
  const addProduct = (
      obj
  ) => {
    axios.post('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/cart', obj)
    setCardItems((prev) =>[...prev, obj])
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const clearSearch = () => {
    setSearch('')
  }

  const removeCard = (id) => {
    axios.delete(`https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/cart${id}`)
    setCardItems((prev) => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    axios.get('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/items')
      .then((res) => {
      setItems(res.data)
      })
    
    axios.get('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/items')
      .then((res) => {
        setCardItems(res.data)
      })
  }, [])
  
  let cardfullElement =
    items.filter(item => item.shoes.toLowerCase().includes(search))
      .map((crd, index) => <Card key={index} shoes={crd.shoes}
      price={crd.price} buy={crd.buy} url={crd.url}
      onPlus={(obj) => addProduct(obj)} />);



  return (
    <div className="wrapper clear">

      {isBasket ? <Drawer items={CardItems} onRemove={removeCard} onClose={() => setBasket(false)} /> : null}
      
      <Header onClickCard={() => setBasket(true)}/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{search ? `search on request ${search}` : 'all the shoes'}</h1>
          <div className='search-block d-flex'>
            
            <img width={40} height={40} src='/img/search.png' alt='Search' />
            {search ? <img onClick={clearSearch} className='clear' width={40} height={40} src='/img/delete.png' alt='Search' /> : null}
            <input onChange={onSearchChange} value={search} placeholder='Search....'/>
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {cardfullElement}
        </div>
      </div>
    </div>
  );
}

// let mapStateToProps = (state) => {
//   return {
//     cardfull: state.cardPage.cardfull
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addCardfull: (cardfull) => {
//       dispatch(cardAC(cardfull))
//     }
//   }
// }

// let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
