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

const Register = () => {
  // let params = useParams();

  return (
    <>
      {/* <h1>It`s a register page with id: {params.id}</h1> */}
      <Header />
      <H1>Log In</H1>
      <form action="">
        <label htmlFor="">Username or email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </form>
      <A href="#">Forgot your password?</A>
      <section>
        <P>
          Doesn’t have an account?
          <A href="#" style={{ marginLeft: "5px" }}>
            Register
          </A>
        </P>
      </section>
      <Button type="submit">Login</Button>
    </>
  );
};

export default Register;
