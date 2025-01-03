import { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  max-width: 400px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 15px;
`;

const PSmall = styled.p`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;

  color: #ffffff80;
`;
const SpanSmall = styled.span`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  text-align: center;

  color: #ffffff80;
`;

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time <= 0) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <Section>
      {time > 0 ? (
        <PSmall>
          Wait <SpanSmall>{time} seconds</SpanSmall> to send again
        </PSmall>
      ) : (
        <PSmall>
          Click to get <SpanSmall>new</SpanSmall> message
        </PSmall>
      )}
    </Section>
  );
};

export default Timer;
