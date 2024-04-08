import classNames from 'classnames';

import Blog from '../../elements/Blog/Blog';

import News from '../../elements/News/News';

import styles from '../../styles/base.module.css';

import main from './Main.module.css';

const Main = () => {
  
  return (

    <div className={classNames([styles.wrapper, main.wrapper])}>

      <main className={main.block}>

        <Blog></Blog>

        <News></News>

      </main>

    </div>

  );
};

export default Main;
