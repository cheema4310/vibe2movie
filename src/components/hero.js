'use client';

import { useEffect, useState } from 'react';
import HeroSelection from './heroSelection';

import SuggestMovie from './suggestMovie';
import { vibesGenre } from '@/data';
import config from '@/lib/config';

export default function Hero() {
  const [selectedVibe, setSelectedVibe] = useState('');
  const [movieList, setMovieList] = useState(null);

  // TMDB Genre_ID
  let genre_ids;
  let genre_ids_str = '';

  // TMDB get req variables
  const url = config.tmdbUrl;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${config.tmdbApi}`,
    },
  };

  // getting movie list
  const getMovieList = async () => {
    try {
      const response = await fetch(
        `${url}&with_genres=${genre_ids_str}`,
        options
      );
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenreIDs = () => {
    genre_ids = vibesGenre[selectedVibe];
  };

  if (selectedVibe) {
    // get ids based on selection
    getGenreIDs();

    // genre query string format
    genre_ids.forEach((id, index) => {
      if (index === 0) {
        genre_ids_str += id;
      } else {
        genre_ids_str += `,${id}`;
      }
    });
  }

  useEffect(() => {
    getMovieList();
  }, [selectedVibe]);

  return (
    <div className="py-6 w-11/12 mx-auto md:w-5/6 lg:w-2/3 2xl:w-1/2">
      {!selectedVibe ? (
        <HeroSelection setSelectedVibe={setSelectedVibe} />
      ) : (
        <SuggestMovie movieList={movieList} />
      )}
    </div>
  );
}
