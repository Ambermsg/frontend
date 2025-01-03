import styled from "styled-components";
import Header from "../../components/registerComponents/Header.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router";
import TimerComponent from "../../components/registerComponents/Timer.jsx";
import { memo, useCallback, useMemo } from "react";

const H1 = styled.h1`
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.69px;
  letter-spacing: -0.01em;
  text-align: center;

  margin-bottom: 19px;
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

const ButtonBack = styled.button`
  cursor: pointer;
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;
  padding: 10px 15px;
  border-radius: 20px;
  border: 0px;
  background-color: var(--theme-bg);
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

const Span = styled.span`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  letter-spacing: -0.01em;
  text-align: center;
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

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;
  padding: 10px 15px;
  border-radius: 20px;
  border: 0px;
  background-color: var(--theme-bg);
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 400px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  width: 50px;
  height: 72px;
  border: 2px solid var(--theme-bg);
  border-radius: 15px;
  background-color: #00000021;

  font-family: Noto Sans;
  font-size: 32px;
  font-weight: 400;
  line-height: 43.58px;
  text-align: center;

  &[type="number"] {
    -moz-appearance: textfield; /* For Firefox */
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; /* For Chrome, Edge, etc. */
    margin: 0;
  }

  &:focus {
    outline: none; /* Removes the default focus border */
    border: 2px solid green;
  }
`;

const Form = styled.form`
  margin: 36px 0 25px 0;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 23px;
`;

const FormDiv = styled.div`
  max-width: 250px;

  display: flex;
  flex-flow: row;
  gap: 5px;
`;

const ButtonDiv = styled.div`
  margin-bottom: 30px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const schema = yup.object({
  first: yup
    .string()
    .oneOf(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    .required("Please enter first number"),
  second: yup
    .string()
    .oneOf(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    .required("Please enter second number"),
  third: yup
    .string()
    .oneOf(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    .required("Please enter third number"),
  fourth: yup
    .string()
    .oneOf(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    .required("Please enter fourth number"),
});

const EmailConfirm = memo(function EmailConfirm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const notFilledError = useMemo(() => {
    const allInputsFilled = Object.values(errors).length === 0;
    return allInputsFilled ? null : "You haven't filled all inputs";
  }, [errors]);

  const errorMessage = useMemo(() => {
    return errors ? errors[0]?.message : notFilledError;
  }, [errors, notFilledError]);

  // const errorHandling = useMemo(() => {}, [errors]);

  const onSubmit = useCallback((data) => {
    let result = Object.values(data).join("");
    if (result.length == 4) {
      console.log(result);
    }
  }, []);

  const handleChange = useCallback((e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value.slice(0, 1);

    if (value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Backspace") {
      // If current input is empty, move focus to previous input
      if (!e.target.value && e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      } else {
        // Clear the current input value
        e.target.value = "";
      }
    }
  }, []);

  const handlePaste = useCallback((e) => {
    e.preventDefault();

    const pastedText = e.clipboardData
      .getData("Text")
      .slice(0, 4)
      .replace(/[^0-9]/g, "");
    const inputs = document.querySelectorAll("input[type='text']");
    for (let i = 0; i < pastedText.length; i++) {
      inputs[i].value = pastedText[i];
    }
    inputs[Math.min(pastedText.length - 1, 3)].focus();
  }, []);

  return (
    <Wrapper>
      <Header />
      <H1>Email confirmation</H1>
      <Section>
        <P>
          We’ve sent an email with a confirmation code to{" "}
          <Span>{"sfdfsdfsdfsdfsd"}</Span>
        </P>
      </Section>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          {["first", "second", "third", "fourth"].map((name, index) => (
            <Input
              key={name}
              maxLength="1"
              type="text" // Changed from "number" to "text"
              pattern="[0-9]"
              {...register(name)}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
            />
          ))}
        </FormDiv>

        {notFilledError ? <PError>{notFilledError}</PError> : ""}
        {errors ? <PError>{errorMessage}</PError> : ""}

        {/* make this one defined by timer next time */}

        <TimerComponent />

        <ButtonDiv>
          <ButtonBack type="submit">
            <NavLinkStyled to="/login">Back</NavLinkStyled>
          </ButtonBack>
          <Button type="submit">Submit</Button>
        </ButtonDiv>
      </Form>
    </Wrapper>
  );
});

export default EmailConfirm;
