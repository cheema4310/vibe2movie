'use client';

import { Suspense, useEffect, useState } from 'react';
import HeroSelection from './heroSelection';

import SuggestMovie from './suggestMovie';
import { vibesGenre } from '@/data';
import config from '@/lib/config';
import Header from './header';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);
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
    if (selectedVibe === '') {
      return;
    }

    // getting movie list
    const getMovieList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${url}&with_genres=${genre_ids_str}`,
          options
        );
        const data = await response.json();
        setMovieList(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieList();
  }, [selectedVibe, genre_ids_str, url]);

  return (
    <div className="mt-5 w-11/12 mx-auto md:w-5/6 lg:w-2/3 2xl:w-1/2">
      <Header
        setSelectedVibe={setSelectedVibe}
        selectedVibe={selectedVibe}
        setMovieList={setMovieList}
      />
      {!selectedVibe && <HeroSelection setSelectedVibe={setSelectedVibe} />}
      {isLoading && <p>Fetching Movie Data from TMDB</p>}
      {selectedVibe && movieList ? (
        <SuggestMovie movieList={movieList} />
      ) : null}
    </div>
  );
}
