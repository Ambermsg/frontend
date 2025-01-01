import { useState } from "react";
import styled from "styled-components";

const MainImg = styled.img`
  margin-top: 100px;
`;

const Aside = styled.aside`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  width: 236px;
  height: 190px;
  background-color: #3a3a3a;

  border-radius: 23px 23px 6px 23px;

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

const PRed = styled.p`
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;

  color: #fa4f4fe5;
`;

const UserContextMenu = () => {
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
            <img
              src="/userContext/searchChat.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <P>Search chat</P>
          </Section>
          <Section>
            <img
              src="/userContext/clean.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <P>Clear chat</P>
          </Section>
          <Section>
            <img
              src="/userContext/colorPicker.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <P>Open color picker</P>
          </Section>
          <Section>
            <img
              src="/userContext/report.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <PRed>Report</PRed>
          </Section>
          <Section>
            <img
              src="/userContext/block.svg"
              alt=""
              width="16px"
              height="16px"
            />
            <PRed>Block</PRed>
          </Section>
        </Aside>
      ) : (
        ""
      )}
    </>
  );
};

export default UserContextMenu;
