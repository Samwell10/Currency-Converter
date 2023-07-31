import './App.css';
import Main from './Page/Main';
import {Provider} from 'react-redux';
import store from './Redux/Store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
   
  );
}

export default App;
