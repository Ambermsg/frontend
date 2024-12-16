import { useParams } from "react-router";

const Register = () => {
  let params = useParams();
  return (
    <>
      <h1>It`s a register page with id: {params.id}</h1>
    </>
  );
};

export default Register;
