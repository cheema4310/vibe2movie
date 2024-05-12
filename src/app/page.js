import Hero from '@/components/hero';
import config from '@/lib/config';

export default function Home() {
  // TMDB --GET Req-- Variables

  // const url = config.tmdbUrl;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${config.tmdbApi}`,
  //   },
  // };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error('error:' + err));
  return (
    <main>
      <Hero />
    </main>
  );
}
