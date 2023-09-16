import { ReactNode } from 'react';
import style from './style.module.scss';
import cx from 'classnames';

type RowProps = {
  children: ReactNode | Array<ReactNode>;
  className?: string;
}

export function Row({ children, className }: RowProps) {
  return (
    <div className={cx(style.row, className)}>
      {children}
    </div>
  );
} 
