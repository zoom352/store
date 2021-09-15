import CardFavorite from "./../Cardfavorite";

const Favorite = ({addProduct, items, search, addLike}) => {

    let cardfullElement =
    items.filter(item => item.shoes.toLowerCase().includes(search))
      .map((crd, index) => <CardFavorite key={index} 
      onPlus={(obj) => addProduct(obj)} 
      onLike={(obj) => addLike(obj)} {...crd}
      />);

    return <div className='d-flex flex-wrap'>
        {cardfullElement}
    </div>
}


export default Favorite;