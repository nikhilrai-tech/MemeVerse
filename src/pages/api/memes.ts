// src/pages/api/memes.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, category = 'Trending', search = '' } = req.query;

  try {
    // Example API URL - replace with your actual meme API
    const apiUrl = `https://api.imgflip.com/get_memes`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    let filteredMemes = data.data.memes;

    // Filter by search term if provided
    if (search) {
      filteredMemes = filteredMemes.filter((meme: any) =>
        meme.name.toLowerCase().includes(search.toString().toLowerCase())
      );
    }

    // Filter by category if needed
    if (category === 'New') {
      // Implement logic to filter for new memes
      // This is just a placeholder; replace with actual logic
      filteredMemes = filteredMemes.filter((meme: any) => meme.createdAt > Date.now() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
    } else if (category === 'Classic') {
      // Implement logic to filter for classic memes
      // This is just a placeholder; replace with actual logic
      filteredMemes = filteredMemes.filter((meme: any) => meme.createdAt < Date.now() - 7 * 24 * 60 * 60 * 1000); // Older than 7 days
    } else if (category === 'Random') {
      // Random category can be handled differently if needed
      // For now, we can just shuffle the memes
      filteredMemes = filteredMemes.sort(() => Math.random() - 0.5);
    }

    // Implement pagination
    const pageSize = 9;
    const startIndex = (Number(page) - 1) * pageSize;
    const paginatedMemes = filteredMemes.slice(startIndex, startIndex + pageSize);

    res.status(200).json(paginatedMemes);
  } catch (error) {
    console.error('Error fetching memes:', error);
    res.status(500).json({ error: 'Failed to fetch memes' });
  }
}