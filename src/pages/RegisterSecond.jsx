import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const H1 = styled.h1`
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.69px;
  letter-spacing: -0.01em;
  text-align: center;

  margin-bottom: 20px;
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
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
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const schema = yup.object({
  displayName: yup.string().required("Please enter your display name"),
  username: yup.string().required("Please enter your username"),
});

const RegisterSecond = () => {
  // let params = useParams();

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
      <H1>Welcome to Amber!</H1>
      <P>What should we call you?</P>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Display name
          </Label>
          <Input type="text" {...register("displayName")} />
          <PError>{errors.displayName?.message}</PError>
        </FormDiv>

        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Username
          </Label>
          <Input type="text" {...register("username")} />
          <PError>{errors.username?.message}</PError>
        </FormDiv>
        <ButtonDiv>
          <Button type="submit">Continue</Button>
        </ButtonDiv>
      </Form>
    </Wrapper>
  );
};

export default RegisterSecond;
