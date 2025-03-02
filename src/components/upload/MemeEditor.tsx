// src/components/upload/MemeEditor.tsx
import { useState, useRef } from 'react';
import Image from 'next/image';

interface MemeEditorProps {
  onSubmit: (imageData: string, title: string) => void;
  isUploading: boolean;
}

export function MemeEditor({ onSubmit, isUploading }: MemeEditorProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedImage && title) {
      onSubmit(selectedImage, title);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Meme Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a title for your meme"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Upload Image
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full px-4 py-2 text-sm border-2 border-dashed rounded-md hover:border-blue-500"
          >
            {selectedImage ? 'Change Image' : 'Select Image'}
          </button>
        </div>

        {selectedImage && (
          <div className="relative w-full h-64">
            <Image
              src={selectedImage}
              alt="Selected meme"
              fill
              className="object-contain rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedImage || !title || isUploading}
          className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md 
            ${(!selectedImage || !title || isUploading) 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-600'}`}
        >
          {isUploading ? 'Uploading...' : 'Upload Meme'}
        </button>
      </form>
    </div>
  );
}