import { createContext, useContext, useEffect, useRef } from 'react';

const Context = createContext(false);

export default function MountedProvider({ children }: { children: React.ReactNode }) {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return <Context value={isMounted.current}>{children}</Context>;
}

export function useMounted() {
  return useContext(Context);
}
