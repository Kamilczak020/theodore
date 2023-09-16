import { BorderProps } from "../border";
import style from './style.module.scss';
import cx from 'classnames';

export function SimpleBorder({ children, className }: BorderProps) {
  return (
    <div className={cx(style.border, className)}>
      {children}
    </div>
  );
} 
