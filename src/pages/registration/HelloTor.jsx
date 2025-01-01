import styled from "styled-components";
import Header from "../../components/registerComponents/Header.jsx";

import { useNavigate } from "react-router";

const H1 = styled.h1`
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.69px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 0px;
  background-color: var(--theme-contrast);
`;

const P = styled.p`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  letter-spacing: -0.01em;
  text-align: center;

  color: #ffffffcc;
`;

const GrayP = styled.p`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;

  color: #ffffff80;
`;

const A = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--theme-contrast);
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
`;

const Section = styled.section`
  max-width: 530px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const ButtonDiv = styled.div`
  margin: 42px 0 18px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloTor = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      <Section>
        <H1>Hello, fellow Tor user!</H1>
        <P>Our systems have detected that you’re using the Tor browser.</P>
        <P>
          Unfortunately, you cannot register in Amber via Tor for security
          reasons at the current moment.
        </P>
      </Section>
      <ButtonDiv>
        <Button onClick={() => navigate("/login")}>Back to Login page</Button>
      </ButtonDiv>
      <GrayP>
        Think there’s an error? <A href="#">Contact us</A>
      </GrayP>
    </Wrapper>
  );
};

export default HelloTor;
