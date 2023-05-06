const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");
const AppView = require("./appview.jsx");

// создание Хранилища
const store = redux.createStore(reducer);

// начальное заполнение хранилища
store.dispatch({
  type: "SET_STATE",
  state: {
    phones: [ "Xiaomi Mi 10", "Samsung Galaxy Note20", "Samsung Galaxy A71", "Samsung Galaxy A72" ],
    tablets: ["Samsung Tab A210"]
  }
});
 
ReactDOM.createRoot(
    document.getElementById("app")
).render(
  <Provider store={store}>
    <AppView />
  </Provider>
);