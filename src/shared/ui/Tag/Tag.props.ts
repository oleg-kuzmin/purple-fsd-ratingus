import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import type { Icontype } from '../../../assets/Icon/Icon';

export interface TagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  size: 's' | 'm';
  color: 'orange' | 'red' | 'green' | 'greenLight';
  icon: Icontype;
  children: ReactNode;
}
