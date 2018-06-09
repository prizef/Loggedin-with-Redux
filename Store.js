import { createStore } from "redux";

function reducer(store, action) {
  if (!store) {
    return {
      currentUser: null
    };
  }
  if (action.type === "SET_CURRENT_USER") {
    return {
      ...store,
      currentUser: action.value
    };
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
