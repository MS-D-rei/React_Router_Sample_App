import { Redirect, Route, Switch } from 'react-router-dom';
import Products from '@/components/pages/Products';
import Welcome from '@/components/pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
