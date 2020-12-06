const inititalState = {
    cartGames: []
  }
  
  const reducer = (state = inititalState, action ) => {
    switch(action.type) {
      case "ADD_GAME_CART":
      const gameToCart = action.payload
      console.log(gameToCart)
      console.log(state)
      console.log("hit product cart", state.cartGames)
      const addArray = [...state.cartGames.carts, gameToCart]
      console.log(addArray)
      return {cartGames: {carts: addArray}}
  
  
  
      case "FETCH_CART":
      // console.log("fetched cart", action.payload)
      const fetchedCart = action.payload
      console.log(fetchedCart);
      let filteredCurrentCarts = fetchedCart.carts.filter(cart => cart.ordered === false)
      console.log(filteredCurrentCarts)
      return {cartGames: {carts:filteredCurrentCarts}}
  
  
  
      case "DELETE_CART":
      console.log("delete cart state", state)
  
      console.log("delete cart", state.cartGames)
      // console.log("THE DELETED CART", action.payload)
      const newArray = state.cartGames.carts.filter(cart => {
        console.log(cart !== action.payload);
        return cart !== action.payload
      })
  
      console.log(newArray)
  
      return {cartGames: {carts: newArray}}
  
      case "CART_ORDERED":
      console.log("deleting everything in cart", state)
      return {cartGames: {carts: []}}
  
  
      default:
      return state
  
  
    }
  }
  
  
  
  
  export default reducer;