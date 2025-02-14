import Link from 'next/link';
import React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

interface Props {
  leftLinkProps: { href: string; text: string };
  rightLinkProps: { href: string; text: string };
}

export default function PageNavigation({ leftLinkProps, rightLinkProps }: Props) {
  return (
    <div className="flex justify-between">
      <Link
        href={leftLinkProps.href}
        className="group relative flex items-center gap-1.5 overflow-hidden after:absolute after:bottom-0 after:left-full after:h-[2px] after:w-full after:bg-orange-500 after:transition-[left] after:duration-300 hover:after:left-0"
      >
        <GoArrowLeft className="translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-orange-500" />
        {leftLinkProps.text}
      </Link>

      <Link
        href={rightLinkProps.href}
        className="group relative flex items-center gap-1.5 overflow-hidden after:absolute after:-left-full after:bottom-0 after:h-[2px] after:w-full after:bg-orange-500 after:transition-[left] after:duration-300 hover:after:left-0"
      >
        {rightLinkProps.text}
        <GoArrowRight className="-translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-orange-500" />
      </Link>
    </div>
  );
}
