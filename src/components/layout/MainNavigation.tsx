import { NavLink } from 'react-router-dom';
import {
  MainNavigationHeader,
  MainNavigationLogoDiv,
  MainNavigationNav,
} from '@/components/layout/MainNavigationStyle';

function MainNavigation() {
  return (
    <MainNavigationHeader>
      <MainNavigationLogoDiv>Great Quotes</MainNavigationLogoDiv>
      <MainNavigationNav>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">Add a Quote</NavLink>
          </li>
        </ul>
      </MainNavigationNav>
    </MainNavigationHeader>
  );
}

export default MainNavigation;
