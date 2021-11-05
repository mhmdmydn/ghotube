import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/ghotube" component={Search}/>
        <Route exact path="/ghotube/search" component={ Home }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
