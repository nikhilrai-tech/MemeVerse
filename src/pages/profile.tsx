// src/pages/profile.tsx
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Meme } from '@/store/slices/memeSlice';
import Link from 'next/link';

export default function Profile() {
  const userMemes = useSelector((state: RootState) => state.memes.userMemes);
  const userId = 'current-user-id'; // Replace with actual user ID from authentication context

  useEffect(() => {
    // You can fetch user data here if needed
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <p className="mb-6">Welcome back! Here are your uploaded memes:</p>

      {userMemes.length === 0 ? (
        <p>No memes uploaded yet. Start uploading!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userMemes.map((meme: Meme) => (
            <div key={meme.id} className="border rounded-lg overflow-hidden shadow-md">
              <img src={meme.url} alt={meme.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{meme.title}</h2>
                <p className="text-sm text-gray-500">Uploaded on: {new Date(meme.createdAt!).toLocaleDateString()}</p>
                <Link href={`/meme/${meme.id}`}>
                  {/* Remove the <a> tag and place the text directly inside <Link> */}
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}