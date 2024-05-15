import TrailerSkeleton from './trailerSkeleton';

export default function PageSkeleton() {
  return (
    <>
      <TrailerSkeleton />
      <div className="my-2 w-2/3 h-11 animate-loading rounded-lg"></div>
      <div className="w-36 h-7 animate-loading rounded-lg"></div>
      <div className="flex items-center gap-3 my-2">
        <div className="h-9 w-20 rounded-3xl border border-glassOrange animate-loading"></div>
        <div className="h-9 w-20 rounded-3xl border border-glassOrange animate-loading"></div>
        <div className="h-9 w-20 rounded-3xl border border-glassOrange animate-loading"></div>
        <div className="h-9 w-20 rounded-3xl border border-glassOrange animate-loading"></div>
      </div>
      <div className="w-full h-52 animate-loading rounded-lg"></div>
    </>
  );
}
