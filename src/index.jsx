import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './styles/styles.sass';
import CVContainer from './containers/CVContainer';
import CVReducer from './reducers/CVReducer';


const store = createStore(CVReducer, undefined, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <CVContainer />
  </Provider>,
  document.getElementById('app-container'));

