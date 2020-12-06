const initialState = {
    allGames: []
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "FETCH_GAMES":
      console.log(action.payload, state )
      const fetchedGAMEs = action.payload
      return {allGames: fetchedGames}
  
      case "ADD_GAME":
      const newgame = action.payload
      // const allProductsArray = [...state.allProducts]
      // console.log(allProductsArray)
        console.log("adding product", action.payload, state.allGames)
      return {allGames: [...state.allGames, newgame]}
  
      case "DELETE_GAME":
      console.log("Deleting your product", action.payload)
      let filteredArray = state.allGames.filter(game => {
        return game.id !== action.payload.id
      })
      // debugger
      return {
        allGames: filteredArray
      }
  
      default:
      return state
  
    }
  
  
  
  }
  
  
  export default reducer;