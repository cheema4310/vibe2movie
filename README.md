# Vibe2Movie 🎬

**Find the perfect movie for your current vibe.**  
A fast, fun movie recommendation web app that suggests films based on the mood you're feeling right now.

Built in just **12 days** (7 May 2024 – 18 May 2024) using **Next.js 14 (App Router)**.

![Vibe2Movie Preview](https://github.com/cheema4310/vibe2movie/blob/main/public/preview.gif?raw=true)  
*(Live demo: https://vibe2movie.vercel.app)*

### Live Demo
🔗 https://vibe2movie.vercel.app

### Features
- Choose your vibe from 20+ moods (Chill, Adventurous, Romantic, Nostalgic, Hype, Dark, Cozy, etc.)
- Instantly get perfectly matched movie recommendation
- Powered by TMDB API with beautiful posters and details
- Fully responsive – works great on mobile & desktop
- Super fast loading with Next.js Image optimization
- No login, no bullshit – just vibes → movies

### Tech Stack
- **Next.js 14** (App Router + Server Components)
- **Tailwind CSS**
- **TMDB API**
- **Vercel** (deployment)

### How to Run Locally

Create a .env.local file in the root:

NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_URL=your_tmdb_url
NEXT_PUBLIC_YT_API_KEY=your_yt_api_key

Get your free API key from:
https://www.themoviedb.org/settings/api

```bash
git clone https://github.com/cheema4310/vibe2movie.git
cd vibe2movie
npm run dev
