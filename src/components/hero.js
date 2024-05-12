import { vibes } from '@/data';
import VibeCard from './vibeCard';

export default function Hero() {
  return (
    <div className="py-6 w-11/12 mx-auto md:w-5/6 lg:w-2/3 2xl:w-1/2">
      <h2 className="mainHeading">
        Discover <span className="text-glassOrange">movies</span> that match
        your Cinematic <span className="text-glassOrange">vibe</span>
      </h2>
      <h4 className="subHeading py-6">
        What movie vibe speaks to you right now
        <span className="text-glassOrange">?</span>
      </h4>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vibes.map((vibe) => (
            <VibeCard vibe={vibe} />
          ))}
        </div>
      </div>
    </div>
  );
}
