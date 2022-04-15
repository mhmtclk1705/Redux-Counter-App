import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";

// ! Redux kullanımı için redux içerisine bir dosya oluşturuyoruz burası bizim storemuzun olduğu yer olacak 
// ! burda reducers ları topluyoruz bunun için createStore ve combineReducers fonksiyonlarını redux dan import ediyoruz.



//! store redux >> index.js
// ! reducer counterReducer


const reducers = combineReducers({
  counterReducer: counterReducer,
});

// export const combinedStores = () => {
//     const store = createStore(reducers);
//     return store;

// }

//! export olarak createSore içerisinde reducer larrı yolluyoruz istediğimiz yerden çağırabiliriz...
export const myStore = createStore(reducers);
