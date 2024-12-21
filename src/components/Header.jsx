import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainImg = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Aside = styled.aside`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  width: 236px;
  height: 120px;
  background-color: #3a3a3a;

  border-radius: 6px 23px 23px 23px;

  position: absolute;
  top: 15px;
  left: 50px;
  bottom: 0;
`;

const Section = styled.section`
  display: flex;
  flex-flow: row;
  gap: 7px;

  cursor: pointer;

  padding: 0 17px;
`;

const P = styled.p`
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const imgRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      imgRef.current &&
      !imgRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <a href="#" onClick={toggleMenu} ref={imgRef}>
        <MainImg src="./settings.svg" alt="settings" />
      </a>
      {isOpen ? (
        <Aside ref={menuRef}>
          {/* shoouldnt add alt's for images */}
          <Section>
            <img
              src="./header/language.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <P>Change language...</P>
          </Section>
          <Section>
            <img src="./header/theme.svg" alt="" width="16px" height="16px" />
            <P>Switch theme to Dark</P>
          </Section>
          <Section>
            <img
              src="./header/torBrowser.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <P>I’m using Tor!</P>
          </Section>
        </Aside>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
