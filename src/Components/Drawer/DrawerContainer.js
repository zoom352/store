// import { connect } from 'react-redux'
// import { cardAC } from '../../store/card-redux.js'
// import Drawer from './Drawer.js'
// import React from 'react';

// const DrawerContainer = (props) => {

//     let CardElement =
//           props.cardfull.map(crd => <Drawer key={crd.id} 
//             shoes={crd.shoes} price={crd.price} buy={crd.buy} url={crd.url}/> )

//     return <div className='overlay'>
//     <div className='drawer'>
//             <h3 className='mb-30 d-flex justify-between'>
//               basket
//                 <img className='cu-p' width={40} height={40} onClick={props.onClose}
//                     src='/img/delete.png' /></h3>
//             {CardElement}
//                 </div>
//     </div>
// }

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

// let DrawerUndeContainer = connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)

// export default DrawerUndeContainer;