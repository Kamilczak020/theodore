import { ReactNode, useMemo } from 'react';
import style from './style.module.scss';
import { BorderMap } from './borders/border';
import cx from 'classnames';

type ContainerProps = {
  type: string;
  children: ReactNode | Array<ReactNode>;
  containerClassName?: string;
  borderClassName?: string;
}

export function BorderedContainer({ type, children, containerClassName, borderClassName }: ContainerProps) {
  const borderElement = useMemo(() => {
    const Element = BorderMap.get(type);
    return Element ? <Element className={borderClassName}>{children}</Element> : null;

  }, [type, children, borderClassName]);

  return (
    <div className={cx(style.container, containerClassName)}>
      {borderElement}
    </div>
  )
}
