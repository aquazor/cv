import { useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

export function useDropdownToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleToggle = () => setIsOpen((curr) => !curr);

  useClickOutside(isOpen, ref, handleClose);

  return { isOpen, ref, handleClose, handleOpen, handleToggle };
}
