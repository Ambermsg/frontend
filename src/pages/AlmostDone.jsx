import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query"; // Import useMutation from React Query
import axios from "axios";
import Header from "../components/Header";
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

// Styled Components
const StyledUploader = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border: 4px solid #262626;
  background-color: rgba(38, 38, 38, 0.53);
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const Img = styled.img`
  position: relative;
  left: 42px;
  bottom: 30px;
  border-radius: 50%;
  background-color: #262626;
`;

const Div = styled.div`
  width: 108px;
  margin: auto;

  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;

  &:hover ${StyledUploader} {
    border-color: var(--theme-contrast);
  }
  &:hover ${Img} {
    background-color: var(--theme-contrast);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
`;

const schema = yup.object({
  avatar: yup
    .mixed()
    .required("An image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      return value?.type?.startsWith("image/");
    }),
});

const AlmostDone = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: null,
    },
    resolver: yupResolver(schema),
  });

  const handleFileChange = (event, onChange) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set image preview
        setValue("avatar", file); // Update form value
        onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e, onChange) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set image preview
        setValue("avatar", file); // Update form value
        onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // React Query mutation for file upload
  const uploadAvatarMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Upload Success:", data);
    },
    onError: (error) => {
      console.error("Upload Error:", error.response?.data || error.message);
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar);
    console.log("data.avatar: ", data.avatar);

    // Trigger the mutation to upload the image
    uploadAvatarMutation.mutate(formData);
  };

  return (
    <Wrapper>
      <Header />
      <H1>Almost done!</H1>
      <P>Customize your profile.</P>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <Div>
              <StyledUploader
                onDrop={(e) => handleDrop(e, field.onChange)}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("fileInput").click()}
              >
                {imageSrc ? (
                  <img src={imageSrc} alt="Avatar" />
                ) : (
                  <p>Click or Drop an image</p>
                )}
              </StyledUploader>
              <HiddenFileInput
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, field.onChange)}
              />
              <Img
                src="/correct-image.svg"
                alt="change image"
                onDrop={(e) => handleDrop(e, field.onChange)}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("fileInput").click()}
              />
            </Div>
          )}
        />
        {errors.avatar && <ErrorMessage>{errors.avatar.message}</ErrorMessage>}

        <NavLinkStyled to="/register/second">Back</NavLinkStyled>

        <Button type="submit" disabled={uploadAvatarMutation.isLoading}>
          {uploadAvatarMutation.isLoading ? "Uploading..." : "Enter"}
        </Button>

        {/* Display error message if upload fails */}
        {uploadAvatarMutation.isError && (
          <ErrorMessage>Failed to upload image. Please try again.</ErrorMessage>
        )}
      </form>
    </Wrapper>
  );
};

export default AlmostDone;
