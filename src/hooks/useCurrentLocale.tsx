import { useRouter } from 'next/router';
import { en, uk } from '@/constants/locales';

export default function useCurrentLocale() {
  const router = useRouter();
  const localeFile = router.locale === 'en' ? en : uk;
  return { router, localeFile, locales: { en, uk } };
}
