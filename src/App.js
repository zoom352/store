import logo from './logo.svg';
import './App.css';
import './index.scss';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/orig.png'/>
            <div>
              <h2 className='text-uppercase'>React Sheackers</h2>
              <p>the store fot the best shoes</p>
            </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={40} height={40} src='/img/cart.png'/>
            <span>700 $</span>
          </li>
          <li>
            <img width={40} height={40} src='/img/user.png'/>
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>all the shoes</h1>
        <div className='d-flex'>
            <div className='card'>
            <img width={133} height={112} src='/img/asic1.png' alt='' />
            <h5> Элитные кроссовки ASICS Gel - Nimbus 21 Winterized </h5>
            <div className='d-flex justify between align-center'>
              <div className='d-flex flex-column'>
                <span>price:</span>
                <b>600 $</b>
              </div>
              <button className='button'>buy</button>
            </div>
          </div>
        <div className='card'>
            <img width={133} height={112} src='/img/asic2.png' alt='' />
            <h5> Элитные кроссовки ASICS Gel - Nimbus 21 Winterized </h5>
            <div className='d-flex justify between align-center'>
              <div className='d-flex flex-column'>
                <span>price:</span>
                <b>600 $</b>
              </div>
              <button className='button'>buy</button>
            </div>
        </div>
        <div className='card'>
            <img width={133} height={112} src='/img/asic3.png' alt='' />
            <h5> Элитные кроссовки ASICS Gel - Nimbus 21 Winterized </h5>
            <div className='d-flex justify between align-center'>
              <div className='d-flex flex-column'>
              <span>price:</span>
              <b>600 $</b>
              </div>
              <button className='button'>buy</button>
            </div>
        </div>
        <div className='card'>
            <img width={133} height={112} src='/img/asic4.png' alt='' />
            <h5> Элитные кроссовки ASICS Gel - Nimbus 21 Winterized </h5>
            <div className='d-flex justify between align-center'>
              <div className='d-flex flex-column'>
              <span>price:</span>
              <b>600 $</b>
              </div>
              <button className='button'>buy</button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
