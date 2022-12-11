import { Link, NavLink } from 'react-router-dom';
import {
  MainNavigationHeader,
  MainNavigationLogoDiv,
  MainNavigationNav,
} from '@/components/layout/MainNavigationStyle';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { logInOutToggle, removeToken } from '@/store/authSlice';

function MainNavigation() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(removeToken());
    dispatch(logInOutToggle());
  }

  return (
    <MainNavigationHeader>
      <MainNavigationLogoDiv>Great Quotes</MainNavigationLogoDiv>
      <MainNavigationNav>
        <ul>
          {auth.isLoggedIn ? (
            <li>
              <NavLink to="quotes">All Quotes</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="auth">Login</NavLink>
            </li>
          )}
          <li>
            <NavLink to='profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to="new-quote">Add a Quote</NavLink>
          </li>
          {auth.isLoggedIn ? <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> : null}
        </ul>
      </MainNavigationNav>
    </MainNavigationHeader>
  );
}

export default MainNavigation;
