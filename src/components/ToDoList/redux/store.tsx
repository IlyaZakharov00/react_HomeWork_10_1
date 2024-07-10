import { combineReducers, compose, legacy_createStore } from "redux";
import { serviceReducer } from "./serviceReducer";

const ReactReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()


export function configureStore() {
  return legacy_createStore(
    combineReducers({
      service: serviceReducer,

    }),
    compose(ReactReduxDevTools)
  );
}
