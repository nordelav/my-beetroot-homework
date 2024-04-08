import styles from '../../styles/base.module.css';
import classNames from 'classnames';
import banner from './Banner.module.css';

const Banner = () => {

  return (
    
    <div className={banner.banner}>

      <img src="/bg.jpg" alt="background" />

      <div className={classNames([styles.wrapper, banner.wrapper])}>

        <div className={banner.text}>

          <h2 className={banner.heading}>

            Manifest is a newborn theme. Clean, simple and fast.
          </h2>

        </div>

      </div>

    </div>
    
  );
};
export default Banner;
