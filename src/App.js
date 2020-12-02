import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import manageBand from './reducers/manageBand'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <BandsContainer />
      </div>
      </Provider>
    );
  }
};

export default App;
