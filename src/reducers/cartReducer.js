const cartReducer = (state = [], action) => {
  // state is comp-wide data
  // action is an obj
  // action.type is must
  // action.payload -- is optional
  console.log('Inside Reducer');
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'FETCH_CART':
      return state;

    default:
      return state;
  }
};
export default cartReducer;
