import { useState } from "react";
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

  border-radius: 23px 6px 23px 23px;

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

const ChatContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a href="#" onClick={toggleMenu}>
        <MainImg src="/settings.svg" alt="settings" />
      </a>
      {isOpen ? (
        <Aside>
          <Section>
            <img src="/chat/mute.svg" alt="" width="16px" height="16px" />
            <P>Mute chat</P>
          </Section>
          <Section>
            <img src="/chat/info.svg" alt="" width="16px" height="16px" />
            <P>View info</P>
          </Section>
          <Section>
            <img src="/chat/settings.svg" alt="" width="16px" height="16px" />
            <P>Manage chat</P>
          </Section>
        </Aside>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatContextMenu;
