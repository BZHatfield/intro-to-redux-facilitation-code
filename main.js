const { createStore } = Redux;

// initialState and Reducer
const initialState = {
  counterNumber: 0
}

const counterReducer = (state = initialState, action) => {
  debugger;
  switch(action.type) {
    case ADD_ONE:
    debugger;
      const newCounterNumber = state.counterNumber + 1
      return Object.assign({}, state, {
        counterNumber: newCounterNumber
      })
    default:
      debugger;
      return state;
  }
}

const addOneButton = document.getElementById('add-to-counter')

// Action type and action creator
const ADD_ONE = 'ADD_ONE'

const addOne = () => {
  debugger;
  return(
    { type: ADD_ONE }
  )
}

addOneButton.addEventListener('click', () => {
  debugger;
  store.dispatch(addOne())
})

const store = createStore(counterReducer);
const playerOneScoreSection = document.getElementById('counter')

const render = () => {
  debugger;
  playerOneScoreSection.innerHTML = store.getState().counterNumber
}

render();
store.subscribe(render);


// To see a reducer with more than one action type in play, add the below div to
// `index.html` after line 15, and then comment out lines 4-48 in this file, and
// comment in lines 64-136

// <div>
//   <h1>Here is our Grocery List:</h1>
//   <input type='text' id='new-grocery' />
//   <button id='add-new-grocery'>Add New Grocery</button>
//
//   <ul id='grocery-list'></ul>
// </div>


// const { createStore } = Redux;
//
// // initialState and Reducer
// const initialState = {
//   counterNumber: 0,
//   groceryList: []
// }
//
// const counterReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'ADD_ONE':
//       const newCounterNumber = state.counterNumber + 1
//       return Object.assign({}, state, {
//         counterNumber: newCounterNumber
//       })
//     case 'ADD_GROCERY':
//       const newGroceries = state.groceryList.concat(action.newGrocery)
//       return Object.assign({}, state, {
//         groceryList: newGroceries
//       })
//     default:
//       return state;
//   }
// }
//
// const addOneButton = document.getElementById('add-to-counter')
//
// // Action type and action creator
// const ADD_ONE = 'ADD_ONE'
//
// const addOne = () => {
//   return(
//     { type: ADD_ONE }
//   )
// }
//
// addOneButton.addEventListener('click', () => {
//   store.dispatch(addOne())
// })
//
// const addGroceryButton = document.getElementById('add-new-grocery')
//
// const ADD_GROCERY = 'ADD_GROCERY'
//
// const addGrocery = grocery => {
//   return(
//     {
//       type: ADD_GROCERY,
//       newGrocery: grocery
//     }
//   )
// }
//
// addGroceryButton.addEventListener('click', () => {
//   groceryText = document.getElementById('new-grocery').value
//   store.dispatch(addGrocery(groceryText))
// })
//
// const store = createStore(counterReducer);
// const playerOneScoreSection = document.getElementById('counter')
// const groceryList = document.getElementById('grocery-list')
//
// const render = () => {
//   playerOneScoreSection.innerHTML = store.getState().counterNumber
//   let listItems = ""
//   store.getState().groceryList.forEach(grocery => {
//     listItems += `<li>${grocery}</li>`
//   })
//   groceryList.innerHTML = listItems
// }
//
// render();
// store.subscribe(render);
