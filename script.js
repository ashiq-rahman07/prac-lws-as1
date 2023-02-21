// select dom element 
const totalScore = document.getElementById('total-score');

const increValue = document.getElementById('increment-value');
const decreValue = document.getElementById('decrement-value');




// initial state
// Define the initial state of the store
const initialState = {
  value1: 0,
  value2: 0,
  total: 120,
};
// create reducer function
// Define a reducer function to update the store based on actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_VALUE_1":
      return {
        ...state,
        value1: action.payload,
        total: state.total + state.value1,
      };
    case "UPDATE_VALUE_2":
      return {
        ...state,
        value2: action.payload,
        total: state.total - state.value2,
      };
    case "TOTAL_VALUE":
        return{
            ...state,
            total: state.total,
           
        };
    default:
      return state;
  }
}
// create store
const store = Redux.createStore(reducer);

const render = () => {
    const state = store.getState();
    console.log(state.total)
    if(state.total<0){
        state.total = 0
    }
    totalScore.innerText = state.total;
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
increValue.addEventListener("input", function(e) {
    e.preventDefault()

  const newValue = Number(increValue.value);
  console.log(newValue)
  store.dispatch({
    type: "UPDATE_VALUE_1",
    payload: newValue,
  });
});

decreValue.addEventListener("input", function(e) {
    e.preventDefault()

  const newValue = Number(decreValue.value);
  store.dispatch({
    type: "UPDATE_VALUE_2",
    payload: newValue,
  });
});




