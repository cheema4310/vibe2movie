import Hero from '@/components/hero';

export default function Home() {
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
