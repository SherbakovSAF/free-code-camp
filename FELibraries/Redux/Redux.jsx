// Lesson 17
// const defaultState = {
//      user: 'CamperBot',
//      status: 'offline',
//      friends: '732,982',
//      community: 'freeCodeCamp'
//    };
   
//    const immutableReducer = (state = defaultState, action) => {
//      switch(action.type) {
//        case 'ONLINE':
//          return Object.assign({}, state, {status: "online"})
//        default:
//          return state;
//      }
//    };
   
//    const wakeUp = () => {
//      return {
//        type: 'ONLINE'
//      }
//    };
   
//    const store = Redux.createStore(immutableReducer);

// Lesson 16
// const immutableReducer = (state = [0,1,2,3,4,5], action) => {
//      switch(action.type) {
//        case 'REMOVE_ITEM':
//          // Don't mutate state here or the tests will fail
//          return state.slice(0, action.index).concat(...state.slice(action.index + 1, state.length))
//        default:
//          return state;
//      }
//    };
   
//    const removeItem = (index) => {
//      return {
//        type: 'REMOVE_ITEM',
//        index
//      }
//    }
   
//    const store = Redux.createStore(immutableReducer);

// Lesson 15
// const immutableReducer = (state = ['Do not mutate state!'], action) => {
//      switch(action.type) {
//        case 'ADD_TO_DO':
//          // Don't mutate state here or the tests will fail
//          return [...state, action.todo]
//        default:
//          return state;
//      }
//    };
   
//    const addToDo = (todo) => {
//      return {
//        type: 'ADD_TO_DO',
//        todo
//      }
//    }
   
//    const store = Redux.createStore(immutableReducer);

// Lesson 14
// const ADD_TO_DO = 'ADD_TO_DO';

// // A list of strings representing tasks to do:
// const todos = [
//   'Go to the store',
//   'Clean the house',
//   'Cook dinner',
//   'Learn to code',
// ];

// const immutableReducer = (state = todos, action) => {
//   switch(action.type) {
//     case ADD_TO_DO:
//       return [...state, action.todo]
//     default:
//       return state;
//   }
// };

// const addToDo = (todo) => {
//   return {
//     type: ADD_TO_DO,
//     todo
//   }
// }

// const store = Redux.createStore(immutableReducer);


// Lesson 13
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// }; 

// const incAction =  () =>{
//   return {
//     type: INCREMENT,
//   }
// }; 

// const decAction = () =>{
//   return {
//     type: DECREMENT,
//   }
// }; 

// const store = Redux.createStore(counterReducer); 

// Lesson 12
// const REQUESTING_DATA = 'REQUESTING_DATA'
// const RECEIVED_DATA = 'RECEIVED_DATA'

// const requestingData = () => { return {type: REQUESTING_DATA} }
// const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// const handleAsync = () => {
//   return function(dispatch) {
//     // Dispatch request action here
// dispatch(requestingData())
//     setTimeout(function() {
//       let data = {
//         users: ['Jeff', 'William', 'Alice']
//       }
//       // Dispatch received data action here
// dispatch(receivedData(data))
//     }, 2500);
//   }
// };

// const defaultState = {
//   fetching: false,
//   users: []
// };

// const asyncDataReducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case REQUESTING_DATA:
//       return {
//         fetching: true,
//         users: []
//       }
//     case RECEIVED_DATA:
//       return {
//         fetching: false,
//         users: action.users
//       }
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );

// Lesson 11
// const ADD_NOTE = 'ADD_NOTE';

// const notesReducer = (state = 'Initial State', action) => {
//   switch(action.type) {
//     // Change code below this line
//   case "ADD_NOTE":
//   return action.text
//     // Change code above this line
//     default:
//       return state;
//   }
// };

// const addNoteText = (note) => {
//   // Change code below this line
// return {
//   type: "ADD_NOTE",
//   text: note
// }
//   // Change code above this line
// };

// const store = Redux.createStore(notesReducer);

// console.log(store.getState());
// store.dispatch(addNoteText('Hello!'));
// console.log(store.getState());

// Lesson 10
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// const authReducer = (state = {authenticated: false}, action) => {
//   switch(action.type) {
//     case LOGIN:
//       return {
//         authenticated: true
//       }
//     case LOGOUT:
//       return {
//         authenticated: false
//       }
//     default:
//       return state;
//   }
// };

// const rootReducer = Redux.combineReducers({
//   count: counterReducer,
//   auth: authReducer
// });// Define the root reducer here

// const store = Redux.createStore(rootReducer);

// Lesson 9
// const ADD = 'ADD';

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// // Global count variable:
// let count = 0;

// // Change code below this line
// store.subscribe(function(){
//   count++
// })
// // Change code above this line

// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);

// Lesson 8
// const LOGIN = 'LOGIN'
// const LOGOUT = 'LOGOUT'

// const defaultState = {
//   authenticated: false
// };

// const authReducer = (state = defaultState, action) => {

//   switch (action.type) {
//     case LOGIN: 
//       return {
//         authenticated: true
//       }
//     case LOGOUT: 
//       return {
//         authenticated: false
//       }

//     default:
//       return state;

//   }

// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//   return {
//     type: LOGIN
//   }
// };

// const logoutUser = () => {
//   return {
//     type: LOGOUT
//   }
// };

// Lesson 7
// const defaultState = {
//    authenticated: false
//  };
 
//  const authReducer = (state = defaultState, action) => {
//    // Change code below this line
//  switch (action.type) {
//    case "LOGIN":
//    return {authenticated: true}
//    case "LOGOUT":
//    return {authenticated: false}
//    default:
//    return state
//  }
//    // Change code above this line
//  };
 
//  const store = Redux.createStore(authReducer);
 
//  const loginUser = () => {
//    return {
//      type: 'LOGIN'
//    }
//  };
 
//  const logoutUser = () => {
//    return {
//      type: 'LOGOUT'
//    }
//  };

// Lesson 6
// const defaultState = {
//     login: false,
// };

// const reducer = (state = defaultState, action) => {

//     if ((action.type == "LOGIN")) {
//         return { login: true };
//     } else {
//         return state;
//     }
// };

// const store = Redux.createStore(reducer);

// const loginAction = () => {
//     return {
//         type: "LOGIN",
//     };
// };

// Lesson 5
// const store = Redux.createStore(
//    (state = {login: false}) => state
//  );
 
//  const loginAction = () => {
//    return {
//      type: 'LOGIN'
//    }
//  };
 
//  // Dispatch the action here:
 
//  store.dispatch(loginAction())

// Lesson 4
// const action = {
//    type: 'LOGIN'
//  }
//  // Define an action creator here:
 
//  function actionCreator() {
//    return action
//  }

// Lesson 3
// let action = {
//    type: "LOGIN"
//  }

// Lesson 2
// const store = Redux.createStore(
//    (state = 5) => state
//  );
//  const currentState = store.getState()

// Lesson 1
// const reducer = (state = 5) => {
//    return state;
//  }

//  const store = Redux.createStore(reducer)