import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div> 
    </Provider>
  );
}

export default App;
