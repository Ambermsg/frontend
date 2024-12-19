import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Header = () => {
  return (
    <a href="#">
      <Img src="./settings.svg" alt="settings" />
    </a>
  );
};

export default Header;
