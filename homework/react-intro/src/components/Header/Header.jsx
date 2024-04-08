import styles from '../../styles/base.module.css';
import header from './Header.module.css';
import Navigation from '../../elements/Navigation/Navigation';
import classNames from 'classnames';

const Header = () => {
  return (
    <header className={header.header}>

      <div className={classNames([styles.wrapper, header.wrapper])}>

        <div className={header.logo}>

          <a href="../../index.html">

            <h1 className={header.heading}>ARTISIAN</h1>

          </a>

        </div>

        <Navigation></Navigation>

      </div>
      
    </header>
  );
};

export default Header;
