// src/pages/explore.tsx
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MemeCard } from '../components/shared/MemeCard';
import { useDebounce } from '../hooks/useDebounce';

const CATEGORIES = ['Trending', 'New', 'Classic', 'Random'];

interface Meme {
  id: string;
  title: string;
  url: string;
  likes: number;
  category: string;
}

export default function Explore() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [category, setCategory] = useState('Trending');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const debouncedSearch = useDebounce(search, 500);
  const { ref, inView } = useInView();

  // Reset memes when search or category changes
  useEffect(() => {
    setMemes([]);
    setPage(1);
    fetchMemes(1);
  }, [debouncedSearch, category]);

  // Load more when scrolling
  useEffect(() => {
    if (inView) {
      loadMoreMemes();
    }
  }, [inView]);

  const fetchMemes = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/memes?page=${pageNum}&category=${category}&search=${debouncedSearch}`
      );
      const data = await response.json();
      
      if (pageNum === 1) {
        setMemes(data);
      } else {
        setMemes(prev => [...prev, ...data]);
      }
    } catch (error) {
      console.error('Error loading memes:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreMemes = async () => {
    if (!loading) {
      await fetchMemes(page + 1);
      setPage(prev => prev + 1);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSearch('');
    setPage(1);
    setMemes([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search memes..."
          className="w-full p-3 rounded-lg border dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition-colors duration-200 ${
              category === cat 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading && memes.length === 0 ? (
        <div className="text-center py-8">Loading...</div>
      ) : memes.length === 0 ? (
        <div className="text-center py-8">No memes found</div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </motion.div>
      )}

      <div ref={ref} className="mt-8 text-center">
        {loading && memes.length > 0 && (
          <div className="py-4">Loading more memes...</div>
        )}
      </div>
    </div>
  );
}