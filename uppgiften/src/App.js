import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './komponenter/navigation/Navbar';
import Home from './views/Hem';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:_id" component={ProductDetails} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
