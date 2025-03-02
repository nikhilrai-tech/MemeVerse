// src/pages/meme/[id].tsx
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Meme } from '@/store/slices/memeSlice';

export default function MemeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const userMemes = useSelector((state: RootState) => state.memes.userMemes);
  const meme = userMemes.find((m: Meme) => m.id === id);

  if (!meme) {
    return <p>Meme not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{meme.title}</h1>
      <img src={meme.url} alt={meme.title} className="w-full h-auto mb-4" />
      <p className="text-sm text-gray-500">Uploaded on: {new Date(meme.createdAt!).toLocaleDateString()}</p>
      <p className="mt-4">Likes: {meme.likes}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Like</button>
    </div>
  );
}