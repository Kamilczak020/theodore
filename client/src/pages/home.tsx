import { BorderedContainer } from '../components/BorderedContainer';
import { SimpleBorder } from '../components/BorderedContainer/borders/simple';
import { Column } from '../components/Column';
import { News } from '../components/News';
import { PageLayout } from '../components/PageLayout';
import { PaperTitle } from '../components/PaperTitle';
import { Row } from '../components/Row';
import style from './style.module.scss';
import cx from 'classnames';

function Home() {
  return (
    <PageLayout>
      <Column className={style.paper}>
        <PaperTitle />
        <BorderedContainer type="block" borderClassName={style.today}>
          Czwartek, 16 września 1920 roku
        </BorderedContainer>
        <div className={style.grid}>
          <Column className={style.mainArticle}>
          <p className={style.text}>
            Bomba w Nowym Jorku!
          </p>
          <BorderedContainer containerClassName={style.imgContainer} type='simple'>
            <img className={style.mainImg} src='src/assets/images/wall-street-bombing.jpg' />
          </BorderedContainer>
          <News article='bombing-1' />
          <News article='bombing-2' />
          <News article='bombing-3' />
          <News article='bombing-4' />
          </Column>
          <Column className={style.right}>
            <SimpleBorder className={style.story}>
              <Column>
                <h3>Opowieści dziwnej treści</h3>
                <span>Czyli historie z życia naszych czytelników</span>
                <Column className={style.firstCol}>
                  <News className={cx(style.article, style.firstArt)} article='story-1-1' />
                  <a className={style.link} href='/dead-rosa-society'>{' zalogowałam się '}</a>
                  <News className={cx(style.article, style.firstArt)} article='story-1-2' />
                </Column>
                <News className={style.article} article='story-2' />
              </Column>
            </SimpleBorder>
            <Row className={style.movie}>
              <Column>
                <img src='src/assets/images/caligari.png' />
                <p>„Jest to najnowocześniejszy, najodważniejszy, najbardziej aktualny film, jaki świat kiedykolwiek widział.“</p>
                <span>- Demencja Kruk</span>
              </Column>
              <SimpleBorder className={style.continue}>
                <h3>Opowieści ciąg dalszy</h3>
              </SimpleBorder>
            </Row>
          </Column>
        </div>
      </Column>
    </PageLayout>
  );
}

export default Home;
