import { NavLink } from 'react-router-dom';
import { MainHeaderHeader } from '@/components/MainHeaderStyle';

/* https://reactrouter.com/en/main/components/nav-link */
// A <NavLink> is a special kind of <Link> that knows whether or not it is "active". 
// By default, an active class is added to a <NavLink> component when it is active

function MainHeader() {
  return (
    <MainHeaderHeader>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </MainHeaderHeader>
  );
}

export default MainHeader;
