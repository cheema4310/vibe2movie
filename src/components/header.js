import Image from 'next/image';

export default function Header({
  setSelectedVibe,
  selectedVibe,
  setMovieList,
}) {
  const handleClick = () => {
    setSelectedVibe('');
    setMovieList(null);
  };
  return (
    <div className="flex-center w-full bg-dark p-2 rounded-2xl mb-4">
      <div className="flex-1">
        <Image
          src="/icon.svg"
          width={50}
          height={50}
          onClick={handleClick}
          alt="Picture of the icon"
          className="hoverBg rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex-1 text-center logo">
        {selectedVibe ? (
          <div>
            <span className="text-glassOrange">{selectedVibe}</span> Vibe
          </div>
        ) : (
          <div>
            Vibe<span className="text-glassOrange">2</span>Movie
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-end items-end">
        {selectedVibe && (
          <div
            onClick={handleClick}
            className="p-2 cursor-pointer font-btn font-medium rounded-xl border-[1.5px] border-glassOrange hoverBg hover:border-dark"
          >
            Edit Vibe
          </div>
        )}
      </div>
    </div>
  );
}
