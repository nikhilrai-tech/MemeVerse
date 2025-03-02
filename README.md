This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Project Requirements
1. Features & Functionalities
Homepage (Landing Page)


Display trending memes dynamically (Fetched from an API).
Interactive animations & transitions.
Dark mode toggle.
Meme Explorer Page


Infinite scrolling or pagination.
Meme categories filter (Trending, New, Classic, Random).
Search functionality with debounced API calls.
Sort by likes, date, or comments.
Meme Upload Page


Upload memes (image/gif format).
Add funny captions using a text editor.
Option to generate AI-based meme captions (Use a meme-related API).
Preview before uploading.
Meme Details Page


Dynamic routing (/meme/:id).
Display meme details, likes, comments, and sharing options.
Comment system (Local storage for now).
Like buttons with animation and local storage persistence.
User Profile Page


Shows user-uploaded memes.
Edit profile info (Name, Bio, Profile Picture).
View liked memes (saved in local storage or API).
Leaderboard Page


Top 10 most liked memes.
User rankings based on engagement.
404 Page (Easter Egg)


A fun, meme-based 404 error page when users visit a non-existent route.

2. Tech Stack
Next.js/React (Pages & App Router)
React (Hooks & Components)
Tailwind CSS (For Styling)
Framer Motion / GSAP (For Animations)
Redux Toolkit / Context API (State Management)
Local Storage / IndexedDB (For Caching Data)
Meme APIs (For Fetching Memes)
Cloudinary / Firebase (For Image Uploads)
Lighthouse / React Profiler (For Performance Optimization)

3. Free APIs for Use
Meme APIs
Imgflip API - Generate and fetch popular memes (Docs)
Meme Generator API - Create memes dynamically (Docs)
Image Upload & Storage APIs
ImgBB API - Free image hosting for meme uploads (Docs)