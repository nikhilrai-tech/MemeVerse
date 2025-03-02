// src/pages/upload.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { MemeEditor } from '../components/upload/MemeEditor';
import { addUserMeme } from '../store/slices/memeSlice';
import toast from 'react-hot-toast';

export default function Upload() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (imageData: string, title: string) => {
    try {
      setUploading(true);
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newMeme = {
        id: uuidv4(),
        url: imageData,
        title,
        likes: 0,
        createdAt: new Date().toISOString(),
        userId: 'current-user-id'
      };

      dispatch(addUserMeme(newMeme));
      toast.success('Meme uploaded successfully!');
      router.push('/profile');
    } catch (error) {
      toast.error('Failed to upload meme');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Meme</h1>
      <MemeEditor 
        onSubmit={handleUpload}
        isUploading={uploading}
      />
    </div>
  );
}