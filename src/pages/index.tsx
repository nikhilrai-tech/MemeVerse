// src/pages/index.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to MemeVerse
      </h1>
      <p className="text-center">
        Your one-stop destination for all things memes!
      </p>
    </div>
  );
}