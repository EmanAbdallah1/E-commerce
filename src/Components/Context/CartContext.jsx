import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  // =========================
  // FAVOURITES
  // =========================

  const [favouriteItems, setFavouriteItems] = useState(() => {
    const savedFavourite = localStorage.getItem("favouriteitem");

    try {
      return savedFavourite ? JSON.parse(savedFavourite) : [];
    } catch (error) {
      console.log("Invalid favourite data:", error);
      localStorage.removeItem("favouriteitem");
      return [];
    }
  });


  // Increase Favourite
  const handleIncreaseFav = (id) => {
    setFavouriteItems(
      favouriteItems.map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      })
    );
  };


  // Remove Favourite
  const handleRemoveFav = (id) => {
    setFavouriteItems(
      favouriteItems.filter((item) => item.id !== id)
    );
  };


  // Add To Favourite
  const addToFav = (item) => {
    setFavouriteItems((prev) => {

      const isAlreadyFavourite = prev.some(
        (fav) => fav.id === item.id
      );

      if (isAlreadyFavourite) {
        return prev;
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };


  // Save Favourite To LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "favouriteitem",
      JSON.stringify(favouriteItems)
    );
  }, [favouriteItems]);


  // =========================
  // CART
  // =========================

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartitem");

    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.log("Invalid cart data:", error);
      localStorage.removeItem("cartitem");
      return [];
    }
  });


  // Increase Cart Quantity
  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      })
    );
  };


  // Decrease Cart Quantity
  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) => {
        return item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      })
    );
  };


  // Remove From Cart
  const handleRemove = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };


  // Add To Cart
  const addToCart = (item) => {
    setCartItems((prev) => {

      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };


  // Save Cart To LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "cartitem",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);


  // =========================
  // PROVIDER
  // =========================

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,

        handleIncrease,
        handleDecrease,
        handleRemove,

        favouriteItems,
        setFavouriteItems,
        addToFav,
        handleIncreaseFav,
        handleRemoveFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;