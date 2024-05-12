import { vibes } from '@/data';
import VibeCard from './vibeCard';

export default function HeroSelection({ setSelectedVibe }) {
  return (
    <>
      <h2 className="mainHeading py-4">
        Discover <span className="text-glassOrange">movies</span> that match
        your Cinematic <span className="text-glassOrange">vibe</span>
      </h2>
      <h4 className="subHeading py-6">
        What movie vibe speaks to you right now
        <span className="text-glassOrange">?</span>
      </h4>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vibes.map((vibe, index) => (
            <VibeCard
              key={index}
              vibe={vibe}
              setSelectedVibe={setSelectedVibe}
            />
          ))}
        </div>
      </div>
    </>
  );
}
