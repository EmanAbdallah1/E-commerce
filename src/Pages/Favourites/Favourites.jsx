import React, { useContext } from 'react'
import Product from '../../Components/SlideProducts/Product'
import { CartContext } from "../../Components/Context/CartContext";

function Favourites() {
    const {favouriteItems} = useContext(CartContext)

  return (
        <div className="category_products FavoritesPage">
            <div className="container">
                <div className="top_slide">
                    <h2>Your Favorites</h2>
                </div>

                {favouriteItems.length === 0 ? (
                    <p>No Favorites Products yet.</p>
                ) : (
                    <div className="products">
                        {favouriteItems.map(item => (
                            <Product item={item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
  )
}
export default Favourites