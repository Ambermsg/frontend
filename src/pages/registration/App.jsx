import styled from "styled-components";
import ChatContextMenu from "../../components/mainComponents/ChatContextMenu";
import UserContextMenu from "../../components/mainComponents/UserContextMenu";
import { NavLink } from "react-router";

const NavLinkStyled = styled(NavLink)`
  margin-left: 100px;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--theme-contrast);
`;

const App = () => {
  return (
    <>
      <ChatContextMenu></ChatContextMenu>
      <div>Hello World!</div>
      <UserContextMenu style={{ marginTop: "300px" }}></UserContextMenu>

      <ul>
        <li>
          <NavLinkStyled to="/">main</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/login">login</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/register">register</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/register/second">register/second</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/register/almost">register/almost</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/tor">tor</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/confirm-email">confirm-email</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/app">app</NavLinkStyled>
        </li>
      </ul>
    </>
  );
};

export default App;
