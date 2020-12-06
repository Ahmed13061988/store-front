export const addGameCart = (cartGame) => {
    // console.log("cart action", cartProduct)
    return {
      type: "ADD_Game_CART",
      payload: cartGame
    }
  }
  
  export const deletedCart = (cart) => {
    return {
      type: "DELETE_CART",
      payload: cart
    }
  }
  
  export const cartOrdered = () => {
    return {
      type: "CART_ORDERED",
      payload: []
    }
  
  }
  
  export function fetchCart() {
    return (dispatch) => {
      // return  fetch(`http://localhost:3001/carts`)
      return  fetch(`https://localhost:3005/carts`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then((data) => dispatch({type: "FETCH_CART", payload: data}))
    }
  }