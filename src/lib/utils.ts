import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: (string | object | undefined)[]) =>
  twMerge(clsx(classes));
