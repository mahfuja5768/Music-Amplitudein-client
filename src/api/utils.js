import axios from "axios";

export const imageUpload = async (image) => {
  console.log(image)
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOISTING_KEY}`,
    formData
  );
  return data;
};
