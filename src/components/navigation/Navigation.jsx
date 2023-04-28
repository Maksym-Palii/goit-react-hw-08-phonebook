import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';
import UserMenu from 'components/userMenu/UserMenu';

const StyledLink = styled(NavLink)`
  &.active {
    color: blue;
  }
`;

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <h1 className={css.title}>
          Phone<span className={css.title__blue}>Book</span>
        </h1>
        <nav className={css.nav}>
          <StyledLink className={css.navLink} to="/register">
            Register
          </StyledLink>
          <StyledLink className={css.navLink} to="/login">
            Login
          </StyledLink>
          <StyledLink className={css.navLink} to="/contacts">
            Contacts
          </StyledLink>
        </nav>
        <UserMenu />
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
