import { ReactNode } from "react";
import style from './style.module.scss';
import { BorderedContainer } from "../BorderedContainer";

type PageLayoutProps = {
  children: ReactNode | Array<ReactNode>;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={style.page}>
      <BorderedContainer containerClassName={style.pageContainer} type="triple">
        {children}
      </BorderedContainer>
    </div>
  );
}
