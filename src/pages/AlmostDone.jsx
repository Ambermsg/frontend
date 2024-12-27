import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query"; // Import useMutation from React Query
import axios from "axios";

// Styled Components
const StyledUploader = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #888;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="avatar"
        control={control}
        render={({ field }) => (
          <>
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
          </>
        )}
      />
      {errors.avatar && <ErrorMessage>{errors.avatar.message}</ErrorMessage>}

      <button type="submit" disabled={uploadAvatarMutation.isLoading}>
        {uploadAvatarMutation.isLoading ? "Uploading..." : "Upload Avatar"}
      </button>

      {/* Display error message if upload fails */}
      {uploadAvatarMutation.isError && (
        <ErrorMessage>Failed to upload image. Please try again.</ErrorMessage>
      )}
    </form>
  );
};

export default AlmostDone;
