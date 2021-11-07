import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Channel from './pages/Channel/Channel';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Watch from './pages/Watch/Watch';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/ghotube" component={Search}/>
        <Route exact path="/ghotube/search" component={Home} />
        <Route exact path="/ghotube/watch" component={Watch} />
        <Route exact path="/ghotube/channel" component={Channel} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
