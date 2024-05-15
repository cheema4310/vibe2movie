import { movieGenres } from '@/data';
import config from '@/lib/config';
import { useEffect, useState } from 'react';

export default function SuggestMovie({ movieList }) {
  const generateRand = Math.floor(Math.random() * 20);
  const [movie, setMovie] = useState(movieList[generateRand]);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const nextMovieHandler = () => {
    setMovie(movieList[generateRand]);
  };

  useEffect(() => {
    const fetchTrailer = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movie.title}+trailer&key=${config.ytApi}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [trailerUrl, movie]);

  const year = movie.release_date.substring(0, 4);
  const rating = movie.vote_average.toFixed(1);
  const genre_ids = movie.genre_ids;
  const genre_texts = genre_ids.map((genreId) => movieGenres[genreId]);

  return (
    <div className="grid">
      <div className="">
        {isLoading && <p>Fetching Youtube tailer for the movie</p>}
        {trailerUrl && (
          <iframe
            // width="560"
            // height="315"
            className="w-full h-80 rounded-t-2xl"
            src={trailerUrl}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="py-2 text-glassOrange text-3xl font-black font-para">
        {movie.title}
      </div>
      <div className="pb-2 text-lg font-bold font-heading">
        &bull; <span className="text-glassOrange">{year}</span> ⭐{' '}
        <span className="text-lightest">{rating}</span>/10
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {genre_texts.map((genre) => (
          <div className="px-4 py-2 rounded-3xl font-semibold text-xs border-[1.5px] border-glassOrange">
            {genre}
          </div>
        ))}
      </div>

      <div className="pt-4 w-full h-52 overflow-hidden font-para font-medium text-justify">
        {movie.overview}
      </div>
      <div onClick={nextMovieHandler} className="flex justify-end items-center">
        <div className="p-3 rounded-2xl cursor-pointer font-btn font-medium border-glassOrange border-[1.5px] hoverBg">
          Next &#8594;
        </div>
      </div>
    </div>
  );
}
