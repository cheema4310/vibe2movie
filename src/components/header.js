import Image from 'next/image';

export default function Header() {
  return (
    <div className="mt-5 w-11/12 mx-auto md:w-5/6 lg:w-2/3 2xl:w-1/2">
      <div className="flex-center w-full lg:w-5/6 mx-auto bg-dark p-2 rounded-xl">
        <div className="flex-1">
          <Image
            src="/icon.svg"
            width={50}
            height={50}
            alt="Picture of the icon"
            className="hoverBg rounded-lg cursor-pointer"
          />
        </div>
        <div className="flex-1 text-center logo">
          Vibe<span className="text-glassOrange">2</span>Movie
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
