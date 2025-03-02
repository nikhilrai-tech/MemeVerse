// src/components/shared/MemeCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

interface MemeCardProps {
  meme: {
    id: string;
    url: string;
    title: string;
    likes: number;
  };
}

export const MemeCard = ({ meme }: MemeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={meme.url}
          alt={meme.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{meme.title}</h3>
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-1">
            <FaHeart />
            <span>{meme.likes}</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaComment />
          </button>
          <button className="flex items-center space-x-1">
            <FaShare />
          </button>
        </div>
      </div>
    </motion.div>
  );
};