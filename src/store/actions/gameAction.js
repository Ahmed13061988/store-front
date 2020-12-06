export function fetchGames() {
    return (dispatch) => {
      // return  fetch(`http://localhost:3001/products`)
      return  fetch(`http://localhost:3005/games`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then((data) => dispatch({type: "FETCH_GAMES", payload: data}))
 
    }
  }
 
 
 export const addGame = (newgame) => {
   return {
     type: "ADD_GAME",
     payload: newgame
   }
 }
 
 export const ownerDeleteGame = (deletedGame) => {
   return {
     type: "DELETE_GAME",
     payload: deletedGame
   }
 }