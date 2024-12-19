// import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/Header.jsx";

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
  background-color: var(--black-theme-contrast);
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const A = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--black-theme-contrast);
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
`;

const Section = styled.section`
  margin-top: 15px;

  display: flex;
  flex-flow: column;
  gap: 15px;
`;

const Label = styled.label`
  padding: 0 0 0 10px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: left;
  color: #ffffffb0;
`;

const Input = styled.input`
  padding: 10px;
  width: 270px;
  height: 40px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
  border: 0px;
  border-radius: 20px;
  background-color: #00000021;
`;

const Form = styled.form`
  margin-top: 40px;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 23px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const ButtonDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  // let params = useParams();

  return (
    <Wrapper>
      {/* <h1>It`s a register page with id: {params.id}</h1> */}
      <Header />
      <H1>Log In</H1>
      <Form action="">
        <FormDiv>
          <Label htmlFor="">Username or email</Label>
          <Input type="text" />
        </FormDiv>

        <FormDiv>
          <Label htmlFor="">Password</Label>
          <Input type="text" />
        </FormDiv>
      </Form>
      <Section>
        <A href="#">Forgot your password?</A>
        <P>
          Doesn’t have an account?
          <A href="#" style={{ marginLeft: "5px" }}>
            Register
          </A>
        </P>
      </Section>
      <ButtonDiv>
        <Button type="submit">Login</Button>
      </ButtonDiv>
    </Wrapper>
  );
};

export default Register;
