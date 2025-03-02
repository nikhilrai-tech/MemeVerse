// src/store/slices/memeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Meme {
  id: string;
  url: string;
  title: string;
  likes: number;
  createdAt?: string;
  userId?: string;
}

interface MemeState {
  trending: Meme[];
  userMemes: Meme[];
  loading: boolean;
  error: string | null;
}

const initialState: MemeState = {
  trending: [],
  userMemes: [],
  loading: false,
  error: null,
};

const memeSlice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    setTrending: (state, action: PayloadAction<Meme[]>) => {
      state.trending = action.payload;
    },
    addUserMeme: (state, action: PayloadAction<Meme>) => {
      state.userMemes.unshift(action.payload);
    },
    setUserMemes: (state, action: PayloadAction<Meme[]>) => {
      state.userMemes = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setTrending, 
  addUserMeme, 
  setUserMemes, 
  setLoading, 
  setError 
} = memeSlice.actions;

export default memeSlice.reducer;