export default function VibeCard({ vibe, setSelectedVibe }) {
  const handleClick = () => {
    setSelectedVibe(vibe);
  };
  return (
    <div
      onClick={handleClick}
      className="py-4 font-heading text-center uppercase border-2 border-glassOrange font-bold rounded-lg cursor-pointer transition hoverBg"
    >
      {vibe}
    </div>
  );
}
