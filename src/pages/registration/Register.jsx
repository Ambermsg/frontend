import styled from "styled-components";
import Header from "../../components/registerComponents/Header.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router";

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
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;

  color: #ffffff80;
`;
const PError = styled.p`
  margin-left: 12px;

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: left;

  color: #ff3939;
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

const NavLinkStyled = styled(NavLink)`
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
  padding: 10px 10px 10px 20px;
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

  &:focus {
    outline: none; /* Removes the default focus border */
  }
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
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input`
  position: relative;
  top: 4px;
  right: 4px;

  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 0px solid var(--theme-contrast);
  appearance: none;
  outline: none;
  background: #252525;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: var(--theme-contrast);
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #252525;
  }
`;

const schema = yup.object({
  email: yup.string().required("Please enter the username or name"),
  password: yup.string().required("Please enter the password"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords are not matching")
    .required("Please confirm your password"),
  readed: yup.boolean().oneOf([true], "Are you agreed with term of advice ?"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Wrapper>
      {/* <h1>It`s a register page with id: {params.id}</h1> */}
      <Header />
      <H1>Register</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Email
          </Label>
          <Input type="text" {...register("email")} />
          <PError>{errors.email?.message}</PError>
        </FormDiv>

        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Password
          </Label>
          <Input type="password" {...register("password")} />
          <PError>{errors.password?.message}</PError>
        </FormDiv>

        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Repeat Password
          </Label>
          <Input type="password" {...register("repeatPassword")} />
          <PError>{errors.repeatPassword?.message}</PError>
        </FormDiv>

        <P
          onClick={() => {
            const checkbox = document.querySelector('input[type="checkbox"]');
            checkbox.click();
          }}
        >
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
            }}
            type="checkbox"
            {...register("readed")}
          />
          I’ve read and understand the
          <A href="#" target="_blank" style={{ marginLeft: "5px" }}>
            Terms of Service
          </A>
        </P>
        <PError style={{ marginRight: "50px" }}>
          {errors.readed?.message}
        </PError>

        <ButtonDiv>
          <Button type="submit">Register</Button>
        </ButtonDiv>

        <Section>
          <P>
            Already have an account?
            <NavLinkStyled to="/login" style={{ marginLeft: "5px" }}>
              Login
            </NavLinkStyled>
          </P>
        </Section>
      </Form>
    </Wrapper>
  );
};

export default Register;
