import { ReactNode } from 'react';
import style from './style.module.scss';
import cx from 'classnames';

type ColumnProps = {
  children: ReactNode | Array<ReactNode>;
  className?: string;
}

export function Column({ children, className }: ColumnProps) {
  return (
    <div className={cx(style.column, className)}>
      {children}
    </div>
  );
} 
