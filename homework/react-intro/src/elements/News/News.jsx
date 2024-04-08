import news from './News.module.css';

const News = () => {
  return (
    <div className={news.block}>
      <p className={news.heading}>News</p>

      <ul className={news.list}>
        <li className={news.listItem}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quaerat recusandae ipsam accusantium quis laudantium ullam, iure
            soluta rerum ut.
          </p>
        </li>

        <li className={news.listItem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nisi asperiores eum eos, eligendi minus facilis minima, quae totam,
          nemo molestiae dignissimos? Unde, corrupti quo quia cumque provident
          fugit libero?
        </li>

        <li className={news.listItem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, itaque?
        </li>
      </ul>
    </div>
  );
};

export default News;
