import { ArticleMap } from './articles';
import style from './style.module.scss';
import cx from 'classnames';

type NewsProps = {
  article: string;
  className?: string;
};

export function News({ article, className }: NewsProps) {
  return (
    <p className={cx(style.article, className)}>
      {ArticleMap.get(article)}
    </p>   
  )
}
