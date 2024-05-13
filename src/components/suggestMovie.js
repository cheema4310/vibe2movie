import config from '@/lib/config';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuggestMovie({ movieList }) {
  const movie = movieList[0];
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'id',
              q: `${movie.title} trailer`,
              type: 'video',
              key: config.ytApi,
            },
          }
        );

        if (response.data.items.length > 0) {
          const videoId = response.data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [movie]);

  console.log(trailerUrl);

  console.log(movie);
  return (
    <div className="flex flex-col">
      <div>
        {trailerUrl && (
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div>{movie.title}</div>
      <div>time duration rating</div>
      <div>movie genres</div>
      <div>{movie.overview}</div>
    </div>
  );
}
