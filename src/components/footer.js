import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-6 text-sm text-center font-light py-2">
      Built by{' '}
      <Link
        href="https://cv.buypits.com/"
        target="blank"
        className="text-glassOrange font-fancyFont font-black text-xl"
      >
        Cheema
      </Link>
    </div>
  );
}
