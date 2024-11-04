// Reducer is a fn that takes in state and action
// returns state based on the action type dispatched
// reducer must return state

const todoReducer = (state = [], action) => {
  // state is comp-wide data
  // action is an obj
  // action.type is must
  // action.payload -- is optional
  console.log('Inside Reducer');
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'CHECK_TODO': {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      console.log(index);
      const duplicateState = [...state];
      duplicateState[index].completed = !duplicateState[index].completed;
      return duplicateState;
    }

    case 'SAVE_TODO': {
      const list = action.list;
      console.log(list);
      console.log(action.index);

      // const Index = list.findIndex(action.payload.title);
      // console.log(Index);
      // const Index =
      //   list?.some((list) => list.title === action.payload.title) &&
      //   list.findIndex((list) => list?.title === action.payload.title);
      // console.log(Index);

      // let index;
      // if (Index1 !== false)
      // // const duplicateIndexState = [...state];
      // // // console.log(duplicateIndexState)
      // // // duplicateIndexState[Index].title = !duplicateIndexState[Index].title;
      // // duplicateIndexState[Index].title = action.payload.title;
      // // console.log(duplicateIndexState[Index].title)
      // // return duplicateIndexState;
      // // console.log(Index);
      // const edit = Object.assign({}, state[Index]);
      // console.log(edit);
      // edit.title = action.payload.title;
      // console.log(edit.title);
      // const edited = Object.assign([], state);
      // console.log(edited);
      // // const result = edited.splice(editIndex, 1, edit);
      // // console.log(result);
      return state;
    }

    case 'EDIT_TODO': {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      console.log(index);
      const edit = Object.assign({}, state[index]);
      console.log(edit);
      edit.title = action.payload.title;
      console.log(edit.title);
      // console.log(action.payload[Index]);
      return state;
    }

    case 'DELETE_TODO': {
      return state.filter((todo) => todo.id !== action.payload.id);
    }

    case 'LIST_TODOS':
      return action.payload;

    default:
      return state;
  }
};
export default todoReducer;

// some possible actions for todo app
/*
  ADD_TODO
  LIST_TODOS
*/
