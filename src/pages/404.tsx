import Link from 'next/link';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import useCurrentLocale from '@/hooks/useCurrentLocale';

export default function ErrorPage() {
  const {
    localeFile: { error },
  } = useCurrentLocale();

  return (
    <div className="flex grow flex-col items-center justify-center gap-6">
      <h2 className="flex flex-col gap-2 text-center">
        <span className="text-6xl">😯🙁😭</span>{' '}
        <span className="text-5xl">{error.message}</span>
      </h2>
      <div className="relative after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-[width] after:duration-300 hover:after:w-full">
        <Link href={'/'} className="flex items-center gap-2 text-2xl">
          {error.goHome}
          <FaSquareArrowUpRight className="text-orange-500" />
        </Link>
      </div>
    </div>
  );
}
