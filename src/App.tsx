import { Route } from 'react-router-dom';
import Products from '@/components/pages/Products';
import Welcome from '@/components/pages/Welcome';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}
export default App;
