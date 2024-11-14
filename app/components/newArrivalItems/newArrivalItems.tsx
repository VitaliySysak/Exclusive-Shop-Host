import styles from './newArrivalItems.module.css';
import Link from 'next/link';


export const NewArrivalItems = () => {
  const items = [
    {
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: '../../../public/images/playStation5.png',
      alt: 'PlayStation 5',
      link: '/shop/playstation5',
      large: true,
    },
    {
      title: "Women's Collections",
      description: 'Featured woman collections that give you another vibe.',
      image: '/images/women-collection.png',
      alt: 'Women Collections',
      link: '/shop/womens-collections',
    },
    {
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      image: '/images/speakers.png',
      alt: 'Speakers',
      link: '/shop/speakers',
    },
    {
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      image: '/images/perfume.png',
      alt: 'Perfume',
      link: '/shop/perfume',
    },
  ];

  return (
    <div className={styles.newArrivalContainer}>
      <div className={styles.newArrivalGrid}>

        <div className={styles.largestItemInGrid}>
          <div className={styles.itemTitle}>{items[0].title}</div>
          <div className={styles.itemDescription}>{items[0].description}</div>
          <Link href={items[0].link} className={styles.shopNowButton}>Shop Now</Link>
        </div>

        <div className={styles.longItem}>
          <div className={styles.itemTitle}>{items[1].title}</div>
          <div className={styles.itemDescription}>{items[1].description}</div>
          <Link href={items[1].link} className={styles.shopNowButton}>Shop Now</Link>
        </div>

        <div className={styles.shortItemLeft}>
          <div className={styles.itemTitle}>{items[2].title}</div>
          <div className={styles.itemDescription}>{items[2].description}</div>
          <Link href={items[2].link} className={styles.shopNowButton}>Shop Now</Link>
        </div>

        <div className={styles.shortItemRight}>
          <div className={styles.itemTitle}>{items[3].title}</div>
          <div className={styles.itemDescription}>{items[3].description}</div>
          <Link href={items[3].link} className={styles.shopNowButton}>Shop Now</Link>
        </div>

      </div>
    </div>
  );
};

export default NewArrivalItems;
