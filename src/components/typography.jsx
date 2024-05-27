import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function Typography({ children, className }) {
  return (
    <p
      className={twMerge(
        clsx('text-center text-2xl font-bold', className && className)
      )}
    >
      {children}
    </p>
  );
}

export default Typography;
