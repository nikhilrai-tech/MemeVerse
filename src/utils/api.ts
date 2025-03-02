// src/utils/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_IMGFLIP_API;

export const getMemes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_memes`);
    return response.data.data.memes;
  } catch (error) {
    console.error('Error fetching memes:', error);
    throw error;
  }
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};