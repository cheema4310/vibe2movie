```markdown
# Vibe2Movie 🎬

**Find the perfect movie for your current vibe.**  
A fast, fun, and beautiful movie recommendation app that instantly suggests films + official trailers based on how you're feeling right now.

Built solo in just **12 days** (7 May 2024 – 18 May 2024) using **Next.js 14 (App Router)**.

![Vibe2Movie Preview](https://github.com/cheema4310/vibe2movie/blob/main/public/preview.gif?raw=true)  
*(Live demo → https://vibe2movie.vercel.app)*

### Live Demo
🔗 https://vibe2movie.vercel.app

### Features
- 20+ carefully curated vibes (Chill, Romantic, Adventurous, Nostalgic, Hype, Dark, Cozy, Thrilled, Heartbroken, etc.)
- Instantly get 6 perfectly matched movie recommendations with official YouTube trailers embedded
- Beautiful posters, ratings, release year, runtime, and overview
- Fully responsive – looks stunning on mobile, tablet & desktop
- Lightning-fast with Next.js Server Components & Image optimization
- Zero login, zero accounts – just vibes → movies

### Tech Stack
- Next.js 14 (App Router + Server Components)
- TypeScript
- Tailwind CSS
- TMDB API (movie data)
- YouTube Data API v3 (trailers)
- Deployed on Vercel

### How to Run Locally

```bash
git clone https://github.com/cheema4310/vibe2movie.git
cd vibe2movie
npm install
```

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_YT_API_KEY=your_youtube_api_key_here
```

Get your free API keys:
- TMDB → https://www.themoviedb.org/settings/api
- YouTube Data API → https://console.cloud.google.com/

Then run:

```bash
npm run dev
```

Open http://localhost:3000

### Project Status
✅ Fully functional and live on Vercel  
✅ My first full Next.js 14 App Router project — absolutely loved building it 🚀

### Future Ideas (maybe someday)
- Random Vibe button
- Save favorite movies / watchlist
- Spotify playlist pairing for each vibe
- Multi-vibe selection mode
- More vibes: Rainy Day, Gym Pump, Late Night Drive, etc.

### Credits
Made with ❤️ by [@cheema4310](https://github.com/cheema4310)  
Movie data powered by [TMDB](https://www.themoviedb.org/)  
Trailers via YouTube

---

**Built in 12 days. Shipped. No excuses.**

⭐ If this helped you find your next movie or just made you smile — please give it a star!  
It means the world to a solo developer.
```
