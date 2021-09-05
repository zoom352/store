const CARD_FULL = 'CARD_FULL'


let initialState = {
    cardfull:[
        {
            shoes: 'Элитные кроссовки ASICS Gel - Nimbus 21 Winterized',
            price: 'price:',
            buy: '600 $',
            url: '/img/asic1.png',
            id: 1
        },
        {
            shoes: 'Элитные кроссовки ASICS Gel - Nimbus 21 Winterized',
            price: 'price:',
            buy: '700 $',
            url: '/img/asic4.png',
            id: 2
        },
        {
            shoes: 'Элитные кроссовки ASICS Gel - Nimbus 21 Winterized',
            price: 'price:',
            buy: '500 $',
            url: '/img/asic3.png',
            id: 3
        }
    ],
    bsket: []
}


const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARD_FULL: {
            return { cardfull: [...state.cardfull] }
        }
        default:
            return state;
      }
}

export const cardAC = (cardfull) => {
    return {type: CARD_FULL, cardfull}
}


export default cardReducer;