import { BorderProps } from "../border";
import style from './style.module.scss';
import cx from 'classnames';

export function TripleBorder({ children, className }: BorderProps) {
  return (
    <div className={cx(style.borderOuter, className)}>
      <div className={style.borderMiddle}>
        <div className={style.borderInner}>
          {children}
        </div>
      </div>
    </div>
  );
} 
