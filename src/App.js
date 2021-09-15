import logo from './logo.svg';
import './App.css';
import './index.scss';
import Card from './Components/Card';
import Header from './Components/Header';
import Drawer from './Components/Drawer/Drawer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Favorite from './Components/Home/favorite';
import { Route } from 'react-router-dom';

const App = (props) => {


  const [items, setItems] = useState([])
  const [CardItems, setCardItems] = useState([])
  const [like, setLike] = useState([])
  const [isBasket, setBasket] = useState(false)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  
  const addProduct = (obj) => {
    console.log(obj)
    if (CardItems.find((item) => item.id === obj.id)) {
      setCardItems((prev) => prev.filter((item) => item.id !== obj.id))
    } else {
      axios.post('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/cart/', obj)
      setCardItems((prev) => [...prev, obj])
    }
  }

  const addLike = async (obj) => {
    try {
      if (like.find(favobj => favobj.id == obj.id)) {
        axios.delete(`https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/like/${obj.id}`);
        // setLike((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/like/', obj)
        setLike((prev) => [...prev, data])
      }
    } catch (error) {
        alert('error')
    }
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const clearSearch = () => {
    setSearch('')
  }

  const removeCard = (id) => {
    axios.delete(`https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/cart/${id}`)
    setCardItems((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(async () => {
    async function fetchData() {
      setLoading(true)
      const itemsResponse = await axios.get('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/items');
      const cardResponse = await axios.get('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/cart');
      const cardLike = await axios.get('https://61338c6c7859e700176a372d.mockapi.io/store/sheackers/like');
  
      setLoading(false)
      
      setItems(itemsResponse.data)
      setLike(cardLike.data)
      setCardItems(cardResponse.data)

    }

    fetchData()

  }, [])
  
  // let cardfullElement =
  //   items.filter(item => item.shoes.toLowerCase().includes(search))
  //     .map((crd, index) => <Card key={index} shoes={crd.shoes}
  //     price={crd.price} buy={crd.buy} url={crd.url}
  //     onPlus={(obj) => addProduct(obj)} />);


  return (
    <div className="wrapper clear">

      {isBasket ? <Drawer items={CardItems} onRemove={removeCard} onClose={() => setBasket(false)} /> : null}
      
        <Header onClickCard={() => setBasket(true)} />

      <Route path='/favorite'>
        <Favorite addProduct={addProduct} items={like}
          search={search} addLike={addLike}/>
      </Route>

      <Route path ='/' exact>
        <Home clearSearch={clearSearch} items={items}
          search={search} addProduct={addProduct}
          onSearchChange={onSearchChange} addLike={addLike}/>
      </Route>
        
        
      {/* <div className='content p-40'>
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
      </div> */}
    </div>
  );
}


export default App;
